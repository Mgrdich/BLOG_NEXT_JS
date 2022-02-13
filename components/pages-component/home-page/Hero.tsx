import {FC} from 'react';
import styled from "styled-components";
import Image from "next/image";

const HeroSection = styled.section`
  text-align: center;
  background-image: linear-gradient(to bottom,
  var(--color-grey-900),
  var(--color-grey-800));
  padding: var(--size-8) 0;
`;

const ImageContainer = styled.div`
  width: 300px;
  height: 300px;
  box-shadow: 0 1px 8px rgba(0, 0, 0, 0.2);
  border-radius: 50%;
  overflow: hidden;
  background-color: var(--color-grey-700);
  margin: auto;
`;

const ImageCmp = styled(Image)`
  object-fit: cover;
  object-position: top;
  width: 100%;
  height: 100%;
`;

const Header = styled.h1`
  font-size: var(--size-16);
  margin: var(--size-4) 0;
  color: var(--color-grey-300);
`;

const Paragraph = styled.p`
  font-size: var(--size-6);
  color: var(--color-grey-200);
  width: 90%;
  max-width: 40rem;
  margin: auto;
`;

const Hero: FC = () => {
    return (
       <HeroSection>
           <ImageContainer>
               <ImageCmp src="/images/site/profile.jpg"
                         alt="An image Showing Mgo"
                         width={300}
                         height={300}
               />
           </ImageContainer>
           <Header>Hi I am Mgo</Header>
           <Paragraph>
               I Do not know why i want to write Blogs but i always Do
           </Paragraph>
       </HeroSection>
    );
};

export default Hero;