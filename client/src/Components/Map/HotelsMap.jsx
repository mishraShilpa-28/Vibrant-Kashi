import React from "react";

function HotelsMap() {
  return (
    <div className="responsive-map">
      <h1 className="mapHeading">Kashi's Hotel Map</h1>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d57708.69132969798!2d82.94949524834523!3d25.311150924989594!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1svaranasi%20hotels!5e0!3m2!1sen!2sin!4v1717078950433!5m2!1sen!2sin"
        height="550"
        allowFullScreen
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
    </div>
  );
}

export default HotelsMap;
