import * as S from "./Style";
import { useEffect,useState} from 'react'
import useDog from "../../hook/useDog";
import CardDog from "../../components/CardDod/CardDog";



const Home = () => {
    const {getAllDogs,allDogs,getDogById,dogByiId} = useDog ()
    useEffect(()=>getAllDogs(),[])

  return (
    <S.AllCard>
       {allDogs?.map((item) =>
           <CardDog
           imageDog={item.url}
           id={item.id}
           />
            
        )}  
    </S.AllCard>
    
  );
};

export default Home;
