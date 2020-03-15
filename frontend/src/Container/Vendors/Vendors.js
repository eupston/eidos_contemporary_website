import React from 'react';
import {Route, Switch} from 'react-router-dom';
import Vendor from "../../Components/Vendor/Vendor";


const vendorsList = ["Gordon Lawrie", "Deborah Alexander"];

const vendorRoutes = vendorsList.map(ven => {
    const vendorURL = ven.toLowerCase().replace(" ", "-");
    const completeURL = "/jewelry/" + vendorURL;
    return <Route path={completeURL} render={() => <Vendor vendorName={ven}/>}/>
});

const Vendors = () => {
    return (
        <div>
            <Switch>
                {vendorRoutes}
            </Switch>
        </div>
    );
};

export default Vendors;