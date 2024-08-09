import React from "react";

const Footer = () => {
  return (
    <>
      <footer className="section-p1">
        <div className="col">
            <img className="logo" src="public/logo.png" alt="logo"/>
            <h4>Contact</h4>
            <p><strong>Address:</strong> NIT Rourkela , Odisha</p>
            <p><strong>Phone:</strong> 1234567890 / (+91) 1234567890</p>
            <p><strong>Hours:</strong> 8:00am - 7:00pm , Mon-Sat</p>
            <div className="follow">
                <h4>Follow us</h4>
                <div className="icons">
                    <i className="fab fa-facebook-f"></i>
                    <i className="fa-brands fa-x-twitter"></i>
                    <i className="fab fa-instagram"></i>
                    <i className="fab fa-linkedin-in"></i>
                    <i className="fab fa-youtube"></i>
                </div>
            </div>
        </div>

        <div className="col">
            <h4>About</h4>
            <a href="/about">About us</a>
            <a href="/di">Delivery Information</a>
            <a href="/privacy">Privacy Policy</a>
            <a href="/T&C">Terms & conditions</a>
            <a href="/contact">Contact us</a>
        </div>

        <div className="col">
            <h4>My Account</h4>
            <a href="/signin">Sign In</a>
            <a href="/view">View Cart</a>
            <a href="/wishlist">My Wishlist</a>
            <a href="teack order">Track My Order</a>
            <a href="/help">Help</a>
        </div>

        <div className="col install">
            <h4>Install App</h4>
            <p>From App Store or Google Play</p>
            <div className="row">
                <img src="/public/app.jpg" alt="app"/>
                <img src="/public/play.jpg" alt="play"/>
            </div>
            <p>Contribution From Your Side</p>
            <img src="public/qrcode.jpg" alt="" className="qr"/>
        </div>


        <div className="copyright">
            <p>@{new Date().getFullYear()} ChanduSaini1304. All right reserved.</p>
        </div>
    </footer>
    </>
  )
}

export default Footer;