import style from "./Testimonials.module.css";
import { BsArrowLeft, BsArrowRight } from "react-icons/bs";
import { useState, useEffect } from "react";

const testimonialsArray = [
    {
        name: "Петър Иванов",
        company: "TRIP Capital",
        message: "Don't be afraid to give up the good to go for the great.",
    },
    {
        name: "Georgi Georgiev",
        company: "Atlantis",
        message: "Nice I'm so happy  .i really recommend highly.i love this Very much. Love love love love love love",
    },
    {
        name: "Петър Иванов",
        company: "TRIP Capital",
        message: "Don't be afraid to give up the good to go for the great.",
    },
    {
        name: "Georgi Georgiev",
        company: "Atlantis",
        message: "Nice I'm so happy  .i really recommend highly.i love this Very much. Love love love love love love",
    },
];

export const Testimonials = () =>{
    const [ index, setIndex ] = useState(0);
    const [ testimonial, setTestimonial ] = useState(testimonialsArray[0]);

    useEffect(() => {
        setTestimonial(testimonialsArray[index])
    },[index]);
    
    return(
        <div className={style["container"]}>
            <p className={style["title-testimonial"]}>КЛИЕНТИТЕ ЗА НАС</p>
            <p className={style["text"]} key={testimonial.message}>“{testimonial.message}”</p>
            <div className={style["navigation"]}>
                {index 
                    ? <BsArrowLeft className={style["arrow-btn"]} onClick={() => setIndex(index - 1)}/> 
                    : <></>
                }
                {index + 1 == testimonialsArray.length 
                    ? <></> 
                    : <BsArrowRight className={style["arrow-btn"]} onClick={() => setIndex(index + 1)}/>
                }
                <span className={style["name"]} key={testimonial.name}>{testimonial.name}, {testimonial.company}</span>
            </div>
        </div>
    );
};