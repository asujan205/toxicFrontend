from flask import Flask, request, jsonify
from flask_cors import CORS
from flask_cors import cross_origin

import os
import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow.keras.layers import TextVectorization

app = Flask(__name__)
# Allow requests from http://localhost:3000

CORS(app, origins='http://localhost:3000')





@app.route('/score_comment', methods=['POST'])
@cross_origin(origins='http://localhost:3000')
def process_comment():
    comment = request.json['comment']  # Assuming the comment is passed as a JSON object in the request body
    
    # Preprocessing code
    model = tf.keras.models.load_model('hate_detection.h5')
    df = pd.read_csv(os.path.join('data', 'train.csv'))
    X = df['comment_text'].fillna('')
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

if __name__ == '__main__':
    app.run()
