import "./App.css";
import Hero from "./components/hero/Hero";
import Nav from "./components/nav/Nav";
import { Route } from "react-router-dom";
import Register from "./Pages/Register";
import MultiForm from "./components/MultiForm";

function App() {
  return (
    <div className="App">
      <Route path="/" exact component={Hero} />
      <Route path="/register" exact component={Register} />
      <Route path="/e-registration" exact component={MultiForm} />
    </div>
  );
}

export default App;
