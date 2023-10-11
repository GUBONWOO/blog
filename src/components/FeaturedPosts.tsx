import React from 'react';
import PostGrid from './PostGrid';
import { getAllPosts } from '@/service/posts';

export default async function FeaturedPosts() {
  const posts = await getAllPosts();
  return (
    <>
      <section>
        <h2>Featured Posts</h2>
        <PostGrid posts={posts} />
      </section>
    </>
  );
}
