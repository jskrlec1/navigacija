import "./App.css";
import { Routes, Route, NavLink } from "react-router-dom";
import Dogs from "./Components/Dogs";
import Home from "./Components/Home";
import Pets from "./Components/Pets";
import Cats from "./Components/Cats";

function App() {
  return (
    <div className="App">
      <h1>Multipage aplikacija</h1>

      <nav>
        <ul>
          <li>
            <NavLink to="/">Home</NavLink>
          </li>
          <br />
          <li>
            <NavLink to="/pets">Pets</NavLink>
          </li>
          <br />
          <li>
            <NavLink to="/dogs">Dogs</NavLink>
          </li>
          <br />
          <li>
            <NavLink to="/cats">Cats</NavLink>
          </li>
        </ul>
      </nav>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/dogs" element={<Dogs />} />
        <Route path="/pets" element={<Pets />} />
        <Route path="/cats" element={<Cats />} />
      </Routes>
    </div>
  );
}

export default App;
