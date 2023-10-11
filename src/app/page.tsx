import FeaturedPosts from '@/components/FeaturedPosts';
import Hero from '@/components/Hero';
import Image from 'next/image';

export default function HomePage() {
  return (
    <>
      <section className='bg-gray-500'>Main</section>
      <Hero />
      <FeaturedPosts />
    </>
  );
}
