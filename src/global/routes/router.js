import { createBrowserRouter } from "react-router-dom";
import DefaultLayout from "../layouts/DefaultLayout";

const router = createBrowserRouter([
    {
        path: '/',
        element: <DefaultLayout />
    }
]);

export default router;
