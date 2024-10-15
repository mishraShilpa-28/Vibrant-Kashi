import React from "react";
import "./ThingsToDo.css"
import ThingsToDetails from "../../Components/ThingsToDo/ThingsToDetails/ThingsToDetails";
import {things} from "../../Data/thingsData.json"
function ThingsToDo({headerFour}) {
  return (
    <div>
      <div className="ThingsToDo">
        <div className="ThingsToDoImage">
          <img src={headerFour.image} alt="Hotel Image" />
        </div>
        <div className="ThingsToDoTitle">
          <h1 className="ThingsToDoHeading">{headerFour.title}</h1>
        </div>
      </div>
      <ThingsToDetails thingsInfo={things} />
    </div>
  );
}

export default ThingsToDo;
