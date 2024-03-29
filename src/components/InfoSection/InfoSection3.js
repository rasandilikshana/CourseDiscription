import React from 'react';
import { Container } from '../../globalStyles';
import {
  InfoSec,
  InfoRow,
  InfoColumn,
  TextWrapper,
  TopLine,
  Heading,
  Subtitle,
  ImgWrapper,
  Img,
  SocialMedia,
  SocialMediaWrap,
  SocialIcons,
  SocialIconLink
} from './InfoSection.elements';
import {
  FaFacebook,
  FaInstagram,
  FaYoutube,
  FaTwitter,
  FaLinkedin
} from 'react-icons/fa';

function InfoSection2({
  lightBg,
  topLine,
  lightTopLine,
  lightText,
  lightTextDesc,
  headline,
  description,
  img,
  alt,
  imgStart,
  start
}) {
  return (
    <>
      <InfoSec lightBg={lightBg}>
        <Container>
          <InfoRow imgStart={imgStart}>
            <InfoColumn>
              <TextWrapper>
                <Heading lightText={lightText}>{headline}</Heading>
                <TopLine lightTopLine={lightTopLine}>{topLine}</TopLine>
                <Subtitle lightTextDesc={lightTextDesc}>{description}</Subtitle>
                <SocialMedia>
                    <SocialMediaWrap>
                    <SocialIcons>
                        <SocialIconLink href='https://www.facebook.com/' target='_blank' aria-label='Facebook'>
                        <FaFacebook />
                        </SocialIconLink>
                        <SocialIconLink href='https://www.instagram.com/' target='_blank' aria-label='Instagram'>
                        <FaInstagram />
                        </SocialIconLink>
                        <SocialIconLink
                        href={
                            'https://www.youtube.com/'
                        }
                        rel='noopener noreferrer'
                        target='_blank'
                        aria-label='Youtube'
                        >
                        <FaYoutube />
                        </SocialIconLink>
                        <SocialIconLink href='https://twitter.com/' target='_blank' aria-label='Twitter'>
                        <FaTwitter />
                        </SocialIconLink>
                        <SocialIconLink href='https://linkedin.com/' target='_blank' aria-label='LinkedIn'>
                        <FaLinkedin />
                        </SocialIconLink>
                    </SocialIcons>
                    </SocialMediaWrap>
                </SocialMedia>
              </TextWrapper>
            </InfoColumn>
            <InfoColumn>
              <ImgWrapper start={start}>
                <Img src={img} alt={alt} />
              </ImgWrapper>
            </InfoColumn>
          </InfoRow>
        </Container>
      </InfoSec>
    </>
  );
}

export default InfoSection2;
