# -*- coding: utf-8 -*-
"""
Created on Sat Aug  8 09:51:29 2020

@author: Mohan
"""

from pymongo import MongoClient
from pprint import pprint


def getorders(storeName):
    print(storeName)
    connection_string="mongodb+srv://vyo:qwerty123@smartshopper.sebc2.mongodb.net/test"
    client = MongoClient(connection_string)
    #db=client.admin
    
    storeList=client.storedata.storedata.find({"phone":storeName})
    
    for x in storeList:
        orderlist=client.storedata.orders.find({"shopname":x["name"]},{"_id":0})
    
    listorder=[doc for doc in orderlist]
    
    
    return listorder

def checkShopkeeper(phoneNum,password):
    resultString=""
    print("Verify credentials")
    connection_string="mongodb+srv://vyo:qwerty123@smartshopper.sebc2.mongodb.net/test"
    client = MongoClient(connection_string)
    
    shopList=client.storedata.storedata.find({"phone":phoneNum},{"_id":0})
    for x in shopList:
        if(x["password"]==password):
            resultString="correct"
        else:
            resultString="incorrect"
    return resultString