import joblib
import numpy as np
from flask import Flask, request, jsonify
from flask_cors import CORS  # Import Flask-CORS

# Initialize Flask app
app = Flask(__name__)
CORS(app) 
# Load the trained model (which contains the scaler inside)
model = joblib.load("alzheimer_model.pkl")


@app.route("/predict", methods=["POST"])
def predict():
    data = request.get_json()

    try:
        # Extract input features
        features = np.array([
            float(data["Age"]),
            float(data["SES"]),
            float(data["MMSE"]),
            float(data["CDR"]),
            float(data["eTIV"]),
            float(data["nWBV"]),
            float(data["ASF"]),
            float(data["Visit"]),
            float(data["MRDelay"])
        ]).reshape(1, -1)  # Reshape for model input

        # Directly predict (scaling happens inside the model pipeline)
        prediction = model.predict(features)[0]
        probabilities = model.predict_proba(features)[0]

        response = {
            "prediction": int(prediction),
            "probability": {
                "class_0": float(probabilities[0]),
                "class_1": float(probabilities[1])
            }
        }

        return jsonify(response)

    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == "__main__":
    app.run(debug=True)
