import React, { useState } from 'react';

const Hero = ({ createCampaign }) => {
  const [campaign, setCampaign] = useState({
    title: '',
    description: '',
    amount: '',
    deadline: '',
  });

  const createNewCampaign = async (e) => {
    e.preventDefault();
    try {
      const data = await createCampaign(campaign);
      // Do something with data if needed
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className='relative'>
      {/* Your JSX content */}
      <span className='coverLine'></span>
          <img src="back.jpg" alt="" className='absolute inset-0 object-cover w-full h-full' />

          <div className='relative bg-opacity-75 backgroundMain'>
            <div className='relative px-4 py-16 mx-auto overflow-hidden sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20'>
              <div className='flex flex-col items-center justify-between xl:flex-row'>
                <div className='w-fulll max-w-xl mb-12 xl:mb-0 xl:pr-16 xl:w-7/12'>
                  <h2 className='max-w-lg mb-6 font-sans text-xl font-bold tracking-tight text-white sm:text-5xl sm:leading-none'>
                    Sahitya Gupta <br className='hidden md:block'/>
                    Decentralized Crowd Funding
                  </h2>
                        <p className='max-w-xl mb-4 text-base text-gray-200 md:text-lg'>
                        One of the most remarkable aspects of crowdfunding is its 
                        democratizing nature. It empowers individuals from all walks 
                        of life to contribute to projects and causes that resonate with them, 
                        regardless of geographical constraints or financial backgrounds. 
                        </p>
                        <a href="/"
                            aria-label=""
                            className='inline-flex items-center font-semibold tracking-wider
                                transition-color duration-200 text-teal-accent-400
                                hover:text-teal-accent-700 text-gray-200'
                            >
                            Learn More^
                        </a>
                </div>

                <div className='w-full max-w-xl xl:px-8 xl:w-5/12'>
                    <div className='bg-white rounded shadow-2xl p-7 sm:p-10'>
                        <h3 className='mb-4 text-xl font-bold sm:p-10 sm:text-2xl text-center'>
                            Campaign
                        </h3>
                        <form>
                          <div className='mb-1 sm:mb-2'>
                                <label 
                                  htmlFor='firstname'
                                    className='inline-block mb-1 font-medium'
                                    >
                                      Title
                                </label>
                                <input 
                                    onChange={(e) => 
                                    setCampaign({
                                      ...campaign,
                                      title: e.target.value,
                                    })
                                  }
                                  placeholder='Title'
                                  required
                                  type="text"
                                  className="flex-grow w-full h-12 px-4 mb-2 transition
                                              duration-200 bg-white border border-gray-300 rounded
                                              shadow-sm appearance-none focus:border-deep-purple-accent-400
                                              focus:outline-none focus:shadow-outline"
                                  id="title"
                                  name="title"
                                  />
                          </div>
                          <div className='mb-1 sm:mb-2'>
                                <label 
                                  htmlFor='lastname'
                                  className='inline-block mb-1 font-medium'
                                >
                                  Description
                                </label>
                                <input 
                                    onChange={(e) => 
                                    setCampaign({
                                      ...campaign,
                                      description: e.target.value,
                                    })
                                  }
                                  placeholder='Description'
                                  required
                                  type="text"
                                  className="flex-grow w-full h-12 px-4 mb-2 transition
                                              duration-200 bg-white border border-gray-300 rounded
                                              shadow-sm appearance-none focus:border-deep-purple-accent-400
                                              focus:outline-none focus:shadow-outline"
                                  id="des"
                                  name="des"
                                  />
                          </div>
                          <div className='mb-1 sm:mb-2'>
                                <label 
                                  htmlFor='email'
                                  className='inline-block mb-1 font-medium'
                                >
                                  Target Amount
                                </label>
                                <input 
                                    onChange={(e) => 
                                    setCampaign({
                                      ...campaign,
                                      amount: e.target.value,
                                    })
                                  }
                                  placeholder='Amount'
                                  required
                                  type="number"
                                  className="flex-grow w-full h-12 px-4 mb-2 transition
                                              duration-200 bg-white border border-gray-300 rounded
                                              shadow-sm appearance-none focus:border-deep-purple-accent-400
                                              focus:outline-none focus:shadow-outline"
                                  id="amount"
                                  name="amount"
                                  />
                          </div>
                          <div className='mb-1 sm:mb-2'>
                                <label 
                                  htmlFor='deadline'
                                  className='inline-block mb-1 font-medium'
                                >
                                  Deadline
                                </label>
                                <input 
                                    onChange={(e) => 
                                    setCampaign({
                                      ...campaign,
                                      deadline: e.target.value,
                                    })
                                  }
                                  placeholder='date'
                                  required
                                  type="date"
                                  className="flex-grow w-full h-12 px-4 mb-2 transition
                                              duration-200 bg-white border border-gray-300 rounded
                                              shadow-sm appearance-none focus:border-deep-purple-accent-400
                                              focus:outline-none focus:shadow-outline"
                                  id="date"
                                  name="date"
                                  />
                          </div>

                          <div className='mt-4 mb-2 sm:mb-4'>
                                <button
                                  onClick={(e) => createNewCampaign(e)}
                                  type='submit'
                                  className="flex-grow w-full h-12 px-4 mb-2 transition
                                              duration-200 bg-white border border-gray-500 rounded
                                              shadow-sm appearance-none focus:border-deep-purple-accent-400
                                              focus:outline-none focus:shadow-outline"
                                  
                                  >
                                  Create Campaign
                                </button>
                          </div>
                          <p className='text-xs text-gray-600 sm:text-sm:text-sm'>
                            Create your campaign to raise fund
                          </p>


                          
                        </form>
                    </div>
                </div>
              </div>
            </div>
          </div>
    </div>
  );
};

export default Hero;
