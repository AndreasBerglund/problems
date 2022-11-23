import React from 'react';

class ErrorBoundary extends React.Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }
  static getDerivedStateFromError(error) {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.log("component did catch: ", error);
    // It will catch error in any component below. We can also log the error to an error reporting service.
    // logErrorToMyService(error, info);
  }
  render() {
    if (this.state.hasError) return <div>Something bad happened</div>;
    return this.props.children;
  }
}

export default ErrorBoundary
