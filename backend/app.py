from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Enable CORS so frontend can talk to backend

@app.route('/generate-report', methods=['POST'])
def generate_report():
    data = request.json
    country = data.get('country')
    sector = data.get('sector')
    topic = data.get('topic')

    # Temporary dummy response
    response = {
        "status": "success",
        "country": country,
        "sector": sector,
        "topic": topic,
        "message": "Report generation request received."
    }
    return jsonify(response)

if __name__ == '__main__':
    app.run(debug=True)
