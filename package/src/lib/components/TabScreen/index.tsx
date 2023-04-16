import React from "react";

interface TabScreenProps {
  children: React.ReactNode;
  activeTab: number;
  index: number;
  className?: string;
  as?: string;
  style?: object;
}

const TabScreen: React.FC<TabScreenProps> = ({
  activeTab,
  index,
  children,
  className = "",
  as = "div",
  style,
}) => {
  return (
    <>
      {activeTab == index &&
        React.createElement(
          as,
          {
            className,
            style,
          },
          children
        )}
    </>
  );
};

export default TabScreen;
