import style from "./Footer.module.css";

export const Footer = () =>{
    return(
        <div className={style["footer"]}>
            
            <div className={style["wrapper"]}>  
                <a href="#">
                    <div className={style["logo"]}></div>
                </a>
                <div className={style["contacts"]}>
                    <div className={style["address"]}>
                        <div className={style["contact-type"]}>АДРЕС</div>
                        <p>гр. София 1113 , бул. Андрей Ляпчев №54</p>
                    </div>
                    <div className={style["email"]}>
                        <div className={style["contact-type"]}>ИМЕЙЛ</div>
                        <a href = "mailto: hello@avapartners.bg">hello@avapartners.bg</a>
                    </div>
                    <div>
                        <div className={style["contact-type"]}>ТЕЛЕФОН</div>
                        <a href="tel:+35929711427">+359 2 971 14 27</a>
                        <br/>
                        <a href="tel:+35929733425">+359 2 973 34 25</a>
                    </div>
                </div>
                <nav className={style["navigation"]}>
                    <ul>
                        <li><a href="#">Начало</a></li>
                        <li><a href="#">За нас</a></li>
                        <li><a href="#">Услуги</a></li>
                        <li><a href="#">Клиенти</a></li>
                    </ul>
                </nav>
                <div className={style["navigation"]}>
                    <ul>
                        <li><a href="#">Facebook</a></li>
                        <li><a href="#">Linkedin</a></li>
                        <li><a href="#">Twitter</a></li>
                    </ul>
                </div>
            </div>
            <div className={style["bottom"]}>
                <div className={style["text"]}>Together we win.</div>
                <div className={style["tac"]}>
                    <div className={style["links"]}>
                        <a href="#"> © 2020 Ava Partners</a>
                        <a href="#">Общи условия </a>
                        <a href="#">Политика за бисквитките</a>
                    </div>
                    <div className={style["created"]}>
                        <span>Създаден от</span>
                        <a href="#">
                            <img  src={require("../../assets/images/Layer-22.png")} alt=""/>
                            <img  src={require("../../assets/images/Layer-30.png")} alt=""/>
                        </a>
                        
                    </div>
                </div>
            </div>
            <div className={style["triangle"]}>
                
            </div>
        </div>
    );
};