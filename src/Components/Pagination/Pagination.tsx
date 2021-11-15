import React, { useState, useContext } from 'react';
import { 
    Container, StyledUL, StyledLI,
    Button, StyledList } from './style';
import { GoArrowSmallRight, GoArrowSmallLeft } from 'react-icons/go'; 
import { Context } from '../../Context/GlobalContext';

export const Pagination: React.FunctionComponent = () => {

    const { currentMoviePage, setCurrentMoviePage } = useContext(Context);
    /*use setActive later */
    const active = false;
    //const [ active, setActive ] = useState(false);

    //this it the number of items that a user will see on a single page
    const itemsPerPage: number = 20;
    
    const pageNumberLimit: number = 10;
    const [maxPageNumberLimit, setMaxPageNumberLimit] = useState<number>(10);
    const [minPageNumberLimit, setMinPageNumberLimit] = useState<number>(0);

    /*Calculate the total number of pages that are available by dividing
    the data you get from the server with the number of items on a page*/
    const pages: number[] = [];
    for (let i = 1; i <= Math.ceil(10000 / itemsPerPage); i++) {
        pages.push(i);
    }

    //right button disabled boolean to toggle between disabling and enabling the left button
    const rdisabled:boolean = (currentMoviePage === pages[pages.length - 1]) ? true : false;
    //left button disabled boolean to toggle between disabling and enabling the left button
    const ldisabled:boolean = (currentMoviePage === pages[0]) ? true : false;

    const handleNextButton = () => {
        setCurrentMoviePage(currentMoviePage + 1);
    
        if (currentMoviePage + 1 > maxPageNumberLimit) {
          setMaxPageNumberLimit(maxPageNumberLimit + pageNumberLimit);
          setMinPageNumberLimit(minPageNumberLimit + pageNumberLimit);
        }
    };
    
    const handlePrevButton = () => {
        setCurrentMoviePage(currentMoviePage - 1);
    
        if ((currentMoviePage - 1) % pageNumberLimit === 0) {
          setMaxPageNumberLimit(maxPageNumberLimit - pageNumberLimit);
          setMinPageNumberLimit(minPageNumberLimit - pageNumberLimit);
        }
    };

    const renderPageNumbers = pages.map((number) => {
        if (number < maxPageNumberLimit + 1 && number > minPageNumberLimit) {
          return (
            <StyledList 
                key={number}
                onClick={()=> {setCurrentMoviePage(number)}}
                className={active ? 'active': ''}
            >
                {number}
            </StyledList>
          );
        } else {
          return null;
        }
    });

    let pageIncrementButton = null;
    if (pages.length > maxPageNumberLimit) {
        pageIncrementButton = <StyledList 
                                onClick={handleNextButton}
                            > 
                            &hellip; 
                            </StyledList>;
    }

    let pageDecrementButton = null;
    if (minPageNumberLimit >= 1) {
        pageDecrementButton = <StyledList  
                                onClick={handlePrevButton}
                            > 
                            &hellip; 
                            </StyledList>;
    }

    return (
        <Container>
            <StyledUL>
                <StyledLI>
                    <Button 
                        onClick={handlePrevButton}
                        disabled={ldisabled}
                    >
                    <GoArrowSmallLeft />
                    </Button>
                </StyledLI>
                { pageDecrementButton }
                { renderPageNumbers }
                { pageIncrementButton }
                <StyledLI>
                    <Button 
                        onClick={handleNextButton}
                        disabled={rdisabled}
                    >
                    <GoArrowSmallRight />
                    </Button>
                </StyledLI>
            </StyledUL>
        </Container>
    );
}