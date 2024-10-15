import React from "react";
import "./WhatToExp.css";
import { Link } from "react-router-dom";
const WhatToExp = ({ whatTo }) => {
  return (
    <div className="things-to-do">
      <h1 className="what-to-exp-heading">What To Experience</h1>
      <div className="to-do-wrapper">
        {whatTo.map((item) => {
          return (
            <div className="to-do-cards" key={item.id}>
              <div className="image">
                <img src={item.src} alt={item.title}></img>
              </div>
              <div className="description">
                <div className="title">
                  <h2>{item.title}</h2>
                </div>
                <div className="explore">
                  <Link to="/thingTodo" className="explore-link">
                    Explore
                  </Link>
                      </div>
                      
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default WhatToExp;
