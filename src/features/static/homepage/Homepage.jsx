// https://console.cloudinary.com/pm/c-21002ad7f642f7716f5f786ffa80a8/developer-dashboard
// https://cloudinary.com/documentation/react_integration
import {Cloudinary} from "@cloudinary/url-gen";
import {AdvancedImage} from '@cloudinary/react';

// Import required actions.
import {sepia} from "@cloudinary/url-gen/actions/effect";

const Homepage = () => {

    const cld = new Cloudinary({
        cloud: {
          cloudName: 'drrpfktoo'
        }
    });

    const myImage = cld.image('webpack-logo-alt_lzflc7');

    const sepiaImage = cld.image('webpack-logo-alt_lzflc7').effect( sepia() );

    return (
        <div className="container p-4 bg-light my-4">
            <h1>Images:</h1>
            <img src={myImage.toURL()} alt="Webpack" />
            <img src="https://res.cloudinary.com/drrpfktoo/image/upload/v1735902004/webpack-logo-alt_lzflc7.gif" alt="" />
            <AdvancedImage cldImg={sepiaImage} />
        </div>
    );
}

export default Homepage;