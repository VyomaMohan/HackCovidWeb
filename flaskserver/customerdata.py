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

def checkCustomer(phoneNum,password):
    resultString=""
    print("Verify credentials")
    connection_string="mongodb+srv://vyo:qwerty123@smartshopper.sebc2.mongodb.net/test"
    client = MongoClient(connection_string)
    
    custList=client.storedata.customerdata.find({"phone":phoneNum},{"_id":0})
    for x in custList:
        if(x["password"]==password):
            resultString="correct"
        else:
            resultString="incorrect"
    return resultString

def getCustomerDetails(phoneNum):
    result=[]
    print("Finding customer")
    connection_string="mongodb+srv://vyo:qwerty123@smartshopper.sebc2.mongodb.net/test"
    client = MongoClient(connection_string)
    
    foundCust=client.storedata.customerdata.find({"phone":phoneNum},{"_id":0})
    for x in foundCust:
        result.append({"name":x["name"],"area":x["area"],"city":x["city"]})
    return result