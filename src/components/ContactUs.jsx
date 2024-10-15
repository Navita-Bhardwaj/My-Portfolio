function ContactUs() {
    return (
      <>
        <div>
          <h1
            style={{
              textAlign: "center",
              fontSize: "30px",
              marginBottom: "30px",
              marginTop: "30px",
            }}
          >
            Contact Us
          </h1>
          <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
             <div>
            <form style={{ marginBottom: "30px", width: "100%", maxWidth: "400px", marginLeft:"120px" }}>
              <div style={{ marginBottom: "10px" }}>
                <label htmlFor="name">Name:</label>
                <input type="text" id="name" name="name" required style={{ width: "100%", padding: "6px", marginTop: "5px" }} />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label htmlFor="email">Email:</label>
                <input type="email" id="email" name="email" required style={{ width: "100%", padding: "6px", marginTop: "5px" }} />
              </div>
              <div style={{ marginBottom: "10px" }}>
                <label htmlFor="message">Message:</label>
                <textarea
                  id="message"
                  name="message"
                  rows="4"
                  cols="50"
                  placeholder="Enter your message here"
                  required
                  style={{ width: "100%", padding: "6px", marginTop: "5px" }}
                />
              </div>
              <div>
                <button type="submit" style={{ width: "100%", padding: "10px", backgroundColor: "#007BFF", color: "white", border: "none", borderRadius: "10px" }}>
                  Submit
                </button>
              </div>
            </form>
            </div>
            <div style={{ textAlign: "left",marginLeft:"200px", marginTop:"20px" }}>
              <p>
                <strong>Mobile:</strong> 
                <a href="tel:+911234567890" style={{ marginLeft: "5px", textDecoration: "none", color: "#007BFF" }}>
                  +91 12345 67890
                </a>
              </p>
              <p>
                <strong>Email:</strong> 
                <a href="mailto:your.navitabhardwaj555@gmail.com" style={{ marginLeft: "5px", textDecoration: "none", color: "#007BFF" }}>
                  your.email@example.com
                </a>
              </p>
              <p>
                <strong>LinkedIn:</strong> 
                <a
                  href="https://www.linkedin.com/Navita Bhardwaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "5px", textDecoration: "none", color: "#007BFF" }}
                >
                  linkedin.com/Navita Bhardwaj
                </a>
              </p>
              <p>
                <strong>GitHub:</strong> 
                <a
                  href="https://github.com/Navita-Bhardwaj"
                  target="_blank"
                  rel="noopener noreferrer"
                  style={{ marginLeft: "5px", textDecoration: "none", color: "#007BFF" }}
                >
                  github.com/Navita-Bhardwaj
                </a>
              </p>
          
            </div>
          </div>
        </div>
      </>
    );
  }
  
  export default ContactUs;
  