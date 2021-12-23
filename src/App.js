import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Nav from "./Nav";
import NoPage from "./dogs/NoPage"
import DogInfo from './DogInfo'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Nav />}>
          <Route path="*" element={<NoPage />} />
        </Route>
        <Route path="/dogs/:name" element={ <DogInfo /> }></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
