import React from "react";

const Layout = (props) => {
  const { children, bodyContent, sideContent } = props;
  return (
    <div className="layout">
      <div className="layout-header">
        <p>Technology News Search</p>
      </div>
      <div className="layout-body">
          <div className="layout-main">
            <div className="layout-main-header">
              {children}
            </div>
            <div className="layout-main-body">
             {bodyContent}
            </div>
          </div>
      </div>
      <div className="layout-footer">
          Hacker News Client.
        </div>
    </div>
  )
}

export default Layout;