import React from 'react';
import ProfileForm from '../components/profile/ProfileForm';
import CalorieCalculator from '../components/profile/CalorieCalculator';

const Profile = () => {
    return (
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Profil Pengguna</h1>
            <ProfileForm />
            <CalorieCalculator />
        </div>
    );
};

export default Profile;