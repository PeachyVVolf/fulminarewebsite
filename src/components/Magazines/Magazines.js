import React from 'react';
import HTMLFlipBook from 'react-pageflip';
import img0 from '../../images/portfolio/Magazines/0.jpg';
import img1 from '../../images/portfolio/Magazines/01.jpg';
import img2 from '../../images/portfolio/Magazines/1.jpg';
import img3 from '../../images/portfolio/Magazines/2.jpg';
import img4 from '../../images/portfolio/Magazines/3.jpg';
import img5 from '../../images/portfolio/Magazines/4.jpg';
import img6 from '../../images/portfolio/Magazines/5.jpg';
import img7 from '../../images/portfolio/Magazines/6.jpg';
import img8 from '../../images/portfolio/Magazines/7.jpg';
import img9 from '../../images/portfolio/Magazines/8.jpg';
import img10 from '../../images/portfolio/Magazines/9.jpg';
import img11 from '../../images/portfolio/Magazines/10.jpg';
import img12 from '../../images/portfolio/Magazines/11.jpg';
import img13 from '../../images/portfolio/Magazines/12.jpg';
import img14 from '../../images/portfolio/Magazines/13.jpg';
import img15 from '../../images/portfolio/Magazines/14.jpg';
import img16 from '../../images/portfolio/Magazines/15.jpg';
import img17 from '../../images/portfolio/Magazines/16.jpg';
import PortHeader from '../layout/PortHeader/PortHeader';
import './Magazine.css';
import Footer from '../layout/Footer/Footer';

const Page = React.forwardRef((props, ref) => {
    return (
      <div className="demoPage" ref={ref}>
        {props.children}
      </div>
    );
  });
  
  function MyBook() {
    return (
      <HTMLFlipBook width={350} height={600} className='book'>
        <Page number="0"><img src={img0} alt='mag0'/></Page>
        <Page number="01"><img src={img1} alt='mag01'/></Page>
        <Page number="1"><img src={img2} alt='mag1'/></Page>
        <Page number="2"><img src={img3} alt='mag2'/></Page>
        <Page number="3"><img src={img4} alt='mag3'/></Page>
        <Page number="4"><img src={img5} alt='mag4'/></Page>
        <Page number="5"><img src={img6} alt='mag5'/></Page>
        <Page number="6"><img src={img7} alt='mag6'/></Page>
        <Page number="7"><img src={img8} alt='mag7'/></Page>
        <Page number="8"><img src={img9} alt='mag8'/></Page>
        <Page number="9"><img src={img10} alt='mag9'/></Page>
        <Page number="10"><img src={img11} alt='mag10'/></Page>
        <Page number="11"><img src={img12} alt='mag11'/></Page>
        <Page number="12"><img src={img13} alt='mag12'/></Page>
        <Page number="13"><img src={img14} alt='mag13'/></Page>
        <Page number="14"><img src={img15} alt='mag14'/></Page>
        <Page number="15"><img src={img16} alt='mag15'/></Page>
        <Page number="16"><img src={img17} alt='mag16'/></Page>
      </HTMLFlipBook>
    );
  }

const Magazines = () => {
    return (
        <div className='bookHead'>
            <PortHeader title='Magazines' />
            <h3>A beautifully designed magazine that breaks through walls of <br/>stereotypes and social pressure</h3>
            <MyBook className='books'/>
            <Footer/>
        </div>
    )
}

export default Magazines;