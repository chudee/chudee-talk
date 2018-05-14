import React, { Component } from "react";

const WithTab = (url, Icon) => WrappedComponent => {
  return class extends Component {
    render() {
      return <WrappedComponent url={url} icon={Icon} />;
    }
  };
};

export default WithTab;
