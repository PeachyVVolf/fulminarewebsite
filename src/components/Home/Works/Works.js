import React, { Component, useState, useEffect, Fragment } from 'react';
import { useNavigate } from 'react-router-dom';
import './masonry.css';
import imgMagazines from '../../../images/portfolio/1-01.jpg';
import imgMob from '../../../images/portfolio/MobileApps/mobile_mockup.jpg';
import imgWeb from '../../../images/portfolio/Websites/pc_mockup_2.jpg';
import final_pic from '../../../images/portfolio/final_pic.jpg';
import smPost from '../../../images/portfolio/SocialMediaPosts/GIF_ANIMATION.gif';
import gameImg from '../../../images/portfolio/creekVillage.jpg';
import blenderImg from '../../../images/portfolio/3DMeshAndAnim/SwordFinalImg.png';
import prodImg from '../../../images/portfolio/ProductPhotography/5.jpg';
import manipImg from '../../../images/portfolio/PhotoManipulation/alley.jpg';


let brakePoints = [350, 500];
let images = [imgMagazines, imgWeb, imgMob, final_pic, smPost, prodImg, blenderImg, gameImg, manipImg ];
const imgTitle = ['Magazines', 'Websites', 'Mobile Apps', 'Photography', 'Social Media Posts', 'Product Photography', '3D Mesh and Animations', 'Game Development', 'Photo Manipulation'];

const RApp = () => {
    const [scroll, setScroll] = useState(false);
    const [scroll1, setScroll1] = useState(false);

    const navigate = useNavigate();
    
    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 3700);
        setScroll1(window.scrollY > 3830);
      });
    }, []);

    const wholeDataPage = (id) => {
        if(id === 0){
            navigate('/magazines');
        }
		else if(id === 1){
			navigate('/websites');
		}
		else if(id === 2){
			navigate('/mobApps');
		}
		else if(id === 3){
			navigate('/photography');
		}
		else if(id === 4){
			navigate('/socialMediaPosts');
		}
		else if(id === 5){
			navigate('/prodPhotography');
		}
		else if(id === 6){
			navigate('/3DMeshAndAnimation');
		}
		else if(id === 7){
			navigate('/gameDev');
		}
		else if(id === 8){
			navigate('/photoManipulation');
		}
    }

    return (        
        <Fragment>
            <div id="works" className="">
                <br/><br/>
                <div id="works" className={`row TeamHeading ${scroll ? 'fadeIn': ''}`}>
                    <h1>OUR <span>WORKS</span></h1>
                    <span className='smallBorder'></span>
                </div>
                <br/><br/>
                <div className={`row ${scroll1? 'fadeIn': ''}`}>
                    <div className="container">
                        <div className="masonry-container">
                            <Masonry brakePoints={brakePoints}>
                                {images.map((image, id) => {
                                    return (
                                        <div key={id} onClick={() => wholeDataPage(id)}>
                                            <Tile src={image} title={imgTitle[id]} />
                                        </div>
                                    ) 
                                })}
                            </Masonry>
                        </div>
                    </div>
                </div>
            </div>
            <br/><br/><br/><br/>
        </Fragment>
    )
}

const Tile = ({src, title}) => {
  return (
    <div className="tile">
            <h4 className='singleImgTitle'>{title}</h4>
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


export default RApp;