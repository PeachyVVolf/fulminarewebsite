import React, { useState, useEffect, Fragment } from 'react';
import { Form, Button } from 'react-bootstrap';
import axios from 'axios';
import './Contact.css';
import { LocationOn, Phone, Email } from '@mui/icons-material';

const Contact = () => {
    const [state, setState] = useState({
        name: '',
        email: '',
        subject: '',
        message: ''
    });
    const [result, setResult] = useState(null);    
    const [scroll, setScroll] = useState(false);
    const [scroll1, setScroll1] = useState(false);

    useEffect(() => {
      window.addEventListener("scroll", () => {
        setScroll(window.scrollY > 6350);
        setScroll1(window.scrollY > 6500);
      });
    }, []);

    const sendEmail = event => {
        event.preventDefault();
        axios
         .post('/send', { ...state })
         .then(response => {
           setResult(response.data);
           setState({ name: '', email: '', subject: '', message: '' });
         })
         .catch(() => {
           setResult({ success: false, message: 'Something went wrong. Try again later'});
         });
    };
    const onInputChange = event => {
        const { name, value } = event.target;

        setState({
        ...state,
        [name]: value
        });
    };

    return (
        <Fragment>
            <div className='parallax3'>
                <div className='container'>
                    <br/><br/>
                    <div id="contact" className={`row testHeading ${scroll ? 'fadeIn': ''}`}>
                        <h1>CONTACT <span>US</span></h1>
                        <span className='smallBorder'></span>
                    </div>
                    <p className='contactHeadingP'>Get in touch with us.</p>
                    {/* Contact Form */}
                    <div className={`row ${scroll1 ? 'fadeIn': ''}`}>
                        <div className='col-lg-8 col-sm-12'>
                            <div>
                            {result && (
                                <p className={`${result.success ? 'success' : 'error'}`}>
                                    {result.message}
                                </p>
                            )}
                                <form onSubmit={sendEmail}>
                                    <div className='row'>
                                        <div className='col-lg-6 col-sm-12' style={{padding: '0%'}}>
                                            <Form.Group controlId="name">
                                                <Form.Label>Full Name</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="name"
                                                    value={state.name}
                                                    placeholder="Enter your full name"
                                                    onChange={onInputChange}
                                                />
                                            </Form.Group>
                                        </div>
                                        <div className='col-lg-6 col-sm-12' style={{padding: '0%', paddingLeft: '1%'}}>
                                            <Form.Group controlId="email">
                                                <Form.Label>Email</Form.Label>
                                                <Form.Control
                                                    type="text"
                                                    name="email"
                                                    value={state.email}
                                                    placeholder="Enter your email"
                                                    onChange={onInputChange}
                                                />
                                            </Form.Group>
                                        </div>
                                    </div>
                                    <Form.Group controlId="subject">
                                        <Form.Label>Subject</Form.Label>
                                        <Form.Control
                                            type="text"
                                            name="subject"
                                            value={state.subject}
                                            placeholder="Enter subject"
                                            onChange={onInputChange}
                                        />
                                    </Form.Group>
                                    <Form.Group controlId="subject">
                                        <Form.Label>Message</Form.Label>
                                        <Form.Control
                                            as="textarea"
                                            name="message"
                                            value={state.message}
                                            rows="3"
                                            placeholder="Enter your message"
                                            onChange={onInputChange}
                                        />
                                    </Form.Group>
                                    <Button variant="primary" type="submit">
                                        SUBMIT FORM
                                    </Button>
                                </form>
                            </div>
                        </div>
                        <div className='col-lg-4 col-sm-12 contactInfo'>
                            <div><LocationOn/> Lahore</div>
                            <div className='row'>
                                <div className='col-12 phoneRow'>
                                    <div className='row phoneRow'>
                                        <div className='col-1 phoneRow phoneIcon'><Phone/></div> 
                                        <div className='col-11 phoneRow'>+92 313 4247733</div> 
                                    </div> 
                                    <div className='row phoneRow'>
                                        <div className='col-1 phoneRow phoneIcon'><Phone/></div> 
                                        <div className='col-11 phoneRow'>+92 315 6481232</div> 
                                    </div>
                                </div>
                            </div>
                            <div><Email/>fulminarestudio@gmail.com</div>
                        </div>
                    </div>
                </div>
            <br/><br/>
            </div>
        </Fragment>
    );
}

export default Contact;