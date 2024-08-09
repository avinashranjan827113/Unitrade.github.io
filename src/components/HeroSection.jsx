import React from "react";
import Navbar from "./Navbar";

const HeroSection = () => {
  return (
    <section className="heroSection" id="heroSection">
      <Navbar />
      <div className="container">
        <div className="banner">
          <div className="combined_boxes">
            <div className="imageBox1">
              <img src="./logo1.png" alt="hero" />
            </div>
            <div className="textAndLogo">
              <p>
                <span>Welcome </span><br/>
                "Explore NIT Rourkela's Best Buys!"</p>
            </div>
          </div>
        </div>
        <div className="banner">
          <div className="imageBox">
            <img src="buy.png" alt="buy" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;






// import React from "react";
// import Navbar from "./Navbar";

// const HeroSection = () => {
//   return (
//     <section className="heroSection" id="heroSection">
//       <Navbar />
//       <div className="container">
//         <div className="banner">
//           <div className="largeBox">
//           </div>
//           <div className="combined_boxes">
//             <div className="imageBox1">
//               <img src="./logo1.png" alt="hero"/>
//             </div>
//             <div className="textAndLogo">
//               <p>Welcome to the NIT Rourkela Marketplace! Buy and sell college essentials like calculators, books, notes, electronics, and more within the NITR community. Join now and make campus life easier!</p>
//             </div>
//           </div>
//         </div>
//         <div className="banner">
//           <div className="imageBox2">
//             <img src="hero1.png" alt="hero" />
//           </div>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default HeroSection;
