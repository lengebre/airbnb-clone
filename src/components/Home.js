import React from "react";
import "./Home.css";
import Header from "./Header";
import Banner from "./Banner";
import Cards from "./Cards";

function Home() {
  return (
    <div className="home">
      <Banner />
      <div className="home__section">
        <Cards
          src="https://cdn.pixabay.com/photo/2017/09/09/18/25/living-room-2732939_960_720.jpg"
          title="Nice place"
          description="This is really just a nice place to stay"
        />
        <Cards
          src="https://cdn.pixabay.com/photo/2015/10/20/18/57/furniture-998265_960_720.jpg"
          title="Unique stay"
          description="This place is somewhere"
        />
        <Cards
          src="https://cdn.pixabay.com/photo/2017/03/22/17/39/kitchen-2165756_960_720.jpg"
          title="Very nice"
          description="Welcome to your home away from home"
        />
      </div>
      <div className="home__section">
        <Cards
          src="https://cdn.pixabay.com/photo/2016/06/24/10/47/architecture-1477041_960_720.jpg"
          title="Summer get away"
          description="Awesome summer getaway. No pets allowed"
          price="$40/Night"
        />
        <Cards
          src="https://cdn.pixabay.com/photo/2016/01/19/17/08/vintage-1149558_960_720.jpg"
          title="This place really exist"
          description="Nice place to stay"
          price="$37/Night"
        />
        <Cards
          src="https://cdn.pixabay.com/photo/2014/08/11/21/40/wall-416062_960_720.jpg"
          title="Another place to call home"
          description="Super nice place to stay with family and friends"
          price="$19/Night"
        />
      </div>
    </div>
  );
}

export default Home;
