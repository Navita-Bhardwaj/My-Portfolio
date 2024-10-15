import { Link } from 'react-scroll';

function PortfolioHeader ({ selectedTab, setSelectedTab }) {

  return <div className="container">
    <div>
      <header className="d-flex flex-wrap justify-content-center py-3 mb-4 border-bottom">
        <a href="/" className="d-flex align-items-center mb-3 mb-md-0 me-md-auto link-body-emphasis text-decoration-none">
          <svg className="bi me-2" width="40" height="32"><use xlinkHref="#bootstrap"></use></svg>
          <span className="fs-4">Navita Bhardwaj</span>
        </a>

        <ul className="nav nav-pills">
          <li className="nav-item">
            <a href="#"
               className={`nav-link ${selectedTab === "home" ? "active" : ""}`}
               onClick={() => setSelectedTab("home")}
               aria-current="page">
              Home
            </a>
          </li>
          <li className="nav-item">
            <a href="#"
               className={`nav-link ${selectedTab === "about" ? "active" : ""}`}
               onClick={() => setSelectedTab("about")}>
              About Us
            </a>
          </li>
          <li className="nav-item">
            <a href="#"
               className={`nav-link ${selectedTab === "projects" ? "active" : ""}`}
               onClick={() => setSelectedTab("projects")}>
              Projects
            </a>
          </li>
          <li className="nav-item">
            <a href="#"
               className={`nav-link ${selectedTab === "skills" ? "active" : ""}`}
               onClick={() => setSelectedTab("skills")}>
              Skills
            </a>
          </li>
          <li className="nav-item">
            <a href="#"
               className={`nav-link ${selectedTab === "contact" ? "active" : ""}`}
               onClick={() => setSelectedTab("contact")}>
              Contact Us
            </a>
          </li>
        </ul>
      </header>
    </div>
    </div>
}

export default PortfolioHeader ;