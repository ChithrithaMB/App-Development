import '../assets/css/Navbar1.css'
import { Link } from 'react-router-dom'
function Navbar1() {
    return (
     <>

    <header className='navbar'>
        <div className='navbar__title navbar__item'>MEDILOGIX</div>
        <div className='pinkbtn1 pinkHome'><Link to='/Landing'>Home</Link></div>
        <div className='pinkbtn22 pink1aboutus'><Link to='/AboutUs'>About Us</Link></div>
        <div className='pinkbtn33 pink1contact'><Link to='/Contact'>Contact</Link></div>
              
    </header>
    </>
)
    }
    export default Navbar1