import React from 'react';

const AllCourses = ({ tutorial }) => {
    console.log(tutorial);
    return (
        <div>
            <div className="col col-rows-1 col-rows-md-3 g-4 w-75 mb-4 m-auto">
                <div className="row">
                    <div className="card rounded-4 shadow-lg p-3 mb-5 bg-body rounded">
                        <img className='img-fluid p-2 rounded-4' src={tutorial.image} alt="images" />
                            <div className="card-body">
                                <h5 className="card-title">{tutorial.title}</h5>
                                <p className="card-text">{tutorial.details}</p>
                            </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default AllCourses;