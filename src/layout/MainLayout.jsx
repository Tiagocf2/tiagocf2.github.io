import React from 'react';
import PropTypes from 'prop-types';
import AppNavbar from './AppNavbar';

const MainLayout = ({ children, contentTag: ContentWrapper, ...rest }) => {
  return (
    <div className="layout main-layout">
      <header className="header">
        <AppNavbar />
      </header>
      <ContentWrapper className="page">
        {children?.content && <children.content {...rest} />}
      </ContentWrapper>
      {children?.footer && <children.footer />}
    </div>
  );
};

MainLayout.propTypes = {
  contentTag: PropTypes.oneOfType([PropTypes.string, PropTypes.elementType]),
};
MainLayout.defaultProps = {
  contentTag: 'main',
};

export default MainLayout;
