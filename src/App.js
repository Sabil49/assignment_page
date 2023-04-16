import "./App.css";
import Header from "./components/Header/Header";
import NavBar from "./components/NavBar/NavBar";
import { BrowserRouter } from "react-router-dom";
import Layout from "./components/Layouts/Layout";

function App() {
    return (
        <BrowserRouter>
            <Header />
            <NavBar />
            <Layout />
        </BrowserRouter>
    );
}

export default App;
