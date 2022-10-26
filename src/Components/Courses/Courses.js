import React from 'react';
import { useLoaderData } from 'react-router-dom';
import AllCourses from '../All-Courses/All-Courses';

const Courses = () => {
    const allTutorial = useLoaderData();
    return (
        <div>
            <h3>Learn something and do something different in life.</h3>

            {
                allTutorial.map(tutorial => <AllCourses
                    key={tutorial.id}
                    tutorial={tutorial}
                >
                    
                </AllCourses>)
            }
        </div>
    );
};

export default Courses;