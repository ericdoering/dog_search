import React, { FC } from 'react';
import { ActionType } from '../../types/reducer';
import { useDispatch, useSelector } from 'react-redux';
import { FetchButton, ResetButton } from './styles';
import { RootState } from '../../reducers';
import { fetchBreedImages, fetchSubBreedImages } from '../../library/api';

interface Props {
  setImages: React.Dispatch<React.SetStateAction<never[]>>
  setIsLoading: React.Dispatch<React.SetStateAction<boolean>>
}

const Button = ({setImages, setIsLoading}: Props) => {

  const dogStore = useSelector((state: RootState) => state.app);

  const breedState = dogStore?.breed;
  const subBreedState = dogStore?.subBreed;
  const numberState = dogStore?.number;

  const dispatch = useDispatch()
  const handleImagesFetch = async() => {
      if(breedState === 'all'){
        dispatch({
          type: ActionType.ERROR,
          payload: true,
        })
      }
      if(breedState !== 'all' && subBreedState === 'all'){
        await fetchBreedImages(breedState, numberState)
          .then((data) => {
          if (data?.status === "success" && data?.message?.length) {
            setImages(data?.message);
            setIsLoading(false);
            dispatch({
              type: ActionType.IMAGE_RESULTS,
              payload: data?.message.length,
            });
          }
        })
        .catch((error) => {
          console.error(error);
        });
      }
      if(breedState !== 'all' && subBreedState !== 'all'){
        await fetchSubBreedImages(breedState, subBreedState, numberState)
        .then((data) => {
          if (data?.status === "success" && data?.message?.length) {
            setImages(data?.message);
            setIsLoading(false);
            dispatch({
              type: ActionType.IMAGE_RESULTS,
              payload: data?.message.length,
            });
          }
        })
        .catch((error) => {
          console.error(error);
      })
    };
  }


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