const { Pool, Client } = require('pg');
const dotenv = require('dotenv');
dotenv.config();

const pool = new Pool({
  connectionString: process.env.DATABASE_URL
});

pool.on('connect', () => {
  console.log(`connected to PSQL DB`);
});

const createTables = () => {
  const queryText =
    `CREATE TABLE IF NOT EXISTS
    tents(
      _id bigserial PRIMARY KEY,
      imageURL varchar(140),
      title varchar(60),
      ranking real,
      reviews smallint,
      price smallint,
      sleepingCapacity varchar(20),
      packagedWeight varchar(10),
      numberOfDoors smallint,
      bestUse varchar(20),
      productType varchar(10)
    );

    CREATE TABLE IF NOT EXISTS
    shirts(
      _id bigserial PRIMARY KEY,
      imageURL varchar(140),
      title varchar(60),
      ranking real,
      reviews smallint,
      price smallint,
      productType varchar(10)
    )`;

  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

const dropTables = () => {
  const queryText = `DROP TABLE IF EXISTS tents;
                     DROP TABLE IF EXISTS shirts`;
  pool.query(queryText)
    .then((res) => {
      console.log(res);
      pool.end();
    })
    .catch((err) => {
      console.log(err);
      pool.end();
    });
}

pool.on('remove', () => {
  console.log('client removed');
  process.exit(0);
});

module.exports = {
  createTables,
  dropTables
};

require('make-runnable');