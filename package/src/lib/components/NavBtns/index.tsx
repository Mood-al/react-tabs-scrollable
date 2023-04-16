import React from "react";

type NavBtnProps = {
  hideNavBtnsOnMobile?: boolean;
  navBtnDisplay?: object | any;
  disabled: boolean;
  onClick?: () => void;
  children: React.ReactNode;
  navBtnStyle?: object;
  className?: string;
  navBtnContainerClassName?: string;
  navBtnAs?: keyof JSX.IntrinsicElements &
    React.HTMLAttributes<HTMLOrSVGElement>;
};

const NavBtn = React.forwardRef(
  (
    {
      hideNavBtnsOnMobile,
      disabled,
      onClick = () => null,
      children,
      navBtnStyle,
      className = "",
      navBtnContainerClassName,
      navBtnAs = "button",
    }: NavBtnProps,
    ref
  ) => {
    const containerClassNames = `rts___nav___btn___container ${
      hideNavBtnsOnMobile ? "display___md___none" : ""
    } ${navBtnContainerClassName}`.trim();
    const Tag = navBtnAs as React.ElementType;

    const buttonSpecialProps = {
      disabled,
      type: "button",
    };

    return (
      <div className={containerClassNames}>
        <Tag
          {...(navBtnAs === "button" ? buttonSpecialProps : {})}
          className={`rts___btn rts___nav___btn ${className}`}
          onClick={onClick}
          style={navBtnStyle}
          dir="ltr"
          aria-hidden="true"
          ref={ref as React.Ref<HTMLButtonElement>}
        >
          {children}
        </Tag>
      </div>
    );
  }
);

export default NavBtn;
