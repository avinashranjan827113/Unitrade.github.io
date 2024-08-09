import React from "react";
import { data } from "../restApi.json";
const Calculators = () => {
  return (
    <section className="section-p1" id="calculators">
      <div className="">
        <div className="product1">
          {data[0].calculators.map((element) => {
            return (
              <div key={element.id} className="prod">
                <img src={element.image} alt="" />
                <div className="des">
                  <h5>{element.title}</h5>
                  <div className="star">
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <i className="fas fa-star"></i>
                    <p>{element.description}</p>
                    <p className="phNo">{element.phNo}</p>
                  </div>
                  <h4>₹{element.price}</h4>
                  
                </div>
                <a href="/sell"><i className="fal fa-shopping-cart cart"></i></a>
              </div>
            )
          })
          }
        </div>
      </div>
    </section>
  );
};

export default Calculators;
