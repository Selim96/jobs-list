import React, {useEffect} from "react";
import { useSelector } from "react-redux";
import { allJobs } from "../../services/api";
import allSelectors from "../../redux/selectors";
import { useAppDispatch } from "../../redux/hooks";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import Pagination from "../Pagination/Pagination";
import s from "./Jobboard.module.scss";
import  Job from "../../interfaces";


const Jobboard: React.FC = () => {
    const dispatch = useAppDispatch();
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
                            <img src={pictures[0]} alt='place of job' width={85} height={85} className={s.itemPic} />
                            <div className={s.itemInfo}>
                                <Link to={`${id}`} className={s.itemLink}>
                                    <h2 className={s.itemTitile}>{title}</h2>
                                </Link>
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
                        </li>
                    )
                })}
            </ul>
            <Pagination/>
        </div>
    )
}

export default Jobboard;