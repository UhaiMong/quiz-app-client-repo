import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [coursesName, setCoursesName] = useState([]);

    useEffect(() => {
        fetch('http://localhost:5000/course-name')
            .then(res => res.json())
            .then(data => setCoursesName(data))
    }, [])
    return (
        <div className='border-2'>
            <h5>Total Courses {coursesName.length}</h5>
                {
                    coursesName.map(course => <p
                        key={course.id}
                    >
                        <Link to={`/course-name/{course.id}`}>{course.name}</Link>
                    </p>)
                }
        </div>
    );
};

export default Sidebar;