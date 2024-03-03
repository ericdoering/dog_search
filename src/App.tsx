import React, { useEffect, useState } from 'react';
import './App.css';
import { AppBody, Container, Description } from './styles/styled';
import { fetchDogsData } from './library/api';
import Loader from './components/loader';
import DogForm from './components/DogForm';

function App() {
  const [breedList, setBreedList] = useState(null);
  const [subBreedList, setSubBreedList] = useState([]);
  const [images, setImages] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  const fetchData = async() => {
    await fetchDogsData()
    .then((data) => {
      setBreedList(data?.message);
      setIsLoading(false)
    })
    .catch((error) => {
      console.error(error)
    })
  };

  useEffect(() => {
    fetchData()
  }, [])

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
