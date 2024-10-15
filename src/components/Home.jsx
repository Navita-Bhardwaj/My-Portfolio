function Home() {
  return (
    <div
      className="homeContent"
      style={{ display: "flex", justifyContent: "center" }}
    >
      <div style={{ display: "block", textAlign: "left", paddingTop: "100px" }}>
        <span style={{ marginTop: "20" }}>
          <h1>Hi</h1>
          <h2>I am Navita Bhardwaj</h2>
          <h2>Web Developer</h2>
          <div className="btn">
            <a
              href="./pdf/navitaresume.pdf"
              download
              style={{ textDecoration: "none", color: "white" }}
            >
              <button>Hire Me</button>
            </a>
          </div>
        </span>
      </div>
      <div>
        <img
          src="Images/Pfimg.png"
          width="250"
          height="340"
          alt="Profile Image"
          style={{
            padding: "10px",
            display: "block",
          }}
        />
      </div>
    </div>
  );
}
export default Home;
