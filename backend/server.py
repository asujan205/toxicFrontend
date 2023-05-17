from flask import Flask, request, jsonify
from flask_cors import CORS

import subprocess

app = Flask(__name__)
CORS(app, methods=['GET', 'POST'])
CORS(app, origins='http://localhost:3000')

@app.route('/score-comment', methods=['POST'])
def score_comment():
    comment = request.json['comment']
    print(comment)
    
    # Execute the Python script and capture the output
    result = subprocess.check_output(['python', 'hate_text.py', comment])
    
    # Process the result as needed
    # Here, we assume the result is a plain text response
    
    return jsonify({'result': result.decode('utf-8')})
@app.route('/', methods=['POST'])
def index():
    try:
        # Your code here
        return 'Success'
    except Exception as e:
        return 'Error: ' + str(e), 500

if __name__ == '__main__':
    app.run()
