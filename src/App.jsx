import "./App.css";
import MyButton from "./components/MyButton";
import MyClassButton from "./components/MyClassButton";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <MyButton />
        <MyClassButton />
      </header>
    </div>
  );
}

export default App;
