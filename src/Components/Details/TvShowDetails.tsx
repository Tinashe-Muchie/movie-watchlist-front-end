import React, { useContext } from 'react';
import { useLocation } from 'react-router-dom';
import { 
    Container, Wrapper, DetailBox, Img, Genres,
    DetailContentBox, Title, Tagline, GenresWrapper,
    Overview, ButtonWrapper, Button, ReviewsHeading,
    TrailerButton, ContentWrapper, CreditsContainer, 
    ReviewsContainer, CreditsImgWrapper, CreditsImg,
    CreditsTitle, CreditsHeading, CreditsHeadingWrapper, 
    ReviewsContent, ReviewsTitleContainer, AuthorsName,
    ReviewsImg, ReviewsImgWrapper, ReviewsHeadingWrapper,
    CreditsContentGrid, ReviewsWrapper } from './style';
import { Context } from '../../Context/GlobalContext';
import { 
    Videos, Reviews, TvShowDetails, 
    Cast, TvShows } from '../../generated/tvshows';
import { Modal } from '../Modal/Modal';

interface stateIF {
    details: TvShowDetails | undefined;
    reviews: [Reviews] | undefined;
    credits: [Cast] | undefined;
    videos: [Videos] | undefined;
    title: string | undefined;
    id: number | undefined;
    show: TvShows | undefined;
}   

export const TvShowDetail: React.FunctionComponent = () => {

    const location = useLocation(); 
    const state = location.state as stateIF;
    const { addToWatchlist, addToWatched, myState, 
            showModal, setShowModal } = useContext(Context);
    /*create a state that will help in showing either the first 6 characters or all of the
    characters in a movie */
    const open = false;
    //const [ open, setOpen ] = useState(false); 
    /*create a state, show, that will help in showing either the first review or all the
    reviews in a movie */
    const show = false;
    //const [ show, setShow ] = useState(false);

    return (
        <Container>
            <Wrapper>
            <DetailBox>
                <Img 
                    src={`https://image.tmdb.org/t/p/original/${state.details?.poster_path}`}
                    alt='movie poster'
                />
                <DetailContentBox>
                    <Title> {state.details?.name} </Title>
                    <Tagline> {state.details?.tagline} </Tagline>
                    <GenresWrapper>
                    {state.details?.genres?.map((genre)=> (
                        <Genres
                            key={genre?.id}
                        >
                            {genre?.name}
                        </Genres>
                    ))}
                    </GenresWrapper>
                    <Overview> {state.details?.overview} </Overview>
                    <ContentWrapper>
                        <Tagline> {state.details?.first_air_date} </Tagline>
                        <Tagline> {state.details?.last_air_date} </Tagline>
                        <Tagline> {state.details?.number_of_episodes} </Tagline>
                        <Tagline> {state.details?.number_of_seasons} </Tagline>
                        <Tagline> {state.details?.vote_average} </Tagline> 
                    </ContentWrapper>
                    <ButtonWrapper>
                        <TrailerButton
                            onClick={()=>setShowModal(true)}
                        >
                            View Trailer
                        </TrailerButton>
                        <Button
                            onClick={() => addToWatchlist(state.show)}
                            disabled={
                                myState.Watchlist?.find((w: any) => w.id === state.details?.id) ? true
                                : false
                            }
                        > 
                            Add to Watchlist 
                        </Button>
                        
                        <Button
                            onClick={() => addToWatched(state.show)}
                            disabled={
                                myState.Watched?.find((w: any)=> w.id === state.details?.id) ? true
                                : false
                            }
                        > 
                            Add to Watched 
                        </Button>
                    </ButtonWrapper>
                </DetailContentBox>
            </DetailBox>
            <CreditsContainer>
                <CreditsHeadingWrapper>
                    <CreditsHeading>
                        Cast Members
                    </CreditsHeading>
                </CreditsHeadingWrapper>
                <CreditsContentGrid>
                {
                    (!open) ?
                    state.credits?.slice(0, 6).map((credit: Cast) => {
                        return (
                            <CreditsImgWrapper>
                                <CreditsImg 
                                    src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
                                    alt='character image'
                                />
                                <CreditsTitle>
                                    {`${credit.name}`}
                                </CreditsTitle>
                                <CreditsTitle>
                                    as
                                </CreditsTitle>
                                <CreditsTitle>
                                    {`${credit.character}`}
                                </CreditsTitle>
                            </CreditsImgWrapper>
                        );
                    })
                    : state.credits?.map((credit: Cast) => {
                        return (
                            <CreditsImgWrapper>
                                <CreditsImg 
                                    src={`https://image.tmdb.org/t/p/original/${credit.profile_path}`}
                                    alt='character image'
                                />
                                <CreditsTitle>
                                    {`${credit.name}`}
                                </CreditsTitle>
                                <CreditsTitle>
                                    as
                                </CreditsTitle>
                                <CreditsTitle>
                                    {`${credit.character}`}
                                </CreditsTitle>
                            </CreditsImgWrapper>
                        );
                    })
                }
                </CreditsContentGrid>
            </CreditsContainer>
            <ReviewsContainer>
                <ReviewsHeadingWrapper>
                    <ReviewsHeading>
                        Reviews
                    </ReviewsHeading>
                </ReviewsHeadingWrapper>
                {
                    (!show) ?
                    state.reviews?.slice(0,1).map((review: Reviews) => {
                        return (
                            <>
                            <ReviewsImgWrapper>
                                <ReviewsImg 
                                    src={`https://image.tmdb.org/t/p/original/${review.author_details?.avatar_path}`}
                                    alt='authors avatar'
                                />
                                <ReviewsTitleContainer>
                                    <AuthorsName>
                                        {review.author_details?.name}
                                    </AuthorsName>
                                    <AuthorsName>
                                        {review.author_details?.rating}
                                    </AuthorsName>
                                </ReviewsTitleContainer>
                            </ReviewsImgWrapper>
                            <ReviewsContent>
                                {review.content}
                            </ReviewsContent>
                            </>
                        );
                        })
                    : state.reviews?.map((review: Reviews) => {
                        return (
                            <ReviewsWrapper>
                            <ReviewsImgWrapper>
                                <ReviewsImg 
                                    src={`https://image.tmdb.org/t/p/original/${review.author_details?.avatar_path}`}
                                    alt='authors avatar'
                                />
                                <ReviewsTitleContainer>
                                    <AuthorsName>
                                        {review.author_details?.name}
                                    </AuthorsName>
                                    <AuthorsName>
                                        {review.author_details?.rating}
                                    </AuthorsName>
                                </ReviewsTitleContainer>
                            </ReviewsImgWrapper>
                            <ReviewsContent>
                                {review.content}
                            </ReviewsContent>
                            </ReviewsWrapper>
                        );
                    })
                }   
            </ReviewsContainer>
            <Modal showModal={showModal} setShowModal={setShowModal} />
            </Wrapper>
        </Container>
    );
}