import React from 'react';
import {Route, useRouteMatch} from 'react-router-dom';
import Vendor from "./Vendor/Vendor";
import {connect} from 'react-redux';

const Vendors = (props) => {
    let match = useRouteMatch();

    const vendorRoutes = Object.keys(props.jewelers.vendors).map(ven => {
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

const mapStateToProps = state => {
    return {
        jewelers: state.vendors,
    }
};

export default connect(mapStateToProps)(Vendors);