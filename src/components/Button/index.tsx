import React, { FC } from 'react';

interface Props {
  setImages: any
  setIsLoading: any
}

const Button = ({setImages, setIsLoading}: Props) => {
    return (
        <>
          <FetchButton role="button" onClick={() => handleImagesFetch()}>
            Search Dogs
          </FetchButton>
          <ResetButton
            role="button"
            onClick={() => {
              dispatch({
                type: ActionType.RESET,
              });
            }}
          >
            Reset Search
          </ResetButton>
        </>
      );
};

export default Button;