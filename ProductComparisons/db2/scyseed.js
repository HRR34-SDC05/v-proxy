const faker = require('faker');
const cassandra = require('cassandra-driver');
const authProvider = new cassandra.auth.PlainTextAuthProvider('scylla', 'XOEDTTBPZGYAZIQD');
const {randShirt, randTent} = require('../db/seedCreate');

const client = new cassandra.Client({
  contactPoints: ['172.17.0.2'],
  keyspace: 'sdc',
  authProvider: authProvider,
});

//copy shirts(id,imageurl,title,ranking,reviews,price,producttype) from 'shirts.csv';
//copy tents(id, imageurl, title, ranking, reviews, price, sleepingcapacity, packagedweight, numberofdoors, bestuse, producttype) from 'tents.csv';

 client.connect()
  .then (()=>{
    console.log(`connected to Scylla/Cassandra DB`);
    for (let i =0;i<1*Math.pow(10,6);i++){
      let s = randShirt();
      let t = randTent();

       client.execute(`INSERT INTO shirts(id, imageurl, title, ranking, reviews, price, producttype) VALUES(i, s.imageurl, s.title, s.ranking, s.reviews, s.price, s.producttype)`, { prepare: true }, (err, result) => { if (err) console.error(err); }
       );

       client.execute(`INSERT INTO tents(id, imageurl, title, ranking, reviews, price, sleepingcapacity, packagedweight, numberofdoors, bestuse, producttype) VALUES(?,?,?,?,?,?,?,?,?,?,?)`, [i, t.imageurl, t.title, t.ranking, t.reviews, t.price, t.sleepingcapacity, t.packagedweight, t.numberofdoors, t.bestuse, t.producttype], { prepare: true }, (err, result) => { if (err) console.error(err); }
       );
    }
  }).catch(err => {
    console.error('There was an error when connecting', err);
    client.shutdown();
  });

   // const shirtstream = Readable({objectMode: true});
     //  shirtstream._read = ()=>{};
     //  let getVals = through2.obj((data,enc,cb)=>{
     //    cb(null, Object.values(data) + '\n');
     //  });

     //  // client.stream('COPY shirts FROM STDIN', { prepare: true })
     //  // .on('readable', function () {
     //  //   console.log('hihihi')
     //  // })
     //  // .on('end', function () {
     //  //   console.log('copy complete');
     //  //   client.shutdown();
     //  // })
     //  // .on('error', function (err) {
     //  //   console.log('error:', err);
     //  //   client.shutdown();
     //  // });

     //  for (let i =0;i<.01*Math.pow(10,6);i++){
     //    let dataObj = randShirt();
     //    dataObj.id = i+1;
     //    shirtstream.push(dataObj);
     //  }
     //  shirtstream.pipe(getVals).pipe(process.stdout);
     //  db.on('end', ()=> client.shutdown());