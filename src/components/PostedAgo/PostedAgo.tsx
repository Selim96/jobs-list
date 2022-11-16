import React from "react";

const time = new Date();

type Props = {
    createdAt: string
}

const PostedAgo: React.FC<Props> = (props: Props) => {
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
        <p>Posted {timeAgo} </p>
    )
}

export default PostedAgo;