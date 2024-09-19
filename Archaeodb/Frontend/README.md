
To test the module: 

1. In thunderclient run this: http://localhost:3000/api/v1/test - outcome should be {
  "message": "good job"
}

To Post using Thunderclient: http://localhost:3001/api/v1/archaeosite


To Get using ThunderClinet: http://localhost:3001/api/v1/archaeosite/:id

To Get a list of archaeosites: http://localhost:3001/api/v1/archaeosites


To delete: http://localhost:3001/api/v1/archaeosite/:id


To Put: http://localhost:3001/api/v1/archaeosite/:id

 http://localhost:3001/api/v1/archaeosite/66bd973ba6f24fcf7f6d59a6
in the body list what to update: 

e.g., 

{
"siteName": "Akria",  
"region":"Horn of Africa",
"country":"Eritrea",
"age": "500BC",
 "siteType": "Holocene",
 "images": "[image1], [image]"
}




