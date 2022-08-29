import { Link } from "react-router-dom";

const Navbar = () => {

  const toggle = () => {
    const nav = document.getElementById("topnav");
    nav.className === "topnav" ? nav.className += " responsive" : nav.className = "topnav";
  };
    return (  
     /*  <nav className="navbar">
      <h1>Are u In Love?</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/take-a-test" style={{ 
          color: 'white', 
          backgroundColor: '#ff0042',
          borderRadius: '8px' 
        }}>Take a test</Link>
      </div>
    </nav> */
    <nav className="topnav" id="topnav">
    <a href="#" className="logo">
    <h1>Are u In Love?</h1>
    </a>
    <div className="links">
      <Link to="/">Home</Link>
      <Link to="/take-a-test">Take Test</Link>
    </div>
    
    <button className="icon" onClick={toggle}><i className='fa fa-bars'></i></button>
 
  </nav>
    );
}
 
export default Navbar;