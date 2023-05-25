from flask import Flask, request, jsonify
from flask_cors import CORS, cross_origin
import os
import pandas as pd
import numpy as np
import tensorflow as tf
from tensorflow.keras.layers import TextVectorization
import subprocess
from sklearn.utils import resample

app = Flask(__name__)
# Allow requests from http://localhost:3000
CORS(app, origins='http://localhost:3000')

# Allow only GET and POST methods
CORS(app, methods=['GET', 'POST'])


@app.route('/score-romanized-comment', methods=['POST'])
def score_romanized_comment():
    comment = request.json['comment']

    # Preprocessing code
    model = tf.keras.models.load_model(os.path.join('r', 'finalromanized1.h5'))
    df = pd.read_csv(os.path.join('r', 'finaldataset.csv'))
    X = df['comment_text'].fillna('')
    Y = df[df.columns[2:]].values
    MAX_FEATURES = 20000
    vectorizer = TextVectorization(
        max_tokens=MAX_FEATURES,
        output_sequence_length=300,
        output_mode='int'
    )
    vectorizer.adapt(X.values)

    vectorized_comment = vectorizer([comment])
    results = model.predict(vectorized_comment)

    # text = ''
    # for idx, col in enumerate(df.columns[2:]):
    #     text += '{}: {}'.format(col, results[0][idx] > 0.5)
    result_object = {}
    for idx, col in enumerate(df.columns[1:]):
        result_object[col] = bool(results[0][idx] > 0.5)

    return result_object
    # comment = request.json['comment']

    # # Execute the Python script and capture the output
    # result = subprocess.check_output(['python', 'hate_detection.py', comment])

    # # Process the result as needed
    # # Here, we assume the result is a plain text response

    # return jsonify({'result': result.decode('utf-8')})


if __name__ == '__main__':
    app.run()
