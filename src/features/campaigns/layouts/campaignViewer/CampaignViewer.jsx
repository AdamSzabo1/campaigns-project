import { Outlet, useLoaderData } from "react-router";
import SideMenu from "../../components/sideMenu/SideMenu";

const CampaignViewer = () => {

    const campaignTitles = useLoaderData();

    return (
        <div className="d-flex flex-row gap-5">
            <SideMenu campaignTitles={campaignTitles} />
            <Outlet />
        </div>
    );
}

export default CampaignViewer;
