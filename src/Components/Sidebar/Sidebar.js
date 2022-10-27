import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Sidebar.css'

const Sidebar = () => {
    const [coursesName, setCoursesName] = useState([]);

    useEffect(() => {
        fetch('https://learn-yourself-server.vercel.app/course-name')
            .then(res => res.json())
            .then(data => setCoursesName(data))
    }, [])
    return (
        <div className='border border-info mt-3 p-2 w-100 shadow p-3 mb-5 bg-body rounded'>
            <h5>Total Courses {coursesName.length}</h5>
            {
                coursesName.map(course => <p
                    key={course.id}
                >
                    <Link className='tutorial-link' to={`/course-name/${course.id}`}>{course.name}</Link>
                </p>)
            }
        </div>
    );
};

export default Sidebar;