const {Pool, Client} = require('pg');
const path = require('path');
const through2 = require('through2');
const copyFrom = require('pg-copy-streams').from;
const fs = require('fs');
const csv = require('fast-csv');
const faker = require('faker');
const dotenv = require('dotenv');
dotenv.config();

const Readable = require ('readable-stream').Readable;

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

const randTent =()=> {
  return {
    imageURL: faker.image.avatar(),
    title: faker.commerce.productName(),
    ranking: (Math.random()*5).toFixed(2),
    reviews: parseInt(Math.random()*100),
    price: parseInt(Math.random()*400+100),
    sleepingCapacity: Math.random()<.2?
      `8+ people`:`${parseInt(Math.random()*5+2)}-person`,
    packagedWeight: parseInt(Math.random()*25+12),
    numberOfDoors: parseInt(Math.random()*2+1),
    bestUse: 'Camping',
    productType: 'Tent'
  };
};

const randShirt =()=> {
  return {
    imageURL: faker.image.avatar(),
    title: faker.commerce.productName(),
    ranking: (Math.random()*5).toFixed(2),
    reviews: parseInt(Math.random()*100),
    price: parseInt(Math.random()*85+10),
    productType: 'Shirt'
  };
};

pool.connect()
  .then(client=> {
      const shirtstream = Readable({objectMode: true});
      shirtstream._read = ()=>{};
      let getVals = through2.obj((data,enc,cb)=>{
        cb(null, Object.values(data) + '\n');
      });
      let db = client.query(copyFrom('COPY shirts (imageURL, title, ranking, reviews, price, productType) FROM STDIN CSV'));
      for (let i =0;i<1*Math.pow(10,6);i++){
        shirtstream.push(randShirt());
      }
      shirtstream.push(null); // No more data
      shirtstream.pipe(getVals).pipe(db);
      db.on('end', ()=> client.release());
  })
  .then(()=>{ pool.connect()
    .then(client => {
      const tentstream = Readable({objectMode: true});
      tentstream._read = ()=>{};
      let getVals = through2.obj((data,enc,cb)=>{
        cb(null, Object.values(data) + '\n');
      });
      let db = client.query(copyFrom('COPY tents (imageURL, title, ranking, reviews, price, sleepingCapacity, packagedWeight, numberOfDoors, bestUse, productType) FROM STDIN CSV'));
      for (let i =0;i<1*Math.pow(10,6);i++){
        tentstream.push(randTent());
      }
        tentstream.push(null); // No more data
        tentstream.pipe(getVals).pipe(db);
        db.on('end', ()=> client.release());
    }).catch(e=>console.log('error',e));
  }).catch(e=>console.log('error',e));





