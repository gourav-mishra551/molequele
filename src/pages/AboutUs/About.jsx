import TopHeader from '../../components/TopHeader/TopHeader'
import NavBar2 from '../../components/Navbar/Navbar2'
import ImageBackGround from '../../assets/ImageBackGround.svg'
import CountUp from 'react-countup';
import Footer2 from '../../components/Footer/Footer2';
import React from 'react';

const About = () => {
    React.useEffect(() => {
        window.scrollTo(0, 0);
      }, []);
    return (
        <div>
            <TopHeader />
            <NavBar2 />
            <div >
                <header className='headerAbout'>
                    <div className="w-auto sm:h-[195px] h-[168px] sm:bg-repeat-round rounded-b-[20px] " style={{ backgroundImage: `url(${ImageBackGround})` }}>
                        <div className=' pt-5 sm:pt-8 '>
                            <h1 className='text-white font-semibold text-[20px] sm:text-[32px] mt-4 sm:mt-8  w-auto  mx-auto flex justify-center' >About Us</h1>
                        </div>
                        <p className='font-[500] text-[16px] sm:text-[20px] mx-auto text-white w-auto flex justify-center mt-2 sm:mt-5 text-center sm:mb-0 mb-4' style={{ lineHeight: "32px", letterSpacing: "2%" }}>Need text let’s Discuss Get in touch & let us know how we can help Your Project </p>

                    </div>
                </header>
                <div className='flex sm:flex flex-col-reverse sm:flex-col'>
                    <div className="child1">
                        <div className="mission flex sm:flex-row flex-col-reverse mt-5 sm:mt-20">
                            <div className="lefts sm:w-[504px] w-[343px] max-w-[100%] mx-auto">
                                <h1 className='text-black font-semibold text-[20px] sm:text-[28px]' style={{ lineHeight: "31px" }}>OUR MISSION </h1>
                                <p className='font-normal text-[14px] sm:text-[17px] text-[#808080] mt-5' style={{ lineHeight: "26px" }}>Building an enterprise level site doesnt need nightmare or cost your thousands. Felix is purpose built for ease of use and completxability to create.</p>
                                <div className='flex mt-5'>
                                    <img src="./Tick.svg" alt="tick" />
                                    <p className='font-normal text-black text-[12px] sm:text-[17px] ml-5' style={{ lineHeight: "26px" }}>Posting to social media, blogs, and messengers</p>
                                </div>
                                <div className='flex mt-5'>
                                    <img src="./Tick.svg" alt="tick" />
                                    <p className='font-normal text-black text-[12px] sm:text-[17px] ml-5' style={{ lineHeight: "26px" }}>Working with images and videos</p>
                                </div>
                                <div className='flex mt-5'>
                                    <img src="./Tick.svg" alt="tick" />
                                    <p className='font-normal text-black text-[12px] sm:text-[17px] ml-5' style={{ lineHeight: "26px" }}>The Future of Writing Blog Articles</p>
                                </div>
                            </div>
                            <div className="sm:w-auto w-[343px] mx-auto sm:mt-0 mt-10">
                                <img src="./Imagetalk.svg" alt="persons" />
                            </div>
                        </div>
                        <div className="sm:w-[1198px] w-[343px] max-w-[100%] trust flex-col text-black font-semibold text-[20px] sm:text-[36px] sm:mt-20 mt-10  flex justify-center mx-auto  ">
                            <div className=' sm:w-[848px] w-[343px] mx-auto flex flex-col'>
                                <h1 className='sm:w-[848px] w-[334px] text-center max-w-[100%-40px] font-[600] text-[18px] sm:text-[36px] ' style={{ lineHeight: "47px", letterSpacing: "2%" }}>Businesses all over the world trust
                                </h1>
                                <h1 className='text-center text-[18px] sm:text-[36px]'>Buffer to build their brand</h1></div>
                            <div className='sm:mt-16 mt-4 grid grid-cols-2 md:grid-cols-4 sm:gap-x-28 gap-x-4 w-[1198px] max-w-[100%] mx-auto '>
                                <div className='sm:w-[205px] w-[151px] h-[92px] mx-auto'>
                                    <CountUp
                                        className="font-[mulish] years font-[700] text-[22px] sm:text-[50px] font-mulish flex justify-centre w-[90px] mx-auto sm:w-[205px] text-[#8D2ED1]"
                                        start={0}
                                        end={10}
                                        duration={2.75}
                                        useEasing={true}
                                        suffix='years'

                                    />
                                    <p className='font-[mulish] text-[#808080] font-[400] text-[14px] sm:text-[20px] flex justify-center' style={{ lineHeight: "30px" }}>In Business </p>
                                </div>
                                <div className='sm:w-[205px] w-[151px] h-[92px] mx-auto'>
                                    <CountUp
                                        className="font-[mulish] years font-[700] text-[22px] sm:text-[50px] font-mulish flex justify-center mx-auto text-center text-[#8D2ED1]"
                                        start={0}
                                        end={75000}
                                        duration={2.75}
                                        useEasing={true}
                                        suffix='+'

                                    />
                                    <p className='font-[mulish] text-[#808080] font-[400] sm:w-[205px] max-w-[100%] sm:text-[20px] text-[14px] text-center flex justify-center mx-auto' style={{ lineHeight: "30px" }}>Customers </p>
                                </div>
                                <div className='sm:w-[205px] w-[151px] h-[92px] mx-auto'>
                                    <CountUp
                                        className="font-[mulish] years font-[700] text-[22px] sm:text-[50px] font-mulish text-center flex justify-center mx-auto text-[#8D2ED1]"
                                        start={0}
                                        end={100}
                                        duration={2.75}
                                        useEasing={true}
                                        suffix='k+'

                                    />
                                    <p className='font-[mulish] text-[#808080] font-[400] sm:w-[215px] max-w-[100%] sm:text-[18px] text-[12px] text-center' style={{ lineHeight: "30px" }}>Monthly Blog Readers</p>
                                </div>
                                <div className='sm:w-[205px] w-[151px] h-[92px] mx-auto'>
                                    <CountUp
                                        className="font-[mulish] years font-[700] text-[22px] sm:text-[50px] font-mulish flex justify-center mx-auto w-[90px] sm:w-[205px] text-[#8D2ED1]"
                                        start={0}
                                        end={1.2}
                                        duration={1.75}
                                        useEasing={true}
                                        suffix='m+'

                                    />
                                    <p className='font-[mulish] text-[#808080] font-[400] text-[14px] sm:text-[20px] flex justify-center' style={{ lineHeight: "30px" }}>Social Followers</p>
                                </div>
                            </div>
                        </div>
                        {/*=================== values========================= */}
                        <div className='sm:w-[1199px] w-[318px] max-w-[100%] sm:h-[652px] h-auto mx-auto  sm:mt-20 mt-8 sm:mb-0 mb-20'>
                            <h1 className='flex justify-center font-semibold text-[18px] sm:text-[36px] text-black'>Our Values</h1>
                            <div className='w-[1199px] max-w-[100%] grid grid-cols-2 sm:gap-x-20 gap-x-10 md:grid-cols-3'>
                                <div className='sm:h-[326px] h-auto max-w-[100%]  hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                    <img className=' sm:h-auto sm:w-auto h-[30px] w-[30px] flex justify-center mt-10 mx-auto' src="./Icon.svg" alt="icon" />
                                    <h1 className='sm:w-[300px] mx-auto sm:mt-5 mt-1 sm:mb-5 mb-1 flex  justify-center font-[600] text-[12.5px] sm:text-[26px]' style={{ lineHeight: "12px" }}>Innovation</h1>
                                    <p className='sm:w-[300px] font-[400] mx-auto text-center text-[8.38px] sm:text-[17px] text-[#808080] font-[mulish]'>Building an enterprisedoesnt need nightmare or cost your thousands Felix is purpose built.</p>
                                </div>
                                <div className='sm:h-[326px] h-auto max-w-[100%] hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                    <img className='sm:h-auto sm:w-auto h-[30px] w-[30px] flex justify-center mx-auto mt-10' src="./Icon (1).svg" alt="icon" />
                                    <h1 className=' mx-auto sm:mt-5 mt-1 sm:mb-5 mb-1 flex  justify-center font-[600] text-[12.5px] sm:text-[26px]' style={{ lineHeight: "12px" }}>Growth</h1>
                                    <p className='sm:w-[300px] mx-auto font-[400] text-center text-[8.38px] sm:text-[17px] text-[#808080] font-[mulish]'>Building an enterprisedoesnt need nightmare or cost your thousands Felix is purpose built.</p>
                                </div>
                                <div className='sm:h-[326px] h-auto max-w-[100%] hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                    <img className='sm:h-auto sm:w-auto h-[30px] w-[30px] flex justify-center mx-auto mt-10' src="./Icon (2).svg" alt="icon" />
                                    <h1 className=' mx-auto sm:mt-5 mt-1 sm:mb-5 mb-1 flex  justify-center font-[600] text-[12.5px] sm:text-[26px]' style={{ lineHeight: "12px" }}>Ownership</h1>
                                    <p className='sm:w-[300px] mx-auto font-[400] text-center text-[8.38px] sm:text-[17px] text-[#808080] font-[mulish]'>Building an enterprisedoesnt need nightmare or cost your thousands Felix is purpose built.</p>
                                </div>
                                <div className='sm:h-[326px] h-auto max-w-[100%] hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                    <img className='sm:h-auto sm:w-auto h-[30px] w-[30px] flex justify-center mx-auto mt-10' src="./Icon (3).svg" alt="icon" />
                                    <h1 className=' mx-auto sm:mt-5 mt-1 sm:mb-5 mb-1 flex  justify-center font-[600] text-[12.5px] sm:text-[26px]' style={{ lineHeight: "12px" }}>Team Work</h1>
                                    <p className='sm:w-[300px] mx-auto font-[400] text-center text-[8.38px] sm:text-[17px] text-[#808080] font-[mulish]'>Building an enterprisedoesnt need nightmare or cost your thousands Felix is purpose built.</p>
                                </div>
                                <div className='sm:h-[326px] h-auto max-w-[100%] hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                    <img className='sm:h-auto sm:w-auto h-[30px] w-[30px] flex justify-center mx-auto mt-10' src="./Icon (4).svg" alt="icon" />
                                    <h1 className=' mx-auto sm:mt-5 mt-1 sm:mb-5 mb-1 flex  justify-center font-[600] text-[12.5px] sm:text-[26px]' style={{ lineHeight: "12px" }}>Commitment</h1>
                                    <p className='sm:w-[300px] mx-auto font-[400] text-center text-[8.38px] sm:text-[17px] text-[#808080] font-[mulish]'>Building an enterprisedoesnt need nightmare or cost your thousands Felix is purpose built.</p>
                                </div>
                                <div className='sm:h-[326px] h-auto max-w-[100%] hover:border hover:border-[#DCDCDC] hover:rounded-xl'>
                                    <img className='sm:h-auto sm:w-auto h-[30px] w-[30px] flex justify-center mx-auto mt-10' src="./Icon (5).svg" alt="icon" />
                                    <h1 className=' mx-auto sm:mt-5 mt-1 sm:mb-5 mb-1 flex  justify-center font-[600] text-[12.5px] sm:text-[26px]' style={{ lineHeight: "12px" }}>Positivity</h1>
                                    <p className='sm:w-[300px] mx-auto font-[400] text-center text-[8.38px] sm:text-[17px] text-[#808080] font-[mulish]'>Building an enterprisedoesnt need nightmare or cost your thousands Felix is purpose built.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="child2">
                        <div className='sm:w-[1198px] w-[343px] max-w-[100%] mx-auto sm:mt-20 mt-8 sm:mb-28 mb-0'>
                            <h1 className='sm:text-[28px] text-[18.3px] font-[500] ' style={{ lineHeight: "31px" }}>Automated Google Search Ads Autopilot</h1>
                            <p className='font-[400] sm:text-[20px] text-[14px] text-[#808080] sm:mt-10 mt-3' style={{ lineHeight: "30px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industrys standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                            </p>
                            <p className='font-[400] sm:text-[20px] text-[14px] text-[#808080] sm:mt-10 mt-3' style={{ lineHeight: "31px" }}>
                                remaining essentially unchanged. It was popularised in the 1960s with the release of Letrsheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                            </p>
                            <ul className='ml-5 '>
                                <li className='font-[400] sm:text-[20px] text-[14px] text-[#808080] mt-3 sm:mt-10 list-decimal'>Listen to what they say about you</li>
                                <li className='font-[400] sm:text-[20px] text-[14px] text-[#808080] mt-3 sm:mt-10 list-decimal'>Randomised words which dont look even slightly believable.</li>
                                <li className='font-[400] sm:text-[20px] text-[14px] text-[#808080] mt-3 sm:mt-10 list-decimal'>Lorem Ipsum generators on the Internet tend to repeat predefined chunks</li>
                                <li className='font-[400] sm:text-[20px] text-[14px] text-[#808080] mt-3 sm:mt-10 list-decimal'>Automate multiple scenarios and eliminate tedious tasks. </li>
                            </ul>
                            <p className='font-[400] sm:text-[20px] text-[14px] text-[#808080] mt-3 sm:mt-10' style={{ lineHeight: "31px" }}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industrys standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book.</p>
                        </div>
                    </div>
                </div>
            </div>
            <Footer2 />
        </div>
    )
}

export default About