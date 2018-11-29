const request = require('supertest');
const { expect } = require('chai');
const { app, db } = require('./app.js');

describe('/reviews endpoint', () => {
  it('should return a result for a valid request', done => {
    request(app)
      .get('/reviews/50')
      .then(response => {
        expect(response.statusCode).to.equal(200);
        // This isn't ideal.  It is actually querying the DB, which makes it
        // slower and isn't necessary for testing the API.  There should be
        // a way to use a mock here, but I'm not sure what it is.
        done();
      });
  });

  it('should return a result for a valid request the second time', done => {
    request(app)
      .get('/reviews/50')
      .then(response => {
        expect(response.statusCode).to.equal(200);
        // This isn't ideal.  It is actually querying the DB, which makes it
        // slower and isn't necessary for testing the API.  There should be
        // a way to use a mock here, but I'm not sure what it is.
        done();
      });
  });

  it('should return 404 when the product is not in the db', done => {
    request(app)
      .get('/reviews/5000')
      .then(response => {
        expect(response.statusCode).to.equal(404);
        done();
      });
  });

  it('should redirect for /product/random', done => {
    request(app)
      .get('/product/random')
      .then(res => {
        expect(res.statusCode).to.equal(302);
        done();
      });
  });

  it('should return HTML for a valid /product route', done => {
    request(app)
      .get('/product/47')
      .then(res => {
        expect(res.statusCode).to.equal(200);
        expect(res.header['content-type']).to.equal('text/html');
        done();
      });
  });

  it('should return 400 when the productId is malformed', done => {
    request(app)
      .get('/reviews/banana')
      .then(response => {
        expect(response.statusCode).to.equal(400);
        done();
      });
  });

  it('should successfully PUT an update', done => {
    request(app)
      .put('/reviews/47')
      .send(
        JSON.stringify({ reviewId: 662, updatedCol: 'helpful', newValue: 3 }),
      )
      .set('Content-Type', 'application/json')
      .expect(200)
      .then(() => done());
  });
});

afterAll(() => db.end());
