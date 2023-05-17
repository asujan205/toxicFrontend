from flask import Flask, request, jsonify
import subprocess

app = Flask(__name__)

@app.route('/score-comment', methods=['POST'])
def score_comment():
    comment = request.json['comment']
    
    # Execute the Python script and capture the output
    result = subprocess.check_output(['python', 'hate_text.py', comment])
    
    # Process the result as needed
    # Here, we assume the result is a plain text response
    
    return jsonify({'result': result.decode('utf-8')})

if __name__ == '__main__':
    app.run()
