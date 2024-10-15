import React from "react";
import "./BestTimeToVisitCard.css";

// import peakSeasonImage from "./peak-season.jpg";
// import offPeakSeasonImage from "./off-peak-season.jpg";
// import shoulderSeasonImage from "./shoulder-season.jpg";

const BestTimeToVisitCard = () => {
  return (
    <div className="best-time-card">
      <h2>Not sure when to visit?</h2>
      <div className="season">
        <div className="season-header">
          <h3>Peak Season</h3>
        </div>
        <img
          src="https://live.staticflickr.com/8616/16109392338_e1907449c2_b.jpg"
          alt="Peak Season"
          className="season-image"
        />
        <p>
          <strong>Months:</strong> November to February
        </p>
        <p>
          <strong>Details:</strong> This is the most popular time to visit
          Varanasi due to the pleasant weather. However, hotel prices are at
          their highest during this period due to high demand.
        </p>
        <p>
          <strong>Tip:</strong> Book well in advance to secure accommodations
          and better rates.
        </p>
      </div>
      <div className="season">
        <div className="season-header">
          <h3>Off-Peak Season</h3>
        </div>
        <img
          src="https://indiadaytrips.com/wp-content/uploads/2020/11/varanasi-sun-rise.jpg"
          alt="Off-Peak Season"
          className="season-image"
        />
        <p>
          <strong>Months:</strong> April to June
        </p>
        <p>
          <strong>Details:</strong> The weather is hot and humid, which leads to
          fewer tourists. This is when you'll find the lowest hotel prices.
        </p>
        <p>
          <strong>Tip:</strong> Great for budget travelers who can handle the
          heat and wish to avoid the crowds.
        </p>
      </div>
      <div className="season">
        <div className="season-header">
          <h3>Shoulder Season</h3>
        </div>
        <img
          src="https://www.sotc.in/blog/wp-content/uploads/2024/04/Varanasi-Ghat-2.jpg"
          alt="Shoulder Season"
          className="season-image"
        />
        <p>
          <strong>Months:</strong> July to October & March
        </p>
        <p>
          <strong>Details:</strong> During these months, the weather is moderate
          with occasional rain. Hotel prices are moderate, offering a balance
          between cost and comfort.
        </p>
        <p>
          <strong>Tip:</strong> Ideal for travelers seeking a good deal without
          extreme weather conditions.
        </p>
      </div>
    </div>
  );
};

export default BestTimeToVisitCard;
