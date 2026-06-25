import os
import joblib
import numpy as np

BASE_DIR = os.path.dirname(
    os.path.dirname(
        os.path.dirname(...)
    )
)

MODEL_DIR = os.path.join(BASE_DIR, "models")

diabetes_model = joblib.load(
      os.path.join(
        MODEL_DIR,
        "diabetes_model.pkl"
    )
)

diabetes_scaler = joblib.load(
     os.path.join(
        MODEL_DIR,
        "diabetes_scaler.pkl"
    )
)


def predict_diabetes(data):

    features = np.array([[
        data["pregnancies"],
        data["glucose"],
        data["bloodPressure"],
        data["skinThickness"],
        data["insulin"],
        data["bmi"],
        data["dpf"],
        data["age"]
    ]])

    scaled_features = diabetes_scaler.transform(features)

    prediction = diabetes_model.predict(
        scaled_features
    )[0]

    return "Diabetic" if prediction == 1 else "Non-Diabetic"