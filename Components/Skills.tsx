import React from 'react';
import SkillsItems from './SkillsItems';
import SkillsLanguage from './SkillsLanguage';

const Skills = () => {
  return (
    <div className="pt=[4rem] md:pt-[6rem] pb-[5rem] bg-[#09101a]">
        <h1 className='heading'>
            Education & <span className='text-yellow-400'>Skills</span>
        </h1>
        <div className='w-[80%] mx-auto pt-[4rem] md-pt[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center'>
            <div>
                <SkillsItems title="React Developer" year="2014 - 2018" />
                <SkillsItems  title="MERN Stack Developer" year="2018 - 2020"/>
                <SkillsLanguage 
                skill1="HTML"
                skill2="CSS"
                skill3="Javascript"
                level1="w-[91%]"
                level2="w-[88%]"
                level3="w-[80%]"
                />
            </div>
            <div>
                <SkillsItems title="Next JS Developer" year="2021 - 2022"/>
                <SkillsItems title="Node JS Developer" year="2022 - 2023"/>
                <SkillsLanguage 
                skill1="React Js"
                skill2="Next Js"
                skill3="Typescript"
                level1="w-[81%]"
                level2="w-[78%]"
                level3="w-[60%]"
                />
            </div>
        </div>
    </div>
  )
};

export default Skills;