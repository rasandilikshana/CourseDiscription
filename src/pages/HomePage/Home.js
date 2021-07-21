import React from 'react';
import { homeObjOne, homeObjTwo, homeObjThree, homeObjFour } from './Data';
import { InfoSection, InfoSection2 , InfoSection3 , CourseIcons } from '../../components';

function Home() {
  return (
    <>
      <InfoSection {...homeObjOne} />
      <InfoSection2 {...homeObjThree} />
      <InfoSection2 {...homeObjTwo} />
      <CourseIcons />
      <InfoSection3 {...homeObjFour} />
    </>
  );
}

export default Home;
