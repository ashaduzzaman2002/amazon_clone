const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');
const cors = require('cors')
const app = express();
const {data} = require('./data')

// config
dotenv.config();
const port = process.env.PORT || 5000;

// middleware
app.use(cors())
app.use(express.urlencoded({extended:false}))
app.use(express.json())


app.get('/api/products', (req, res) => {
  res.status(200).json(data.products)
    
})

app.get('/api/products/slug/:slug', (req, res) => {
  const product = data.products.find(x => x.slug === req.params.slug)

  if(product) {
    res.status(200).json(product)
  }else{
    res.status(404).json({msg: 'Product not found'})
  }
  
})


app.get('/api/products/:id', (req, res) => {
  const product = data.products.find(x => x._id === req.params.id)


  if(product) {
    res.status(200).json(product)
  }else{
    res.status(404).json({msg: 'Product not found'})
  }
  
})



// connected to mongodb
mongoose.set('strictQuery', true);
mongoose
  .connect(process.env.MONGO_URL, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log('Server is connected to the database'))
  .catch((err) => console.log(err));

// Listen to the port
app.listen(port, () =>
  console.log(`Server is runnig on http://localhost:${port}`)
);
