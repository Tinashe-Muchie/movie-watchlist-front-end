import React, { useContext } from 'react';
import { ApolloError } from '@apollo/client';
import { QueryQuery } from '../../generated/graphql';
import { 
    StyledUL, GridContainer, StyledLi,
    StyledLink, Img, Skeleton, H3,
    Overlay, Button, ImgContainer,
    ImgCover,TitleContainer, P } from './style';
import { Popup } from '../Popup/Popup';
import { Context } from '../../Context/GlobalContext';

export const MoviesLayout: React.FunctionComponent<{
    loading: boolean | undefined,
    error: ApolloError | undefined
    data: QueryQuery | undefined
}> = ({loading, error, data}) => {

    const {addToWatchlist, setShowPopup, setTitle, 
        title, showPopup, addToWatched, myState }= useContext(Context);
    /*create a new array that will be used to display skeletons 
    while loading*/
    const newArray: number[] = [];
    for(let i:number = 1; i <= 20; i++) {
        newArray.push(i);
    }

    return (
        <>
        <StyledUL>
            <GridContainer>
            {
                loading ? newArray.map((item, index)=> {
                    return(
                        <StyledLi key={index}>
                            <Skeleton />
                        </StyledLi>
                    );
                })
                : error ? <H3>Oh no! {error.message} </H3>
                : data?.getMovies?.results.map((movie) => {
                    return (   
                        <StyledLi key={movie.id}>
                        <Overlay>
                            <Button
                                onClick={() => {
                                    addToWatchlist(movie)
                                    setShowPopup(true)
                                    setTitle(`${movie.title} has been added to Watchlist`)
                                }}
                                disabled={
                                    myState?.Watchlist?.find((w: any) => w.id === movie.id)? true
                                    : myState?.Watched?.find((w: any) => w.id === movie.id)? true
                                    : false
                                }
                            >
                                Add to Watchlist
                            </Button>
                            <Button
                                onClick={() => {
                                    addToWatched(movie)
                                    setShowPopup(true)
                                    setTitle(`${movie.title} has been added to Watched`)
                                }}
                                disabled={
                                    myState?.Watched?.find((w: any) => w.id === movie.id)? true
                                    : false
                                }
                                >
                                    Add to Watched
                                </Button>
                                <StyledLink 
                                    to={{
                                        pathname: '/moviedetails',
                                        state: {
                                            details: movie.details,
                                            reviews: movie.reviews,
                                            credits: movie.credits,
                                            videos: movie.videos,
                                            title: movie.title,
                                            id: movie.id,
                                            movie: movie
                                        }
                                    }}
                                >
                                    <Button>More Info</Button>
                                </StyledLink>   
                            </Overlay>
                            <ImgContainer>
                                    {
                                        (movie.poster_path)? <Img 
                                            src={`https://image.tmdb.org/t/p/original/${movie.poster_path}`}
                                            alt='poster image'
                                        />
                                        : <ImgCover></ImgCover>
                                    }
                                    <TitleContainer>
                                        <P> {movie.title} </P>
                                        <P> {movie.release_date} </P>
                                    </TitleContainer>  
                                </ImgContainer>
                        </StyledLi>
                    );
                })
            }
            </GridContainer>
        </StyledUL>
        <Popup showPopup={showPopup} setShowPopup={setShowPopup} title={title}/>
        </>
    );
}