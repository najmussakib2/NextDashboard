import { Breadcrumb } from 'antd';
import React from 'react';

const ProfilePage = () => {
    return (
        <div>
            <Breadcrumb items={[{title: 'pages'},{title: <a href="/dashboard">Dashboard</a>},{title: <a href="/dashboard/Profile">Profile</a>}]}/>
           Profile Page 
        </div>
    );
};

export default ProfilePage;