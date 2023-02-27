import style from "./Ctas.module.css";
import { AiOutlineRightCircle } from "react-icons/ai";

export const Ctas = () =>{
    return(
        <div className={style["container"]}>
            <div className={style["cta-wrapper"]}>
                <div className={style["cta-left"]}>
                    <div className={style["cta-header"]}>
                        <span>За нас</span>
                        <div></div>
                    </div>
                    <div className={style["cta-content"]}>
                        <h2>Научете повече за АВА Партнерс</h2>
                        <a href="#">
                            <AiOutlineRightCircle className={style["nav-btn"]}/>
                        </a>
                    </div>
                </div>
                <div className={style["cta-right"]}>
                    <div className={style["cta-header"]}>
                        <span>Контакти</span>
                        <div></div>
                    </div>
                    <div className={style["cta-content"]}>
                        <h2>Да обсъдим Вашите счетоводни нужди</h2>
                        <a href="#">
                            <AiOutlineRightCircle className={style["nav-btn"]} />
                        </a>
                    </div>
                </div>
            </div>
            <div className={style["dots"]}></div> 
        </div>
    );
};