import React from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import './CourseDetails.css'

const CourseDetails = () => {
    const tutorials = useLoaderData();
    console.log(tutorials);
    return (
        <div className="card p-4 mt-3 mb-3 card-container">
            <h2 className="card-title">{tutorials.title}</h2>
            <button>Download as PDF</button>
            <img src={tutorials.image} className="card-img-top img-fluid rounded-2" alt="" />
            <div className="card-body">
                <p className="card-text">{tutorials.details}</p>

                <div className='extra-info'>
                    <span>Price: ${tutorials.price}</span>
                    <span>Published date: {tutorials.date}</span>
                    <span>Student Review: {tutorials.rating.rate}</span>
                    <span>Available Seat: {tutorials.rating.count}</span>
                </div>
                <Link className='btn btn-success'>Get Premium Access</Link>
            </div>
        </div>
    );
};

export default CourseDetails;