import { BrowserRouter, Routes, Route } from "react-router-dom";

// Import your page components
import Home from "./pages/home";
import NotFound from "./pages/not-found";

function App() {
  return (
    // THE ONLY CHANGE YOU NEED IS ADDING 'basename' TO THIS COMPONENT
    <BrowserRouter basename="/AIExpertPortfolio">
      <Routes>
        {/* Route for the home page */}
        <Route path="/" element={<Home />} />

        {/* Catch-all route for your 404 Not Found page */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;