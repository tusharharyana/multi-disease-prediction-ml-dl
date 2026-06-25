from flask import Flask, request, jsonify

from utils.diabetes_predictor import predict_diabetes
from utils.heart_predictor import predict_heart
from flask import Flask
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route('/')
def home():
    return {
        "message": "Multi Disease Prediction API Running"
    }

@app.route('/predict/diabetes', methods=['POST'])
def diabetes_prediction():

    try:

        data = request.get_json()

        result = predict_diabetes(data)

        return jsonify({
            "success": True,
            "disease": "Diabetes",
            "prediction": result
        })

    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 400

@app.route(
    "/predict/heart",
    methods=["POST"]
)

def heart_prediction():

    try:
        data = request.get_json()

        result = predict_heart(data)

        return jsonify({
            "success": True,
            "disease": "Heart",
            "prediction": result
        })
    
    except Exception as e:

        return jsonify({
            "success": False,
            "message": str(e)
        }), 400



if __name__ == '__main__':
    app.run(debug=True)