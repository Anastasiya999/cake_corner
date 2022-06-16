import React from "react";
import ContentLoader from "react-content-loader";

const Skeleton = (props) => (
  <ContentLoader
    speed={2}
    width={280}
    height={460}
    viewBox="0 0 280 460"
    backgroundColor="#dedede"
    foregroundColor="#ffffff"
    {...props}
  >
    <rect x="8" y="17" rx="0" ry="0" width="236" height="281" />
    <rect x="253" y="30" rx="4" ry="4" width="18" height="264" />
    <rect x="8" y="311" rx="0" ry="0" width="260" height="73" />
    <rect x="19" y="411" rx="8" ry="8" width="100" height="34" />
    <rect x="159" y="401" rx="20" ry="20" width="90" height="51" />
  </ContentLoader>
);

export default Skeleton;
