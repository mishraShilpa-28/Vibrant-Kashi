import React from "react";

function RestaurantsMap() {
  return (
    <div className="responsive-map">
      <h1 className="mapHeading">Kashi's Restaurants Map</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d3606.7162249682615!2d82.9906467!3d25.313736599999995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1srestaurants%20in%20Varanasi%2C%20Uttar%20Pradesh!5e0!3m2!1sen!2sin!4v1717081383505!5m2!1sen!2sin"
        height="550"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default RestaurantsMap;

