import Counter from './Counter';

function App() {
  console.log('Render App Component');

  return (
    <>
      <h1>Counter Demo using useState</h1>
      <Counter />
      <Counter />
    </>
  );
}

export default App;
