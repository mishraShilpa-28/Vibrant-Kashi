import React from 'react'
import "./NatureAndAdventure.css"
import { Topdestination } from "../../../Data/topAdventure.json"
import { divine } from "../../../Data/adventureData.json"
import TopDestination from "../../../Components/Destination Container/TopDestinations/TopDestination"
import Details from '../../../Components/Details/Details'
function NatureAndAdventure({headerEight}) {
  return (
    <div>
      <div className="NatureAdventure">
        <div className="NatureAdventureImage">
          <img src={headerEight.image} alt="CultureHeritage" />
        </div>
        <div className="NatureAdventureTitle">
          <h1 className="NatureAdventureHeading">{headerEight.title}</h1>
        </div>
      </div>
      <div>
        <h1 className="NatureHeading">Popular Travel Spots</h1>
        <TopDestination placeList={Topdestination}></TopDestination>
      </div>

      <div>
        <h1 className="NatureHeading">Exploring Kashi’s Nature & Adventures</h1>
        <div>
          <Details divineInfo={divine}></Details>
        </div>
      </div>
    </div>
  );
}

export default NatureAndAdventure