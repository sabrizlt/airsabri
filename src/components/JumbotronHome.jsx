import React from "react";
import sconto from "../IMAGE/ISCRIVITI AL SITO.jpg";


function MyJumbotron() {
  return (
    <div style={{ backgroundColor: "#f8f9fa",  marginTop: "60px" }} className="jumbotron">
       <img src={sconto} alt="" style={{width: "100%", height: "150px"}} />
    </div>
  );
}

export default MyJumbotron;
