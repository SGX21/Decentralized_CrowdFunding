import React, { useState, useContext } from 'react';
import { CrowdFundingContext } from '../Context/CrowdFunding.js';
import Menu from "../Components/Menu.jsx";

const NavBar = () => {
  const { currentAccount, connectWallet } = useContext(CrowdFundingContext);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuList = ["White Paper", "Projects", "Donation", "Members"];

  return (
    <div className="backgroundMain">
      <div className="px-4 py-6 max-w-screen-xl mx-auto md:px-8">
        <div className="flex items-center justify-between">
          <div className="flex items-center">
            <a
              href="/"
              aria-label='Company'
              title='Company'
              className="flex items-center mr-12 text-white"
            >
              <img src="crfd.png" alt="" className='w-20 h-20'/>
              <span className="ml-0 text-xl font-bold uppercase">
                CROWD FUNDING
              </span>
            </a>
            <ul className="hidden space-x-20 md:flex">
              {menuList.map((el, i) => (
                <li key={i + 1}>
                  <a
                    href="/"
                    aria-label='Our product'
                    title='Our product'
                    className="text-gray-300 hover:text-teal-400"
                  >
                    {el}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          {!currentAccount && (
            <ul className="hidden space-x-4 md:flex">
              <li>
                <button
                  onClick={() => connectWallet()}
                  className="px-6 py-2 text-white font-semibold bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300"
                  aria-label="Connect Wallet"
                  title="Connect Wallet"
                >
                  Connect Wallet
                </button>
              </li>
            </ul>
          )}
          <div className="md:hidden">
            <button
              aria-label='Open Menu'
              title="Open Menu"
              className="p-2 -mr-1 rounded-md focus:outline-none focus:ring"
              onClick={() => setIsMenuOpen(true)}
            >
              <Menu/>
            </button>
            {isMenuOpen && (
              <div className="absolute top-0 left-0 w-full">
                <div className="p-5 bg-white border rounded shadow-sm">
                  <div className="flex items-center justify-between mb-4">
                    <a
                      href="/"
                      aria-label="Company"
                      title='Company'
                      className="flex items-center"
                    >
                      <img src="crfd.png" alt="" className='w-10 h-10'/>
                      <span className="ml-2 text-xl font-semibold text-gray-800 uppercase">
                      CROWD FUNDING
                      </span>
                    </a>
                  </div>
                  <div>
                    <button
                      aria-label='Close Menu'
                      title="Close Menu"
                      className="p-2 rounded hover:bg-gray-200 focus:outline-none focus:ring"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {/* Add close icon or text */}
                    </button>
                  </div>
                </div>
                <nav>
                  <ul className="space-y-4">
                    {menuList.map((el, i) => (
                      <li key={i + 1}>
                        <a
                          href="/"
                          aria-label='Our Product'
                          title='Our Product'
                          className="font-medium text-gray-700 hover:text-purple-600"
                        >
                          {el}
                        </a>
                      </li>
                    ))}
                    <li>
                      <a
                        href="/"
                        className="flex items-center justify-center w-full h-12 px-6 font-semibold text-white bg-purple-600 rounded-md hover:bg-purple-700 focus:outline-none focus:ring focus:ring-purple-300"
                        aria-label='Sign up'
                        title='Sign up'
                      >
                        Connect Wallet
                      </a>
                    </li>
                  </ul>
                </nav>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default NavBar;
