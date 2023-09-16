import "./Indusrty.css"
const Industry = () => {
    return (
        <>
            <div className="pl-5 sm:pl-0 overflow-hidden">
                <h1 className="text-2xl font-medium sm:text-3xl mt-[4%] mb-[1%] sm:max-w-[100%-40px] sm:w-[1199px] m-auto w-[375px] max-w-[100%]" >Industry </h1>
                <div className="grid grid-cols-2 sm:grid-cols-6  sm:max-w-[100%-40px] sm:w-[1199px] m-auto w-[375px] max-w-[100%]  pt-5">
                    <div className="h-[158px] w-[163px] sm:w-auto sm:h-auto overflow-hidden mb-5">
                        <div className="containers">
                            <img className="mt-0 ml-0 mb-5 sm:w-[156px] sm:h-[208px] mr-0 sm:m-4 image overflow-hidden" src="./Frame 550.svg" alt="img1" />
                            <div className="bottom-right sm:top-[137px] top-[108px]">Pharma</div>
                        </div>
                    </div>
                    <div className="h-[158px] w-[163px] sm:w-auto sm:h-auto overflow-hidden">
                        <div className="containers">
                            <img className="mt-0 ml-0 mb-5 mr-0 sm:m-4 image" src="./Rectangle 28635.svg" alt="img2" />
                            <div className="bottom-right sm:top-[137px] top-[108px]">Agro Chemical</div>
                        </div>
                    </div>
                    <div className="h-[158px] w-[163px] sm:w-auto sm:h-auto overflow-hidden mb-5">
                        <div className="containers">
                            <img className="m-0 sm:m-4 image" src="./Rectangle 28636.svg" alt="img3" />
                            <div className="bottom-right  sm:top-[137px] top-[108px]">Cosmetics & Personal Care</div>
                        </div>
                    </div>
                    <div className="h-[158px] w-[163px] sm:w-auto sm:h-auto overflow-hidden">
                        <div className="containers">
                            <img className="m-0 sm:m-4 image" src="./Rectangle 28637.svg" alt="img5" />
                            <div className="bottom-right sm:top-[135px] top-[108px]">Nutrition & Supplements</div>
                        </div>
                    </div>
                    <div className="h-[158px] w-[163px] sm:w-auto sm:h-auto overflow-hidden">
                        <div className="containers overflow-hidden">
                            <img className="m-0 sm:m-4 image overflow-hidden" src="./Rectangle 28638.svg" alt="img6" />
                            <div className="bottom-right sm:top-[150px] top-[108px]">Plastics & Polymers</div>
                        </div>
                    </div>
                </div>
                {/* first =====================================>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

                <div className="flex justify-between flex-col-reverse mt-20 sm:mt-20 sm:flex sm:flex-row sm:max-w-[100%-40px] sm:w-[1199px] m-auto w-[375px] max-w-[100%] h-auto" >
                    <div className="left w-auto sm:w-[524px]" >
                        <h2 className="text-xl font-medium sm:text-3xl sm:leading-relaxed mt-5 sm:mt-0  sm:ml-0">Diverse Range of Specialty Chemicals</h2>
                        <p className="font-medium text-sm sm:text-lg whitespace-pre-wrap text-gray-500  tracking-normal mt-4  leading-loose sm:leading-loose  sm:ml-0 sm:mr-0 mr-5">Explore Molequle`s <span className="text-purple-600 leading-loose ">vast product portfolio,</span> ranging from APIs & Excipients in Pharma to Polymers in Plastics, encompassing a comprehensive range of industrial and specialty chemicals. <br />
                            Our efficient <span className="text-purple-600 leading-loose"> in-house formulation & rapid sampling
                                process </span> ensures swift turnaround. Upholding top-notch quality and safety, our products come with essential certifications and compliances, such as USP, IP, and other global standards.</p>
                    </div>
                    <div className="right ">
                        <img src="./Group 48718.png" alt="industry" />
                        <img className="absolute" src="./Group.svg" alt="png" style={{ left: "-1%", bottom: "-100%" }} />
                    </div>
                </div>

                {/* second  =================================================>>>>>>>>>>>>>>*/}

                <div className="flex justify-between flex-col mt-20 sm:flex sm:flex-row sm:max-w-[100%-40px] sm:w-[1199px] m-auto w-[375px] max-w-[100%] h-auto" >
                    <div className="left  ">
                        <img src="./Mask group.jpg" alt="mask group" />
                    </div>
                    <div className="right w-auto sm:w-[524px]  mt-10 sm:mt-1" >
                        <h2 className="text-xl font-medium sm:text-3xl sm:leading-relaxed mr-3 sm:mr-0 ">Reliable suppliers with consistent performance</h2>
                        <div className="flex flex-col sm:flex ">
                            <p className="font-medium text-sm sm:text-lg  text-gray-500  gap-3  mt-4 float-left leading-loose sm:leading-loose mr-5">Derisk your supply chain by leveraging our expertise in crossborder sourcing. Place your trust in Molequle to procure top-quality products from our esteemed network of suppliers.</p>
                            <ul className="grid grid-rows-4 sm:grid-rows-2 grid-flow-col text-gray-500 text-sm ml-6 font-medium gap-4 mt-6 list sm:text-lg">
                                <li>100% Quality Assurance</li>
                                <li> Competitive Pricing</li>
                                <li>Efficient lead times</li>
                                <li>Custom Manufacturing</li>
                            </ul>
                            <button className="float-left text-white text-sm sm:font-medium mt-5 ml-2 w-[81px] h-[51px] sm:h-[50px] sm:w-[122px]" style={{ backgroundColor: "rgba(141, 46, 209, 1)", borderRadius: "5px" }}>Explore</button>
                        </div>
                    </div>
                </div>

                {/* third =======================================================*/}

                <div className="flex justify-between flex-col-reverse  sm:mt-28 sm:flex sm:flex-row sm:max-w-[100%-40px] sm:w-[1253px] m-auto w-[375px] max-w-[100%] h-auto mt-20 sm:p-6" >
                    <div className="left w-auto sm:w-[524px] my-auto" >
                        <h2 className="text-xl  font-medium sm:text-3xl leading-relaxed sm:leading-relaxed sm:ml-0 mr-5 sm:mr-0">Credit support and post-sale service</h2>
                        <p className="font-medium text-sm sm:text-lg  whitespace-pre-wrap text-gray-500  gap-3 tracking-normal mt-4  sm:ml-0  sm:mr-0 leading-loose sm:leading-loose">Get <span className="text-purple-600">extended technical and non-technical support.</span>  Our post-sale service ensures all queries are promptly addressed by a dedicated team. Additionally, we offer reliable credit support options to facilitate seamless transactions and cultivate long-term partnerships.</p>
                    </div>
                    <div className="right">
                        <img className="sm:ml-16" src="./Group 48755.png" alt="industry" />
                        <img className="absolute " src="./group1.png" alt="png" style={{
                            right: "-0%", bottom: "-180%",
                        }} />
                    </div>
                </div>
            </div>
            {/* value chain ======================>>>>>>>>>>>>>>>>>>>>>>>>>> */}
            <div className="w-auto bg-purple-50 mt-10 sm:mt-28 h-auto pt-5 pl-5 pr-5 sm:pl-0 sm:pr-0 pb-5 overflow-hidden" style={{ height: "auto" }}>
                <div className="sm:max-w-[100%-40px] sm:w-[1199px] m-auto w-[375px] max-w-[100%]">
                    <h1 className="text-xl font-medium sm:text-3xl mr-[0.4rem]">Redefining <span className="underline-text">Speciality  Chemicals</span>  value chain!</h1>
                    <p className="font-normal leading-7 tracking-[1%] text-[16px]  text-[#6A6A6A] mr-0 sm:mr-[4rem] sm:text-lg whitespace-pre-wrap  gap-3  mt-4 " >Molequle is your trusted gateway to best manufacturers from China, India, and beyond to fulfill all your chemical needs. We provide innovative and market driven products across industries with end-to-end logistics support.</p>

                    <div className="grid grid-cols-1 sm:grid-cols-4 mt-10 mr-0 sm:mr-14">
                        {/* value chain first  card*/}
                        <div className="first w-auto sm:w-[265px]" style={{ height: "236px" }}>
                            <img src="./Group 487366.svg" alt="first" />
                            <h2 className="text-base sm:text-xl font-medium mt-5">Formulation</h2>
                            <p className="font-normal leading-7 tracking-[1%] text-[16px] text-black mr-4 sm:text-lg whitespace-pre-wrap  gap-3  mt-4 "> In-house formulation to ensure equivalent grades compatible to current process</p>
                        </div>
                        {/* value chain second card */}
                        <div className="second w-auto sm:w-[265px]" style={{ height: "236px" }}>
                            <img src="./Group 48733.svg" alt="second" />
                            <h2 className="text-base sm:text-xl font-medium mt-5">Production testing</h2>
                            <p className="font-normal leading-7 tracking-[1%] text-[16px] text-black mr-4 sm:text-lg whitespace-pre-wrap  gap-3  mt-4 ">100% quality assurance via our 3 step production & post-production testing</p>
                        </div>
                        {/* value chain third card */}
                        <div className="third w-auto sm:w-[265px]" style={{ height: "236px" }}>
                            <img src="./Group 48738.svg" alt="Third" />
                            <h2 className="text-base sm:text-xl font-medium mt-5">Logistics</h2>
                            <p className="font-normal leading-7 tracking-[1%] text-[16px] text-black mr-4 sm:text-lg whitespace-pre-wrap  gap-3  mt-4 ">Efficient & Cost-effective logistics for fast turnaround time </p>
                        </div>
                        {/* value chain fourth card */}
                        <div className="fourth w-auto sm:w-[265px]" style={{ height: "236px" }}>
                            <img src="./Group 48739.svg" alt="fourth" />
                            <h2 className="text-base sm:text-xl font-medium mt-5">Payment</h2>
                            <p className="font-normal leading-7 tracking-[1%] text-[16px] text-black mr-4 sm:text-lg whitespace-pre-wrap  gap-3  mt-4 ">Best payment terms along with Credit support for your growth. </p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="sm:max-w-[100%-40px] sm:w-[1199px] m-auto w-[375px] max-w-[100%] sm:mt-20 mt-10 pl-3 pr-3 sm:pl-0 sm:pr-0 overflow-hidden">
                <h1 className="text-xl sm:text-3xl font-medium pt-5 sm:pt-0"> <span className="underline-text">Uncompromising quality </span> with right compliances...</h1>
                <p className="font-normal leading-7 tracking-[1%] text-[15px] text-[#6A6A6A]  sm:text-lg whitespace-pre-wrap  gap-3  mt-4">From Indian & US Pharmacopoeia to Reach & Toy Safety, our vast suppliers network meets highly rigid and extensive regulatory compliances.  </p>
                <div className="grid grid-cols-3 gap-x-3 gap-y-3 sm:grid-cols-5 mt-10 sm:mt-10 mb-5 ">
                    <img src="./Group 48681.svg" alt="first" />
                    <img src="./Group 48682.svg" alt="secind" />
                    <img src="./Group 48683.svg" alt="thirs" />
                    <img src="./Group 48684.svg" alt="fourth" />
                    <img src="./Group 48685.svg" alt="fourth" />
                </div>
            </div>


        </>
    )
}

export default Industry