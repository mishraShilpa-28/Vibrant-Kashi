import React from "react";
import ThingsToCard from "../ThingsToCard/ThingsToCard";
import "./ThingsToDetails.css"

function ThingsToDetails({ thingsInfo }) {
  return (
    <>
      <div className="THINGSHeading">Essential Kashi Experiences</div>
      <div className="thingsInfo">
        {thingsInfo.map((info) => {
          return (
            <div>
              <ThingsToCard
                key={info.id}
                id={info.id}
                title={info.title}
                src={info.image}
                infor={info.info}
                Detailslocation={info.Address}
                time={info.Timings}
              ></ThingsToCard>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default ThingsToDetails;
