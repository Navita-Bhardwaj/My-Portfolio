const Projects = () => {
  return (
    <div className="shadow-sm p-3 mb-5 bg-body-tertiary rounded">
      <h2
        style={{
          fontWeight: "30px",
          fontSize: "40px",
          marginLeft: "500px",
          marginTop: "20px",
        }}
      >
        Projects
      </h2>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginTop: "50px"
        }}
      >
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: "18rem", marginLeft: "40px", }}>
          <img src="./Images/otp.png" className="card-img-top card-imgs" alt="otp" />
          <div className="card-body">
            <h5 className="card-title">Otp-Verify Project </h5>
            <p className="card-text">
            This OTP Verification System ensures robust security by preventing unauthorized access and reducing the risks associated with simple password-based authentication
            </p>
            <a href="#" className="btn btn-primary">
              verify
            </a>
          </div>
        </div>
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: "18rem", marginLeft: "40px", }}>
          <img src="./Images/portfolio.png" className="card-img-top card-imgs" alt="portfolio" />
          <div className="card-body">
            <h5 className="card-title">Portfolio</h5>
            <p className="card-text">
            This Portfolio Website is not just a collection of my work but also a representation of my design and development skills. It is built with modern web development technologies.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
        <div className="card shadow p-3 mb-5 bg-body-tertiary rounded" style={{ width: "18rem", marginLeft: "40px", }}>
          <img src="./Images/cal.png" className="card-img-top card-imgs" alt="cal" />
          <div className="card-body">
            <h5 className="card-title">Calculator</h5>
            <p className="card-text">
            This Simple Calculator Application is a practical project demonstrating essential programming concepts such as event handling, conditional logic, and real-time UI updates.
            </p>
            <a href="#" className="btn btn-primary">
              Go somewhere
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;