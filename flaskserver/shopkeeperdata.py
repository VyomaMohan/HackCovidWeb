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
    
    orderlist=client.storedata.orders.find({"shopname":storeName},{"_id":0})
    
    listorder=[doc for doc in orderlist]
    
    
    return listorder