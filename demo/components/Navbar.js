import Link from "next/link";
import { useRouter } from "next/dist/client/router";
import { FaNpm } from "react-icons/fa";
const Navbar = () => {
  const { route } = useRouter();

  return (
    <div className="nav bg-primary">
      <div className="container">
        <nav className="nav text-white d-flex align-items-center justify-content-between">
          {route === "/" ? (
            <a
              className="fs-2"
              target="_blank"
              href="https://www.npmjs.com/package/react-tabs-scrollable"
              rel="noopener noreferrer"
            >
              react-tabs-scrollable V2
            </a>
          ) : (
            <Link href="/" className="fs-2">
              react-tabs-scrollable
            </Link>
          )}
          <div>
            <Link href="/demos">Demos & examples</Link>
            <a
              className="ms-5"
              target="_blank"
              href="https://www.npmjs.com/package/react-tabs-scrollable"
              rel="noopener noreferrer"
            >
              <FaNpm size={"4rem"} />
            </a>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Navbar;
