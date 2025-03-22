// filepath: c:\Users\Ashutosh\OneDrive\Documents\GitHub\DevDisplay\src\components\Profile\ProfilePage.jsx
import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import Profile from './Profile';
import profilesList from '../../ProfilesList.json';

const ProfilePage = () => {
  const { name } = useParams();
  const [profileData, setProfileData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchProfileData = async () => {
      try {
        const profileFile = profilesList.find((file) => file.replace('.json', '') === name);
        if (!profileFile) {
          setProfileData(null);
          setLoading(false);
          return;
        }
        const response = await fetch(`/data/${profileFile}`);
        const data = await response.json();
        setProfileData(data);
      } catch (error) {
        console.error('Error fetching profile data:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchProfileData();
  }, [name]);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (!profileData) {
    return <div>Profile not found</div>;
  }

  return <Profile data={profileData} />;
};

export default ProfilePage;
