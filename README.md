# node-api
Rocketseat Starter Course of NodeJS Application.

# Instalation
## Install a mongodb docker container
```
docker pull mongo
docker run --name mongodb -p 27017:27017 -d mongo
docker ps
```

To restart mongodb container, you can run:
```
docker start mongodb
```

## Install the aplication and run it
```
git clone https://github.com/diegoqueres/node-api.git
npm install
npm run dev
```

## Using the REST api
Send requests to http://localhost:3001/api/products

### Examples
#### Listing products (page 1)
```
curl --location --request GET 'http://localhost:3001/api/products?page=1'
```

#### Create new product 
```
curl --location --request POST 'http://localhost:3001/api/products' \
--header 'Content-Type: application/json' \
--data-raw '{
    "title": "Itália para leigos",
    "description": "Guia de viagem para conhecer a Itália",
    "url": "http://www.amazon.com.br/livros/italia-para-leigos.html"
}'
```

#### Delete a product 
```
curl --location --request DELETE 'http://localhost:3001/api/products/5fb46b2a7de61d1d31955788'
```
Pass the product id (5fb46b2a7de61d1d31955788) as parameter.
