import React from "react";
import Pagination from "../Pagination/Pagination";
import s from "./Jobboard.module.scss"

const Jobboard: React.FC = () => {
    const allJobs: object[] = [];
    return (
        <div className={s.board}>
            <ul className={s.list}>
                {allJobs.map((job) => {
                    
                })}
            </ul>
            <Pagination/>
        </div>
    )
}

export default Jobboard;