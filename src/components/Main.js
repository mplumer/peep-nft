import React, {useState, useEffect} from "react";
import "./Main.css";
import instgramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = ({selectedPeep, peepListData}) => {
    const [activePeep, setActivePeep] = useState(peepListData[0])

    useEffect(() => {
        setActivePeep(peepListData[selectedPeep])
    }, [peepListData, selectedPeep])

  return (
    <div className="main">
      <div className="mainContent">
        <div className="peepHighlight">
          <div className="peepContainer">
            <img
              className="selectedPeep"
              src={activePeep.image_original_url}
              alt=""
            />
          </div>
        </div>

        <div className="peepDetails" style={{ color: "#ffffff" }}>
          <div className="title">{activePeep.name}</div>
          <span className="itemNumber">#{activePeep.token_id}</span>
        </div>

        <div className="owner">
          <div className="ownerImageContainer">
            <img
              src={activePeep.owner.profile_img_url}
              alt=""
            />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div className="ownerAddress"> {activePeep.owner.address}</div>
              <div className="ownerHandle">@plumshot</div>
            </div>
            <div className="ownerLink">
              <img src={instgramLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={twitterLogo} alt="" />
            </div>
            <div className="ownerLink">
              <img src={moreIcon} alt="" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;
