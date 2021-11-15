import React, { useContext } from 'react';
import { ApolloError } from '@apollo/client';
import { QueryQuery } from '../../generated/tvshows';
import { 
    StyledUL, GridContainer, StyledLi,
    StyledLink, Img, Skeleton, H3,
    Overlay, Button, ImgContainer,
    ImgCover, P, TitleContainer } from './style';
import { Popup } from '../Popup/Popup';
import { Context } from '../../Context/GlobalContext';

export const TvShowsLayout: React.FunctionComponent<{
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
                : data?.getTvShows?.results.map((show) => {
                    return (
                        <StyledLi key={show.id}>
                            <Overlay>
                            <Button
                                onClick={() => {
                                    addToWatchlist(show)
                                    setShowPopup(true)
                                    setTitle(`${show.name} has been added to Watchlist`)
                                }}
                                disabled={
                                    myState?.Watchlist?.find((w: any) => w.id === show.id)? true
                                    : myState?.Watched?.find((w: any) => w.id === show.id)? true
                                    : false
                                }
                            >
                                Add to Watchlist
                            </Button>
                            <Button
                                onClick={() => {
                                    addToWatched(show)
                                    setShowPopup(true)
                                    setTitle(`${show.name} has been added to Watched`)
                                }}
                                disabled={
                                    myState?.Watched?.find((w: any) => w.id === show.id)? true
                                    : false
                                }
                                >
                                    Add to Watched
                                </Button>
                                <StyledLink
                                    to={{
                                        pathname: '/moviedetails',
                                        state: {
                                            details: show.details,
                                            reviews: show.reviews,
                                            credits: show.credits,
                                            videos: show.videos,
                                            title: show.name,
                                            id: show.id,
                                            show: show
                                        }
                                    }}
                                >
                                    <Button>More Info</Button>
                                </StyledLink>   
                            </Overlay>
                            <ImgContainer>
                                    {
                                        (show.poster_path)? <Img 
                                            src={`https://image.tmdb.org/t/p/original/${show.poster_path}`}
                                            alt='poster image'
                                        />
                                        : <ImgCover></ImgCover>
                                    }
                                    <TitleContainer>
                                        <P> {show.name} </P>
                                        <P> {show.first_air_date} </P>
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