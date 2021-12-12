import "./App.css";
import Header from "./components/Header";
import { useState, useEffect } from "react";
import axios from "axios";
import Peeplist from "./components/Peeplist";
import Main from "./components/Main";

function App() {
  const [peepListData, setPeepListData] = useState([]);
  const [selectedPeep, setSelectedPeep] = useState(0);

  useEffect(() => {
    const getMyNfts = async () => {
      const openseaData = await axios.get(
        "https://testnets-api.opensea.io/assets?asset_contract_address=0x1323072867CCc9d4fE54BEafD467C53673CE1B0c&order_direction=asc"
      );
      console.log(openseaData.data.assets);
      setPeepListData(openseaData.data.assets);

    };

    return getMyNfts();
  }, []);

  return (
    <div className="app">
      <Header />
      {peepListData.length > 0 && (
        <>
          <Main peepListData={peepListData} selectedPeep={selectedPeep}/>
          <Peeplist
            peepListData={peepListData}
            setSelectedPeep={setSelectedPeep}
          />
        </>
      )}
    </div>
  );
}

export default App;
