import { createBrowserRouter, Outlet } from 'react-router-dom';
import DefaultLayout from '../layouts/defaultLayout/DefaultLayout';
import { AppArea } from '../../shared';
import {
    CampaignArticle,
    CampaignForm,
    CampaignViewer,
    loadCampaignArticle,
    loadCampaignTitle,
} from '../../features/campaigns';
import { LoginForm, RegisterForm } from '../../features/auth';
import { loadUserData, UserProfile } from '../../features/user';
import { Homepage } from '../../features/static';

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />,
        children: [
            {
                index: true,
                element: <Homepage />,
            },
            {
                path: 'auth',
                element: <AppArea />,
                children: [
                    {
                        path: 'login',
                        element: <LoginForm />,
                    },
                    {
                        path: 'register',
                        element: <RegisterForm />,
                    },
                    {
                        path: 'user-profile',
                        element: <UserProfile />,
                        loader: loadUserData,
                        errorElement: <h2>Error while loading user</h2>
                    },
                ],
            },
            {
                path: 'campaigns',
                element: <AppArea />,
                children: [
                    {
                        index: true,
                        element: <h1>Campaigns...</h1>,
                    },
                    {
                        path: 'viewer',
                        element: <CampaignViewer />,
                        loader: loadCampaignTitle,
                        hydrateFallbackElement: <h1>Loading...</h1>,
                        children: [
                            {
                                index: true,
                                element: <h1>Please select an article</h1>,
                            },
                            {
                                path: ':campaignSlug',
                                element: <CampaignArticle />,
                                loader: loadCampaignArticle,
                            },
                        ],
                    },
                    {
                        path: 'upload',
                        element: <CampaignForm />,
                    },
                ],
            },
        ],
    },
]);

export default router;
