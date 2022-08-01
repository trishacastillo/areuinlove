import { Link } from "react-router-dom";

const Navbar = () => {
    return (  
        <nav className="navbar">
      <h1>Are u In Love?</h1>
      <div className="links">
        <Link to="/">Home</Link>
        <Link to="/take-a-test" style={{ 
          color: 'white', 
          backgroundColor: '#ff0042',
          borderRadius: '8px' 
        }}>Take a test</Link>
      </div>
    </nav>
    );
}
 
export default Navbar;