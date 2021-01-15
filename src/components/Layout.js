import React from 'react';

import LayoutSidebar from './LayoutSidebar';

const Layout = (props) => {
  const { children, sideContent } = props;
  return (
    <div className="layout">
      <div className="layout-header">

      </div>
      <div className="layout-body">
        <div className="layout-body__inner">
          <LayoutSidebar className="layout-sidebar">
            {sideContent}
          </LayoutSidebar>
        {children}
        </div>
       
      </div>
    </div>
  )
}

export default Layout;