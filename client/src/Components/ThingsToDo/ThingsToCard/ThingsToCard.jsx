import React from "react";
import "./ThingsToCard.css";
function ThingsToCard({ id, title, src, infor, time, Detailslocation }) {
  return (
    <div className="detailThingsCards">
      <div className="detailsThingsFlex">
        <div className="divineThingsTitle">{id}</div>
        <div className="divineThingsTitle">{title}</div>
      </div>{" "}
      <div className="divineThingsImage">
        <img src={src} />
      </div>
      <div className="TempleThingsInfo">{infor}</div>
      <div className="detailsThingsFlex">
        <div>Location: </div>
        <div className="HeadingThingsDetails">{Detailslocation}</div>
      </div>
      <div className="detailsThingsFlex">
        <div>Timings:</div>
        <div className="HeadingThingsDetails">{time}</div>
      </div>
    </div>
  );
}
export default ThingsToCard;
