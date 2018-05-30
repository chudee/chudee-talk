import React, { Component } from "react";

const WithTab = (Icon, url = null) => WrappedComponent => {
  return class extends Component {
    render() {
      return <WrappedComponent url={url} icon={Icon} />;
    }
  };
};

export default WithTab;
