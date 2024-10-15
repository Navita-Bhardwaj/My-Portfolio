function About() {
  return (
    <>
      <div
        className="about-content"
        style={{ display: "flex", justifyItems: "center" }}
      >
        <img src="Images/proimg.png" width="250" height="300" alt=""
        style={{marginLeft:"45px", marginRight:"30px"}}></img>
        <div>
          <h2 style={{fontWeight:"30px", fontSize:"40px", marginLeft:"60px"}}>About me</h2>
          <p style={{ fontSize: "20px", marginLeft:"60px", marginRight:"30px"}}>
            I am a passionate and dedicated Frontend Developer with a Master of
            Science in Computer Science. As a recent graduate, I have developed
            a solid foundation in web development, focusing on creating
            responsive, user-friendly interfaces. My journey in tech has fueled
            my love for problem-solving and innovative design, and I am eager to
            apply my knowledge and skills to real-world projects. I am
            continuously learning and excited to contribute to dynamic teams and
            projects.
          </p>
        </div>
      </div>
    </>
  );
}
export default About;
