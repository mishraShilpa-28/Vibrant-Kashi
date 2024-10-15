import React from 'react'
import "./CultureHeritage.css";

import { Topdestination } from "../../../Data/topDivinePlaces.json"
import {Topghats} from "../../../Data/topGhats.json"
import TopDestination from "../../../Components/Destination Container/TopDestinations/TopDestination";

import {TopHistorical} from "../../../Data/topHistoricalPlaces.json"
function CultureHeritage({ headerSixth }) {
  return (
    <div>
      <div className="CultureHeritage">
        <div className="CultureHeritageImage">
          <img src={headerSixth.image} alt="CultureHeritage" />
        </div>
        <div className="CultureHeritageTitle">
          <h1 className="CultureHeritageHeading">{headerSixth.title}</h1>
        </div>
      </div>
      <div>
        <h1 className="cultureHeading"> Temples and Religious Sites </h1>

        <TopDestination placeList={Topdestination}></TopDestination>
      </div>
      <div>
        <h1 className="cultureHeading"> Ghats of Varanasi </h1>
        <TopDestination placeList={Topghats}></TopDestination>
      </div>

      <div>
        <h1 className="cultureHeading"> Historical Monuments</h1>

        <TopDestination placeList={TopHistorical}></TopDestination>
      </div>

      <div>
        
      </div>


    </div>
  );
}

export default CultureHeritage