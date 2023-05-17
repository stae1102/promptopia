'use client';

import { useState, useEffect } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Profile from '@components/Profile';

const MyProfile = () => {
  const [data, setData] = useState([]);

  const handleEdit = () => {};
  const handleDelete = async () => {};

  return (
    <Profile
      name='My'
      desc='Welcome to your personalized profile page'
      data={data}
      handleEdit={handleEdit}
      handleDelete={handleDelete}
    ></Profile>
  );
};

export default MyProfile;
