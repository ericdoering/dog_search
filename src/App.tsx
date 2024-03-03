import React, { useEffect, useState, useCallback } from 'react';
import './App.css';
import { AppBody, Container, Description } from './styles/styled';
import { fetchDogsData, fetchDogsSubBreedData } from './library/api';
import Loader from './components/loader';
import DogForm from './components/DogForm';
import { RootState } from './reducers';
import { useSelector } from 'react-redux';

function App() {
  const [breedList, setBreedList] = useState(null);
  const [subBreedList, setSubBreedList] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const dogStore = useSelector((state: RootState) => state.app);
  const breedState = dogStore?.breed;

  const fetchData = useCallback(async () => {
    try {
      await fetchDogsData()
        .then((data) => {
          setBreedList(data?.message);
          setIsLoading(false);
        })
        .catch((error) => {
          console.error(error);
        });
  
      if (breedState !== "all") {
        await fetchDogsSubBreedData(breedState)
          .then((data) => {
            setSubBreedList(data?.message);
            setIsLoading(false);
          })
          .catch((error) => {
            console.error(error);
          });
      }
    } catch (error) {
      console.error(error);
    }
  }, [breedState]);
  

  useEffect(() => {
    fetchData()
  }, [fetchData, breedState])

  if(isLoading) return <Loader />
  if(!breedList) return <p>No Dogs Found</p>


  return (
    <Container>
      <Description>
      </Description> 
        <h1>Dog Search</h1>
        <AppBody>
          <DogForm
            breedList={breedList}
            subBreedList={subBreedList}
            setImages={setImages}
            setIsLoading={setIsLoading} />
        </AppBody>
    </Container>
  );
}

export default App;
