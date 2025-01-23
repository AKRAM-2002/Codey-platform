import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchProfile = async () => {
      const token = localStorage.getItem('token');
      if (!token) {
        navigate('/signin');
        return;
      }

      const response = await fetch('/api/auth/me', {
        headers: { 'x-auth-token': token },
      });
      const data = await response.json();
      if (response.ok) setUser(data);
      else navigate('/signin');
    };

    fetchProfile();
  }, [navigate]);

  return (
    <div className="min-h-screen bg-gray-50 p-6">
      <h1 className="text-3xl font-bold text-gray-800 mb-6">Profile</h1>
      {user && (
        <div className="bg-white p-8 rounded-lg shadow-md max-w-2xl mx-auto">
          <div className="flex flex-col items-center">
            <img
              src={user.profilePicture || 'https://via.placeholder.com/150'}
              alt="Profile"
              className="w-32 h-32 rounded-full mb-4"
            />
            <h2 className="text-2xl font-semibold text-gray-800">{user.name}</h2>
            <p className="text-gray-600 text-center mt-2">{user.bio}</p>
          </div>
          <button
            onClick={() => navigate('/dashboard/edit-profile')}
            className="mt-6 w-full bg-blue-500 text-white px-6 py-3 rounded-lg hover:bg-blue-600 transition-colors"
          >
            Edit Profile
          </button>
        </div>
      )}
    </div>
  );
};

export default Profile;