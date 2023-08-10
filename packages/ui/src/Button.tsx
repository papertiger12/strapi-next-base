'use client';
import { Button as FbButton } from 'flowbite-react';

export const Button = () => {
  return <FbButton onClick={() => alert('boop')}>Boop</FbButton>;
};
