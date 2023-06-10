import React from "react";
import { Helmet } from "react-helmet-async";

const PageName = ({ pageName }) => {
  return (
    <Helmet>
      <title>Fight For Fitness | {pageName}</title>
    </Helmet>
  );
};

export default PageName;
