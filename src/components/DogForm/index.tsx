// import React from "react;"
import { useDispatch } from "react-redux";
import Dropdown from "./Dropdown";
import { DogFormContainer } from "./styles";
import { ActionType } from "../../types/reducer";
import { useSelector } from "react-redux";
import { RootState } from "../../reducers";

type Props = {
    breedList: any
    subBreedList: any
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



    const renderBreed = (value: string) => {
        dispatch({
            type: ActionType.BREED,
            payload: value

        })
    }

   
    
    return (
    <DogFormContainer>
        <h3>Dog Form</h3>
        <Dropdown 
            title="Select a Breed"
            showError={false}
            >
        <select 
            onChange={(e) => renderBreed(e.target.value)}
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
    </DogFormContainer>
    )
};

export default DogForm;