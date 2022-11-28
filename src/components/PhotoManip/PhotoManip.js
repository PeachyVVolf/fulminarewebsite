import React, { Component, useState, useEffect, Fragment } from 'react';
import PortHeader from '../layout/PortHeader/PortHeader';
import img1 from '../../images/portfolio/PhotoManipulation/alley.jpg';
import img2 from '../../images/portfolio/PhotoManipulation/ahmad2.jpg';
import Footer from '../layout/Footer/Footer';

let brakePoints = [350, 500];
let images = [img1, img2];
const imgTitle = [];

const PhotoManip = () => {
    return (
        <Fragment>
            <PortHeader title='Product Manipulation' />
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

export default PhotoManip;