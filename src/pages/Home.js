import "../App.css";
import Resume from "../images/Resume.pdf";

function Home() {
  return (
    <div className="Page" style={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>

      <header className="header">
        <h1>Bryson Paul</h1>
      </header>

      <div >
        <p className="text">
          Hey! I'm Bryson, an incoming SWE at Google. Welcome to my website!
        </p>
         
      </div>

      <div className="social" style={{ position: 'absolute', top: 0, right: 0 }}>
        <a className="icon-links" href="https://www.linkedin.com/in/bryson-paul/">
          <i className="fa fa-brands fa-linkedin" title="View my LinkedIn"></i>
        </a>
        <a className="icon-links" href={Resume} target="_blank" rel="noopener noreferrer" type="application/pdf">
          <i className="fa fa-fw fa-file" title="View my resume"></i>
        </a>
        <a className="icon-links" href="mailto:brysonpaul1870@gmail.com" target="_blank" rel="noopener noreferrer" type="application/pdf">
          <i className="fa fa-fw fa-envelope" title="Send me an email"></i>
        </a>
      </div>

    </div>
  );
}

export default Home;
