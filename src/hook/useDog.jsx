import axios from "axios"
import {useState} from 'react'
import {BASE_URL} from "../constants/BASE_URL"

const useDog = () => {
    const [allDogs,setAllDogs] = useState()
    const [dogByiId,setDogById] = useState()

    const getAllDogs = () => {
        axios
        .get(`${BASE_URL}/images/search?size=med&mime_types=jpg&format=json&has_breeds=true&order=RANDOM&page=0&limit=10`)
        .then((res) => setAllDogs(res.data))
        .catch((error) => setAllDogs(error))
    }

    const getDogById = (id) => {
        console.log(id,"aqui no hoookkk")
        axios
        .get(`${BASE_URL}/images/${id}`)
        .then((res)=>setDogById(res.data))
        .catch((error)=>setDogById(error))
    }
    
    return {getAllDogs,allDogs,getDogById,dogByiId}
}

export default useDog