/* eslint-disable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/

import React from "react";
import PropTypes from "prop-types";
import { Helmet } from "react-helmet";


const TemplateWrapper = ({ children }) => {
  return (
    <div>
      <Helmet>
        <link
          rel="stylesheet"
          type="text/css"
          href="/stylelib/2_9/css/init.css"
        />
        <script src="/stylelib/2_9/js/loader.js"></script>
      </Helmet>
      
      


      <huk-header-cms can-sticky="true" badge-label-is-new="Neu" burger-menu-label="Menü" navigation-json-url="/stylelib/2_9/json/api_navigation.json">
        <huk-search-block slot="search-block" api-search-url="/anonymizer/api/discovery" input-placeholder="Frage eingeben ..." button-label="Suchen" button-cancel-label="Abbrechen"></huk-search-block>
      </huk-header-cms>
      {children}

    </div>
  );
};

TemplateWrapper.propTypes = {
  children: PropTypes.object,
};

export default TemplateWrapper;
/* eslint-enable jsx-a11y/anchor-has-content, jsx-a11y/anchor-is-valid*/
