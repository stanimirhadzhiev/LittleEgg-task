import style from "./ServicesList.module.css";
import { AiOutlineLine, AiOutlineLeftCircle, AiOutlineRightCircle } from "react-icons/ai";
import { useState, useEffect } from "react";

const servicesArray = [
    {
        title: "Счетоводни услуги и изготвяне на финансови отчети",
        service: "Предлагаме на нашите клиенти пълно текущо управление на тяхната финансово-счетоводна отчетност и изготвяне на необходимите финансови отчети. Осъществяваме комуникацията и представителството пред данъчната администрация.",
    },
    {
        title: "Специализирани услуги",
        service: "Предлагаме на нашите клиенти пълно текущо управление на тяхната финансово-счетоводна отчетност и изготвяне на необходимите финансови отчети. Осъществяваме комуникацията и представителството пред данъчната администрация.",
    },
    {
        title: "Финансово-счетоводен контрол",
        service: "Предлагаме на нашите клиенти пълно текущо управление на тяхната финансово-счетоводна отчетност и изготвяне на необходимите финансови отчети. Осъществяваме комуникацията и представителството пред данъчната администрация.",
    },
    {
        title: "Данъчни консултации",
        service: "Предлагаме на нашите клиенти пълно текущо управление на тяхната финансово-счетоводна отчетност и изготвяне на необходимите финансови отчети. Осъществяваме комуникацията и представителството пред данъчната администрация.",
    },
    {
        title: "Обработка на трудовите възнаграждения",
        service: "Предлагаме на нашите клиенти пълно текущо управление на тяхната финансово-счетоводна отчетност и изготвяне на необходимите финансови отчети. Осъществяваме комуникацията и представителството пред данъчната администрация.",
    },
];

export const ServicesList = () =>{
    const [ index, setIndex ] = useState(0);
    const [ service, setService ] = useState(servicesArray[0]);
    const [ nextService, setNextService ] = useState(servicesArray[1]);

    useEffect(() => {
        setService(servicesArray[index]);
        setNextService(servicesArray[index + 1])
    },[index]);
    console.log(service);
    console.log(nextService);
    return(
        <div className={style["container"]}>
            <div className={style["dots"]}></div>
            <div className={style["wrapper"]}>
                <div className={style["summary"]}>
                    <div className={style["summary-title"]}>УСЛУГИ</div>
                    <h2>Ние сме бутикова фирма с институционални ресурси</h2>
                    <p className={style["information"]}>
                        АВА Партньори ООД работи в областта на финансово-счетоводните и данъчно-правно консултиране. Нашият глобален подход съчетава академична дълбочина и иновативност с практически познания за бизнеса на нашите клиенти.
                    </p>

                </div>
                <div className={style["services-list"]}>
                    <div className={style["column"]}>
                        <p className={style["service-title"]}>{service.title}</p>
                        <p className={style["service-information"]}>
                            {service.service}
                        </p>
                        <div className={style["service-details-btn"]}>
                            <a href="#">виж детайли </a>
                        </div>
                    </div>
                    {nextService == undefined
                        ? <></>
                        : <div className={style["next-column"]}>
                            <p className={style["service-title"]}>{nextService.title}</p>
                            <p className={style["service-information"]}>
                                {nextService.service}
                            </p>
                        </div>
                    }

                </div>
            </div>
            <div className={style["navigation"]}>
                {index
                    ? <AiOutlineLeftCircle className={style["nav-btn"]} onClick={() => setIndex(index - 1)} />
                    : <></>
                }
                {index + 1 == servicesArray.length
                    ? <></>
                    : <AiOutlineRightCircle className={style["nav-btn"]} onClick={() => setIndex(index + 1)} />
                }
            </div>
        </div>
    );
};