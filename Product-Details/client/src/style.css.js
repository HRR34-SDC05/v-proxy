const styles = {
  container: {
    width: "100%"
  },
  wrapper: {
    display: "flex",
    flexFlow: "row, nowrap",
    justifyContent: "space-around",
    width: "1150px",
    height: "680px",
    margin: "auto"
  },
  Details: {
    display: "flex",
    flexFlow: "column nowrap",
    width: "400px",
    fontSize: "1.6rem",
    lineHeight: "1.5",
    fontFamily: `Roboto,"Helvetica Neue",Helvetica,Arial,sans-serif`,
    color: "#222",
    margin: "30px"
  },
  mainImageWrapper: {
    position: "relative",
    display: "flex",
    justifyContent: "center",
    alignItems: "center"
  },
  mainImage: {
    height: "550px",
    width: "700px",
    margin: "30px",
    borderRadius: "8px"
  },
  ProductInfo: {
    display: "flex",
    flexFlow: "row nowrap",
    width: "100%",
    fontSize: "15px"
  },

  brand: {
    fontWeight: "700",
    fontSize: "15px",
    color: "#347CB1"
  },

  name: {
    fontWeight: "600",
    fontSize: "2.9 rem",
    fontFamily: "Arbutus Slab, serif",
    letterSpacing: "0.01em",
    paddingBottom: "10px"
  },

  rating: {
    paddingLeft: "17px"
  },

  reviewCount: {
    paddingLeft: "10px"
  },

  itemWrapper: {
    display: "flex",
    width: "50%",
    justifyContent: "flex-end"
  },

  itemNum: {},

  price: {
    fontFamily: "Arbutus Slab, serif",
    fontWeight: "500",
    fontSize: "18px",
    paddingBottom: "23px"
  },

  color: {
    fontSize: "14px"
  },

  images: {
    height: "60px",
    width: "60px",
    borderRadius: "15%",
    margin: "5px",
    border: "1px solid blue",
    marginBottom: "10px"
  },

  quantity: {
    fontSize: "14px"
  },
  radio: {
    cursor: "pointer"
  },
  label: {
    fontSize: "1rem",
    fontWeight: "bold",
    display: "inlineBlock",
    marginTop: "10px"
  },
  button: {
    borderRadius: "50%",
    cursor: "pointer"
  },

  input: {
    width: "43px",
    height: "36px",
    margin: "5px",
    textAlign: "center",
    fontSize: "17px"
  },
  cart: {
    borderRadius: "0",
    margin: "0",
    textAlign: "center",
    background: "#426c90",
    color: "white",
    cursor: "pointer",
    width: "100%",
    height: "45px",
    fontSize: "17px",
    marginTop: "35px"
  },
  wishList: {
    borderRadius: "0",
    margin: "0",
    textAlign: "center",
    background: "#fff",
    borderColor: "#c5c5c5",
    color: "black",
    cursor: "pointer",
    width: "100%",
    height: "45px",
    fontSize: "17px",
    marginTop: "10px"
  },
  returnPolicy: {
    fontSize: "15px",
    color: "#347CB1",
    cursor: "pointer",
    textAlign: "center",
    marginTop: "15px"
  }
};

module.exports = styles;
