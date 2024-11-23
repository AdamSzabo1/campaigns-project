import { createBrowserRouter, Outlet } from "react-router-dom";
import DefaultLayout from "../layouts/defaultLayout/DefaultLayout";
import { AppArea } from "../../shared";

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
                        path: 'upload',
                        element: <h1>Upload...</h1>
                    }
                ]
            },
        ]
    }
]);

export default router;
