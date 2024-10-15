import React from 'react'
import "./Hotels.css"
import { topHotels } from "../../Data/topHotelsData.json";
import TopDestination from "../../Components/Destination Container/TopDestinations/TopDestination"
import BestTimeToVisitCard from '../../Components/BestTime/BestTimeToVisitCard';
import HotelsMap from '../../Components/Map/HotelsMap';
function Hotels({headerTwo}) {
  return (
    <div>
      <div className="Hotels">
        <div className="HotelsImage">
          <img src={headerTwo.image} alt="Hotel Image" />
        </div>
        <div className="HotelsTitle">
          <h1 className="HotelsHeading">{headerTwo.title}</h1>
        </div>
      </div>
      <div>
        <h1 className="hotelsHeading">Must-Visit Hotels</h1>
        <TopDestination placeList={topHotels}></TopDestination>
      </div>
      <div>
        <h1 className="hotelsHeading">Best Times to Visit Kashi</h1>
        <BestTimeToVisitCard />
      </div>

      <div>
        <HotelsMap />
      </div>
    </div>
  );
}

export default Hotels