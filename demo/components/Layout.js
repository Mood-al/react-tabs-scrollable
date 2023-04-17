import Footer from "./Footer";
import FooterBanner from "./FooterBanner";
import Navbar from "./Navbar";

const Layout = ({ children }) => {
  return (
    <div>
      <Navbar />
      {children}
      {/* <div className="border mb-3" />
      <div className="container mb-3">
        <div className="border-top border-bottom border-2 border-danger fs-5 p-3 text-wrap">
          Please consider giving me a star on the{" "}
          <a
            className="text-warning"
            target="_blank"
            rel="noopener noreferrer"
            href="https://github.com/Mood-al/react-tabs-scrollable"
          >
            Github
          </a>
          's repo it will give me motiviation to do more packages like this!
        </div>
      </div> */}
      {/* <FooterBanner>
        <p className="lead display-5 text-center text-white">
          Have you checked my new package{" "}
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary"
            href="https://github.com/Mood-al/svelte-tabs-scrollable"
          >
            svelte-tabs-scrollable
          </a>
          ?
        </p>
      </FooterBanner> */}
      <Footer />
    </div>
  );
};

export default Layout;
