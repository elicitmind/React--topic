import React from "react";
import ReactDOM from "react-dom";
import TraitCard from "./components/TraitCard.jsx"



ReactDOM.render(
  <div>
    <div className="header">
      <h1>My Mindset</h1>
    </div>
    <TraitCard
      name="I will"
      imgurl="https://thesaurus.plus/img/synonyms/162/resoluteness.png"
      karma="+123"
      email="b@resoluteness.com"
    />

    <TraitCard
      name="I can"
      imgurl="https://everything-pr.com/wp-content/uploads/2013/06/aggressove-sales.jpg"
      karma="+987"
      email="power@success.com"
    />

    <TraitCard
      name="I DO"
      imgurl="https://thumbs.dreamstime.com/b/success-life-depends-eagerness-pictured-as-word-bat-to-show-crucial-successful-business-d-illustration-190390474.jpg"
      karma="+918"
      email="itake@itall.com"
    />
  </div>,
  document.getElementById("root")
);
