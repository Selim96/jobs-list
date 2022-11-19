import React, {useEffect, useState} from "react";
import { useSelector } from "react-redux";
import { allJobs } from "../../services/api";
import allSelectors from "../../redux/selectors";
import { useAppDispatch } from "../../redux/hooks";
import { Link } from "react-router-dom";
import Loader from "../Loader";
import PostedAgo from "../PostedAgo";
import s from "./Jobboard.module.scss";
import Job from "../../interfaces";
import ReactPaginate from 'react-paginate';
import { AiFillStar } from "react-icons/ai";
import { BsFillGeoAltFill } from "react-icons/bs";
import {FiBookmark} from "react-icons/fi";

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
                            <div className={s.thumb}>
                                <img src={pictures[0]} alt='place of job' width={66} height={66} className={s.itemPic} />
                            </div>
                            <div className={s.itemInfo}>
                                <Link to={`${id}`} className={s.itemLink}>
                                    <h2 className={s.itemTitile}>{title}</h2>
                                </Link>
                                <p className={s.itemName}>{name} <span className={s.itemName_span}>&#183;</span> {address}</p>
                                <div className={s.itemLocation}>
                                    <BsFillGeoAltFill
                                    style={{  color: "var(--item-details-color)" }}
                                    />
                                    {location.lat}, {location.long}
                                    {/* для подключения названия локации необходим ключ Google Geocoding API */}
                                </div>
                            </div>
                            <div className={s.itemInteraction}>
                                <ul className={s.rating_list}>
                                    <li className={s.rating_item}><AiFillStar className={s.stars} /></li>
                                    <li className={s.rating_item}><AiFillStar className={s.stars} /></li>
                                    <li className={s.rating_item}><AiFillStar className={s.stars} /></li>
                                    <li className={s.rating_item}><AiFillStar className={s.stars} /></li>
                                    <li className={s.rating_item}><AiFillStar className={s.stars} /></li>
                                </ul>
                                <div className={s.itemBack}>
                                    < PostedAgo createdAt={createdAt} />
                                    <div >
                                        <FiBookmark className={s.bookmark} 
                                        style={{ width: "27", height: "23", }}
                                        />
                                    </div>
                                </div>
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