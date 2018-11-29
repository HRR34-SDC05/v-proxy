const cassandra = require('cassandra-driver');
const authProvider = new cassandra.auth.PlainTextAuthProvider('scylla', 'XOEDTTBPZGYAZIQD');

const client = new cassandra.Client({
  contactPoints: ['172.17.0.2'],
  authProvider: authProvider
});

client.connect()
  .then (()=>{
    console.log(`connected to Scylla/Cassandra DB`);
    const create = [
      `CREATE KEYSPACE IF NOT EXISTS sdc
       WITH replication = {'class': 'SimpleStrategy', 'replication_factor': '1' }`,
      'USE sdc',
      `CREATE TABLE IF NOT EXISTS tents (id int, imageurl text, title text, ranking float, reviews smallint, price smallint, sleepingCapacity text,  packagedWeight text, numberOfDoors smallint, bestUse text, productType text,
        PRIMARY KEY (id, reviews, ranking))
        WITH CLUSTERING ORDER BY (reviews DESC, ranking DESC)`,
      `CREATE TABLE IF NOT EXISTS shirts (id int, imageurl text, title text, ranking float, reviews smallint, price smallint, productType text,
        PRIMARY KEY (id, reviews, ranking))
        WITH CLUSTERING ORDER BY (reviews DESC, ranking DESC)`,
    ];
    let p = Promise.resolve();
    create.forEach(query => p =
         p.then(() => client.execute(query))
          .catch(e=> console.log(e,'stopped at',query))
    );
    return p;
  }).catch(err => {
    console.error('There was an error when connecting', err);
    return client.shutdown().then(() => { throw err; });
  });
