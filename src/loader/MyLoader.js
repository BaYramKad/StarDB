import React from 'react';
import ContentLoader from 'react-content-loader';

import './loader-style.css';
export const MyLoader = (props) => {
  return (
    <div className="loader">
      <ContentLoader
        speed={2}
        width={712}
        height={415}
        viewBox="0 0 712 415"
        backgroundColor="#212121"
        foregroundColor="#4a4a4a"
        {...props}>
        <rect x="-26" y="21" rx="0" ry="0" width="424" height="372" />
        <rect x="416" y="21" rx="0" ry="0" width="332" height="42" />
        <rect x="436" y="81" rx="0" ry="0" width="241" height="20" />
        <rect x="436" y="110" rx="0" ry="0" width="241" height="20" />
        <rect x="436" y="139" rx="0" ry="0" width="241" height="20" />
      </ContentLoader>
    </div>
  );
};
