import React, { useState } from 'react';
import { Container, Logo, LogoutBtn } from '../index';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';

function Header() {
  const authStatus = useSelector((state) => state.auth.status);
  const navigate = useNavigate();
  const [isOpen, setIsOpen] = useState(false);
  
  const navItems = [
    {
      name: 'HOME',
      slug: "/",
      active: true,
    }, 
    {
      name: 'ABOUT',
      slug: "/about",
      active: true,
    }, 

    {
      name: "LOGIN",
      slug: "/login",
      active: !authStatus,
    },
    {
      name: "SIGN UP",
      slug: "/signup",
      active: !authStatus,
    },
    {
      name: "ALL POSTS",
      slug: "/all-posts",
      active: authStatus,
    },
    {
      name: "ADD POST",
      slug: "/add-post",
      active: authStatus,
    },
  ];

  return (
    <header className='py-3 shadow bg-sky-900'>
      <Container>
        <nav className='flex items-center justify-between'>
          <div className='mr-4'>
            <Link to='/'>
              <Logo width='70px' />
            </Link>
          </div>
          <div className='mt-12'>
            <h3 className='style-sans font-semibold text-xl text-white'>
              Enlighten Corner
            </h3>
          </div>
          <div className='block lg:hidden'>
            <button onClick={() => setIsOpen(!isOpen)} className='text-white focus:outline-none'>
              <svg className='w-6 h-6' fill='none' stroke='currentColor' viewBox='0 0 24 24' xmlns='http://www.w3.org/2000/svg'>
                <path strokeLinecap='round' strokeLinejoin='round' strokeWidth='2' d={!isOpen ? 'M4 6h16M4 12h16M4 18h16' : 'M6 18L18 6M6 6l12 12'}></path>
              </svg>
            </button>
          </div>
          <ul className={`flex-col lg:flex-row lg:flex ml-auto ${isOpen ? 'flex' : 'hidden'} lg:flex`}>
            {navItems.map((item) =>
              item.active ? (
                <li key={item.name} className='lg:ml-4'>
                  <button
                    onClick={() => navigate(item.slug)}
                    className='inline-block px-6 text-lg text-white font-bold py-2 duration-200 hover:text-sky-500 rounded-full'
                  >
                    {item.name}
                  </button>
                </li>
              ) : null
            )}
            {authStatus && (
              <li className='lg:ml-4'>
                <LogoutBtn />
              </li>
            )}
          </ul>
        </nav>
      </Container>
    </header>
  );
}

export default Header;
