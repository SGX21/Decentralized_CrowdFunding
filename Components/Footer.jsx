import React from 'react'

const Footer = () => {

  const productList = ["Market", "ERC20 Token", "Donation"];
  const contactList = [
    "guptasahitya2002@gmail.com",
    "12132004@nitkkr.ac.in",
    "9717094101",
    "Contact Us",
  ];
  const usefulLink = ["Home", "About Us", "Company Bio"]
  return (
    <footer className='text-center text-white backgroundMain lg:text-left'>
      <div className="mx-6 py-10 text-center md:text-left">
        <div className="grid-1 grid gap-10 md:grid-cols-2 lg:grid-cols-4">
            <div className=''>
                <h6 className='text-xl mb-5 flex items-center justify-center font-bold uppercase md:justify-start'>
                क्राउडफंडिंग
                </h6>
              <p className="text-gray-300">
              Crowdfunding is a method of raising funds for a project, product, or cause by collecting small amounts of money from a large number of people, typically via the internet.It's a way to pool together financial contributions from a diverse group of individuals, often referred to as the "crowd," to support a specific initiative.
              </p>
            </div>

            <div className=''>
              <h6 className='text-xl mb-7 flex items-center justify-center font-bold uppercase md:justify-start'>
                 Products
              </h6>
              {productList.map((el,i) =>(
                <p className='mb-5 text-gray-300' key={i+1}>
                  <a href="#!">{el}</a>
                </p>
              ))}
            </div>

            <div className=''>
              <h6 className='text-xl mb-7 flex items-center justify-center font-bold uppercase md:justify-start'>
                Useful Links
              </h6>
                {usefulLink.map((el,i) => (
                  <p className='mb-5 text-gray-300' key={i+1}>
                    <a href="#!">{el}</a>
                  </p>
                ))}
            </div>
            <div>
              <h6 className='text-xl mb-5 flex items-center justify-center font-bold uppercase md:justify-start'>
                  Contact
              </h6>
              {contactList.map((el,i) =>(
                <p className='mb-5 text-gray-300' key={i+1}>
                  <a href="#!">{el}</a>
                </p>
                ))}
            </div>
        </div>
      </div>
      <div className='backgroundMain  text-center'>
                <span>
                 © 2023 Copyright: Sahitya Gupta
                </span>
      </div>
    </footer>
  )
}

export default Footer