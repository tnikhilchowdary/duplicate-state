import { useState } from "react";

function App() {
  const [count, setCount] = useState(0);

  function Add(){
    setCount(count+1)
  }

  function sub(){
    setCount(count - 1)
  }
  
  function Reset(){
    setCount(0);
  }

  return (
    <div className="App">
      <>
      <h1>Counter</h1>
      <>
      <button onClick={Add}>{count}</button>
      <button onClick={Add}>{count}</button>
      </>
     
    </>
    </div>
    
  );
}

export default App;
