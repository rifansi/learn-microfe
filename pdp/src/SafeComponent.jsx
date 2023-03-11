import React from "react";

class SafeComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      error: null,
      errorInfo: null,
    };
  }

  componentDidCatch(error, errorInfo) {
    this.setState({
      error: error,
      errorInfo: errorInfo,
    });
  }

  render() {
    if (this.state.error) {
      return (
        <div>
          <h1>Something went wrong.</h1>
          <p>{this.state.error.toString()}</p>
          <p>{this.state.errorInfo.componentStack}</p>
        </div>
      );
    }
    return this.props.children;
  }
}

export default SafeComponent;
