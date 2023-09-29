# A mini version of a RESTful API

## Documentation

## Created task deployed on below link :

<a href="https://restful-api-for-simple-blog-platform.onrender.com" target="_blank">https://restful-api-for-simple-blog-platform.onrender.com</a>

## Demo Credentials
 email : usraising@gmail.com

 password : 1

## for register new user

post method: </br>

endpoint: https://restful-api-for-simple-blog-platform.onrender.com/auth/register


        formData : {
            "email":"xxxx",
            "name":"xxxx",
            "password":"xxxx"
        }

##
## for confirming new user account

patch method: </br>

endpoint: 
https://restful-api-for-simple-blog-platform.onrender.com/auth/confirm/:id

Note: ID can be found in conformation mail which was send during registration time


##
## for login user

post method: </br>

endpoint: https://restful-api-for-simple-blog-platform.onrender.com/auth/login


        formData : {
            "email":"xxxx",
            "password":"xxxx"
        }

Note: once logged in Token and user data will be share, use the token for authorization while commenting and post.

##
## Incase user forgot password 

put method: </br>

endpoint: https://restful-api-for-simple-blog-platform.onrender.com/auth/forgotPassword

        formData : {
            "email":"xxxx"
        }

Note: Forgot reset link will be shared to register mail.

##
## for resetting password of user

patch method: </br>

endpoint: https://restful-api-for-simple-blog-platform.onrender.com/auth/resetPassword/:resetToken

        formData : {
            "password":"xxxx"
        }

Note: resetToken can be found in mail.

##
## for getting all post

get method: </br>

endpoint: https://restful-api-for-simple-blog-platform.onrender.com/posts

Note: token need to be passed as Authorization in Headers for getting all posts.

        headers: {
          authorization: `bearer ${token}`,
        },

##
## for getting one post

get method: </br>

endpoint: https://restful-api-for-simple-blog-platform.onrender.com/posts/:postid

Note: token need to be passed as Authorization in Headers for getting all posts and also postId need to passed in Params.

        headers: {
          authorization: `bearer ${token}`,
        },

##
## for creating new post

post method: </br>

endpoint: https://restful-api-for-simple-blog-platform.onrender.com/posts

Note: token need to be passed as Authorization in Headers for creating new posts.

        formData : {
            "userId":"xxxx",
            "description":"xxxx"
        }
        headers: {
          authorization: `bearer ${token}`,
        },

##
## for editing post

patch method: </br>

endpoint: https://restful-api-for-simple-blog-platform.onrender.com/posts/:postid

Note: token need to be passed as Authorization in Headers for creating new posts. And also postid need to passed as params.


        formData : {
            "description":"xxxx"
        }
        headers: {
          authorization: `bearer ${token}`,
        },

##
## for deleting post

delete method: </br>

endpoint: https://restful-api-for-simple-blog-platform.onrender.com/posts/:postid

Note: token need to be passed as Authorization in Headers for creating new posts. And also postid need to passed as params.

        headers: {
          authorization: `bearer ${token}`,
        },

##
## for getting comment of a post

get method: </br>

endpoint: https://restful-api-for-simple-blog-platform.onrender.com/posts/comments/:postid

Note: token need to be passed as Authorization in Headers for creating new posts. And also postid need to passed as params.

        headers: {
          authorization: `bearer ${token}`,
        },

##
## for creating new comment for a post

post method: </br>

endpoint: https://restful-api-for-simple-blog-platform.onrender.com/posts/comments/:postid

Note: token need to be passed as Authorization in Headers for creating new posts. And also postid need to passed as params.

        formData : {
            "comment":"xxxx"
        }
        headers: {
          authorization: `bearer ${token}`,
        },

##
## for editing comment of a post

patch method: </br>

endpoint: https://restful-api-for-simple-blog-platform.onrender.com/posts/comments/:commentid

Note: token need to be passed as Authorization in Headers for creating new posts. And also commentid need to passed as params.

        formData : {
            "comment":"xxxx"
        }
        headers: {
          authorization: `bearer ${token}`,
        },

##
## for deleting comment of a post

delete method: </br>

endpoint: https://restful-api-for-simple-blog-platform.onrender.com/posts/comments/:commentid

Note: token need to be passed as Authorization in Headers for creating new posts. And also commentid need to passed as params.

        headers: {
          authorization: `bearer ${token}`,
        },