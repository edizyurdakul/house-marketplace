import { BrowserRouter, Routes, Route, useLocation } from "react-router-dom";
import {
  Home,
  Listings,
  About,
  Careers,
  ForgotPass,
  Profile,
  SignIn,
  SignUp,
} from "./pages";
import { AnimatePresence } from "framer-motion";
import Header from "./components/Header";

function App() {
  const location = useLocation();
  return (
    <>
      <Header />
      <AnimatePresence exitBeforeEnter>
        <Routes location={location} key={location.pathname}>
          <Route path="/" element={<Home />} />
          <Route path="/listings" element={<Listings />} />
          <Route path="/about" element={<About />} />
          <Route path="/careers" element={<Careers />} />
          <Route path="/profile" element={<SignIn />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot" element={<ForgotPass />} />
        </Routes>
      </AnimatePresence>
    </>
  );
}

export default App;
