import { expect } from 'chai';

const { Pool } = require('pg');

// pools will use environment variables
// for connection information
const pool = new Pool({ database: 'trailblazers-reviews' });

it('should add and delete a test table without an error', done => {
  pool.query(
    `CREATE TABLE jestTest (
      PersonID int,
      LastName varchar(255),
      FirstName varchar(255),
      Address varchar(255),
      City varchar(255) );`,
    () => {
      pool.query('DROP TABLE jestTest;', () => {
        pool.end();
        expect(true).to.equal(true);
        done();
      });
    },
  );
});
