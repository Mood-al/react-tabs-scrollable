import { default as React } from 'react';
type NavBtnProps = {
    hideNavBtnsOnMobile?: boolean;
    navBtnDisplay?: object | any;
    disabled: boolean;
    onClick?: () => void;
    children: React.ReactNode;
    navBtnStyle?: object;
    className?: string;
    navBtnContainerClassName?: string;
    navBtnAs?: keyof JSX.IntrinsicElements & React.HTMLAttributes<HTMLOrSVGElement>;
};
declare const NavBtn: React.ForwardRefExoticComponent<NavBtnProps & React.RefAttributes<unknown>>;
export default NavBtn;
