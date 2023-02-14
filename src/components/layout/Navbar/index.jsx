import { Link } from "react-router-dom"
import Logo from "../../../assets/logo.svg"
import Base64xImg from "../../../assets/base64ximg.svg"
import ImgxBase64 from "../../../assets/imgxbase64.svg"
import './Navbar.css'

const Navbar = () => {
    return (
    
        <nav className="sidebar">
             <Link className="home-align" to="/"> <img src={Logo} alt="Costs" /></Link>
             <h5>ATConverter</h5>
             <ul>
               
               <li ><Link className="Link-align" to="/Base64xImg"><img className="menu-icon" src={Base64xImg} alt="" /> Base64 x Img</Link></li>
               <li ><Link className="Link-align" to="/ImgxBase64"><img src={ImgxBase64} alt="" />Img x Base64</Link></li>
               <li ><Link className="Link-align" to="/ImgxPdf"><img src={ImgxBase64} alt="" />Img x PDF</Link></li>
               <li ><Link className="Link-align" to="/PdfxDoc"><img src={ImgxBase64} alt="" />PDF x Doc</Link></li>
               {/* <li ><Link className="Link-align" to="/PdfxImg"><img src={Base64xImg} alt="" />Contato</Link></li>  */}
             </ul>
           </nav>
           
         
    
     )
} 

export default Navbar