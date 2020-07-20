import React from 'react';
import style from './Recipe.module.css'


export const Recipe = ({title,calories,image,ingredients,healthLabels}) => {
    return (
        <div className={style.recipe}>
            <h3 className={style.head}>{title}</h3>
            <ol>
                {ingredients.map(ingredient =>(
                    <li>{ingredient.text}</li>
                ))}
            </ol>
            <div>{healthLabels.map(label =>(
                <div className="d-inline"> 
                    <span className="badge badge-success m-2">
                        {label}
                    </span>
                    </div>
            ))}</div>
            <p>CALORIES: {calories}</p>
            <img src={image} alt={title} className={style.img}/>
        </div>
    )
};
