import React from "react";
import MuiDemo from "../components/Demos/MuiDemo";
import NavDemo from "../components/Demos/NavDemo";
import ResturantMenuDemo from "../components/Demos/ResturantMenuDemo";
import SimpleDemo from "../components/Demos/SimpleDemo";
import { NextSeo } from "next-seo";
import RcTabsDemo from "../components/Demos/RcTabsDemo";
import WithTabScreens from "../components/Demos/WithTabScreens";
import WithCustomNavBtns from "../components/Demos/WithCustomNavBtns";
import CodeContainer from "../components/CodeContainer";
const DemosLayout = ({ children }) => {
  return (
    <div className="container">
      {" "}
      <NextSeo
        title="demos"
        description="React tabs scrollable demos and examples"
      />
      <div>
        <CodeContainer
          title="Simple Tabs"
          example={<SimpleDemo />}
          codesandboxURL="https://codesandbox.io/embed/react-tabs-scrollable-demo-s471xv?fontsize=14&hidenavigation=1&theme=dark"
        />

        <CodeContainer
          title="WithCustomNavBtns"
          example={<WithCustomNavBtns />}
          codesandboxURL={
            "https://codesandbox.io/embed/react-tabs-scrollable-with-custom-navigation-buttons-us0ck9?fontsize=14&hidenavigation=1&theme=dark"
          }
        />
        <CodeContainer
          title="With Tabs Screen"
          example={<WithTabScreens />}
          codesandboxURL={
            "https://codesandbox.io/embed/react-tabs-scrollable-example-with-tabs-screens-zu3v4t?fontsize=14&hidenavigation=1&theme=dark"
          }
        />

        <CodeContainer
          title="Mui Like Tabs"
          example={<MuiDemo />}
          codesandboxURL={
            "https://codesandbox.io/embed/mui-like-react-tabs-scrollable-example-e7jccy?fontsize=14&hidenavigation=1&theme=dark"
          }
        />

        <CodeContainer
          title="Route navigation tabs (Next Js)"
          example={<NavDemo />}
        />

        <CodeContainer
          title="Resturant Menu Demo"
          example={<ResturantMenuDemo />}
          codesandboxURL={
            "https://codesandbox.io/embed/react-tabs-scrollable-restaurant-menu-example-8l7q6v?fontsize=14&hidenavigation=1&theme=dark"
          }
        />

        <CodeContainer
          title="Rc-tabs Demo"
          example={<RcTabsDemo />}
          codesandboxURL={
            "https://codesandbox.io/embed/react-tabs-scrollable-rc-tabs-like-example-lrbt2j?fontsize=14&hidenavigation=1&theme=dark"
          }
        />
      </div>{" "}
      {children}
    </div>
  );
};

export default DemosLayout;
