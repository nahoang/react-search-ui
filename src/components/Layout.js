import React from "react";

import LayoutSidebar from "./LayoutSidebar";

const Layout = (props) => {
  const { children, bodyContent, sideContent } = props;
  return (
    <div className="layout">
      <div className="layout-header">
        Header
      </div>
      <div className="layout-body">
        <div className="layout-body__inner">
          
          <div className="layout-main">
            <div className="layout-main-header">
              <div className="layout-main-header__inner">Search Box</div>
            </div>
            <div className="layout-main-body">
              {children}
            </div>
            <div>
            {bodyContent}
            </div>
            <div className="layout-main-footer">
              Footer
            </div>
          </div>
        </div>
       
      </div>
    </div>
  )
}

export default Layout;