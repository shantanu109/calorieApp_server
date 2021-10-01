import pandas as pd
from pymongo import MongoClient
import matplotlib.pyplot as plt

client = MongoClient()
client = MongoClient('mongodb://localhost:27017')
db = client['weight']
df = db.usr_wt
df = pd.DataFrame(list(df.find()))

X = df[['date', 'weight']]

date = X['date'].tolist()
wt = X['weight'].tolist()

wt = [float(i) for i in wt]

plt.figure(figsize=(10, 10))
plt.plot(date, wt, color='red', marker='o')
plt.xticks(rotation='vertical')
plt.title('Date vs Weight', fontsize=18)
plt.xlabel('Date', fontsize=18)
plt.ylabel('Weight', fontsize=18)

plt.savefig('dateVsweight.png')
