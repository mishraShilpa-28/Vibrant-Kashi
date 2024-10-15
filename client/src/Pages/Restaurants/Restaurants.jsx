import "./Restaurants.css"

import { topRestaurants } from "../../Data/topRestaurantsData.json";
import TopDestination from "../../Components/Destination Container/TopDestinations/TopDestination";

import Details from "../../Components/Details/Details";
import { StreetFood } from "../../Data/streetFoodData.json";
import RestaurantsMap from "../../Components/Map/RestaurantsMap";
const Rastaurants = ({ headerThree }) => {
  return (
    <div>
      <div className="Restaurants">
        <div className="RestaurantsImage">
          <img src={headerThree.image} alt="Hotel Image" />
        </div>
        <div className="RestaurantsTitle">
          <h1 className="RestaurantsHeading">{headerThree.title}</h1>
        </div>
      </div>
      <h1 className="restaurantsHeading ">Kashi Cuisine</h1>
      <div className="detailsOfFood">
        <h2 className="headingOfFood">Historical and Cultural Context</h2>

        <div className=" descriptionOfFood">
          Varanasi, also known as Kashi or Banaras, is not only one of the
          oldest living cities in the world but also a gastronomic paradise. The
          city’s cuisine is deeply intertwined with its cultural, religious, and
          historical context, offering a unique blend of flavors and culinary
          traditions. Varanasi’s cuisine reflects its spiritual and cultural
          significance. The city, situated along the banks of the Ganges River,
          has been a center for Hindu pilgrimage for centuries. As a result, the
          food here is heavily influenced by religious practices, with a
          predominance of vegetarian dishes due to the spiritual belief in
          non-violence and purity.
        </div>
        <img
          src="https://akm-img-a-in.tosshub.com/sites/visualstory/stories/2023_03/story_27618/assets/13.jpeg?time=1679556833"
          alt=""
          className="firstImageFood"
        />

        <h2 className="headingOfFood">
          Key Characteristics of Kashi Cuisine
        </h2>
        <h3 className="subheadingOfFood">1.Vegetarian Focus:</h3>
        <div className=" descriptionOfFood">
          Most traditional dishes are vegetarian, emphasizing the city's
          spiritual roots.
        </div>

        <h3 className="subheadingOfFood">2. Local Ingredients:</h3>
        <div className=" descriptionOfFood">
          The cuisine heavily relies on seasonal and locally sourced
          ingredients, ensuring fresh and flavorful dishes. Commonly used
          vegetables include potatoes, tomatoes, brinjals (eggplants), and
          various greens. Traditional recipes incorporate a variety of spices
          and herbs, such as cumin, coriander, turmeric, ginger, and garlic,
          which contribute to the distinctive flavors.
        </div>
        <img
          src="https://i.pinimg.com/564x/d3/e1/55/d3e155099dc1b77f6b6d2fbee3b7fc96.jpg"
          alt=""
          className="imageFood"
        />
        <h3 className="subheadingOfFood">3. Dairy Products:</h3>
        <div className=" descriptionOfFood">
          Dairy products like milk, yogurt, paneer (cottage cheese), and ghee
          (clarified butter) are integral to Varanasi's cuisine. These
          ingredients add richness and texture to many dishes. Dishes such as
          lassi (yogurt drink), malaiyo (milk froth dessert), and various types
          of sweets highlight the extensive use of dairy.
        </div>

        <h3 className="subheadingOfFood">4. Balanced Flavors: </h3>
        <div className=" descriptionOfFood">
          Varanasi's cuisine strikes a delicate balance between sweet and savory
          flavors. Many dishes combine these elements, providing a unique taste
          experience. Popular street foods like tamatar chaat and aloo tikki
          showcase this balance, blending spicy, tangy, and sweet flavors.
        </div>
        <img
          src="https://i.pinimg.com/564x/39/03/6d/39036def6c196b2b886ce598f790b4c1.jpg"
          alt="image"
          className="secondImageFood"
        />
        <h3 className="subheadingOfFood">5. Festive Foods:</h3>
        <div className=" descriptionOfFood">
          Specific dishes are prepared during festivals and religious events,
          reflecting the cultural and spiritual significance of these times.
          Food offerings (prasad) made to deities in temples are considered
          sacred and are distributed to devotees. These offerings often include
          sweets like ladoo, peda, and kheer.
        </div>
        <h3 className="subheadingOfFood">6.Traditional Cooking Methods: </h3>
        <div className=" descriptionOfFood">
          Many traditional recipes involve slow cooking, which enhances the
          flavors and allows the spices to meld perfectly. Techniques such as
          cooking over an open flame or in clay ovens (tandoors) are common,
          imparting a distinct smoky flavor to dishes like baati chokha.
        </div>

        <h3 className="subheadingOfFood">7. Street Food Culture: </h3>
        <div className=" descriptionOfFood">
          Varanasi boasts a vibrant street food culture, with numerous stalls
          and vendors offering a variety of snacks and quick bites. Street food
          is not only delicious but also affordable and easily accessible,
          making it popular among locals and tourists alike.
        </div>

        <h3 className="subheadingOfFood">
          8. Influence of Neighboring Regions:{" "}
        </h3>
        <div className=" descriptionOfFood">
          Varanasi’s cuisine is influenced by the culinary traditions of
          neighboring regions, including Bihar, Bengal, and Uttar Pradesh,
          leading to a diverse and eclectic food scene. This fusion is evident
          in the wide variety of dishes available, ranging from light snacks to
          hearty meals.
        </div>
      </div>
      <div>
        <h1 className="restaurantsHeading">Must-Visit Restaurants </h1>
        <TopDestination placeList={topRestaurants}></TopDestination>
      </div>
      <div>
        <h1 className="restaurantsHeading">Must-Try Dishes in Kashi</h1>

        <div>
          <Details divineInfo={StreetFood}></Details>
        </div>
      </div>

      <div>
        <RestaurantsMap />
      </div>
    </div>
  );
};

export default Rastaurants;
