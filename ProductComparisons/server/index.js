require('newrelic');
var cluster = require('cluster');
if(cluster.isMaster) {
  const cpuCount = require('os').cpus().length;
  for(let i=0;i<cpuCount;i++){
    cluster.fork();
  }

} else {

const bodyParser = require("body-parser");
const path = require("path");
const fs = require('fs');
const {Pool, Client} = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const express = require("express");
const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static(`${__dirname}/../client/dist`, { maxAge: '0' }));
app.use((req, res, next) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header(
    "Access-Control-Allow-Headers",
    "Origin, X-Requested-With, Content-Type, Accept"
  );
  next();
});

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});
pool.on('connect', () => {
  console.log(`\nconnected to PSQL DB\n`);
});

// Routes-Endpoints
app.get("/product/:id", (req, res) => {
  const file = path.join(`${__dirname}/../client/dist/index.html`);
  res.sendFile(file);
});

app.get("/product/data/:id", (req, res) => {
  let { id } = req.params;
  const product = id <= 5*Math.pow(10,6) ? 'tents' : 'shirts';
  if (product==='shirts') id = Math.max(1,id-5*Math.pow(10,6));

  const queryText = `SELECT * FROM ${product} WHERE _ID = ${id}`;
    pool.query(queryText)
    .then(item => {
      let result = item.rows;
      let data = [];
      for(let i=0;i<result.length;result++){
        let r = result[i];
        if (product==='tents') {
          var re = {
            "_id":r._id,
            "imageURL":r.imageurl,
            "title":r.title,
            "ranking":r.ranking,
            "reviews":r.reviews,
            "price":r.price,
            "sleepingCapacity":r.sleepingcapacity,
            "packagedWeight":r.packagedweight,
            "numberOfDoors":r.numberofdoors,
            "bestUse":r.bestuse,
            "productType":r.producttype,
          };
        } else {
           var re = {
            "_id":r._id,
            "imageURL":r.imageurl,
            "title":r.title,
            "ranking":r.ranking,
            "reviews":r.reviews,
            "price":r.price,
            "productType":r.producttype,
          };
        }
      data.push(re);
    }
      res.status(200).send(data);
    })
    .catch(err => {
      console.log(err);
    });
});

app.get("/data/shirts", (req, res) => {
  const queryText = `SELECT * FROM shirts TABLESAMPLE SYSTEM(.001) LIMIT 4`;
    pool.query(queryText)
    .then(item => {
      let result = item.rows;
      let data = [];
      for (let k in result){
        let r = result[k];
        let re = {
          "_id":r._id,
          "imageURL":r.imageurl,
          "title":r.title,
          "ranking":r.ranking,
          "reviews":r.reviews,
          "price":r.price,
          "productType":r.producttype,
        };
        data.push(re);
      }
      res.status(200).send(data);
    })
    .catch(err => {
      console.log('Server Error', err);
    });
});

app.get("/data/tents", (req, res) => {
  const queryText = `SELECT * FROM tents TABLESAMPLE SYSTEM(.001) LIMIT 5`;
    pool.query(queryText)
    .then(item => {
      let result = item.rows;
      let data = [];
      for (let k in result){
        let r = result[k];
        let re = {
          "_id":r._id,
          "imageURL":r.imageurl,
          "title":r.title,
          "ranking":r.ranking,
          "reviews":r.reviews,
          "price":r.price,
          "sleepingCapacity":r.sleepingcapacity,
          "packagedWeight":r.packagedweight,
          "numberOfDoors":r.numberofdoors,
          "bestUse":r.bestuse,
          "productType":r.producttype,
        };
        data.push(re);
      }
      res.status(200).send(data);
    })
    .catch(err => {
      console.log('Server Error', err);
    });
});

const port = process.env.PORT || 3000;

app.listen(port, () => {
  console.log(`listening on worker ${cluster.worker.id} port ${port}`);
});

cluster.on('exit', function (worker) {

    // Replace the dead worker,
    // we're not sentimental
    console.log('Worker %d died :(', worker.id);
    cluster.fork();

});

}
