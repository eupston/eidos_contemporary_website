import React from 'react';
import {Route, useRouteMatch} from 'react-router-dom';
import Vendor from "../../Components/Vendor/Vendor";

const Vendors = () => {
    let match = useRouteMatch();
    const vendorsList = ["Gordon Lawrie", "Deborah Alexander"];

    const vendorRoutes = vendorsList.map(ven => {
        const vendorURL = ven.toLowerCase().replace(" ", "-");
        const completeVendorURL = "/jewelry/" + vendorURL;
        return <Route path={`${match.url}/${vendorURL}`} render={() => <Vendor completeVendorURL={completeVendorURL} vendorName={ven}/>}/>
    });

    return (
        <div>
            {vendorRoutes}
        </div>
    );
};

export default Vendors;