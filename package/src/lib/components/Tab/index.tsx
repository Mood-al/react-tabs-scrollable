import React from "react";
interface TabProps {
  children: React.ReactNode;
  className?: string;
  style?: object;
  selected?: boolean;
  props?: React.ReactNode;
  tabAs?: keyof JSX.IntrinsicElements & React.HTMLAttributes<HTMLOrSVGElement>;
}
const Tab = React.forwardRef(
  (
    { className = "", selected, style, tabAs = "button", ...props }: TabProps,
    ref
  ) => {
    const Tag = tabAs as React.ElementType;

    const buttonSpecialProps = {
      type: "button",
    };
    const tabClassNames = `${className} ${
      selected ? "rts___tab___selected" : ""
    }`.trim();
    return (
      <Tag
        {...props}
        className={tabClassNames}
        ref={ref as React.RefObject<HTMLDivElement>}
        style={{ ...(style ? style : {}) }}
        {...(tabAs === "button" ? buttonSpecialProps : {})}
      >
        {props.children}
      </Tag>
    );
  }
);
export default Tab;
