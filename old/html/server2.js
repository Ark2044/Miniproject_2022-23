const express = require('express');
const bodyParser = require("body-parser")
const mongoose = require('mongoose');
const app = express();  
const ejs = require('ejs');
const { kStringMaxLength } = require('buffer');

app.set('view engine', 'ejs');

mongoose.connect('mongodb://127.0.0.1:27017/turfdb', { useNewUrlParser: true, useUnifiedTopology: true })
    .then(() => {
        console.log("MONGO CONNECTION OPEN!!!")
    })
    .catch(err => {
        console.log("MONGO CONNECTION ERROR!!!!")
        console.log(err)
    })

// const { MongoClient } = require('mongodb');

// async function main() {
//     const uri = "mongodb+srv://Ratan_Singh:%42Password08@cluster0.cht9f1k.mongodb.net/?retryWrites=true&w=majority";


// const turfdb = new MongoClient(uri);


// try {
//     await turfdb.connect();

//     await listDatabases(turfdb);

// } catch (e) {
//     console.error(e);
// }
// finally {
//     await turfdb.close();
// }

// main().catch(console.error);
// }

// async function listDatabases(turfdb){
//     databasesList = await turfdb.db().admin().listDatabases();

//     console.log("Databases:");
//     databasesList.databases.forEach(db => console.log(` - ${db.name}`));
// };





const turfdbSchema = {
    Name: String,
    Location: String
}

const Turf = mongoose.model('Turf', turfdbSchema);

app.get('/', (req, res) => {
    Turf.find({}, function (err, turfs) {
        res.render('index', {
            turfslist: turfs
        })
    })
})

app.listen(4000, function () {
    console.log('server is running');
})


// app.get('/products/:id/edit', async (req, res) => {
//     const { id } = req.params;
//     const product = await Product.findById(id);
//     res.render('products/edit', { product, categories })
// })

// const bike = new Product({ name: 'Cycling Jersey', price: 28.5, categories: ['Cycling'], size: 'XS' })