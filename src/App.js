import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Home, Listings, ForgotPass, Profile, SignIn, SignUp } from "./pages";

function App() {
  return (
    <>
      <Routes>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/profile" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPass />} />
        </Routes>
      </Routes>
    </>
  );
}

export default App;
