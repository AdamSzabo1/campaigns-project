import React from 'react';
import { createRoot } from 'react-dom/client';
import { RouterProvider } from 'react-router-dom';
import router from './routes/router';

import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle';

import './css/index.css';
import { Helmet, HelmetProvider } from 'react-helmet-async';
import { UserProvider } from '../features/user';

const rootEl = document.getElementById('root');
const root = createRoot(rootEl);

const helmetContext = {};

root.render(
    <React.StrictMode>
        <HelmetProvider context={helmetContext}>
            <Helmet>
                <meta name="description" content="Campaigns - look up your favorite campaigns" />
                <meta property="og:title" content="Campaigns" />
                <meta
                    property="og:image"
                    content="https://res.cloudinary.com/drrpfktoo/image/upload/w_1000,ar_1:1,c_fill,g_auto,e_art:hokusai/v1735902004/webpack-logo-alt_lzflc7.gif"
                />
                <meta proprrty="og:url" content="https://campaigns-project-7c4ca.web.app/" />
                <title>Campaigns</title>
            </Helmet>

            <UserProvider>
                <RouterProvider router={router} />
            </UserProvider>

        </HelmetProvider>
    </React.StrictMode>
);
