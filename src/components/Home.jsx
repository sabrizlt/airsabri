import React from "react";
import MyNavbar from "./MyNavbar";
import MyFooter from "./MyFooter";
import HomeCarousel from "./HomeCarousel";
import HomeCarousel2 from "./HomeCarousel2";
import HomeCarousel3 from "./NuoveTratteHome";
import HomeAsideLeft from "./HomeAsideLeft";
import HomeAsideRight from "./HomeAsideRight";
import JumbotronHome from "./JumbotronHome";

function Home() {
  return (
    <>
      <MyNavbar />
      <JumbotronHome />
      <div className="container-fluid">
        <div className="row">
          <h1 className="text-center mt-5 titleHome fw-bold">
            <span className="caption">GODITI LE NOSTRE METE</span>
          </h1>
          <HomeAsideLeft />
          <div className="col-lg-6">
            <HomeCarousel />
            <h1 className="text-center mt-5 titleHome fw-bold">
              <span className="caption">SCOPRI I NOSTRI SERVIZI</span>
            </h1>
            <HomeCarousel2 />
          </div>
          <HomeAsideRight />
        </div>
      </div>
      <h1 className="title fw-bold text-center">
        <span className="caption">AGGIORNAMENTI IN CORSO</span>
      </h1>
      <HomeCarousel3 />
      <MyFooter />
    </>
  );
}

export default Home;
