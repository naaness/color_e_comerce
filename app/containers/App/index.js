/**
 *
 * App
 *
 * This component is the skeleton around the actual pages, and should only
 * contain code that should be seen on all pages. (e.g. navigation bar)
 */

import React from 'react';
import Helmet from 'react-helmet';
import styled from 'styled-components';

import Header from 'components/Header';
import Footer from 'components/Footer';
import withProgressBar from 'components/ProgressBar';

import { ReactImageMagnify } from 'react-image-magnify';

const AppWrapper = styled.div`
  max-width: calc(768px + 16px * 2);
  margin: 0 auto;
  display: flex;
  min-height: 100%;
  padding: 0 16px;
  flex-direction: column;
`;

export default class App extends React.Component {
  constructor (props) {
    super(props)
    let data = {
      titulo: 'Producto 1',
      medidas: '20',
      descripcion: 'Description 1',

      color1: '#FF0000',
      color2: '#00FF00',
      color3: '#0000FF',

      images: [
        { // imagen1
          color1: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fondosni.com%2Fimages%2F2012-10-19%2FFondo%2520rojo-995046.jpg&f=1',
          color2: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.hotel-r.net%2Fim%2Fhotel%2Fit%2Fverde-4.jpg&f=1',
          color3: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Fs-media-cache-ak0.pinimg.com%2F736x%2F35%2Feb%2F7d%2F35eb7d5bce221d9392feb1e426ba48af.jpg&f=1'
        },
        { // imagen2
          color1: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fondos10.net%2Fwp-content%2Fuploads%2F2010%2F05%2FNegro-y-rojo.jpg&f=1',
          color2: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.fondox.net%2Fwallpapers%2Fresoluciones%2F13%2Ffondo-verde-y-gotas-de-agua_1600x900_1543.jpg&f=1',
          color3: 'https://images.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.U20N7r9d1C9NvXwzJlVLIgEsDh%26pid%3D15.1&f=1'
        },
        { // imagen3
          color1: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fimagenesfotos.com%2Fwp-content%2F2011%2F03%2Ffotos_de_color_rojo18.jpg&f=1',
          color2: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.consultorioesoterico.com%2FGreen%2520leaves%2520an%25203.jpg&f=1',
          color3: 'https://images.duckduckgo.com/iu/?u=http%3A%2F%2Fwww.wallpapersxl.com%2Fwallpapers%2F1920x1080%2Fceleste%2F179762%2Fceleste-papel-de-parede-azul-claro-179762.jpg&f=1'
        }
      ],

      colors: [
        '#FF0000',
        '#00FF00',
        '#0000FF'
      ],
    }

    this.state = {
      data: data,
      colorSeleccionado: 'color1',
      imagenSeleccionada: 0
    }
  }
  /**
   * Evento al seleccinar color
   * 
   * @param {String} propColor nueo color seleccionado
   */
  cambioColor (propColor) {
    this.setState({
      colorSeleccionado: propColor
    })
  }
  /**
   * Evento al seleccionar una imagen
   * 
   * @param {Integer} propImagen Nuevo index de la imagen seleccionada
   */
  cambioImagen (propImagen) {
    this.setState({
      imagenSeleccionada: propImagen
    })
  }
  render() {
    if (!this.state) {
      return <div>No state</div>
    }
    let d = this.state.data
    if (!d) {return <div>No data</div>}

    let color = d[this.state.colorSeleccionado]
    let urlImagen = d.images[this.state.imagenSeleccionada][this.state.colorSeleccionado]

    return (
      <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-between'}}>
        
        <div style={{display:'flex', flexDirection:'row',backgroundColor: '#FFFF00', flexDirection:'row', justifyContent:'center', alignItems:'center', width: 400, height: 500}}>

          {d.images.map((image, index) => {
            if (this.state.imagenSeleccionada === index) {
              return null
            }
            let url = image[this.state.colorSeleccionado]
            return (
              <img key={'imagen-'+index} style={{width:100, height: 100, margin: 10}} src={url} onClick={this.cambioImagen.bind(this, index)} />
            )
          })}

        </div>
        <div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', backgroundColor: '#yellow', width: 400, height: 500}}>          
          {/* Foto principal */}
          <div className="pointer">
               {/* Titulo */}
              <div className="pointer__instructions">
                <span style={{width:'100%', textAlign: 'center'}}>{d.titulo}</span>
              </div>
              <ReactImageMagnify {...{
                  largeImage: {
                      alt: '',
                      src: urlImagen,
                      width: 800,
                      height: 800
                  },
                  smallImage: {
                      alt: 'Wristwatch by Ted Baker London',
                      src: urlImagen,
                      width: 300,
                      height: 300
                  }
              }} />
          </div>
           {/* <img style={{width:300, height: 300, margin: 10}}  src={urlImagen} />  */}

        </div>
        <div style={{display:'flex', flexDirection:'column', backgroundColor: 'yellow', flexDirection:'row', justifyContent:'center', alignItems:'center', width: 400, height: 500}}>
          <div style={{display:'flex', flexDirection:'column', justifyContent: 'center', width:300, height: 300, backgroundColor:'#FF0000', margin: 10}}>
            <div style={{width:'80%',height:'80%', backgroundColor: '#F0FF0A', margin: 10}}>
              Descripción
              <br/>
              <span>{d.descripcion}</span>
            </div>
            <div style={{width:'80%',height:'80%', backgroundColor: '#F0FF0A', margin: 10}}>
              Mendidas
              <br/>
              <span>{d.medidas}</span>
            </div>
            <div style={{display:'flex', flexDirection:'row', justifyContent: 'space-around', alignItems: 'center', width:'80%',height:'80%', backgroundColor: '#F0FF0A', margin: 10}}>
              <div style={{width: 40, height: 40, borderRadius: '50%', backgroundColor: d.color1}} onClick={this.cambioColor.bind(this, 'color1')} ></div>
              <div style={{width: 40, height: 40, borderRadius: '50%', backgroundColor: d.color2}} onClick={this.cambioColor.bind(this, 'color2')}></div>
              <div style={{width: 40, height: 40, borderRadius: '50%', backgroundColor: d.color3}} onClick={this.cambioColor.bind(this, 'color3')}></div>
            </div>
          </div>
        </div>
      </div>   
    );
  }
}

App.propTypes = {
  children: React.PropTypes.node,
};
