import io
import json
import torch
import torch.nn as nn
from torchvision import models
import torchvision.transforms as transforms
from PIL import Image
from flask import Flask, jsonify, request


app = Flask(__name__)
labels_map = {'Non-Recyclable': 0, 'Organic': 1, 'Recyclable': 2}

def id_to_label(id:int):
    """Maps the integer ID to its string input"""
    inv_map = {v: k for k, v in labels_map.items()}
    return inv_map[id]
model = models.resnet18(pretrained=True)
num_ftrs = model.fc.in_features
model.fc = nn.Linear(num_ftrs, 3)

model.load_state_dict(torch.load('10_epoch_resnet.pt', 'cpu'))
model.eval()


def transform_image(image_bytes):
    pretrained_means = [0.485, 0.456, 0.406]
    pretrained_stds = [0.229, 0.224, 0.225]
    test_transform = transforms.Compose([
        transforms.Resize(256),
        transforms.CenterCrop(224),
        transforms.ToTensor(),
        transforms.Normalize(mean = pretrained_means, 
                            std = pretrained_stds)
    ])
    image = Image.open(io.BytesIO(image_bytes))
    return test_transform(image).unsqueeze(0)


def get_prediction(image_bytes):
    tensor = transform_image(image_bytes=image_bytes)
    outputs = model.forward(tensor)
    _, y_hat = outputs.max(1)
    predicted_idx = int(y_hat.item())
    return predicted_idx, id_to_label(predicted_idx)


@app.route('/predict', methods=['POST'])
def predict():
    if request.method == 'POST':
        file = request.files['file']
        img_bytes = file.read()
        class_id, class_name = get_prediction(image_bytes=img_bytes)
        return jsonify({'class_id': class_id, 'class_name': class_name})

if __name__ == "__main__":
    app.run()