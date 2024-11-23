
export default async function getCampaigns() {

    const response = await fetch('/assets/json/campaigns.json');
    const data = await response.json();

    return data;
}
