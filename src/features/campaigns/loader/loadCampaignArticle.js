import getCampaignArticle from "../api/getCampaignArticle";

export default async function loadCampaignArticle({ params={} }) {

    const { campaignSlug } = params;

    const campaign = await getCampaignArticle(campaignSlug);

    console.log('campaign');
    console.log(campaign);

    return campaign;
}
