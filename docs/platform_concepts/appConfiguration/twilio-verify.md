---
title : Twilio Verify
sidebar_label : Twilio Verify
---

## Scope of Integration

Yellow.ai Integration with Twilio Verify allows you to seamlessly connect your Twilio Verify service with the yellow.ai platform. Any customer who has a Twilio account will be able to seamlessly connect their verify service with yellow.ai using basic auth with account SID, Auth Token and Verify Service SID. This connector will enable users to verify end user identity using OTP verification by means of SMS, call or email.

## Use Case

Following are the use-cases which are currently accommodated in the Integration:

Simple Integration using credentials
To enable integration with Twilio verify, you need account SID, authentication token and verify service SID. You can get account SID, authentication token and verify service SID from twilio dashboard. 
Take actions with Twilio Verify nodes
Using the Twilio Verify integration nodes, you can send and verify OTP to the end user. You can choose the action node corresponding to the channel (SMS, call and email) via which you want to send the OTP. After choosing the appropriate action node, you need to enter the receiver to whom you want to send OTP. 

Then you need to ask the user for OTP to verify it. After that you need to create a Twilio Check Verification action node and provide values for receiver and OTP to verify if OTP provided by the user is correct. If it is correct, you’ll get “status”: “approved” in response object.



<img src="https://cdn.yellowmessenger.com/ShRydkPnrBdn1650956539555.png" alt="drawing" width="100%"/>


## Configuration

Configuring the integration with Twilio Verify is straightforward. 
Follow the steps defined below to start integrating:

1. Navigate to Integrations Tab:
Inside your project, navigate to the Configuration tab and then click on the Integrations Tab. Search for Twilio Verify.

2. Connect your Twilio Verify account:
Enter the values for Account SID, Auth token and verify service SID to connect to your Twilio account.      


Voila! And just like that, you are now connected with your Twilio account.



<img src="https://cdn.yellowmessenger.com/WbfFy3XnfBsZ1650956457836.png" alt="drawing" width="100%"/>



# Reference
This integration will support the latest version releases, latest one being v2

API Documentation: [https://www.twilio.com/docs/verify](https://www.twilio.com/docs/verify)
