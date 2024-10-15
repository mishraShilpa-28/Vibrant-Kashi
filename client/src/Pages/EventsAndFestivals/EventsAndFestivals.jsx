import React from 'react'
import "./EventsAndFestivals.css"
import {events} from "../../Data/events.json"
import Events from '../../Components/Events/Events';
function EventsAndFestivals({headerFive}) {
  return (
    <div>
      <div className="EventsAndFestivals">
        <div className="EventsAndFestivalsImage">
          <img src={headerFive.image} alt="Events and Fstivals Image" />
        </div>
        <div className="EventsAndFestivalsTitle">
          <h1 className="EventsAndFestivalsHeading">{headerFive.title}</h1>
        </div>
      </div>
      <Events info={events} />
    </div>
  );
}

export default EventsAndFestivals