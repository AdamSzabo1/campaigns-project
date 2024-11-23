import { createBrowserRouter, Outlet } from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout/DefaultLayout";
import { AppArea } from "../../shared";
import { CampaignArticle, CampaignViewer, loadCampaignArticle, loadCampaignTitle } from "../../features/campaigns";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <h1>Index..</h1>
            },
            {
                path: 'campaigns',
                element: <AppArea />,
                children: [
                    {
                        index: true,
                        element: <h1>Campaigns...</h1>
                    },
                    {
                        path: 'viewer',
                        element: <CampaignViewer />,
                        loader: loadCampaignTitle,
                        children: [
                            {
                                index: true,
                                element: <h1>Please select an article</h1>
                            },
                            {
                                path: ':campaignSlug',
                                element: <CampaignArticle />,
                                loader: loadCampaignArticle
                            }
                        ]
                    },
                    {
                        path: 'upload',
                        element: <h1>Upload...</h1>
                    }
                ]
            },
        ]
    }
]);

export default router;
