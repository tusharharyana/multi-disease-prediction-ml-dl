import joblib
import numpy as np

heart_model = joblib.load(
    "../models/heart_model.pkl"
)

heart_scaler = joblib.load(
    "../models/heart_scaler.pkl"
)


def predict_heart(data):

    features = np.array([[
        data["age"],
        data["sex"],
        data["dataset"],
        data["cp"],
        data["trestbps"],
        data["chol"],
        data["fbs"],
        data["restecg"],
        data["thalch"],
        data["exang"],
        data["oldpeak"],
        data["slope"]
    ]])

    scaled_features = heart_scaler.transform(features)

    prediction = heart_model.predict(
        scaled_features
    )[0]

    return (
        "Heart Disease Detected"
        if prediction == 1
        else "No Heart Disease"
    )