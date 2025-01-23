import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const EnrolledCourses = () => {
  const [courses, setCourses] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchEnrolledCourses = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/signin');
        return;
      }

      const response = await fetch('/api/enroll/my-courses', {
        headers: { 'x-auth-token': token },
      });
      const data = await response.json();
      if (response.ok) setCourses(data);
      else navigate('/signin');
    };

    fetchEnrolledCourses();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Enrolled Courses</h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {courses.map((course) => (
          <div key={course._id} className="bg-white p-6 rounded-lg shadow-md">
            <h2 className="text-xl font-semibold text-gray-800 mb-2">{course.courseId.title}</h2>
            <p className="text-gray-600 mb-4">{course.courseId.description}</p>
            <div className="mt-4">
              <p className="text-gray-700">Progress: {course.progress}%</p>
              <div className="w-full bg-gray-200 rounded-full h-2.5">
                <div
                  className="bg-blue-500 h-2.5 rounded-full"
                  style={{ width: `${course.progress}%` }}
                />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default EnrolledCourses;