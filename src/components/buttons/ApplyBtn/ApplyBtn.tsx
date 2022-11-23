import React from "react";
import s from './ApplyBtn.module.scss';

const ApplyBtn: React.FC = () => {
    const handlClick = (): void => {
        console.log("Apply button is clicked!")
    }

    return (
        <button type="button" onClick={handlClick} className={s.button}>APPLY NOW</button>
    )
}

export default ApplyBtn;