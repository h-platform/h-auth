H-AUTH
======
This microservice is based on H-Database Microservices Repository, it stores users and has both authorization and authentication services. 

The following are the different scenarios for user managment

Social login (facebook / google)
================================
1- user login with facebook
2- after successfull login, user account is saved and retrieved

Web scenario
============
1- user fill registeration form
  - username
  - email
  - display name
  - password
  - active
2- email is sent with activation token
3- user activates account by using the activation token
4- account is set as active
5- user can login now with username and apassword

Local LAN
=========
1- admin register users
  - username
  - email
  - display name
  - password
  - mobile no
  - active
2- user can login now


User Schema:
============
- User:             social account information, used for the social login scenario
                    also used for manual login with username and password
- ActivationToken:  used for sent out activation emails

Authorizatino Schema:
=====================
- Permission:
- Role:
- RolePermission:
- Badge:


