import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { allJobs } from "../../services/api";
import allSelectors from "../../redux/selectors";
import { useAppDispatch } from "../../redux/hooks";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import PostedAgo from "../PostedAgo";
// import Pagination from "../Pagination/Pagination";
import s from "./Jobboard.module.scss";
import Job from "../../interfaces";
import ReactPaginate from 'react-paginate';

type Props = {
    itemsPerPage: number;
}

const Jobboard: React.FC<Props> = ({ itemsPerPage }) => {
    const [itemOffset, setItemOffset] = useState<number>(0);
    const dispatch = useAppDispatch();
    const isLoading = useSelector(allSelectors.getLoading);
    const jobs: Job[] = useSelector(allSelectors.getAllJobs);

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = jobs.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(jobs.length / itemsPerPage);

    const handlePageClick = (event: any) => {
        const newOffset = (event.selected * itemsPerPage) % jobs.length;
        setItemOffset(newOffset);
    };

    useEffect(() => {
        dispatch(allJobs());
    }, [dispatch]);

    return isLoading ? (<Loader />) : (
        <div className={s.board}>
            <ul className={s.list}>
                {currentItems.map(({id, title, name, address, location, pictures, createdAt}) => {
                    
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
                                < PostedAgo createdAt={createdAt} />
                            </div>
                        </li>
                    )
                })}
            </ul>
            <ReactPaginate
                className={s.pagination}
                breakLabel="..."
                nextLabel=" >"
                previousLabel="< "
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                renderOnZeroPageCount={undefined}
            />
        </div>
    )
}

export default Jobboard;