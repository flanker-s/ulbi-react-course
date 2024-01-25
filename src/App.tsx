import "./styles/index.scss";
import "./styles/reset.scss";
import { Route, Routes } from "react-router-dom";
import { MainPageAsync } from "./pages/MainPage/MainPage.async";
import { AboutPageAsync } from "./pages/AboutPage/AboutPage.async";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "./theme/useTheme";

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={`app ${theme}`}>
            <button onClick={toggleTheme}>Toggle Theme</button><br />
            <Link to={'/'}>Главная</Link><br />
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPageAsync />} />
                    <Route path="/" element={<MainPageAsync />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;