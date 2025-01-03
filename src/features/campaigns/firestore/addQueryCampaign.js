import { addDoc, collection, Timestamp } from "firebase/firestore";
import { getAppDb } from "../../firebase";

export default async function addQueryCampaign({ title, slug, setting, heroImg, releaseDate, sections }) {

    const db = getAppDb();
    const collCampaigns = collection(db, 'campaigns');

    const dbObj = {
        title,
        slug,
        setting,
        heroImg,
        sections,
        releaseDate: Timestamp.fromDate( new Date(releaseDate) )
    };

    const newDoc = await addDoc( collCampaigns, dbObj );

    console.log(newDoc);
}
