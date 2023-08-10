'use client';
import Image from 'next/image';
import { Navbar as FbNavbar } from 'flowbite-react';

const logoDimension = 36;

export const Navbar = ({ text }: { text: string }) => {
  return (
    <FbNavbar fluid rounded>
      <FbNavbar.Brand href="https://flowbite-react.com">
        <Image
          alt="logo"
          className="mr-3 h-6 sm:h-9"
          src="/favicon.ico"
          width={logoDimension}
          height={logoDimension}
        />
        <span className="self-center whitespace-nowrap text-xl font-semibold dark:text-white">
          Flowbite React
        </span>
      </FbNavbar.Brand>
      <FbNavbar.Toggle />
      <FbNavbar.Collapse>
        <FbNavbar.Link active href="#">
          <p>Home</p>
        </FbNavbar.Link>
        <FbNavbar.Link href="#">
          <p>About</p>
        </FbNavbar.Link>
        <FbNavbar.Link href="#">Services</FbNavbar.Link>
        <FbNavbar.Link href="#">Pricing</FbNavbar.Link>
        <FbNavbar.Link href="#">Contact</FbNavbar.Link>
      </FbNavbar.Collapse>
    </FbNavbar>
  );
};
