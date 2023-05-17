# %%
import os
import pandas as pd 
import numpy as np

# %%
import tensorflow as tf
import gradio as gr
from tensorflow.keras.layers import TextVectorization

# %%
model = tf.keras.models.load_model('hate_detection.h5')

# %%
df = pd.read_csv(
    os.path.join('data','train.csv')
)

# %%
X = df['comment_text']
y = df[df.columns[2:]].values

# %%
MAX_FEATURES = 200000


# %%
vectorizer = TextVectorization(max_tokens=MAX_FEATURES,
                               output_sequence_length=1800,
                               output_mode='int')

# %%
X = X.fillna('') # Replace missing values with empty strings
vectorizer.adapt(X.values)

# %%
def score_comment(comment):
    vectorized_comment = vectorizer([comment])
    results = model.predict(vectorized_comment)
    
    text = ''
    for idx, col in enumerate(df.columns[2:]):
        text += '{}: {}\n'.format(col, results[0][idx]>0.5)
    
    return text



# %%
