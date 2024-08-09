import React from "react";
import { data } from "../restApi.json";
const Vehicles = () => {
  return (
    <section className="section-p1" id="vehicle">
      <div className="">
        <div className="product1">
          {data[0].vehicle.map((element) => {
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

export default Vehicles;
