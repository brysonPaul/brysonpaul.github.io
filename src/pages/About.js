import "../App.css"
import googleSelfie from  "../images/IMG-4372.jpg"

function About() {
  return (
    <div className="Page">
  <header className="header">
    <h1>About Me</h1>
  </header>

  <section className="atext">
    <p>Im Bryson!</p>

    <div style={{ display: "flex", flexDirection: "row", alignItems: "center" }}>
        <img className="photo" alt="Me taking a photo at Google during the end of my second internship" src={googleSelfie}></img>
        <div style={{ marginLeft: "20px" }}>
          <p className='atext'>
            I've been programming since I was in freshman year of high school, and since then I have been captivated.
            Like many, the notion of programming video games was my first inlet to the craft, but I was soon captivated by the freedom and euphoria that programming gave me.
          </p>
      </div>
  </div>


    {/* <p className='atext'>
      Ever since, I have been honing my craft to get to the point I am today. But this thirst for knowledge will always be a lifetime goal for me.
    </p> */}
    {/* <p className="atext">As for Hobbies</p> */}
  </section>
</div>

  );
}



export default About;
