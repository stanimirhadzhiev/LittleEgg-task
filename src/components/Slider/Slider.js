import style from "./Slider.module.css";
import { useState } from "react";

const textArray = [
    "АВА Партньори ООД работи в областта на финансово-счетоводните и данъчно-правно консултиране. Нашият глобален подход съчетава академична дълбочина и иновативност с практически познания за бизнеса на нашите клиенти.",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has",
    "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content",
    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has"
];

export const Slider = () =>{
    const [text, setText] = useState(textArray[0]);

    return(
        <div className={style["slider"]}>
            <ul className={style["navigation"]}>
                <li onClick={()=>setText(textArray[0])}>Кои сме ние</li>
                <li onClick={()=>setText(textArray[1])}>Нашата мисия</li>
                <li onClick={()=>setText(textArray[2])}>Опит и знания</li>
                <li onClick={()=>setText(textArray[3])}>Нашите партньори</li>
            </ul>
            <div className={style["content"]}>
                <p> 
                    {text}
                </p>
            </div>
        </div>
    );
};