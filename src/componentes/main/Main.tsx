import Filme from "../filme/Filme";
import './Main.css'

export default function Main(){
    return(
        <main className="content-main">
            <Filme titulo="Barbie" sinopse="A jovem Barbie (Margot Robbie) vive no mundo perfeito das bonecas, chamado Barbielândia, onde todo dia é incrível. No entanto, quando ela entra em uma crise existencial, acaba sendo exilada devido às suas imperfeições.
Agora a boneca precisa optar por viver uma aventura no mundo real dos humanos, onde aprenderá uma importante lição sobre a vida e o que realmente importa."
imagem="/barbie.png"/>
            <Filme titulo="Transformes" sinopse="O destino da humanidade está em jogo quando duas raças de robôs, os Autobots e os vilões Decepticons, chegam à Terra. Os robôs possuem a capacidade de se transformarem em diferentes objetos mecânicos enquanto buscam a chave do poder supremo com a ajuda do jovem Sam."
            imagem="/transformes.jpg"/> 
        </main>
    )
}