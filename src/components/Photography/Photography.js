import React, { Component, useState, useEffect, Fragment } from 'react';
import PortHeader from '../layout/PortHeader/PortHeader';
import img1 from '../../images/portfolio/Photography/1.jpg';
import img2 from '../../images/portfolio/Photography/b.jpg';
import img3 from '../../images/portfolio/Photography/cat1.jpg';
import img4 from '../../images/portfolio/Photography/cat2.jpg';
import img5 from '../../images/portfolio/Photography/cat3.jpg';
import img6 from '../../images/portfolio/Photography/final_2.jpg';
import img7 from '../../images/portfolio/Photography/FINAL_BW.jpg';
import img8 from '../../images/portfolio/Photography/FINAL_COLUORED.jpg';
import img9 from '../../images/portfolio/Photography/final_picture.jpg';
import img10 from '../../images/portfolio/Photography/IMG_9662.jpg';
import img11 from '../../images/portfolio/Photography/IMG_9677.jpg';
import img12 from '../../images/portfolio/Photography/IMG_9851.jpg';
import img13 from '../../images/portfolio/Photography/ahmad1.jpg';
import img14 from '../../images/portfolio/Photography/light_01.jpg';
import Footer from '../layout/Footer/Footer';


let brakePoints = [350, 500];
let images = [img1, img14, img4, img3 ,img6, img13, img5, img7, img8, img9,img10, img11, img12, img2];
const imgTitle = ['Magazines', 'Websites', 'Mobile Apps', 'Photography', 'Social Media Posts', 'Videography'];

const Photography = () => {
    return (
        <Fragment>
            <PortHeader title='Photography' />
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

export default Photography;