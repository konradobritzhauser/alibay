# Alibay


[google doc](https://docs.google.com/document/d/1ZCAnrFAfK6et6a7iPMxvTqmCwYdaS5z-8UX1FG1NO8Y/edit
)

## Endpoints

signup endpoint expects an object with username and password properties and their values. ex: {username:"dennis",password:"is cool"}

login endpoint expects an object with username and password properties and their values. ex: {username:"dennis",password:"is cool"}. It will return set a cookie equal to the session Id and send back an object with property success. ex:{message:true} if the passwords match. {message:false} if the passwords dont match.