 import './Filme.css'

type FilmeProps={
    titulo:string,
    sinopse:string,
    imagem:string
}

export default function Filme(props:FilmeProps){
    return(
        <div className="filme_content">
            <img src={props.imagem} alt=""/>
            <div className="texto_foto">
                <h1>{props.titulo}</h1>
                <div className="texto_foto"></div>
                    {props.sinopse}


            </div>
        </div>
    )
}