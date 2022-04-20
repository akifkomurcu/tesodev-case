import { Routes, Route, Link } from "react-router-dom";
import Home from "./components/Home/Index";
import Search from "./components/Search/Index";
import SignUp from "./components/SignUp/Index";
function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} exact/>
        <Route path="search" element={<Search />} />
        <Route path="signup" element={<SignUp />} />
      </Routes>
   
    </>
  );
}

export default App;
