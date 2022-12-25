import React from 'react';
import './ErrorPage.css';
import image from '../images/404.png';

function ErrorPage() {
    return (
        <div className='error'>
            <div className='content'>
                <p>OOPS</p>
            </div>
            <div className='content2'>
                <p>Something went wrong</p>
            </div>
            <div className="errorImg">
                <img src={image} alt="errorImg"></img>
            </div>
            <div className='content3'>
                <p>Error 404 page not found</p>
            </div>
            <div className='btn'>
                <a href='#'>home</a>
            </div>
        </div>
    )
}
export default ErrorPage;