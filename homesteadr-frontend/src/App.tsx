import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.tsx";
import Portfolio from "./Portfolio.tsx";
import Navbar from "./components/ui/Navbar.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import ExampleUser from "./pages/ExampleUser.tsx";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Navbar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/login" element={<LoginPage />} />
                    <Route path="/portfolio" element={<Portfolio />} />
                    <Route path="/example" element={<ExampleUser />} />
                </Routes>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
