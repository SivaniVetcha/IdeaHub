import React from 'react';
import { Hero } from '../components/home/Hero';
import { RecommendedIdeas } from '../components/home/RecommendedIdeas';

export const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <RecommendedIdeas />
    </>
  );
};