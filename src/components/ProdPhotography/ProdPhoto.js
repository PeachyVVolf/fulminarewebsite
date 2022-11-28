import React, { Component, useState, useEffect, Fragment } from 'react';
import PortHeader from '../layout/PortHeader/PortHeader';
import img1 from '../../images/portfolio/ProductPhotography/1.jpg';
import img2 from '../../images/portfolio/ProductPhotography/4.jpg';
import img3 from '../../images/portfolio/ProductPhotography/5.jpg';
import img4 from '../../images/portfolio/ProductPhotography/20211123_114916.jpg';
import img5 from '../../images/portfolio/ProductPhotography/DSC01547.jpg';
import img6 from '../../images/portfolio/ProductPhotography/DSC01557.jpg';
import img7 from '../../images/portfolio/ProductPhotography/DSC01567.jpg';
import img8 from '../../images/portfolio/ProductPhotography/IMG_9297.jpg';
import img9 from '../../images/portfolio/ProductPhotography/IMG_9367.jpg';
import img10 from '../../images/portfolio/ProductPhotography/pic_1.jpg';
import img11 from '../../images/portfolio/ProductPhotography/pic_2.jpg';
import img12 from '../../images/portfolio/ProductPhotography/pic_3.jpg';
import Footer from '../layout/Footer/Footer';


let brakePoints = [350, 500];
let images = [img1, img2, img3, img4, img5, img6, img7, img8, img9, img10, img11, img12];
const imgTitle = [];

const ProdPhoto = () => {
    return (
        <Fragment>
            <PortHeader title='Product Photography' />
            <div className="masonry-container">
                <Masonry brakePoints={brakePoints}>
                    {images.map((image, id) => {
                        return (
                            <div key={id}>
                                <Tile src={image} title={imgTitle[id]} />
                            </div>
                        ) 
                    })}
                </Masonry>
            </div>
            <br/><br/><br/>
            <Footer/>
        </Fragment>
    )
}


const Tile = ({src, title}) => {
    return (
      <div className="tile">
              {/* <h4 className='singleImgTitle'>{title}</h4> */}
              <img src={src} />
          </div>
    );
  };
  
  class Masonry extends Component{
      constructor(props){
          super(props);
          this.state = {columns: 1};
          this.onResize = this.onResize.bind(this);
      }
      componentDidMount(){
          this.onResize();
          window.addEventListener('resize', this.onResize)	
      }
      
      getColumns(w){
          return this.props.brakePoints.reduceRight( (p, c, i) => {
              return c < w ? p : i;
          }, this.props.brakePoints.length) + 1;
      }
      
      onResize(){
          const columns = this.getColumns(this.refs.Masonry.offsetWidth);
          if(columns !== this.state.columns){
              this.setState({columns: columns});	
          }
          
      }
      
      mapChildren(){
          let col = [];
          const numC = this.state.columns;
          for(let i = 0; i < numC; i++){
              col.push([]);
          }
          return this.props.children.reduce((p,c,i) => {
              p[i%numC].push(c);
              return p;
          }, col);
      }
      
      render(){
          return (
              <div className="masonry" ref="Masonry">
                  {this.mapChildren().map((col, ci) => {
                      return (
                          <div className="column" key={ci} >
                              {col.map((child, i) => {
                                  return <div key={i} >{child}</div>
                              })}
                          </div>
                      )
                  })}
              </div>
          )
      }
  }

export default ProdPhoto;