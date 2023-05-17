from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import os
import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow.keras.layers import TextVectorization
import subprocess

app = Flask(__name__)
# Allow requests from http://localhost:3000
CORS(app, origins='http://localhost:3000')

# Allow only GET and POST methods
CORS(app, methods=['GET', 'POST'])


@app.route('/score-comment', methods=['POST'])
def score_comment():
    comment = request.json['comment']
    
    # Preprocessing code
    model = tf.keras.models.load_model(os.path.join('data', 'hate_detection.h5'))
    df = pd.read_csv(os.path.join('data', 'train.csv'))
    X = df['comment_text'].fillna('')
    Y = df[df.columns[2:]].values
    MAX_FEATURES = 200000
    vectorizer = TextVectorization(
        max_tokens=MAX_FEATURES,
        output_sequence_length=1800,
        output_mode='int'
    )
    vectorizer.adapt(X.values)
    
    vectorized_comment = vectorizer([comment])
    results = model.predict(vectorized_comment)
    
    text = ''
    for idx, col in enumerate(df.columns[2:]):
        text += '{}: {}\n'.format(col, results[0][idx] > 0.5)
    
    return jsonify({'result': text})
    # comment = request.json['comment']
    
    # # Execute the Python script and capture the output
    # result = subprocess.check_output(['python', 'hate_detection.py', comment])
    
    # # Process the result as needed
    # # Here, we assume the result is a plain text response
    
    # return jsonify({'result': result.decode('utf-8')})

if __name__ == '__main__':
    app.run()
