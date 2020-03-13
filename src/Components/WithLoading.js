import React from "react";
import './WithLoading.css'
function WithLoading(Component) {
  return function WihLoadingComponent({ isLoading, ...props }) {
    if (!isLoading) return <Component {...props} />;
    return <div className="Loading"><img src="https://thumbs.gfycat.com/UniformDiscreteKissingbug-size_restricted.gif"/></div>;
  };
}
export default WithLoading;
