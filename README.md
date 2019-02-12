# Alibay

<!-- TOC -->

- [Alibay](#alibay)
  - [Docs](#docs)
  - [Endpoints](#endpoints)
    - [Signup endpoint](#signup-endpoint)
    - [login endpoint](#login-endpoint)

<!-- /TOC -->

## Docs

[Google Doc](https://docs.google.com/document/d/1ZCAnrFAfK6et6a7iPMxvTqmCwYdaS5z-8UX1FG1NO8Y/edit
)  
[Github repository](https://github.com/konradobritzhauser/alibay)

## Endpoints

### Signup endpoint

Expects an object `{ username , password }` properties and their values.  
ex:  
`{ username: "dennis", password: "is cool" }`

### login endpoint

Expects an object with username and password properties and their values.  
ex:  
`{ username: "dennis", password: "is cool" }`  
It will return set a cookie equal to the session Id and send back an object with property success.  
ex:  
passwords match: `{ message: true }`  
passwords dont match: `{ message: false }`