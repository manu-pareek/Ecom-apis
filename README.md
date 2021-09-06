# Ecom-apis
# Description
This project was basically to Create APIs for product. Create,Read,Update and Delete operations were performed with request validation.

# Tech-Stack used
NodeJs,ExpressJs,MongoDB,Mongoose <br>
MiddleWare : express-validator,body-parser <br>
Tools : Postman for API testing

# API Usage

1) /api/v1/product/create	     : Creates new product with given info , uses POST method
2) /api/v1/product/all	       : Fetches all the products , uses GET method
3) /api/v1/product/get/:id	   : Fetchs product with given ID, uses GET method
4) /api/v1/product/edit/:id    : Edits product as per given input based on ID ,uses PATCH method
5) /api/v1/product/delete/:id  : Deletes the product using given ID, uses DELETE method

# Example of request Object
 
         {
                    "name": "Product_Name",
                    "description": "Product_Description",
                    "price": 10,
                    "quantity": 20
         }
 
 AUTHOR : MANU PAREEK
