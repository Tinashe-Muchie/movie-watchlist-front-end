import styled, {StyledComponent} from 'styled-components';
import { device } from '../../Styles/global';
import PropTypes from 'prop-types';

export const Container: StyledComponent<"div", {}> = styled.div`
    display: block;
    width: 100%;
    height: auto;
`;

export const Wrapper: StyledComponent<"section", never> = styled.section`
    margin: 0rem;
    padding: .5rem;
    display: flex;
    flex-direction: column;

    @media ${device.tablet} {
    margin: 0rem 5rem;
    padding: 1rem;
}  
`;

export const DetailBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: .5rem;
    height: auto;
    border: #C5C6C7 solid .1rem;
    margin-bottom: .2rem;
    border-radius: .1rem;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;

export const Img = styled.img`
    height: 25rem;
    width: 21rem;
    border-radius: .2rem;
    display: block;

    @media ${device.mobileL} {
        height: 28rem;
        width: 24rem;
    }

    @media ${device.tablet} {
        height: 20rem;
        width: 18rem;
    }
`;

export const DetailContentBox = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: .5rem;
`;

export const Title: StyledComponent<"h2", {}> = styled.h2`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1.5rem;
    color: #0C0032;
`; 

export const Tagline = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1.2rem;
    color: #C5C6C7;
    margin-bottom: .2rem;
`;

export const Overview = styled.p`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Garamond, serif;
    font-size: 1rem;
    color: #C5C6C7;
    margin-bottom: .5rem;
`;

export const ButtonWrapper =styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    margin-top: .3rem;

    @media ${device.tablet} {
        flex-direction: row;
    }
`;

export const Button: StyledComponent<"button", {}> = styled.button`
    padding: .5rem;
    background-image: linear-gradient(to bottom right, #7395AE, #5CDB95);
    border: #B1A296 solid .1rem;
    border-radius: .2rem;
    color: #0C0032;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: .9rem;
    font-weight: bold;
    margin-bottom: .75rem;
    display: block;
    width: 100%;

    &:hover:not(:disabled),
    &:active:not(:disabled),
    &:focus {
        border-radius: .5rem;
        color: #B1A296;
        background-image: linear-gradient(to bottom right, #0C0032, #0C0032);;
        border: #B1A296 solid .1rem;
    }

    &:disabled {
        opacity: 0.5;
        filter: saturate(50%);
    }

    @media ${device.tablet} {
        padding: .65rem;
        font-size: 1rem;
    }

    @media ${device.laptop} {
        display: flex;
        padding: .5rem;
        width: 12rem;
    }
`;

Button.propTypes = {
    disabled: PropTypes.bool,
    children: PropTypes.node.isRequired
}

export const TrailerButton = styled.button`
    padding: .5rem;
    background-image: linear-gradient(to bottom right, #7395AE, #5CDB95);
    border: #B1A296 solid .1rem;
    border-radius: .2rem;
    color: #0C0032;
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: .9rem;
    font-weight: bold;
    margin-bottom: .75rem;
    display: block;
    width: 100%; 

    &:hover:not(:disabled),
    &:active:not(:disabled),
    &:focus {
        border-radius: .5rem;
        color: #B1A296;
        background-image: linear-gradient(to bottom right, #0C0032, #0C0032);;
        border: #B1A296 solid .1rem;
    }

    @media ${device.tablet} {
        padding: .65rem;
        font-size: 1rem;
    }

    @media ${device.laptop} {
        padding: .5rem;
        width: 50%;
    }
`;

export const ContentWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: .8rem .4rem;
    margin: .5rem 0rem;
    background-color: #0C0032;
    border-radius: .2rem;
`;

export const CreditsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem;
    border: #C5C6C7 solid .1rem;
    border-radius: .1rem;
    margin-bottom: .2rem;
`;

export const CreditsImgWrapper = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
    padding: .3rem;
`;

export const CreditsImg = styled.img`
    width: 10rem;
    height: 14rem;
    border-radius:.2rem;
`;

export const CreditsTitle = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: 1rem;
    color: #C5C6C7;
`;

export const CreditsHeadingWrapper = styled.div`
    padding: .2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const CreditsHeading = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: 1.4rem;
    color: #0C0032;
`;

export const CreditsContentGrid = styled.div`
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-template-rows: auto;
    justify-content: center;
    align-items: center;

    @media ${device.laptop} { 
        grid-template-columns: repeat(6, 1fr);
        padding: 1rem 0rem;
    }
`;

export const ReviewsContainer = styled.div`
    display: flex;
    flex-direction: column;
    padding: .5rem;
    border: #C5C6C7 solid .1rem;
    border-radius: .1rem;
`;

export const ReviewsHeadingWrapper = styled.div`
    padding: .2rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const ReviewsHeading = styled.h3`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: 1.4rem;
    color: #0C0032;
    margin-bottom: 1rem;
`;

export const ReviewsImgWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: start;
    padding: .3rem;
`;

export const ReviewsImg = styled.img`
    width: 3rem;
    height: 3rem;
    border-radius: 50%;
`;

export const ReviewsTitleContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: start;
`;

export const AuthorsName = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: 1rem;
    color: #C5C6C7;
`;

export const ReviewsContent = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: .9rem;
    color: #C5C6C7;
`;

export const ReviewsWrapper = styled.div`
    display: flex;
    flex-direction: column;
    padding: .2rem;
    border-top: #C5C6C7 solid .1rem;
`;
export const GenresWrapper = styled.div`
    display: flex;
    flex-direction: row;
    margin: .5rem 0rem;
`;

export const Genres = styled.div`
    @import url('https://fonts.googleapis.com/css2?family=STIX+Two+Text&display=swap');
    font-family: 'STIX+Two+Text', Georgia, serif;
    font-size: .8rem;
    color: #C5C6C7;
    background-color: #0C0032;
    padding: .5rem;
    margin: .1rem;
    border-radius: .1rem;
`;