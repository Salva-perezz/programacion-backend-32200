import { BrowserRouter, Route, Routes } from "react-router-dom";
import FormNoticia from "./components/FormNew";
import Noticias from "./components/New";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/form" element={<FormNoticia />} />
          <Route path="/" element={<Noticias />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
