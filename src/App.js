
import { useState, useEffect } from 'react';
import axios from 'axios';
import './App.css';
import NavIn from './componentes/NavIn';
import Noticias from './componentes/Noticias/Noticias';
import Footer from './componentes/Footer/Footer';
import urlCategorias from './data/Categorias';

function App() {

  const link_General = 'https://raw.githubusercontent.com/FJTSYSTEMS2014/link_api_noticias/master/top-headlines-general.json';
  const link_bussines = 'https://raw.githubusercontent.com/FJTSYSTEMS2014/link_api_noticias/master/top-headlines-business.json';
  const link_entertaiment = 'https://raw.githubusercontent.com/FJTSYSTEMS2014/link_api_noticias/master/top-headlines-entertainment.json';
  const link_health = 'https://raw.githubusercontent.com/FJTSYSTEMS2014/link_api_noticias/master/top-headlines-health.json';
  const link_sports = 'https://raw.githubusercontent.com/FJTSYSTEMS2014/link_api_noticias/master/top-headlines-sports.json';
  const link_technology = 'https://raw.githubusercontent.com/FJTSYSTEMS2014/link_api_noticias/master/top-headlines-technology.json';
  const link_science = 'https://raw.githubusercontent.com/FJTSYSTEMS2014/link_api_noticias/master/top-headlines-science.json';
  const link_brasil='https://raw.githubusercontent.com/FJTSYSTEMS2014/link_api_noticias/master/top-headlines-google-news-br.json';
  const link_eeuu='https://raw.githubusercontent.com/FJTSYSTEMS2014/link_api_noticias/master/top-headlines-google-news-usa.json';
  const [categoria, SetCategoria] = useState("general");
  const [arrayDeNoticias, SetArrayDeNoticias] = useState([]);
  //const [resultadosNuevos, SetResultadosNuevos] = useState();

  let url = link_General;
  if (categoria === "General") { url = link_General; };
  if (categoria === "Negocios") { url = link_bussines; };
  if (categoria === "Farandula") { url = link_entertaiment; };
  if (categoria === "Salud") { url = link_health; };
  if (categoria === "Ciencia") { url = link_science; };
  if (categoria === "Deportes") { url = link_sports; };
  if (categoria === "Tecnologia") { url = link_technology; };
  if (categoria === "Noticias-Brasil") { url = link_brasil; };
  if (categoria === "Noticias-EEUU") { url = link_eeuu; };

  const noticiasApi = async () => {
    try {
      const noticias = await axios.get(`${url}`);
      //console.log(noticias.data.articles);
      SetArrayDeNoticias(noticias.data.articles);
    }
    catch (error) {
      console.log(error);
    }
  }
  useEffect(() => {
    noticiasApi();
  }, [url]);
  //console.log(categoria);
  return (
    <div className="App">
      <NavIn SetCategoria={SetCategoria} />
      <Noticias arrayDeNoticias={arrayDeNoticias} categoria={categoria}/>
      <Footer />
    </div>
  );
}

export default App;
