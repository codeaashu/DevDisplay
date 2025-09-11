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
    return <div className="flex min-h-screen items-center justify-center bg-[#0e1a34] text-white">Loading...</div>;
  }

  if (!profileData) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0e1a34] text-white">Profile not found</div>
    );
  }

  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#0e1a34] text-white">
      <Profile data={profileData} />
    </div>
  );
};

export default ProfilePage;
