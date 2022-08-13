import './App.css';
import Filter from "./components/Filter";
import Form from "./components/Form";
import Listing from "./components/Listing";

function App() {
  return (
    <div className="App">
        <div className={`main-wrapper`}>
            <Filter/>
            <Form/>
            <Listing/>
        </div>
    </div>
  );
}

export default App;
