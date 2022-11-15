import React, {useEffect} from "react";
import { useDispatch, useSelector } from "react-redux";
import { allJobs } from "../../services/api";
import allSelectors from "../../redux/selectors";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import Pagination from "../Pagination/Pagination";
import s from "./Jobboard.module.scss"
import { ActionsFromAsyncThunk } from "@reduxjs/toolkit/dist/matchers";
import { AsyncThunkAction } from "@reduxjs/toolkit";

type Job = {
    id: string,
    name: string,
    email: string,
    phone: number,
    title: string,
    salary: string,
    address: string,
    benefits: string[],
    location: {
        lat: number,
        long: number
    },
    pictures: string[],
    createdAt?: string,
    updatedAt?: string,
    description: string,
    employment_type: string[]
}

const Jobboard: React.FC = () => {
    const dispatch: ActionsFromAsyncThunk<T extends > = useDispatch();
    const isLoading = useSelector(allSelectors.getLoading);
    const jobs: Job[] = useSelector(allSelectors.getAllJobs);

    useEffect(() => {
        dispatch(allJobs());
    }, [dispatch]);

    return isLoading ? (<Loader />) : (
        <div className={s.board}>
            <ul className={s.list}>
                {jobs.map(({id, title, name, address, location, pictures, createdAt}) => {
                    
                    return (
                        <li key={id} className={s.listItem}>
                            <Link to={`${id}`} className={s.itemLink}>
                                <img src={pictures[0]} alt='place of job' width={85} height={85} className={s.itemPic} />
                                <div className={s.itemInfo}>
                                    <h2 className={s.itemTitile}>{title}</h2>
                                    <p className={s.itemName}>{name} {address}</p>
                                    <div className={s.itemLocation}>{location.lat},{location.long}</div>
                                </div>
                                <div className={s.rating}></div>
                                <div className={s.itemBack}>
                                    <svg width={15} height={15} className={s.itemSave}>
                                        <use></use>
                                    </svg>
                                    <p className={s.itemDate}>{createdAt}</p>
                                </div>
                            </Link>
                        </li>
                    )
                })}
            </ul>
            <Pagination/>
        </div>
    )
}

export default Jobboard;