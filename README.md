# Alibay

<!-- TOC -->

- [Alibay](#alibay)
  - [Docs](#docs)
  - [Endpoints](#endpoints)
    - [Signup endpoint](#signup-endpoint)
    - [Login endpoint](#login-endpoint)
    - [Add item endpoint](#add-item-endpoint)

<!-- /TOC -->

## Docs

[Google Doc](https://docs.google.com/document/d/1ZCAnrFAfK6et6a7iPMxvTqmCwYdaS5z-8UX1FG1NO8Y/edit
)  
[Github repository](https://github.com/konradobritzhauser/alibay)

## Endpoints

### Signup endpoint

method:post
path:/user/signup
Expects an object `{ username , password }` properties and their values.  
ex:  
`{ username: "dennis", password: "is cool" }`

### Login endpoint

method:post
path:/user/login
Expects an object with username and password properties and their values.  
ex:  
`{ username: "dennis", password: "is cool" }`  
It will return set a cookie equal to the session Id and send back an object with property success.  
ex:  
passwords match: `{ message: true }`  
passwords dont match: `{ message: false }`

### Add item endpoint

method:Post
path:/items/addItem
expects and object such as :

```JSON
{
  title:"desc",
  category:"book",
  description:"whatever",
  price:333,
  fd: "find out later",
  likes:20,
  seller:"dennis"
}
```

 any information missing or empty strings from any of these properties will return an error and not add an item to the database

 ### get Items
 
 method:get 
 path:/items/getItems
 

 this returns an object. the property with the results is "results" and contains all the information about the object including id

example response:
{
    "results": [
        {
            "_id": "5c630b729b48804d3c12a7f0",
            "title": "desc",
            "category": "book",
            "description": "whatever",
            "price": 333,
            "fd": "find out later",
            "likes": 20,
            "seller": "dennis"
        }
    ],
    "success": true
}