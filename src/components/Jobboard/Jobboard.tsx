import { loadavg } from "os";
import React from "react";
import { Link } from "react-router-dom";
import Pagination from "../Pagination/Pagination";
import s from "./Jobboard.module.scss"

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
    createdAt?: Date,
    updatedAt?: Date,
    description: string,
    employment_type: string[]
}

const Jobboard: React.FC = () => {
    const allJobs: Job[] = [
        {
        id: "635ee6d304601d61a71951f6",
        name: "Sureplex",
        email: "sureplex@gmail.bo",
        phone: +97117307890,
        title: "Ut veniam occaecat aute adipisicing eiusmod non pariatur enim enim cupidatat nulla ipsum eiusmod.",
        salary: "60k-71k",
        address: "76 Blende Jardine Place",
        benefits: [
            "Pay vocations",
            "Flexible hours"
        ],
        location: {
            lat: 9.804124,
            long: 147.139488
        },
        pictures: [
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300",
            "https://picsum.photos/200/300"
        ],
        createdAt: "2012-05-04T01:38:26.141Z",
        updatedAt: "2012-05-05T01:38:26.141Z",
        description: "\n  Reprehenderit Lorem consectetur non et minim adipisicing deserunt. Ipsum reprehenderit do pariatur proident esse sint magna ullamco qui minim. Anim Lorem ut laborum occaecat culpa consectetur reprehenderit aliquip ex cupidatat proident quis laborum. Nulla aute ipsum et anim.\n  \n  Responsopilities:\n    Ex qui consequat deserunt laborum cupidatat ut ullamco veniam minim nisi incididunt aliquip incididunt. Sunt sunt ullamco elit ipsum ea enim consectetur sit magna minim ea cupidatat. Et ut proident voluptate quis nulla anim commodo in pariatur ad.\n  \nCompensation & Benefits:\n\t    Incididunt et sint incididunt laboris duis. Deserunt consectetur sint aute et sint aliqua quis nostrud non elit aliqua elit tempor. Aliquip ad dolore proident eu consequat elit amet laborum aute excepteur sit labore.\n\n",
        employment_type: [
            "Full time"
        ]
    },
    ];
    return (
        <div className={s.board}>
            <ul className={s.list}>
                {allJobs.map(({id, title, name, address, location, pictures, createdAt}) => {
                    
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
                                    <svg className={s.itemSave}>
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