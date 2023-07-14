import React from 'react';
import { IconContext } from 'react-icons/lib';
import { SiNodeDotJs , SiCss3 , SiJavascript , SiPython , SiReact , SiHtml5} from 'react-icons/si';

import {
  CourseIconsSection,
  CourseIconsWrapper,
  CourseIconsHeading,
  CourseIconsContainer,
  CourseIconsCard,
  CourseIconsCardInfo,
  CourseIconsCardIcon,
  CourseIconsCardPlan
} from './CourseIcons.elements';

function CourseIcons() {
  return (
    <IconContext.Provider value={{ color: '#a9b3c1', size: 64 }}>
      <CourseIconsSection>
        <CourseIconsWrapper>
          <CourseIconsHeading>What You'll Learn</CourseIconsHeading>
          <CourseIconsContainer>
            <CourseIconsCard to='/'>
              <CourseIconsCardInfo>
                <CourseIconsCardIcon>
                  <SiHtml5 />
                </CourseIconsCardIcon>
                <CourseIconsCardPlan>HTML</CourseIconsCardPlan>
              </CourseIconsCardInfo>
            </CourseIconsCard>
            <CourseIconsCard to='/'>
              <CourseIconsCardInfo>
                <CourseIconsCardIcon>
                  <SiCss3 />
                </CourseIconsCardIcon>
                <CourseIconsCardPlan>CSS</CourseIconsCardPlan>
              </CourseIconsCardInfo>
            </CourseIconsCard>
            <CourseIconsCard to='/'>
              <CourseIconsCardInfo>
                <CourseIconsCardIcon>
                  <SiJavascript />
                </CourseIconsCardIcon>
                <CourseIconsCardPlan>JavaScript</CourseIconsCardPlan>
              </CourseIconsCardInfo>
            </CourseIconsCard>
          </CourseIconsContainer>
          <CourseIconsContainer>
            <CourseIconsCard to='/'>
              <CourseIconsCardInfo>
                <CourseIconsCardIcon>
                  <SiReact />
                </CourseIconsCardIcon>
                <CourseIconsCardPlan>Reat</CourseIconsCardPlan>
              </CourseIconsCardInfo>
            </CourseIconsCard>
            <CourseIconsCard to='/'>
              <CourseIconsCardInfo>
                <CourseIconsCardIcon>
                  <SiNodeDotJs />
                </CourseIconsCardIcon>
                <CourseIconsCardPlan>Node JS</CourseIconsCardPlan>
              </CourseIconsCardInfo>
            </CourseIconsCard>
            <CourseIconsCard to='/'>
              <CourseIconsCardInfo>
                <CourseIconsCardIcon>
                  <SiPython />
                </CourseIconsCardIcon>
                <CourseIconsCardPlan>Python</CourseIconsCardPlan>
              </CourseIconsCardInfo>
            </CourseIconsCard>
          </CourseIconsContainer>
        </CourseIconsWrapper>
      </CourseIconsSection>
    </IconContext.Provider>
  );
}
export default CourseIcons;
