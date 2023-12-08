import Lottie from 'react-lottie';
import { Option1, Option2, Option3, Option4, Option5 } from '../../../lotties/lotties';
import { useState } from 'react';

const tabs = [
    { content: 'now' },
    { content: 'from 22 to 23' },
    { content: 'from 18 to 22' },
    { content: 'from 1 to 18' },
];

const About = () => {
    const [activeTab, setActiveTab] = useState<number>(0);
    
    const handleTabClick = (index: number) => {
        setActiveTab(index);
    };

    return (
        <section id='about'>
            <div className="container h-full">
                <div className="heading-section mx-auto">
                    <span className="z-10 relative">About me</span>
                </div>
                <div className='grid grid-cols-2 h-full place-items-center overflow-hidden'>
                    <div className="overflow-hidden h-[300px] grid place-items-center">
                        <div className="mx-auto relative w-3/5">
                            <div className="bg-greyBold p-4 text-white">
                                I am an active, energetic person with good ability to learn and absorb knowledge. Have soft skills in communication and teamwork, always want to learn new things and bring value to themselves and life.
                            </div>
                            <div className="vertical-dashed !left-[-20px]"></div>
                            <div className="vertical-dashed !right-[-20px]"></div>
                            <div className="horizontal-dashed !top-[-20px]"></div>
                            <div className="horizontal-dashed !bottom-[-20px]"></div>
                        </div>
                    </div>

                    <div className="grid gap-4 place-items-center w-full">
                        <div className="max-w-[500px] w-full">
                            <div className='font-medium'>UX/UI</div>
                            <div className="range-value"></div>
                            <input id="range" type="range" min="0" max="100" value="25" step="1" />
                        </div>
                        <div className="max-w-[500px] w-full">
                            <div className='font-medium'>Front End</div>
                            <div className="range-value"></div>
                            <input id="range" type="range" min="0" max="100" value="40" step="1" />
                        </div>
                        <div className="max-w-[500px] w-full">
                            <div className='font-medium capitalize'>Scrum Agile</div>
                            <div className="range-value"></div>
                            <input id="range" type="range" min="0" max="100" value="30" step="1" />
                        </div>
                    </div>
                </div>
                <div className="flex mt-10">
                    <div className="max-w-[300px] w-full">
                        <div className="w-full p-4 font-bold text-center">
                            {activeTab === 0 ? 'I am ...' : 'When i was ... years old'}
                        </div>
                        <div className="grid place-items-center">
                            <div className="timeline relative">
                                {tabs.map((tab, index) => (
                                    <div
                                    key={index}
                                    className={`w-full max-w-[150px] p-4 relative timeline-dot cursor-pointer my-1 last:mb-0 first:mt-0 ${
                                        index === activeTab ? 'active' : ''
                                    }`}
                                    onClick={() => handleTabClick(index)}
                                    >
                                    <span className="pl-2 z-10 relative text-greySemiBold">{tab.content}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                    <div className="w-full px-4 relative overflow-hidden">
                        <div className="vertical-dashed !left-[60px]"></div>
                        <div className="vertical-dashed"></div>
                        <div className="vertical-dashed !right-[60px]"></div>
                        <div className="horizontal-dashed !top-[40px]"></div>
                        <div className="horizontal-dashed !top-1/2 translate-y-1/2"></div>
                        <div className="horizontal-dashed !bottom-[40px]"></div>
                        {activeTab === 0 && 
                        <div className="grid grid-cols-2 place-items-center">
                            <div className='grayscale'>
                                <Lottie 
                                    options={Option1}
                                    height={280}
                                    width={"100%"}
                                />
                            </div>
                            <div className='drop-shadow-xl max-w-[450px] w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat at dolores a dolor dolorem, maxime similique suscipit odio eaque ipsa ducimus tempore qui, necessitatibus commodi unde, veniam sapiente debitis?</div>
                        </div>}
                        {activeTab === 1 && 
                        <div className="grid grid-cols-2 place-items-center">
                            <div className='grayscale'>
                                <Lottie 
                                    options={Option2}
                                    height={280}
                                    width={"100%"}
                                />
                            </div>
                            <div className='drop-shadow-xl max-w-[450px] w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat at dolores a dolor dolorem, maxime similique suscipit odio eaque ipsa ducimus tempore qui, necessitatibus commodi unde, veniam sapiente debitis?</div>
                        </div>}
                        {activeTab === 2 && 
                        <div className="grid grid-cols-2 place-items-center">
                            <div className='grayscale'>
                                <Lottie 
                                    options={Option3}
                                    height={280}
                                    width={"100%"}
                                />
                            </div>
                            <div className='drop-shadow-xl max-w-[450px] w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat at dolores a dolor dolorem, maxime similique suscipit odio eaque ipsa ducimus tempore qui, necessitatibus commodi unde, veniam sapiente debitis?</div>
                        </div>}
                        {activeTab === 3 && 
                        <div className="grid grid-cols-2 place-items-center">
                            <div className='flex-none grayscale'>
                                <Lottie 
                                    options={Option5}
                                    height={280}
                                    width={"100%"}
                                />
                            </div>
                            <div className='drop-shadow-xl max-w-[450px] w-full'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur placeat at dolores a dolor dolorem, maxime similique suscipit odio eaque ipsa ducimus tempore qui, necessitatibus commodi unde, veniam sapiente debitis?</div>
                        </div>}
                    </div>
                </div>
            </div> 
        </section>
    );
};

export default About;