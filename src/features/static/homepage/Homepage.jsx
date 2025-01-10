// https://console.cloudinary.com/pm/c-21002ad7f642f7716f5f786ffa80a8/developer-dashboard
// https://cloudinary.com/documentation/react_integration
import { Cloudinary } from '@cloudinary/url-gen';
import { AdvancedImage } from '@cloudinary/react';

import { sepia } from '@cloudinary/url-gen/actions/effect';
import { fill } from '@cloudinary/url-gen/actions/resize';

import './homepage.css';
import { useEffect, useRef, useState } from 'react';
import { Helmet } from 'react-helmet-async';

const cld = new Cloudinary({
    cloud: {
        cloudName: 'drrpfktoo',
    },
});

const myImage = cld.image('leafy-lifestyle_vm2ddu');
console.log(myImage.toURL());

myImage.resize(fill().width(150).height(150)).effect(sepia());

const Homepage = () => {
    const [greens, setGreens] = useState();

    useEffect(() => {
        fetch('https://res.cloudinary.com/drrpfktoo/raw/upload/v1735978007/greens_b4qp8y.json')
            .then((response) => response.json())
            .then((data) => setGreens(data));
    }, []);

    console.log(greens);

    const formRef = useRef < HTMLFormElement > null;

    return (
        <div className="container p-4 bg-light my-4">
            <form action=""></form>
            <h1>Leafy Lifestyle</h1>

            <Helmet>
                <title>Main page - Campaigns</title>
                <meta name="description" content="Main page of the campaigns site" />
                <meta property="og:title" content="Campaigns - Main page" />
                <meta property="og:image" content={myImage.toURL()} />
                <meta proprrty="og:url" content="https://campaigns-project-7c4ca.web.app/" />
            </Helmet>

            <figure className="example-figure m-0">
                <img
                    className="w-100"
                    src="https://res.cloudinary.com/drrpfktoo/image/upload/v1735976224/leafy-lifestyle_vm2ddu.jpg"
                    alt="Leafy Lifestyle Logo"
                />
            </figure>

            <figure className="m-0">
                <img src={myImage.toURL()} alt="Leafy Lifestyle Logo" />
            </figure>

            <figure className="m-0">
                <AdvancedImage cldImg={myImage} />
            </figure>
        </div>
    );
};

export default Homepage;

// const cld = new Cloudinary({
//     cloud: {
//       cloudName: 'drrpfktoo'
//     }
// });

// const myImage = cld.image('webpack-logo-alt_lzflc7');
// const sepiaImage = cld.image('webpack-logo-alt_lzflc7').effect( sepia() );
// <h1>Images:</h1>
// <img src={myImage.toURL()} alt="Webpack" />
// <img src="https://res.cloudinary.com/drrpfktoo/image/upload/v1735902004/webpack-logo-alt_lzflc7.gif" alt="" />
// <AdvancedImage cldImg={sepiaImage} />
