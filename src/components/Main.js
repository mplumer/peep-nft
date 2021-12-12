import React from "react";
import "./Main.css";
import instgramLogo from "../assets/owner/instagram.png";
import twitterLogo from "../assets/owner/twitter.png";
import moreIcon from "../assets/owner/more.png";

const Main = () => {
  return (
    <div className="main">
      <div className="mainContent">
        <div className="peepHighlight">
          <div className="peepContainer">
            <img
              className="selectedPeep"
              src={
                "https://nftlabs.mypinata.cloud/ipfs/bafybeifzvsmahkmad3ukmas6otsbadwhmssfx7kvivmryv4naylyhrlima"
              }
              alt=""
            />
          </div>
        </div>
        <div className="peepDetails" style={{ color: "#ffffff" }}>
          <div className="title">Peep Show</div>
          <span className="itemNumber">#0</span>
        </div>
        <div className="owner">
          <div className="ownerImageContainer">
            <img
              src={
                "https://nftlabs.mypinata.cloud/ipfs/bafybeifzvsmahkmad3ukmas6otsbadwhmssfx7kvivmryv4naylyhrlima"
              }
              alt=""
            />
          </div>
          <div className="ownerDetails">
            <div className="ownerNameAndHandle">
              <div>0x44d0567147C453606650bdEF1bc5c9C69E9A8d4b</div>
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
