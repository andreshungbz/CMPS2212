import { useState } from 'react';

function Counter() {
  console.log('Render Counter Component');

  const [counter, setCounter] = useState(0);

  const handleCounter = () => {
    setCounter(counter + 1);
    console.log(`Counter: ${counter}`);
  };

  return (
    <>
      <h1>Counter: {counter}</h1>
      <button onClick={handleCounter}>Increment</button>
    </>
  );
}

export default Counter;
