// import React from "react;"
import { useDispatch } from "react-redux";
import Dropdown from "./Dropdown";
import { DogFormContainer } from "./styles";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";
import { renderBreed, renderSubBreed, renderNumber } from "../../helpers";
import { BreedsType } from "../../types/breed";

type Props = {
    breedList: BreedsType
    subBreedList: string[]
    setImages: any
    setIsLoading: any
}

function DogForm({
        breedList,
        subBreedList,
        setImages,
        setIsLoading,
}: Props){


    const dispatch = useDispatch();
    const dogStore = useSelector((state: RootState) => state.app);

    const breedState = dogStore?.breed;
    const subBreedState = dogStore?.subBreed;
    const numberState = dogStore?.number
   
    
    return (
    <DogFormContainer>
        <h3>Dog Form</h3>
        <Dropdown 
            title="Select a Breed"
            showError={false}
            >
        <select 
            onChange={(e) => renderBreed(e.target.value, dispatch)}
            value={breedState}>
                <option value="all">
                    Select All Breeds
                </option>
                {breedList && (
                    Object.keys(breedList)?.map((breed, index) => (
                    <option value={breed} key={index}>
                        {breed}
                    </option>
                    ))
                )}
        </select>{" "}
        </Dropdown>
        <Dropdown 
            title="Select a Sub Breed"
            showError={false}
            >
        <select 
            onChange={(e) => renderSubBreed(e.target.value, dispatch)}
            value={subBreedState}>
                <option value="all">
                    Select Sub Breed
                </option>
                {subBreedList?.length && 
                    subBreedList?.map((subBreed: string, index: number) => (
                    <option value={subBreed} key={index}>
                        {subBreed}
                    </option>
                    ))
                }
        </select>{" "}
        </Dropdown>
        <Dropdown 
            title="Number of Images"
            showError={false}
            >
        <select 
            onChange={(e) => renderNumber(e.target.value, dispatch)}
            value={numberState}>
                <option value="all">
                    Select the Number of Images
                </option>
                {Array.from({length: 50}, (_, index) => (
                    <option value={index + 1} key={index}>
                        {index + 1}
                    </option>
                ))};    
        </select>{" "}
        </Dropdown>
    </DogFormContainer>
    )
};

export default DogForm;