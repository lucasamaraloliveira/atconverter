import { Link } from "react-router-dom"
import Logo from "../../../assets/logo.svg"
import './Navbar.css'

const Navbar = () => {
    return (
    
        <nav className="sidebar">
             <Link to="/"> <img src={Logo} alt="Costs" /></Link>
             <ul>
               <li ><Link className="Link-align" to="/">Início</Link></li>
               <li ><Link className="Link-align" to="/Base64xImg">Base64 x Img</Link></li>
               <li ><Link className="Link-align" to="/ImgxBase64">Img x Base64</Link></li>
               <li ><Link className="Link-align" to="/contact">Contato</Link></li> 
             </ul>
           </nav>
           
         
    
     )
} 

export default Navbar