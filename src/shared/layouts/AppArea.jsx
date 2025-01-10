import { Outlet } from 'react-router';

const AppArea = () => {
    return (
        <div className="container p-4 bg-light my-4">
            <Outlet />
        </div>
    );
};

export default AppArea;
