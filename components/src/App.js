import Input from "./components/Input";
import "./App.css";
import Select from "./components/Select";

function App() {
   return (
      <div className="App">
         <h1>Input</h1>
         <Input />
         <Input error={true} />
         <Select />
      </div>
   );
}

export default App;
