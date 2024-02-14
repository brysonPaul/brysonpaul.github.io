import "../App.css";
import Social from "../components/Social/Social.js"

function Home() {
  return (
    <div className="Page" style={{ display: "flex", flexDirection: 'column', alignItems: "center" }}>
      <Social/>

      <header className="header">
        <h1>Bryson Paul</h1>
      </header>

      <div >
        <p className="text">
          Hey! I'm Bryson, an incoming SWE at Google. Welcome to my website!
        </p>
         
      </div>

    </div>
  );
}

export default Home;
