import React from 'react';
import { homeObjThree} from './Data';
import {InfoSection2} from '../../components';

function Whatis() {
  return (
    <>
      <InfoSection2 {...homeObjThree} />
    </>
  );
}

export default Whatis;
