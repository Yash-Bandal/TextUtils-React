// import PropTypes from "prop-types";

// type rfc for the componant snippet

// export default function Navbar({ title = 'Yash Project', aboutText = 'About Yash' }) {
  export default function Navbar(props) {
    return (
      // <nav className={`navbar navbar-expand-lg navbar-${props.mode} bg-${props.mode}`}>
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: props.mode === 'dark' ? '#010409' : 'white', color: props.mode === 'dark' ? ' white' : 'black', transition: 'background-color 0.3s ease, color 0.3s ease' }} >
      {/* <nav className="navbar navbar-expand-lg navbar-dark bg-dark"> */}
        <div className="container-fluid">
          <a className="navbar-brand" href="/" style={{ color: props.mode === 'dark' ? '#f0f6fc' : '#212529', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
            {props.title}
            {/* {title} */}
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <a className="nav-link active" aria-current="page" href="/" style={{ color: props.mode === 'dark' ? '#f0f6fc' : '#212529', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
                  Home
                </a>
              </li>
              <li className="nav-item">
                <a className="nav-link" href="/about" style={{ color: props.mode === 'dark' ? '#f0f6fc' : '#212529', transition: 'background-color 0.3s ease, color 0.3s ease' }}>
                  {props.aboutText}
                  {/* {aboutText} */}
                </a>
              </li>
             
            </ul>
            
  
            <form className="d-flex">
              {/* <input
                className="form-control me-2"
                type="search"
                placeholder="Search"
                aria-label="Search"
              />
              <button className="btn btn-outline-success" type="submit">
                Search
              </button> */}
  
                {/* text-light/dark bootstrap.........setting inside text color */}
              {/* <div className={`form-check form-switch text-${props.mode === 'light' ? 'dark' : 'light' }`}> */}
              <div className="form-check form-switch " style={{ backgroundColor: props.mode === 'dark' ? '#010409' : 'white', color: props.mode === 'dark' ? ' white' : 'black', transition: 'background-color 0.3s ease, color 0.3s ease' }} >
                <input className="form-check-input" type="checkbox" onClick={props.toggleMode} role="switch" id="flexSwitchCheckDefault"/>
                  <label className="form-check-label mx-3" htmlFor="flexSwitchCheckDefault">Dark Mode</label>
              </div>
            </form>
          </div>
        </div>
      </nav>
    );
  }
  
  // react 18 depricieated , not working
  // Navbar.propTypes = {
  //   title: PropTypes.string, // not isRequired
  //   aboutText: PropTypes.string,
  // };
  
  // Navbar.defaultProps = {
  //   title: "Yash Project",
  //   aboutText: "About Yash",
  // };
  