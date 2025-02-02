import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.tsx";
import Portfolio from "./pages/Portfolio.tsx";
import Navbar from "./components/Navbar.tsx";
import LoginPage from "./pages/LoginPage.tsx";
import { AuthProvider } from "./contexts/AuthContext.tsx";
import Layout from "./components/Layout.tsx";
import { ProtectedRoute } from "./components/ProtectedRoute.tsx";
import ExampleUser from "./pages/ExampleUser.tsx";

function App() {
    return (
        <AuthProvider>
            <BrowserRouter>
                <Layout>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/login" element={<LoginPage />} />
                        <Route
                            path="/portfolio"
                            element={
                                <ProtectedRoute>
                                    <Portfolio />
                                </ProtectedRoute>
                            }
                        />
                        <Route
                            path="/example"
                            element={
                                <ProtectedRoute>
                                    <ExampleUser />
                                </ProtectedRoute>
                            }
                        />
                    </Routes>
                </Layout>
            </BrowserRouter>
        </AuthProvider>
    );
}

export default App;
