import "./styles/index.scss";
import "./styles/reset.scss";
import { Route, Routes } from "react-router-dom";
import { Link } from "react-router-dom";
import { Suspense } from "react";
import { useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/classNames/classNames";
import { MainPage } from "@/pages/MainPage";
import { AboutPage } from "@/pages/AboutPage";

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button><br />
            <Link to={'/'}>Главная</Link><br />
            <Link to={'/about'}>О сайте</Link>
            <Suspense fallback={<div>Loading...</div>}>
                <Routes>
                    <Route path="/about" element={<AboutPage />} />
                    <Route path="/" element={<MainPage />} />
                </Routes>
            </Suspense>
        </div>
    );
}

export default App;