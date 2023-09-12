import './Header.css'
import Logo from '../../assets/pngfind.com-barbie-logo-png-667657.png'
function Header(){
    return(
        
        <header>
           <img src={Logo} alt="" />
            <nav>
                <ul>
                    <li>
                        <a href="#">Página inicial</a>
                    </li>
                    <li>
                        <a href="#">Sobre</a>
                    </li>
                    <li>
                        <a href="#">Notícias</a>
                    </li>
                    <li>
                        <a href="#">Contato</a>
                    </li>
                </ul>
            </nav>
        </header>
        
    )
    }
export default Header