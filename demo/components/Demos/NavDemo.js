import React from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { Tab, Tabs } from "react-tabs-scrollable";
import Title from "../Title";
import Gist from "react-gist";
const NavDemo = ({ title }) => {
  const [activeTab, setActiveTab] = React.useState(1);
  const router = useRouter();

  // get the id of the page and turn it into integer
  const pageId = +router.asPath.split("/")[2];
  React.useEffect(() => {
    // if it equals 0 set the active tab to 0
    if (pageId === 0) {
      setActiveTab(0);
      return;
    }
    // set the active tab state to the page id that we selected
    setActiveTab(pageId || 1);
  }, [pageId]);
  // define a onClick function to bind the value on tab click
  const onTabClick = (e, index) => {
    setActiveTab(index);
  };

  return (
    <>
      <Title className="display-6" title={title} />
      <p>
        in this example you can navigate between pages in your app and you can
        presist the page you just logged into.
        <br />
        if you clicked on any tab and then you refeched the page you will see
        the tab id will match the id of the page{" "}
      </p>

      <span className="badge bg-primary fs-5">route id : {pageId}</span>
      <div className="p-2 shadow-sm">
        <Tabs activeTab={activeTab} onTabClick={onTabClick}>
          {/* generating an array to loop through it  */}
          {[...Array(20).keys()].map((item) => (
            <Tab
              className="rounded"
              key={item}
              // change the router into the selected tab id
              onClick={() =>
                router.push(`/demos/${item}`, undefined, { scroll: false })
              }
            >
              Page {item}
            </Tab>
          ))}
        </Tabs>
      </div>
      <Gist id="d3736a3efadb3b7e0b834b355983a3d6" />
    </>
  );
};

export default NavDemo;
