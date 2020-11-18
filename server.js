const express = require('express');
const mongoose = require('mongoose');
const requireDir = require('require-dir');

//iniciando o app
const app = express();

//iniciando o DB
mongoose.connect('mongodb://localhost:27017/nodeapi', { useNewUrlParser: true, useUnifiedTopology: true });
requireDir('./src/models');

const Product = mongoose.model('Product');

//primeira rota
app.get("/", (req, res) => {
    Product.create({
        title: 'React Native',
        description: 'Build native apps with React',
        url: 'http://www.ig.com.br'
    });


    res.send("Hello Rocketseat III");
})

app.listen(3001);