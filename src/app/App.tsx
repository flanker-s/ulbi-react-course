import "./styles/index.scss";
import "./styles/reset.scss";
import { Link, Route, Routes } from "react-router-dom";
import { useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/classNames/classNames";
import { AppRouter } from "@/app/providers/AppRouter";

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button><br />
            <Link to={'/'}>Главная</Link><br />
            <Link to={'/about'}>О сайте</Link>
            <AppRouter />
        </div>
    );
}

export default App;