import { Tent, Shirt, db } from "../db/index";

afterAll(() => {
  return db.close();
});

describe("DB Test", () => {
  test("Confirm we have a 51st document in Tent Collection", done => {
    Tent.find({ _id: 51 }).exec((err, success) => {
      if (err) {
        console.log("Test ERROR", err);
      } else {
        expect(success[0]._id).toBe(51);
        done();
      }
    });
  });

  test("Confirm we have a 102nd document in Shirt Collection", done => {
    Shirt.find({ _id: 102 }).exec((err, success) => {
      if (err) {
        console.log("Test ERROR", err);
      } else {
        expect(success[0]._id).toBe(102);
        done();
      }
    });
  });

  test("A single DB Shirt Collection Document should have correct properties and values", () => {
    expect.assertions(7);
    return Shirt.find({ _id: 52 })
      .exec()
      .then(data => {
        expect(data[0]._id).toBe(52);
        expect(data[0].imageURL).toBe(
          "https://s3-us-west-2.amazonaws.com/fec-project/shirtsResized/S52.jpg"
        );
        expect(typeof data[0].title).toBe("string");
        expect(data[0].ranking).toBeLessThanOrEqual(5);
        expect(data[0].reviews).toBeLessThanOrEqual(100);
        expect(data[0].price).toBeLessThanOrEqual(85);
        expect(data[0].price).toBeGreaterThanOrEqual(10);
      });
  });

  test("A single DB Tent Collection Document should have correct properties and values", () => {
    expect.assertions(10);
    return Tent.find({ _id: 1 })
      .exec()
      .then(data => {
        expect(data[0]._id).toBe(1);
        expect(data[0].imageURL).toBe(
          "https://s3-us-west-2.amazonaws.com/fec-project/tentsResized/1.jpg"
        );
        expect(data[0].ranking).toBeLessThanOrEqual(5);
        expect(data[0].reviews).toBeLessThanOrEqual(100);
        expect(data[0].price).toBeLessThanOrEqual(400);
        expect(data[0].price).toBeGreaterThanOrEqual(100);
        expect(typeof data[0].sleepingCapacity).toBe("string");
        expect(typeof data[0].packagedWeight).toBe("string");
        expect(data[0].numberOfDoors).toBeLessThanOrEqual(2);
        expect(data[0].bestUse).toBe("Camping");
      });
  });
});
