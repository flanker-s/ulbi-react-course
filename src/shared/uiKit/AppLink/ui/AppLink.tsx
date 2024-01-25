import { classNames } from '@/shared/helpers/classNames/classNames';
import css from './AppLink.module.scss';
import { Link, LinkProps } from 'react-router-dom';
import { FC } from 'react';

export enum AppLinkTheme {
    PRIMARY = 'primary',
    SECONDARY = 'secondary',
}

interface AppLinkProps extends LinkProps {
    className?: string;
    theme?: AppLinkTheme;
}

export const AppLink: FC<AppLinkProps> = (props) => {

    const {
        children,
        to,
        className,
        theme = AppLinkTheme.PRIMARY,
        ...otherProps
    } = props;

    return (
        <Link to={to}
            className={classNames(css.appLink, {}, [className, css[theme]])}
            {...otherProps}
        >
            {children}
        </Link>
    );
}