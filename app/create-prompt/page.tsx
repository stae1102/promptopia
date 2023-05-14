'use client';

import { useState } from 'react';
import { useSession } from 'next-auth/react';
import { useRouter } from 'next/navigation';

import Form from '@components/Form';

const CreatePost = () => {
  const [submitting, setSubmitting] = useState(false);
  const [post, setPost] = useState({
    title: '',
    tag: '',
  });

  const createPrompt = async (e) => {};

  return (
    <Form
      type='Create'
      post={post}
      setPost={setPost}
      submitting={submitting}
      handleSubmit={createPrompt}
    />
  );
};

export default CreatePost;
