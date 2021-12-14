import styled from "styled-components"

const device = {
    mobile: '(max-width: 375px)',
    tablet: '(max-width: 950px)',
    desktop: '(max-width: 1440px)'
}

export const Section = styled.section`

    box-sizing: border-box;
    background-image: linear-gradient(154deg, #CC3332 30%, #EA8D33 80%, #FFCC33 127%, #BDBAFA 127%);
    min-height: 858px;
    width: 100vw;
    clip-path: polygon(0 0, 100% 0, 100% 100%, 0 75%);
    padding: 54px 100px;

    @media ${device.desktop} {
        padding: 54px 80px;
    }

    @media ${device.tablet}{
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 81%);
    }

    @media ${device.mobile}{
        padding: 25px 20px;
        min-height: 800px;
        clip-path: polygon(0 0, 100% 0, 100% 100%, 0 95%);
    }
`

export const Header = styled.header`
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: start;
`
export const Logo = styled.img`
    @media ${device.tablet}{
        height: 60px;
    }

    @media ${device.mobile} {
        height: 40px;
    }
`

export const NavItems = styled.nav`
    display: flex;
    width: 40%;
    justify-content: end;
    align-items: center
`

export const MainAnchor = styled.a`
    color: #FFFFFF;
    text-decoration: none;

    @media ${device.mobile} {
        margin-right: 10px
    }
`

export const HeaderCTA = styled.button`
    margin-left: 10%;
    padding: 10px 30px;
    background: #F4BC00;
    border-radius: 3px;
    color: #FFFFFF;
    filter: drop-shadow(3px 4px 9px rgba(255, 255, 255, 0.157043));
    border: none;
    cursor: pointer;

    @media ${device.mobile} {
        padding: 5px 14px;
        margin-left: 0;
    }
`

export const SectionHero = styled.section`
    display: flex;
    flex-direction: row;
    width: 100%;

    @media ${device.mobile} {
        flex-direction: column-reverse;
    }
`

export const LeftBodyCTA = styled.div`
    width: 707px;
    margin-top: 5%;

    @media ${device.mobile} {
        width: inherit;
        margin-top: 0;
        display: flex;
        flex-direction: column;
    }
`
export const CopyCTA = styled.p`
    color: #FFFFFF;
    font-size: 24px;
    letter-spacing: 0;
    line-height: 33px;

    @media ${device.tablet}{
        font-size: 20px;
    }

    @media ${device.mobile} {
        text-align: center;
        font-size: 16px;
    }
`

export const HeroCTAButton = styled.button`
    background: conic-gradient(from 90deg at 50% 50%, #F4BC00 -74.92deg, #CC3332 35.5deg, #CC3332 162.29deg, #F4BC00 285.08deg, #CC3332 395.5deg);
    border-radius: 5px;
    box-shadow: 3px 4px 9px 0 rgba(255,255,255,0.16);
    height: 72px;
    width: 320px;
    border: none;
    margin-top: 10%;
    cursor: pointer;

    font-size: 24px;
    color: #FFFFFF;
    letter-spacing: 0;
    text-align: center;

    @media ${device.tablet}{
        margin-top: 5%;
        height: 60px;
        width: 180px;
    }

    @media ${device.mobile} {
        margin-top: 0;
        height: 45px;
        width: 200px;
        background: #F4BC00;
        font-size: 16px;
        align-self: center;
    }

`

export const RightBodyCTA = styled.div`
    margin-left: 15%;

    @media ${device.tablet}{
        margin-left: 8%;
    }
`
export const HeroImg = styled.img`
    height: 580px;
    width: 420px;

    @media ${device.tablet}{
        height: 314px;
        width: 230px;
        margin-top: 30px
    }
`

export const DescriptionSection = styled.section`
    display: flex;
    flex-direction: column;
    padding: 54px 100px;
    box-sizing: border-box;
    margin-bottom: 115px;

    @media ${device.desktop} {
        padding: 54px 80px;
        margin-bottom: 0;
    }

    @media ${device.mobile} {
        padding: 0 20px;
        margin-bottom: 0;
    }
`
export const DescriptionTitle = styled.h3`
    font-size: 32px;
    color: #030504;
    letter-spacing: 0;
    align-self: center;

    @media ${device.tablet} {
        font-size: 26px;
        text-align: center;
    }

    @media ${device.mobile} {
        font-size: 24px;
        color: #000302;
        letter-spacing: 0;
        line-height: 36px;
        width: 200px;
    }
`

export const DescriptionGrid = styled.div`
    display: grid;
    grid-template-columns: 1fr 2fr;
    column-gap: 67px;

    @media ${device.tablet} {
        grid-template-columns: 1fr;
        justify-items: center;
        column-gap: 0;
        row-gap: 50px;
    }
`

export const DescriptionImg = styled.img`
    height: 471px;
    width: 471px;

    @media ${device.tablet} {
        height: 400px;
        width: 400px;
    }

    @media ${device.mobile} {
        height: 335px;
        width: 335px;
    }
`

export const DescriptionRight = styled.div`
    display: grid;
    grid-template-columns: 1fr 1fr;
    column-gap: 110px;

    @media ${device.tablet} {
        grid-template-columns: 1fr;
    }

    @media ${device.mobile} {
        margin-bottom: 20px;
    }
`

export const DescriptionColumn = styled.div`
`

export const DescriptionIcon = styled.img`
`

export const DescriptionIconTitle = styled.h4`
    font-size: 20px;
    color: #000302;
    letter-spacing: 0;
`

export const DescriptionText = styled.p`
    font-size: 16px;
    color: #808080;
    letter-spacing: 0;
    line-height: 24px;
`
export const Footer = styled.footer`
    padding-bottom: 70px;
`

export const FooterImg = styled.img`
    height: 340px;
    width: 227px
`