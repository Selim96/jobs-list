import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { useAppDispatch } from "../../redux/hooks";
import Loader from "../Loader";
import s from "./Details.module.scss";

const Details: React.FC = () => {
    useEffect(() => {
        
    }, []);


    return (
        <div className={s.detailsPage}>
            <header>
                <p>Job Details</p>
                <div>
                    <svg width={15} height={15}>

                    </svg>
                    <div className={s.share}>
                        <svg width={15} height={15}></svg>
                        <p>Share</p>
                    </div>
                </div>
            </header>
            
        </div>
    )
}

export default Details;