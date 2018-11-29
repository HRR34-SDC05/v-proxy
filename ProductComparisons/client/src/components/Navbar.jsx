import React from "react";

class Navbar extends React.Component {
  constructor() {
    super();
    this.state = {
      input: ""
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(e) {
    e.preventDefault();

    const { input } = this.state;
    const protocol = window.location.protocol;
    const hostname = window.location.hostname;
    const pathname = window.location.pathname;
    let port = window.location.port;

    if (port !== "") {
      window.location.href = `${protocol}//${hostname}:${port}/product/${input}`
    } else {
      window.location.href = `${protocol}//${hostname}/product/${input}`
    }
  }

  handleInputChange(event, prop) {
    this.setState({ [prop]: event.target.value });
  }

  render() {
    return (
      <div className="nav__container">
        <div className="nav__navRefer-container">
          <div className="nav__navRefer">
            <ul>
              <li>SHOP</li>
              <li>OUTLET</li>
              <li>USED GEAR</li>
              <li>ADVENTURES</li>
              <li>CLASSES & EVENTS</li>
              <li>EXPERT ADVICE</li>
              <li>CO-OP JOURNAL</li>
              <li>GET OUTSIDE</li>
            </ul>
          </div>
        </div>
        <div className="nav__navShop-container">
          <div className="nav__navShop">
            <div className="nav__navShop-logo">
              <img
                src="https://s3-us-west-2.amazonaws.com/fec-project/logo/TrailblazerLogo.png"
                alt="Trailblazer logo"
              />
            </div>
            <div className="nav__navShop-data">
              <div className="nav__navShop__top">
                <div className="nav__navShop-search">
                  <form onSubmit={this.handleSubmit}>
                    <input
                      type="text"
                      placeholder="Search for great gear & clothing"
                      onChange={e => this.handleInputChange(e, "input")}
                    />
                    <button type="submit">
                      <i className="fa fa-search" />
                    </button>
                  </form>
                </div>
                <div className="nav__navShop-account">
                  <ul>
                    <li>
                      SIGN IN
                      <i className="fa fa-user" />
                    </li>
                    <li>
                      STORES
                      <i className="fa fa-map-marker" />
                    </li>
                    <li>
                      CART
                      <i className="fa fa-shopping-cart" />
                    </li>
                  </ul>
                </div>
              </div>
              <div className="nav__navShop__middle" />
              <div className="nav__navShop__bottom">
                <div className="nav__navShop-links">
                  <ul className="roboto-C">
                    <li>Camp & Hike</li>
                    <li>Climb</li>
                    <li>Cycle</li>
                    <li>Paddle</li>
                    <li>Run</li>
                    <li>Snow</li>
                    <li>Travel</li>
                    <li>Men</li>
                    <li>Women</li>
                    <li>Kids</li>
                    <li>Gifts</li>
                    <li>Deals</li>
                    <li>More</li>
                    <li>OUTLET</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Navbar;
