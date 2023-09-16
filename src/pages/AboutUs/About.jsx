import TopHeader from '../../components/TopHeader/TopHeader'
import NavBar from '../../components/Navbar/Navbar'
import Image from '../../assets/Image.svg';
import CountUp from 'react-countup';
import Footer2 from '../../components/Footer/Footer2';

const About = () => {
    return (
        <div>
            <TopHeader />
            <NavBar />
            <div>
                <header className='headerAbout'>
                    <div className="w-auto h-[195px] rounded-b-[20px] " style={{ backgroundImage: `url(${Image})` }}>
                        <div className=' pt-5 sm:pt-8 '>
                            <h1 className='text-white font-semibold text-[20px] sm:text-[32px] mt-8  w-auto  mx-auto flex justify-center' >About Us</h1>
                        </div>
                        <p className='font-[500] text-[20px] mx-auto text-white w-auto flex justify-center mt-5' style={{ lineHeight: "32px", letterSpacing: "2%" }}>Need text let’s Discuss Get in touch & let us know how we can help Your Project </p>

                    </div>
                    <div className="mission flex flex-row mt-20">
                        <div className="lefts w-[504px] max-w-[100%]">
                            <h1 className='text-black font-semibold text-[28px]' style={{ lineHeight: "31px" }}>OUR MISSION </h1>
                            <p className='font-normal text-[17px] text-[#808080] mt-5' style={{ lineHeight: "26px" }}>Building an enterprise level site doesnt need nightmare or cost your thousands. Felix is purpose built for ease of use and completxability to create.</p>
                            <div className='flex mt-5'>
                                <img src="./Tick.svg" alt="tick" />
                                <p className='font-normal text-black text-[17px] ml-5' style={{ lineHeight: "26px" }}>Posting to social media, blogs, and messengers</p>
                            </div>
                            <div className='flex mt-5'>
                                <img src="./Tick.svg" alt="tick" />
                                <p className='font-normal text-black text-[17px] ml-5' style={{ lineHeight: "26px" }}>Working with images and videos</p>
                            </div>
                            <div className='flex mt-5'>
                                <img src="./Tick.svg" alt="tick" />
                                <p className='font-normal text-black text-[17px] ml-5' style={{ lineHeight: "26px" }}>The Future of Writing Blog Articles</p>
                            </div>
                        </div>
                        <div className="rights">
                            <img src="./Imagetalk.svg" alt="persons" />
                        </div>
                    </div>
                    <div className="w-[1198px] max-w-[100%] trust flex-col text-black font-semibold text-[20px] sm:text-[36px] mt-20 mx-auto flex justify-center  ">
                        <div className=' w-[848px]  mx-auto flex flex-col'>
                            <h1 className='w-[848px] font-[600] text-[36px] mx-auto flex  justify-center' style={{ lineHeight: "47px", letterSpacing: "2%" }}>Businesses all over the world trust
                            </h1>
                            <h1 className='flex justify-center'>Buffer to build their brand</h1></div>
                        <div className='mt-16 grid grid-cols-2 md:grid-cols-4 gap-x-28 w-[1198px] max-w-[100%] mx-auto '>
                            <div className='w-[205px] h-[92px] ml-10'>
                                <CountUp
                                    className=" years font-[700] text-[50px] font-mulish flex justify-centre w-[205px] text-[#8D2ED1]"
                                    start={0}
                                    end={10}
                                    duration={2.75}
                                    useEasing={true}
                                    suffix='years'

                                />
                                <p className='text-[#808080] font-[400] text-[20px] flex justify-center' style={{ lineHeight: "30px" }}>In Business </p>
                            </div>
                            <div className='w-[205px] h-[92px] ml-10'>
                                <CountUp
                                    className=" years font-[700] text-[50px] font-mulish flex justify-centre w-[205px] text-[#8D2ED1]"
                                    start={0}
                                    end={75000}
                                    duration={2.75}
                                    useEasing={true}
                                    suffix='+'

                                />
                                <p className='text-[#808080] font-[400] text-[20px] flex justify-center' style={{ lineHeight: "30px" }}>Customers </p>
                            </div>
                            <div className='w-[215px] h-[92px] ml-10'>
                                <CountUp
                                    className=" years font-[700] text-[50px] font-mulish  flex justify-center w-[205px] mx-auto text-[#8D2ED1]"
                                    start={0}
                                    end={100}
                                    duration={2.75}
                                    useEasing={true}
                                    suffix='k+'

                                />
                                <p className='text-[#808080] font-[400]  max-w-[100%] text-[20px] flex justify-center' style={{ lineHeight: "30px" }}>Monthly Blog Readers</p>
                            </div>
                            <div className='w-[205px] h-[92px] ml-10'>
                                <CountUp
                                    className=" years font-[700] text-[50px] font-mulish flex justify-center w-[205px] text-[#8D2ED1]"
                                    start={0}
                                    end={1.2}
                                    duration={2.75}
                                    useEasing={true}
                                    suffix='m+'

                                />
                                <p className='text-[#808080] font-[400] text-[20px] flex justify-center' style={{ lineHeight: "30px" }}>Social Followers</p>
                            </div>
                        </div>
                    </div>
                    {/*=================== values========================= */}
                    <div className='w-[1199px] max-w-[100%] h-[652px] mx-auto  mt-20'>
                        <h1 className='flex justify-center font-semibold text-[36px] text-black'>Our Values</h1>
                        <div className='w-[1199px] max-w-[100%] grid grid-cols-2 md:grid-cols-3'>
                            <div className='h-[326px] max-w-[100%]  hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                <img className='flex justify-center mt-10 mx-auto' src="./Icon.svg" alt="icon" />
                                <h1 className='w-[300px] mx-auto mt-5 mb-5 flex  justify-center font-[600] text-[26px]' style={{ lineHeight: "28px" }}>Innovation</h1>
                                <p className='w-[300px] mx-auto text-center text-[#808080]'>Building an enterprisedoesnt need nightmare or cost your thousands Felix is purpose built.</p>
                            </div>
                            <div className='h-[326px] max-w-[100%] hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                <img className='flex justify-center mx-auto mt-10' src="./Icon (1).svg" alt="icon" />
                                <h1 className='w-[300px] mx-auto mt-5 mb-5 flex  justify-center font-[600] text-[26px]' style={{ lineHeight: "28px" }}>Growth</h1>
                                <p className='w-[300px] mx-auto text-center text-[#808080]'>Building an enterprisedoesnt need nightmare or cost your thousands Felix is purpose built.</p>
                            </div>
                            <div className='h-[326px] max-w-[100%] hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                <img className='flex justify-center mx-auto mt-10' src="./Icon (2).svg" alt="icon" />
                                <h1 className='w-[300px] mx-auto mt-5 mb-5 flex  justify-center font-[600] text-[26px]' style={{ lineHeight: "28px" }}>Ownership</h1>
                                <p className='w-[300px] mx-auto text-center text-[#808080]'>Building an enterprisedoesnt need nightmare or cost your thousands Felix is purpose built.</p>
                            </div>
                            <div className='h-[326px] max-w-[100%] hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                <img className='flex justify-center mx-auto mt-10' src="./Icon (3).svg" alt="icon" />
                                <h1 className='w-[300px] mx-auto mt-5 mb-5 flex  justify-center font-[600] text-[26px]' style={{ lineHeight: "28px" }}>Team Work</h1>
                                <p className='w-[300px] mx-auto text-center text-[#808080]'>Building an enterprisedoesnt need nightmare or cost your thousands Felix is purpose built.</p>
                            </div>
                            <div className='h-[326px] max-w-[100%] hover:border hover:rounded-xl hover:border-[#DCDCDC]'>
                                <img className='flex justify-center mx-auto mt-10' src="./Icon (4).svg" alt="icon" />
                                <h1 className='w-[300px] mx-auto mt-5 mb-5 flex  justify-center font-[600] text-[26px]' style={{ lineHeight: "28px" }}>Commitment</h1>
                                <p className='w-[300px] mx-auto text-center text-[#808080]'>Building an enterprisedoesnt need nightmare or cost your thousands Felix is purpose built.</p>
                            </div>
                            <div className='h-[326px] max-w-[100%] hover:border hover:border-[#DCDCDC] hover:rounded-xl'>
                                <img className='flex justify-center mx-auto mt-10' src="./Icon (5).svg" alt="icon" />
                                <h1 className='w-[300px] mx-auto mt-5 mb-5 flex  justify-center font-[600] text-[26px]' style={{ lineHeight: "28px" }}>Positivity</h1>
                                <p className='w-[300px] mx-auto text-center text-[#808080]'>Building an enterprisedoesnt need nightmare or cost your thousands Felix is purpose built.</p>
                            </div>
                        </div>
                    </div>
                </header>
                <div className='w-[1198px] max-w-[100%] mx-auto mt-20 mb-28'>
                    <h1 className='text-[28px] font-[500] ' style={{lineHeight:"31px"}}>Automated Google Search Ads Autopilot</h1>
                        <p className='font-[400] text-[20px] text-[#808080] mt-10' style={{lineHeight:"30px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industrys standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting.
                    </p>
                    <p className='font-[400] text-[20px] text-[#808080] mt-10' style={{lineHeight:"31px"}}>
                        remaining essentially unchanged. It was popularised in the 1960s with the release of Letrsheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
                    </p>
                    <ul className='ml-5 '>
                        <li className='font-[400] text-[20px] text-[#808080] mt-10 list-decimal'>Listen to what they say about you</li>
                        <li className='font-[400] text-[20px] text-[#808080] mt-10 list-decimal'>Randomised words which dont look even slightly believable.</li>
                        <li className='font-[400] text-[20px] text-[#808080] mt-10 list-decimal'>Lorem Ipsum generators on the Internet tend to repeat predefined chunks</li>
                        <li className='font-[400] text-[20px] text-[#808080] mt-10 list-decimal'>Automate multiple scenarios and eliminate tedious tasks. </li>
                    </ul>
                    <p className='font-[400] text-[20px] text-[#808080] mt-10' style={{lineHeight:"31px"}}>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum been the industrys standard dummy text ever since the 1500s, when an unknown printegalley of type and scrambled it to make a type specimen book.</p>
                </div>
            </div>
            <Footer2/>
        </div>
    )
}

export default About