import { Link, redirect } from "react-router-dom";

export const Nav = () => {
  return (
    //
    <nav
      className="navbar navbar-expand-lg fw-bolder bg-primary"
      // style={{ background: "#8F7FE8" }}
    >
      <div className="container-fluid">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <Link
              className="nav-link"
              // aria-current="page"
              to={"/proyecto/"}
            >
              Home
            </Link>
            <Link
              className="nav-link"
              aria-current="page"
              to={"/proyecto/info"}
            >
              Nosotros
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};
