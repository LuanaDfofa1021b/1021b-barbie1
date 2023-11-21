import React, { useEffect } from 'react';
import './Filme.css';
import axios from 'axios';

type FilmeProps = {
  titulo: string;
  sinopse: string;
  imagem: string;
}

const Filme: React.FC<FilmeProps> = (props) => {
  useEffect(() => {
    const fetchMovies = async () => {
      try {
        const response = await axios.get('http://localhost:3000/filmes');
        const moviesData = response.data.results; // Ajuste conforme a estrutura da resposta da API
        console.log(moviesData); // Aqui você pode definir o estado com os dados recebidos
      } catch (error) {
        console.error('Erro ao buscar filmes:', error);
      }
    };

    fetchMovies();
  }, []);

  return (
    <div className="filme_content">
      <div className="foto_filme">
        <img src={props.imagem} alt={props.titulo} />
      </div>
      <div className="texto_foto">
        <h1>{props.titulo}</h1>
        <div className="sinopse">
          {props.sinopse}
        </div>
      </div>
    </div>
  );
}

export default Filme;
