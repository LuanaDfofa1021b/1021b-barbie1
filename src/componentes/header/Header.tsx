import './Header.css'
import Logo from '../../assets/pngfind.com-barbie-logo-png-667657.png'
function Header(){
   let texto= "luana"
    function mudaTexto(){
        texto = "luana"
    }
    return(
        <>
        <header>
           <img src={Logo} alt="" />
            <nav>
                <ul>
                    <li>
                        <input className="barrapesquisa" type ='text'/>
                    </li>
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
        <div>
            <p className='texto_digitado'> pesquisa : {texto}</p>
        </div>
        </>
    )
}
export default Header