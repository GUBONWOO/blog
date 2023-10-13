import Hero from '@/components/Hero';
import React from 'react';

const TITLE_CLASS = 'text-2xl font-bold text-gray-800 my-2';
export default function AboutPage() {
  return (
    <>
      <Hero />
      <section className='bg-gray-100 shadow-lg p-8 m-8 text-center'>
        <h2 className={TITLE_CLASS}>Who Am I?</h2>
        <p>
          개발자 <br />
          미경력
        </p>
        <h2 className={TITLE_CLASS}>Career</h2>
        <p>
          우리집 보안관 <br />
          백수 <br />
          놈팽이{' '}
        </p>
        <h2 className={TITLE_CLASS}>Skills</h2>
        <p>react, vue</p>
      </section>
    </>
  );
}
