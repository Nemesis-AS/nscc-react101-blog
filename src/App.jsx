import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Articles from "./pages/Articles";

import { BrowserRouter, Routes, Route } from "react-router-dom";


function App() {
    return (
        <>
            <BrowserRouter>
                <Header />
                <main className="pt-16">
                    <Routes>
                        <Route path="/" Component={ Articles } />
                        <Route path="/blog/:slug" Component={ Blog } />
                    </Routes>
                </main>
                <Footer />
            </BrowserRouter>
        </>
    );
}

export default App;
