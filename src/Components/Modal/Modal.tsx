import React, { useCallback, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { 
    Background, ModalWrapper,
    ModalContent, CloseModalButton} from './style';


export const Modal: React.FunctionComponent<{
    showModal: boolean;
    setShowModal: React.Dispatch<React.SetStateAction<boolean>>;
}> =  ({showModal, setShowModal}) => {

    //const popupRef = useRef();
    const animation = useSpring({
        config: {
        duration: 250
        },
        opacity: showModal ? 1 : 0,
        transform: showModal ? `translateY(0%)` : `translateY(-100%)`
    });

    /*const closeModal = (e: ChangeEvent<HTMLInputElement>) => {
        if (e.currentTarget) {
          setShowPopup(false);
        }
    };*/
    
    const keyPress = useCallback(
        e => {
          if (e.key === 'Escape' && showModal) {
            setShowModal(false);
          }
        },
        [setShowModal, showModal]
    );
    
    useEffect(
        () => {
          document.addEventListener('keydown', keyPress);
          return () => document.removeEventListener('keydown', keyPress);
        },
        [keyPress]
    );

    return (
        <>
        {
            showModal? (
                <Background 
                    //onClick={closePopup}
                >
                <animated.div style={animation}>
                    <ModalWrapper>
                    <ModalContent>
                       {/* <p> {title} </p> */}
                    </ModalContent>
                    <CloseModalButton
                        aria-label='Close modal'
                        onClick={() => setShowModal(prev => !prev)}
                    />
                    </ModalWrapper>
                </animated.div>
                </Background>
            )
            : null
        }
        </>
    );
}