function Skills() {
  return (
    <div>
      <h1
        style={{
          textAlign: "center",
          fontSize: "30px",
          marginBottom: "30px",
          marginTop: "30px",
        }}
      >
        My Skills
      </h1>
      <div
        style={{ display: "flex", justifyContent: "center", padding: "30px" }}
      >
        <div><img
          src="Images/HTML5.png"
          width="100px"
          height="100px"
          alt="html5"
          style={{ marginLeft: "30px" }}
        ></img>
        <p style={{ marginLeft:"40px", marginRight:"20px", marginTop:"10px"}}>HTML5</p>
        </div>
        <div>
        <img
          src="Images/CSS.png"
          width="100px"
          height="100px"
          alt="css"
          style={{ marginLeft: "30px" }}
        ></img>
        <p style={{ marginLeft:"50px", marginRight:"20px", marginTop:"10px"}}>CSS</p>
        </div>
        <div>
        <img
          src="Images/JS.png"
          width="100px"
          height="100px"
          alt="js"
          style={{ marginLeft: "30px" }}
        ></img>
        <p style={{ marginLeft:"50px", marginRight:"20px", marginTop:"10px"}}>JavaScript</p>
        </div>
        <div>
        <img
          src="Images/Reactjs.png"
          width="100px"
          height="100px"
          alt="reactjs"
          style={{ marginLeft: "30px" }}
        ></img>
        <p style={{ marginLeft:"50px", marginRight:"20px", marginTop:"10px"}}>React JS</p>
        </div>
        <div>
        <img
          src="Images/bootstrap.png"
          width="100px"
          height="100px"
          alt="Bootstrap"
          style={{ marginLeft: "30px" }}
        ></img>
        <p style={{ marginLeft:"50px", marginRight:"20px", marginTop:"10px"}}>Bootstrap</p>
        </div>
      </div>
    </div>
  );
}
export default Skills;
