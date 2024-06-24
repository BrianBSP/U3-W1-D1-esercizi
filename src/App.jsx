import "./App.css";
import MyButton from "./components/MyButton";
import MyClassButton from "./components/MyClassButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton customButton = "My 1st Btn REACT"   />
        <MyButton customButton = "My 2nd Btn REACT" />
        <MyButton customButton = "My 3rd Btn REACT" />
        <MyClassButton />
      </header>
    </div>
  );
}

export default App;
