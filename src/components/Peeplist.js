import React from "react";
import './Peeplist.css';
import CollectionCard from "./CollectionCard";

const Peeplist = ({ peepListData, setSelectedPeep }) => {
  return (
    <div className="peepList">
      {peepListData.map(peep => (
        <div onClick={() => setSelectedPeep(peep.token_id)}>
          <CollectionCard
            key={peep.token_id}
            id={peep.token_id}
            name={peep.name}
            traits={peep.traits}
            image={peep.image_original_url}
          />
        </div>
      ))}
    </div>
  );
};

export default Peeplist;
