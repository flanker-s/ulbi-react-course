import "./styles/index.scss";
import "./styles/reset.scss";
import { useTheme } from "@/app/providers/ThemeProvider";
import { classNames } from "@/shared/helpers/classNames/classNames";
import { AppRouter } from "@/app/providers/AppRouter";
import { Navbar } from "@/widgets/Navbar";

const App = () => {

    const { theme, toggleTheme } = useTheme();

    return (
        <div className={classNames('app', {}, [theme])}>
            <button onClick={toggleTheme}>Toggle Theme</button><br />
            <Navbar />
            <AppRouter />
        </div>
    );
}

export default App;