import React, { useEffect, useState, useContext } from "react";

import { CrowdFundingContext } from "../Context/CrowdFunding.js";
import { PopUp, Hero, Card } from "../Components/index.js";

const IndexPage = () => {
  const {
    titleData,
    getCampaigns,
    createCampaign,
    donate,
    getUserCampaigns,
    getDonation, // Corrected function name
  } = useContext(CrowdFundingContext);

  const [allcampaign, setAllcampaign] = useState([]);
  const [usercampaign, setUsercampaign] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const allData = await getCampaigns();
      const userData = await getUserCampaigns();
      setAllcampaign(allData);
      setUsercampaign(userData);
    };

    fetchData();
  }, []);

  const [openModel, setOpenModel] = useState(false);
  const [donateCampaign, setDonateCampaign] = useState();

  return (
    <>
      <Hero titleData={titleData} createCampaign={createCampaign} />
      <Card
        title="All Listed Campaign" 
        allcampaign={allcampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />

      <Card
        title="Your Created Campaign"
        allcampaign={usercampaign}
        setOpenModel={setOpenModel}
        setDonate={setDonateCampaign}
      />
      {openModel && (
        <PopUp
          setOpenModel={setOpenModel}
          getDonation={getDonation} 
          donate={donateCampaign}
          donateFunction={donate}
        />
      )}
    </>
  );
};

export default IndexPage;
