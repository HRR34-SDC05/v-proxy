import seed from "../seed.js";

// const { MongoClient } = require("mongodb");

// describe("MongoDB", () => {
//   let connection;
//   let db;
//   const sampleProducts = [
//     {
//       _id: 0,
//       name: "Tent",
//       rating: 3.5,
//       reviewCount: 32,
//       itemNum: 0,
//       price: 356,
//       color: "Gray",
//       image: "https://happy.thanksgiving.jpg"
//     },
//     {
//       _id: 1,
//       name: "Boots",
//       rating: 2,
//       reviewCount: 50,
//       itemNum: 1,
//       price: 107,
//       color: "Brown",
//       image: "https://merry.christmas.jpg"
//     },
//     {
//       _id: 2,
//       name: "Snowboard",
//       rating: 4.3,
//       reviewCount: 83,
//       itemNum: 2,
//       price: 488,
//       color: "White",
//       image: "https://happy.newyear.jpg"
//     }
//   ];

//   beforeAll(async () => {
//     connection = await MongoClient.connect(global.__MONGO_URI__);
//     db = await connection.db(global.__MONGO_DB_NAME__);
//   });

//   afterAll(async () => {
//     await connection.close();
//     await db.close();
//   });
//   it("should aggregate docs from collection by id", async () => {
//     const products = db.collection("products");

//     await products.insertMany(sampleProducts);

//     const product = await products.findOne({ _id: 1 });

//     expect(product).toEqual({
//       _id: 1,
//       name: "Boots",
//       rating: 2,
//       reviewCount: 50,
//       itemNum: 1,
//       price: 107,
//       color: "Brown",
//       image: "https://merry.christmas.jpg"
//     });
//   });
// });

describe("Seeding", () => {
  const seeder = seed.createMockProducts();
  const document = seeder[0];

  it("should seed 100 products", () => {
    expect(seeder).toHaveLength(100);
  });
  it("each document should have 8 key/value pairs", () => {
    const length = Object.values(document).length;
    expect(length).toBe(8);
  });
  it("each document should have property id", () => {
    const hasId = Object.prototype.hasOwnProperty.call(document, "_id");
    expect(hasId).toBe(true);
  });
});
