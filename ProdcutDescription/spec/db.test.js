const $ = require('jquery');

describe('Database testing for randomly selected prodcut IDs', ()=> {
  for(let i = 0; i < 8; i++){
    var id = Math.floor(Math.random() * Math.floor(100));

    it(`Testing if product ${id} is found in the Database`, () => {
      $.get('/product/data/'+ id,(productData) =>{
        expect(productData.id).toBe(id);
      })
    })
    it(`Testing if product ${id} has a product name`, () => {
      $.get('/product/data/'+ id,(productData) =>{
        expect(productData.productName).anything();
      })
    })
    it(`Testing if product ${id}'s product name is a string`, () => {
      $.get('/product/data/'+ id,(productData) =>{
        expect(productData.productName).any(String);
      })
    })
    it(`Testing if product ${id} has features`, () => {
      $.get('/product/data/'+ id,(productData) =>{
        expect(productData.features).anything();
      })
    })
    it(`Testing if product ${id}'s features is an array`, () => {
      $.get('/product/data/'+ id,(productData) =>{
        expect(productData.features).any(Array);
      })
    })
    it(`Testing if product ${id} has techSpecs`, () => {
      $.get('/product/data/'+ id,(productData) =>{
        expect(productData.techSpecs).anything();
      })
    })
    it(`Testing if product ${id}'s techSpecs is an array of objects`, () => {
      $.get('/product/data/'+ id,(productData) =>{
        expect(productData.techSpecs).any(Array);
        expect(productData.techSpecs.types).any();
      })
    })
  }
})