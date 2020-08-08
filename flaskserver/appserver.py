# -*- coding: utf-8 -*-
"""
Created on Sat Aug  8 09:47:26 2020

@author: Mohan
"""

from flask import Flask, request, make_response, jsonify
from flask_cors import CORS, cross_origin

import shopkeeperdata
import customerdata

app=Flask(__name__)
CORS(app, support_credentials=True)

@app.route('/healthcheck')
def helloworld():
    return "Hello world"

@app.route('/orders',methods=["GET"])
@cross_origin(supports_credentials=True)
def gettingShopkeeperOrders():
    storeName=request.args.get("store")
    rstring=shopkeeperdata.getorders(storeName)
    res=make_response(jsonify(rstring),200)
    return res

@app.route('/custorders',methods=["GET"])
@cross_origin(supports_credentials=True)
def gettingCustomerOrders():
    custNum=request.args.get("number")
    rstring=customerdata.getorders(custNum)
    res=make_response(jsonify(rstring),200)
    return res

@app.route('/neworder',methods=["POST"])
@cross_origin(supports_credentials=True)
def newCustomerOrder():
    print("New Order")
    temprequest=request.get_json()
    result=customerdata.neworder(temprequest)
    print(temprequest)
    return "Order inserted"

@app.route('/verifycustomer',methods=["POST"])
@cross_origin(supports_credentials=True)
def verifyCustomer():
    print("Check login details")
    temprequest=request.get_json()
    response=customerdata.checkCustomer(temprequest["phone"],temprequest["password"])
    return response

@app.route('/findcustomer',methods=["GET"])
@cross_origin(supports_credentials=True)
def findCustomer():
    print("Finding customer")
    phoneNum=request.args.get("phone")
    response=customerdata.getCustomerDetails(phoneNum)
    res=make_response(jsonify(response),200)
    return res

@app.route('/verifyshopkeeper',methods=["POST"])
@cross_origin(supports_credentials=True)
def verifyShopKeeper():
    print("Check login details for shopkeeper")
    temprequest=request.get_json()
    response=shopkeeperdata.checkShopkeeper(temprequest["phone"],temprequest["password"])
    return response

if __name__=='__main__':
    app.run()