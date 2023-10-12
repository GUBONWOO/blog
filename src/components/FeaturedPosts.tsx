import React from 'react';
import PostGrid from './PostGrid';
import { getFeaturedPosts } from '@/service/posts';

export default async function FeaturedPosts() {
  const posts = await getFeaturedPosts();
  return (
    <>
      <section className='my-2'>
        <h2 className='text-2xl font-bold my-2'>Featured Posts</h2>
        <PostGrid posts={posts} />
      </section>
    </>
  );
}
