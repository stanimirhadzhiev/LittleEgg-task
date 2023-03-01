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
        service: "АВА Партньори предлага изготвяне на месечни справки-декларации по ЗДДС, както на юридически лица от ЕС, така и на юридически лица извън ЕС, чрез акредитирано представителство; възстановяване на данък добавена стойност и данъчна защита в хода на тази процедура.",
    },
    {
        title: "Финансово-счетоводен контрол",
        service: "Предлагаме на нашите клиенти пълно текущо управление на тяхната финансово-счетоводна отчетност и изготвяне на необходимите финансови отчети. Осъществяваме комуникацията и представителството пред данъчната администрация.",
    },
    {
        title: "Данъчни консултации",
        service: "Предлагаме на нашите клиенти данъчно консултиране. Осъществяваме комуникацията и представителството пред данъчната администрация.",
    },
    {
        title: "Обработка на трудовите възнаграждения",
        service: "Администрирането на работните заплати често е деликатен и конфиденциален въпрос, който изисква пълно съответствие с динамичните промени в нормативните разпоредби, регламентиращи тази материя.",
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
                        <p className={style["service-title"]} key={service.title}>{service.title}</p>
                        <p className={style["service-information"]} key={service.service}>
                            {service.service}
                        </p>
                        <div className={style["service-details-btn"]}>
                            <a href="#">виж детайли </a>
                        </div>
                    </div>
                    {nextService == undefined
                        ? <></>
                        : <div className={style["next-column"]}>
                            <p className={style["service-title"]} key={service.title}>{nextService.title}</p>
                            <p className={style["service-information"]} key={nextService.service}>
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