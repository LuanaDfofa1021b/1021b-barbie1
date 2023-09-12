import {useState} from "react"
import Filme from "../filme/Filme";
import './Main.css'
type FilmesType = {
    id: number,
    titulo:string,
    sinopse:string,
    imagem:string
}
export default function Main(){
    //Hook
    const [texto,setTexto] = useState("Luana")

    const filmes:FilmesType[] = [
        {
            id:1
             titulo:"Barbie" ,
             sinopse:"A jovem Barbie (Margot Robbie) vive no mundo perfeito das bonecas, chamado Barbielândia, onde todo dia é incrível. No entanto, quando ela entra em uma crise existencial, acaba sendo exilada devido às suas imperfeições.",
             imagem:"/barbie.png"       
        }
        {
            id:2
            titulo:"Barbie Butterfly e a Princesa Fairy" ,
            sinopse:" Butterfly se torna a embaixadora real de Flutterfield e é enviada para estabelecer a paz entre sua terra encantada e seus rivais. Apesar de não causar uma boa impressão no rei, ela faz amizade com a tímida filha do monarca, a princesa Catania.",
            imagem:"/barbiebutterfly.jpg"
        }
    ]

    //A FUNÇÃO RECEBE UM ATRIBUTO CHAMADO DE "EVENT"
    function mudaTexto(e:React.ChangeEvent<HTMLInputElement>){
        console.log(e.target.value)
        setTexto (e.target.value)
    }
    return(
        <>
     <div className="pesquisa">
        <p> Buscar Filme</p>
        <input className='barrapesquisa' type="text" onChange={mudaTexto} />
            <div>
                <p className='texto_digitado'>pesquisa: {texto}</p>
     </div>
     </div>
    
            <main className="content-main">
                <Filme titulo="Barbie" sinopse="A jovem Barbie (Margot Robbie) vive no mundo perfeito das bonecas, chamado Barbielândia, onde todo dia é incrível. No entanto, quando ela entra em uma crise existencial, acaba sendo exilada devido às suas imperfeições.
                  Agora a boneca precisa optar por viver uma aventura no mundo real dos humanos, onde aprenderá uma importante lição sobre a vida e o que realmente importa."
                 imagem="/barbie.png"/>
                <Filme titulo="Barbie Butterfly e a Princesa Fairy" sinopse=" Butterfly se torna a embaixadora real de Flutterfield e é enviada para estabelecer a paz entre sua terra encantada e seus rivais. Apesar de não causar uma boa impressão no rei, ela faz amizade com a tímida filha do monarca, a princesa Catania."
                imagem="/barbiebutterfly.jpg"/> 

                <Filme titulo="Barbie Em vida de Sereia" sinopse=" Barbie é uma campeã de surfe que vive com sua família em Malibu. Um dia, ela descobre um segredo de família: ela é uma sereia. Sua mãe, a rainha de Oceana, está em perigo e ela parte numa grande aventura no fundo do mar para salvá-la."
                imagem="/barbie vida de sereia.jpg"/> 

                <Filme titulo="Barbie Moda e Magia" sinopse="Em um conto de fadas fashion, Barbie viaja a Paris para salvar o ateliê de moda da sua tia, que está prestes a ser fechado."
                imagem="/barbie moda e magia.jpg"/> 

                <Filme titulo="Barbie Em Vida de Sereia 2" sinopse=" Merliah vai à Austrália participar de um torneio de surfe e evitar que Eris se apodere de Oceana."
                imagem="/vida de sereia2.jpg"/> 

                <Filme titulo="Barbie e O Portal Segreto" sinopse="  tímida princesa Alexa descobre um portal secreto e entra em uma terra desconhecida. Após conhecer Romy e Nori, uma sereia e uma fada, Alexa descobre seus poderes mágicos e as três decidem deter a malvada Malucia."
                imagem="/portal segreto.jpg"/> 

                <Filme titulo="Barbie A Sereia das Pérolas" sinopse=" Barbie é Lumina uma linda sereia, que sonha em ser uma princesa. Desde pequena, Lumina tem um poder mágico de fazer as pérolas dançarem e brilharem. Ela e sua melhor amiga Tuca, um cavalo-marinho cor-de-rosa, embarcam em uma aventura ao fantástico reino das sereias"
                imagem="/sereia perorola.jpg"/> 

                <Filme titulo="Barbie e as Sapatilhas Mágicas " sinopse=" Kristyn e Hailey vão parar em um mundo mágico do balé dominado pela diabólica Rainha das Neves. As duas bailarinas dançam seus balés favoritos para derrotar a rainha e realizar seus sonhos."
                imagem="/sapatilha.jpg"/> 

                <Filme titulo="Barbie em A Princesa e a Plebeia  " sinopse=" Uma plebeia, moradora de um vilarejo, é muito parecida com a princesa do reino. Os destinos das duas se cruzam quando a princesa é sequestrada, e a moça humilde usa sua incrível semelhança com ela para tentar salvar das mãos do vilão."
                            imagem="/princesa plebeia.jpg"/> 

                <Filme titulo="Barbie e As Doze Princesas Bailarinas " sinopse=" Genevieve e suas irmãs adoram dançar. Como são impedidas pela Duquesa Rowena, as princesas bailarinas descobrem um mundo mágico onde dançam sem serem incomodadas. Porém, acontecimentos mais urgentes as levam a tentar salvar a vida do pai."
                            imagem="/doze.jpg"/> 

            </main>
            </>
        )
    }