import { Link } from 'react-router';

import * as style from './side-menu.module.css';

const SideMenu = ({ campaignTitles=[] }) => {

    return (
        <div className={`${style["side-menu"]} d-flex flex-column gap-2 flex-shrink-0`}>

            <h3>Campaigns</h3>

            {
                campaignTitles.map((item, index) => (
                    <Link
                        key={index}
                        to={`/campaigns/viewer/${item?.slug}`}
                        className="btn btn-secondary"
                    >
                        {item?.title}
                    </Link>
                ))
            }
            
        </div>
    );
}

export default SideMenu;
