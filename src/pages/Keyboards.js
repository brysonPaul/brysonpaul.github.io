import "../App.css"
import Social from "../components/Social/Social.js"

function Home() {
  return (
    <div className="Page">
      <Social/>
      <header className="header">
        <h1>Keyboards</h1>
      </header>
        <p className='text'>
           Here are some of my keyboards
        </p>
     
    </div>
  );
}

export default Home;
