import { default as React } from 'react';
interface TabProps {
    children: React.ReactNode;
    className?: string;
    style?: object;
    selected?: boolean;
    props?: React.ReactNode;
    tabAs?: keyof JSX.IntrinsicElements & React.HTMLAttributes<HTMLOrSVGElement>;
}
declare const Tab: React.ForwardRefExoticComponent<TabProps & React.RefAttributes<unknown>>;
export default Tab;
