import React, { useEffect } from 'react'
import * as S from "./style"
import useDog from '../../hook/useDog'


const CardDog = (props) => {
    const {id} = props
    const {getDogById,dogByiId} = useDog()
    useEffect(()=>{getDogById(id)},[id])
    console.log(id,"id aqui ",dogByiId)
    console.log("no breeddsss aqui",dogByiId?.breeds[0]?.name

    )

  return (
    <S.Card>
        <S.Img src={props.imageDog} alt="" />
        <p>{dogByiId?.breeds[0]?.name}</p>
    </S.Card>
  )
}


export default CardDog