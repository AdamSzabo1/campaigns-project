import getCampaigns from "../api/getCampaigns";

export default async function loadCampaignTitle() {

    const campaigns = await getCampaigns();

    const campaignTitles = campaigns.map((item) => ({
        title: item.title,
        slug: item.slug
    }));

    return campaignTitles;
}
