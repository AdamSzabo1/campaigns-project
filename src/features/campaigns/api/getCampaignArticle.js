import { collection, getDocs, limit, orderBy, query, where } from "firebase/firestore";
import { getAppDb } from "../../firebase";

export default async function getCampaignArticle(slug) {

    const app = getAppDb();
    const campaigns = collection(app, 'campaigns');

    const q = query(
        campaigns,
        where('slug', '==', slug),
        orderBy('releaseDate'),
        limit(1)
    );

    const articleSnapshot = await getDocs(q);

    const [article] = articleSnapshot.docs.map(item => item.data());

    return article;
}
