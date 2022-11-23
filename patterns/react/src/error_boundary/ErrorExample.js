import React from 'react';
import BuggyComponent from './BuggyComponent';
import ErrorBoundary from './ErrorBoundary';

const ErrorExample = () => {
  return (
    <div>
      <p>Not caught</p>
      <BuggyComponent />
      <p>Caught by ErrorBoundary</p>
      <ErrorBoundary>
        <BuggyComponent />
      </ErrorBoundary>
    </div>
  );
};

export default ErrorExample;
