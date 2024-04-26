import Header from "./components/Header";
import Footer from "./components/Footer";
import Blog from "./pages/Blog";
import Articles from "./pages/Articles";


function App() {
    return (
        <>
            <Header />
            <main className="pt-16">
                {/* <Blog /> */}
                <Articles />
            </main>
            <Footer />
        </>
    );
}

export default App;
