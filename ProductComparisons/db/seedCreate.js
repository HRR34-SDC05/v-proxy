const fs = require('fs');
const csv = require('fast-csv');
const faker = require('faker');
const path = require('path');

const randTent =()=> {
  return{
    id:0,
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
    id:0,
    imageURL: faker.image.avatar(),
    title: faker.commerce.productName(),
    ranking: (Math.random()*5).toFixed(2),
    reviews: parseInt(Math.random()*100),
    price: parseInt(Math.random()*85+10),
    productType: 'Shirt'
  };
};

const createData = async()=>{
  console.log(`${nM}M Primary Records`);

  let shirtPath = path.join(__dirname,`shirts5.csv`);
  let tentPath = path.join(__dirname,`tents5.csv`);

  const option = (append)? {flags:'a'}:{};
  let shirt_csv = csv.createWriteStream({headers:false, objectMode: true}),
    shirtStream = fs.createWriteStream(shirtPath, option);
  let tent_csv = csv.createWriteStream({headers:false, objectMode: true}),
    tentStream = fs.createWriteStream(tentPath, option);

  shirtStream.on('finish', ()=> console.log('shirts complete'));
  tentStream.on('finish', ()=> console.log('tents complete'));

  shirt_csv.pipe(shirtStream);
  tent_csv.pipe(tentStream);

let idz = 1;

  for(let z=0;z<totalSize/batchSize;z++){
    for(let b=0;b<batchSize;b++){
      let sd = randShirt();
      sd.id = idz;
      shirt_csv.write(sd);

      let td = randTent();
      td.id = idz;
      tent_csv.write(td);

      idz++;
    }
  }
  shirt_csv.end();
  tent_csv.end();
};

// control *******************************************
const nM = 2; // enter how many million primary recs to populate
const tableCt = 2;
const append = false;
const totalSize = nM/tableCt*Math.pow(10,6);
const batchSize = 100000;
//****************************************************

let hrstart = process.hrtime();
createData()
  .then(()=> {
    let hrend = process.hrtime(hrstart);
    console.info('Create time (hr): %ds %dms', hrend[0], hrend[1] / 1000000);
  })
  .catch(e=>console.log(e));

module.exports = {randShirt:randShirt, randTent:randTent};