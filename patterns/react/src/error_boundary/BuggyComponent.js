import React, { useState, useEffect } from 'react';

const BuggyComponent = () => {
  const [count, setCount] = useState(0);

  function handleClick() {
    throw new Error('I crashed in the click event! I will not be caught by the ErrorBoundary!');
  }

  if (count === 5) {
    throw new Error('I crashed!');
  }

  return (
    <>
      <button onClick={handleClick}>Click to crash in event handler, will not be caught</button>
      <button
        onClick={() => {
          setCount((prevState) => prevState + 1);
        }}
      >
        counter : {count}
      </button>
    </>
  );
};

export default BuggyComponent;
