import React, { useState, useEffect } from "react"
import ComicList from "../components/comicList"
import logo from "../images/logo.svg"
import genius from  "../images/genius.svg"
import businessMan from "../images/businessman.svg"
import tactician from "../images/tactician.svg"
import engineer from "../images/engineer.svg"
import { 
  Section, 
  Header, 
  Logo, 
  NavItems, 
  MainAnchor, 
  HeaderCTA, 
  SectionHero, 
  LeftBodyCTA, 
  RightBodyCTA, 
  CopyCTA, 
  HeroCTAButton, 
  HeroImg,
  DescriptionSection,
  DescriptionTitle,
  DescriptionGrid,
  DescriptionImg,
  DescriptionRight,
  DescriptionColumn,
  DescriptionIcon,
  DescriptionIconTitle,
  DescriptionText,
  Footer
} from '../styles'
import heroImg from "../images/heroImg.png";

const md5 = require('md5');

// markup
const IndexPage = () => {

  const [comicCharacter, setComicCharacter] = useState('');

  const publicKey = (process.env.GATSBY_PUBLIC_KEY);
  const privateKey = (process.env.GATSBY_PRIVATE_KEY);

  useEffect(() => {
    async function fetchCharacterReult() {
      try {
        const ts = Date.now();
        const characterResult = await fetch(`https://gateway.marvel.com/v1/public/characters?` + new URLSearchParams({
          name: 'iron man',
          ts: ts,
          apikey: publicKey,
          hash: md5(ts + privateKey + publicKey)
        }));
        const json = await characterResult.json();
        setComicCharacter(json.data.results[0]);
        
      } catch (e) {
        console.error(e);
      }
    };

    fetchCharacterReult();
  }, [publicKey, privateKey]);

  return (
    <main>
      <Section>
        <Header>
          <Logo src={logo} />
          <NavItems>
            <MainAnchor href="#">Sign In</MainAnchor>
            <HeaderCTA>Sign Up</HeaderCTA>
          </NavItems>
        </Header>
        <SectionHero>
          <LeftBodyCTA>
            <CopyCTA>
              {comicCharacter.description}
            </CopyCTA>
            <HeroCTAButton>Get Started</HeroCTAButton>
          </LeftBodyCTA>
          <RightBodyCTA>
            <HeroImg src={heroImg} />
          </RightBodyCTA>
        </SectionHero>
      </Section>
      <DescriptionSection>
          <DescriptionTitle>
            Contrary to popular belief, he knows exactly what he's doing.
          </DescriptionTitle>
          <DescriptionGrid>
            {comicCharacter ? <DescriptionImg src={`${comicCharacter.thumbnail.path}.${comicCharacter.thumbnail.extension}`} /> : ''}
            <DescriptionRight>
              <DescriptionColumn>
                <DescriptionIcon src={genius} />
                <DescriptionIconTitle>
                  Super-Genius Intelligence
                </DescriptionIconTitle>
                <DescriptionText>
                  Tony Stark is far more than a mechanical engineering prodigy who 
                  graduated from the Massachusetts Institute of Technology with honors at the age of 17.
                </DescriptionText>
              </DescriptionColumn>
              <DescriptionColumn>
                <DescriptionIcon src={engineer} />
                <DescriptionIconTitle>
                  Master Engineer
                </DescriptionIconTitle>
                <DescriptionText>
                  He is an excellent engineer and mechanic capable of fixing almost any, if not all machinery.
                </DescriptionText>
              </DescriptionColumn>
              <DescriptionColumn>
                <DescriptionIcon src={businessMan} />
                <DescriptionIconTitle>
                  Master Businessman
                </DescriptionIconTitle>
                <DescriptionText>
                  Stark is extremely well-respected in the business world, able to command people's attentions when he speaks on economic matters.  
                  He has built up several multi-million dollar companies from virtually nothing.
                </DescriptionText>
              </DescriptionColumn>
              <DescriptionColumn>
                <DescriptionIcon src={tactician} />
                <DescriptionIconTitle>
                  Expert Tactician
                </DescriptionIconTitle>
                <DescriptionText>
                  He is a brilliant tactician capable of quickly formulating battle strategies and new plans if the situation changes, 
                  like being able to elaborate complex plans in order to defeat different enemies.
                </DescriptionText>
              </DescriptionColumn>
            </DescriptionRight>
          </DescriptionGrid>
      </DescriptionSection>
      <Footer>
        <ComicList 
          id={comicCharacter.id}
          publicKey={publicKey}
          privateKey={privateKey}
        />
      </Footer>
    </main>
  )
}

export default IndexPage
