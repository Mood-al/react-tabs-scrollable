import React from "react";
interface TabScreenProps {
    children: React.ReactNode;
    activeTab: number;
    index: number;
    className?: string;
    as?: string;
    style?: object;
}
declare const TabScreen: React.FC<TabScreenProps>;
export default TabScreen;
