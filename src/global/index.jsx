import React from 'react';
import { createRoot } from "react-dom/client";
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

root.render(
    <React.StrictMode>
        <RouterProvider router={router} />
    </React.StrictMode>
);
