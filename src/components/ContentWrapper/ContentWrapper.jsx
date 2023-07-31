import React from "react";

import "./ContentWrapper.css";

//HOC ------Higher Order Component

const ContentWrapper = ({ children }) => {
    return <div className="contentWrapper">{children}</div>;
};

export default ContentWrapper;