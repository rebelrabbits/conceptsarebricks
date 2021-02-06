import React, { useState, useEffect } from "react";
import { Link } from "gatsby";
import {
  Banner,
  Overlay,
  HeroContainer,
  Text,
  HomeBGContainer,
  HomeBG,
  Wrapper,
  BottomContainer,
} from "./styles";
import AnimatedBorder from "../AnimatedBorder";
import Agorist from "../../assets/svg/political/agorist.svg";
import All from "../../assets/svg/political/ALL.svg";
import Arrows from "../../assets/svg/political/Arrows.svg";
import AnCom from "../../assets/svg/political/AnCom.svg";
import Ballot from "../../assets/svg/political/ballot.svg";
import Democrat from "../../assets/svg/political/democrat.svg";
import Feminist from "../../assets/svg/political/feminist.svg";
import Gadsden from "../../assets/svg/political/gadsden.svg";
import Republican from "../../assets/svg/political/republican.svg";
import Info from "../../assets/svg/info.svg";
import { Fire, FireWrapper } from "../Fire";
import PleaseReadModal from "../Modal/PleaseRead";

const Hero = ({ type, title, infoIcon = false }) => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [activeIndex, setActiveIndex] = useState(null);
  const [activeBorderIndex, setActiveBorderIndex] = useState(null);

  const svgs = [
    Agorist,
    Democrat,
    Arrows,
    Ballot,
    All,
    Feminist,
    AnCom,
    Gadsden,
    Republican,
  ];

  const activateItem = () => {
    const newIndex = Math.floor(Math.random() * 9);
    setActiveIndex(newIndex === activeIndex ? newIndex + 1 : newIndex);
  };

  const activateBorder = () => {
    const newIndex = Math.floor(Math.random() * 9);
    setActiveBorderIndex(
      newIndex === activeBorderIndex ? newIndex + 1 : newIndex,
    );
  };

  useEffect(() => {
    activateBorder();
    const borderInterval = setInterval(() => {
      //every 2 seconds
      activateBorder();
    }, 2000);
    return () => clearInterval(borderInterval);
  }, []);

  useEffect(() => {
    activateItem();

    const interval = setInterval(() => {
      //every 4 seconds
      activateItem();
    }, 4000);
    return () => clearInterval(interval);
  }, []);
  return (
    <>
      <Banner type={type} role='banner'>
        {type !== "home" && <Overlay />}
        {type === "home" && (
          <HomeBGContainer>
            <Wrapper>
              <HomeBG>
                <svg className='hidden'>
                  <filter id='wavy'>
                    <feTurbulence
                      x='0'
                      y='0'
                      baseFrequency='0.009'
                      numOctaves='5'
                      seed='2'
                    >
                      <animate
                        attributeName='baseFrequency'
                        dur='60s'
                        values='0.02;0.005;0.02'
                        repeatCount='indefinite'
                      ></animate>
                    </feTurbulence>
                    <feDisplacementMap
                      in='SourceGraphic'
                      scale='30'
                    ></feDisplacementMap>
                  </filter>
                </svg>

                {svgs.map((Svg, index) => {
                  const isTop = Math.floor(Math.random() * 2) === 0;
                  return (
                    <div className='wrapper'>
                      <FireWrapper
                        key={Math.random() + index}
                        className={index === activeIndex ? "isActive" : ""}
                      >
                        <Fire />
                      </FireWrapper>
                      <div
                        className={
                          index === activeIndex ? "item isActive " : "item"
                        }
                      >
                        <AnimatedBorder
                          topRight={isTop}
                          isActive={index === activeBorderIndex}
                        />
                        <Svg />
                        {/*<Svg />
                       <Svg />
                    <Svg /> 
                    */}
                      </div>
                    </div>
                  );
                })}
              </HomeBG>
            </Wrapper>
          </HomeBGContainer>
        )}
        <HeroContainer>
          <Text>
            {type === "home" && (
              <>
                {/* <h2>welcome to</h2> */}
                <h1>Concepts are Bricks</h1>
                <p>
                  Navigating the influences in the libertarian space. Guarding
                  against bigotry and authoritarian entryism.
                </p>
              </>
            )}
            {type === "page" && <h1>{title}</h1>}
            {type === "blog" && <h1>{title}</h1>}
            {type === "entity" && (
              <h1>
                <Link to='/profile'>Profile</Link>
                <span>{title}</span>
              </h1>
            )}
            {type === "author" && (
              <h1>
                <Link to='/authors'>Authors</Link>
                <span>{title}</span>
              </h1>
            )}
          </Text>
        </HeroContainer>
        {infoIcon && (
          <BottomContainer>
            <button onClick={() => setIsModalOpen(true)}>
              <Info />
            </button>
          </BottomContainer>
        )}
      </Banner>
      {isModalOpen && (
        <PleaseReadModal
          forceRender={true}
          onClose={() => setIsModalOpen(false)}
        />
      )}
    </>
  );
};

export default Hero;
