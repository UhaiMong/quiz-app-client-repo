import React from 'react';
import { useRef } from 'react';
import { Link } from 'react-router-dom';
import { useLoaderData } from 'react-router-dom';
import { useReactToPrint } from 'react-to-print';
import { FaPrint } from 'react-icons/fa';
import './CourseDetails.css'

const CourseDetails = () => {
    const ReadPdfPrint = useRef();
    const handleToPrint = useReactToPrint({
        content: () => ReadPdfPrint.current,
        documentTitle: 'Course_Data',
        onAfterPrint: () => alert("Successfully Printed")
    });
    const tutorials = useLoaderData();
    console.log(tutorials)
    return (
        <div ref={ReadPdfPrint} className="card p-4 mt-3 mb-3 card-container shadow-lg p-3 mb-5 bg-body rounded">
            <h2 className="card-title">{tutorials.title}<FaPrint className='printer' onClick={handleToPrint} title="Print now" /></h2>
            <img src={tutorials.image} className="card-img-top img-fluid rounded-2" alt="" />
            <div className="card-body">
                <p className="card-text">{tutorials.details}</p>

                <div className='extra-info'>
                    <span>Price: ${tutorials.price}</span>
                    <span>Published date: {tutorials.date}</span>
                    <span>Student Review: {tutorials.rating.rate}</span>
                    <span>Available Seat: {tutorials.rating.count}</span>
                </div>
                <Link to={{
                    pathname: `/checkout/${tutorials.id}`,
                    query: {
                        title: tutorials.title,
                        content: tutorials.details,
                        comments: JSON.stringify(tutorials.comments),
                    }
                }} className='btn btn-success'>Get Premium Access</Link>
            </div>
        </div>
    );
};

export default CourseDetails;