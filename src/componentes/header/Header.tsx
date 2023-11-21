import './Header.css'
import { Link } from 'react-router-dom'
import Logo from '../../assets/pngfind.com-barbie-logo-png-667657.png'
function Header(){
    return(
        
        <header>
           <Link to='/'><img src={Logo} alt="" /></Link>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Pagina Inical</Link>
                    </li>
                    <li>
                        <Link to="/sobre">Sobre</Link>
                       

                    </li>
                    <li>
                        <Link to="/noticias">Notícias</Link>
                        
                    </li>
                    <li>
                    <Link to="/contato">Contatos</Link>
                    
                    </li>
                </ul>
            </nav>
        </header>
        
    )
    }
export default Header