# -*- coding: utf-8 -*-
"""
Created on Sat Aug  8 12:46:49 2020

@author: Mohan
"""

from pymongo import MongoClient
from pprint import pprint


def getorders(customerPhone):
    print(customerPhone)
    connection_string="mongodb+srv://vyo:qwerty123@smartshopper.sebc2.mongodb.net/test"
    client = MongoClient(connection_string)
    #db=client.admin
    
    orderlist=client.storedata.orders.find({"phone":customerPhone},{"_id":0})
    
    listorder=[doc for doc in orderlist]
    
    
    return listorder

def neworder(order):
    print("Inserting new order")
    connection_string="mongodb+srv://vyo:qwerty123@smartshopper.sebc2.mongodb.net/test"
    client = MongoClient(connection_string)
    
    client.storedata.orders.insert_one(order)
    return "success"