import pandas as pd
from sklearn.preprocessing import MinMaxScaler
from pymongo import MongoClient

client = MongoClient()
client = MongoClient('mongodb://localhost:27017')
db = client['weight']
df = db.usr_weight
df = pd.DataFrame(list(df.find()))

date = df.iloc[:, 1]
X = df.iloc[:, 2:-1]
y = df.iloc[:, -1]

X = pd.DataFrame(X, columns=['calorie_intake', 'calorie_burn', 'surplus', 'weight', 'weight_change'])

dataframe = pd.concat([date, X, y], axis=1, join='inner')
print(dataframe)
