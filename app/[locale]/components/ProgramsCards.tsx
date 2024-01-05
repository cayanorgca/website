import { ProgramCardInterface } from "@/interfaces/programCard.interface";
import { FC } from "react";

const ProgramCard:FC<ProgramCardInterface> = ({titleKey, descKey, imageUrl}) => {

    return (
        <div className='features-card'>
          <div style={{'backgroundImage': `url(${imageUrl})` }} className='features-card-image' />
          <div className='features-card-text'>
            <h2>{titleKey}</h2>
            <p>{descKey}</p>
          </div>
        </div>
    )
}

export default ProgramCard;