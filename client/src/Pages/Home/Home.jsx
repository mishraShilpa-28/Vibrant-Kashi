import Carousel from "../../Components/Carousel/Carousel";
import { ways } from "../../Data/waysData.json";
import Ways from "../../Components/Ways/Ways";


import { slides } from "../../Data/carouselData.json";
import { conveyance } from "../../Data/conveyanceData.json"
import Conveyance from "../../Components/Conveyance/Conveyance"
import More from "../../Components/More/More";
import { more } from "../../Data/moreSectionData.json";
import WhatToExp from "../../Components/WhatToExp/WhatToExp";
import {whatTo} from "../../Data/whatToData.json"
const Home = () => {
  return (
    <div>
      <Carousel data={slides} />
      <Ways ways={ways} />
      <WhatToExp whatTo={whatTo}/>
      <Conveyance info={conveyance } />
      <More destinations={more} />
    </div>
  );
};


export default Home;
