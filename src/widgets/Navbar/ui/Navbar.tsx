import { classNames } from "@/shared/helpers/classNames/classNames";
import css from './Navbar.module.scss';
import { AppLink } from "@/shared/uiKit/AppLink";
import { AppLinkTheme } from "@/shared/uiKit/AppLink/ui/AppLink";

interface NavbarProps {
    className?: string;
}

export const Navbar = ({ className }: NavbarProps) => {
    return (
        <div className={classNames(css.navbar)}>
            <nav className={css.links}>
                <AppLink className={css.mainLink} theme={AppLinkTheme.SECONDARY} to={'/'}>
                    Главная
                </AppLink>
                <AppLink to={'/about'} theme={AppLinkTheme.SECONDARY}>
                    О сайте
                </AppLink>
            </nav>
        </div>
    );
}