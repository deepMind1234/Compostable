# Compostable

## Inspiration
- Composting is a sustainable practice

## What it does
- A mobile app that takes pictures and classifies objects as noncompostable vs compostable
- We setup our trained classification model as an API so the mobile app can easily send a POST request with the camera image and receive a json response with the predicted object class

## How we built it
- React Native + Expo for the mobile app
- PyTorch for Object classification ML
- Figma for wireframing
- Exploring PyTorch Live to deploy ML models to a mobile app
- Used dataset from: https://www.kaggle.com/sapal6/waste-classification-data-v2

## Challenges we ran into
- Integrating the mobile app with the classification model was difficult as we could not get the API requests to send the image properly from the react app

## Accomplishments that we're proud of
- Learned how to use react to create one of our first apps
- Trained a resnet18 PyTorch model on ~ 20k images using Amazon Sagemaker Studio Lab cloud vms with a GPU
- Achieved ~ 80% accuracy on the test dataset after just 10 epochs (this took 30 mins!)




