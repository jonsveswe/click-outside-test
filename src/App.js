import './App.css';
import useClickOutside from "./useClickOutside.js";
import { useRef, useCallback} from "react";

function App() {
  const buttonRef = useRef();
  const onClickOutside = useCallback(() => {
      console.log('Clicked outside button')
    },[]
  )
  useClickOutside(buttonRef, onClickOutside);

  return (
    <div className="App">      
      <header className="App-header">
        <button ref={buttonRef}>Klicka utanför mig</button>
      </header>
    </div>
  );
}

export default App;
