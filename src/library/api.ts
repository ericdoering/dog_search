import axios from "./axios";


// Fetch All Dogs Data

export const fetchDogsData = async() => {
    try {
        const response = await axios.get("/breeds/list/all")
        return response?.data;
    }
    catch(error){
        if(error instanceof Error){
            console.log(error, "error message")
        }
        else {
            console.log("unexpected error")
        }
    }
};

// Fetch All Sub Breed Data

export const fetchDogsSubBreedData = async (breed: string) => {
    try {
        const response = await axios.get(`/breed/${breed}/list`)
        return response?.data;
    }
    catch(error){
        if(error instanceof Error){
            console.log(error, "error message")
        }
        else {
            console.log("unexpected error")
        }
    }
};

// Fetch Breed Images

export const fetchBreedImages = async (breed: string, number: string) => {
    try {
        const response = await axios.get(`/breed/${breed}/images/random/${number}`)
        return response?.data;
    }
    catch(error){
        if(error instanceof Error){
            console.log(error, "error message")
        }
        else {
            console.log("unexpected error")
        }
    }
};
// Fetch subBreed Images

export const fetchSubBreedImages = async (breed: string, subBreed: string, number: string) => {
    try {
        const response = await axios.get(`/breed/${breed}/${subBreed}/images/random/${number}`)
        return response?.data;
    }
    catch(error){
        if(error instanceof Error){
            console.log(error, "error message")
        }
        else {
            console.log("unexpected error")
        }
    }
};