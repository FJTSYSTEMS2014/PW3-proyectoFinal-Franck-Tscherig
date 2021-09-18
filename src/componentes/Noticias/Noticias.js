import { Container } from '@material-ui/core';
import React from 'react';
import NewCard from './../NewCard/NewCard';
import './Noticias.css'
import apkIOS from '../../apk/noticiasdefranck_iOS.apk';
import apkAndroid from '../../apk/noticiasdefranck.apk';
const Noticias = ({ arrayDeNoticias,categoria }) => {
    return (
        <Container maxWidth='md'>
            <div className='content'>
                
                <div className="downloadMessage">
                    <span className="downloadText">
                        Para una mejor experiencia descarga la app para tu smartphone
                    </span>
                    <a href={apkIOS} target="_blank"
                    rel="noreferrer noopener"
                    role="button">
                    <img className="downloadapk"
                        alt="app store"
                        height="40%"
                        src="https://assets.inshorts.com/website_assets/images/appstore.png"
                    /></a>
                    
                    <a href={apkAndroid} target="_blank"
                    rel="noreferrer noopener"
                    role="button">
                    <img className="downloadapk"
                        alt="play store"
                        height="40%"
                        src="https://assets.inshorts.com/website_assets/images/playstore.png"
                    /></a>
                </div>


                {arrayDeNoticias.map(newsItem => (

                    <NewCard newsItem={newsItem} categoria={categoria} key={newsItem.ObjectId} />

                ))}

            </div>
        </Container>
    )
}

export default Noticias;

/*


        <ul className="rounded float-center">
                {arrayDeNoticias.map(item => (
                    <li className="d-flex flex-column  bd-highlight mb-4" key={item.ObjectId}>
                        <div className="d-flex flex-column text-white bg-dark">

                             <h4>{item.title}</h4><a href={item.url} target="_blank"
                                rel="noreferrer noopener"
                                className="btn btn-outline-danger my-0 my-sm-0"
                                role="button">...Seguir leyendo</a>

                            <p className="alert alert-dark"> < img src={item.urlToImage}
                                className="rounded img-fluid img-thumbnail" alt={item.title} /></p>
                            <div><p className="bg-light text-dark" >{item.content}  <a href={item.url} target="_blank"
                                rel="noreferrer noopener"
                                className="btn btn-outline-danger my-0 my-sm-0"
                                role="button">...Seguir leyendo</a></p></div>
                            <div> <h6>Fuente: {item.source.name} </h6>  <p> Fecha de Publicacion: {item.publishedAt}</p> </div>

                        </div>
                    </li>
                ))}
            </ul>




*/