import "./Events.css";

function Events({ info }) {
  return (
    <>
      <h1 className="headingEvents">Events And Festivals</h1>

      <div className="eventCard">
        {info.map((item, idx) => {
          return (
            <div className="details">
              <img src={item.src} alt={item.alt} key={idx} />
              <div>
                <h2 className="title">{item.heading}</h2>
                {item.description}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Events;
