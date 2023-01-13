import React from "react";
import s from "./PostedAgo.module.scss";

const time = new Date();

interface IProps  {
    createdAt: string
}

const PostedAgo: React.FC<IProps> = (props: IProps) => {
    let timeAgo: string = "";
    
    const dataAgo = Math.round((time.getTime() - Date.parse(props.createdAt)) / 86400000);
    timeAgo = `${dataAgo} days ago`;
    if (isNaN(dataAgo)) {
        timeAgo = 'unknown' ;
    }
    if (dataAgo > 365) {
        timeAgo = `${Math.floor(dataAgo / 365)} years ago`
    }

    return (
        <p className={s.text}>Posted {timeAgo} </p>
    )
}

export default PostedAgo;