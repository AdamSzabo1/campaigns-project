import { collection, getDocs } from "firebase/firestore";
import { getAppDb } from "../../firebase";

export default async function getCampaigns() {

    // const response = await fetch('/assets/json/campaigns.json');

    const db = getAppDb();
    const collCampaigns = collection(db, 'campaigns');

    const campaignsSnapshot = await getDocs(collCampaigns);

    const campaigns = campaignsSnapshot.docs.map(item => item.data());

    return campaigns;
}
