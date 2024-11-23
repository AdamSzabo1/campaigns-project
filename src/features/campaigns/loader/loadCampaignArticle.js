import getCampaigns from "../api/getCampaigns";

export default async function loadCampaignArticle({ params={} }) {

    const campaigns = await getCampaigns();

    const { campaignSlug } = params;

    const article = campaigns.find(item => item.slug === campaignSlug);

    return article;
}
