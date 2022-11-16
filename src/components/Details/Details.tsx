import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import allSelectors from "../../redux/selectors";
import {addDetails} from "../../redux/slice";
import Loader from "../Loader";
import ApplyBtn from "../buttons";
import PostedAgo from "../PostedAgo";
import s from "./Details.module.scss";

const Details: React.FC = () => {
    const dispatch = useAppDispatch();
    const isLoading = useAppSelector(allSelectors.getLoading);
    const details = useAppSelector(allSelectors.getDetails);
    
    const { id } = useParams();

    useEffect(() => {
        dispatch(addDetails(`${id}`));
    }, [dispatch, id]);

    if (details) {
        const { name, phone, email, title, salary, address, benefits, location, pictures, description, employment_type, createdAt
        } = details;

        const mainText = description.split("\n");
        mainText.shift();
        console.log(`https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${location.lat}, ${location.long}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`)

        return (
            <div className={s.main}>
                <div className={s.detailsPage}>
                    <section className={s.desc}>
                        <h2 className={s.title}>Job Details</h2>
                        <div className={s.shareDetails}>
                            <div className={s.saveList}>
                                <svg width={15} height={15}>
                                </svg>
                                <p>Save to my list</p>
                            </div>
                            <div className={s.share}>
                                <svg width={15} height={15}><use>
                                </use></svg>
                                <p>Share</p>
                            </div>
                        </div>
                        <ApplyBtn />
                        <div className={s.title_thumb}>
                                <h3 className={s.desc_title}>{title}</h3>
                                <div>
                                    <p className={s.desc_salary}>&#8364; {salary}</p>
                                    <p>Brutto, per year</p>
                                </div>
                        </div>
                        <PostedAgo createdAt={createdAt} />
                        <p className={s.desc_text}>{mainText[0]}</p>
                        <h4 className={s.desc_subtitle}>Responsopilities</h4>
                        <p className={s.desc_text}>{mainText[3]}</p>
                        <p className={s.desc_text}></p>
                        <h4 className={s.desc_subtitle}>Compensation & Benefits:</h4>
                        <p className={s.desc_text}>{mainText[6]}</p>
                    </section>
                    <ApplyBtn />
                    <section className={s.addInfo}>
                        <h2 className={s.title}>Additional info</h2>
                        <p>Employment type</p>
                        <ul className={s.addInfo_emptype}>
                            {employment_type.map((item: string, index: number) => {
                                return (
                                    <li id={index.toString()} className={s.addInfo_item}>{item}</li>
                                )
                            })}
                        </ul>
                        <p>Benefits</p>
                        <ul className={s.addInfo_benefits}>
                            {benefits.map((item: string, index: number) => {
                                return (
                                    <li id={index.toString()} className={s.addInfo_item}>{item}</li>
                                )
                            })}
                        </ul>
                    </section>
                    <section className={s.images}>
                        <h2 className={s.title}>Attached images</h2>
                        <ul className={s.images_list}>
                            {pictures.map((item: string, index: number) => {
                                return (
                                    <li id={index.toString()} className={s.images_item}><img src={item} width={150} height={100} alt="pictures about job" /></li>
                                    )
                            })}
                        </ul>
                    </section>
                    
                    <button>RETURN TO JOB BOARD</button>
                </div>
                <div className={s.contacts}>
                    <p className={s.contacts_title}>Departman name.</p>
                    <p className={s.contacts_title}>{name}</p>
                    <address className={s.address}>
                        <p className={s.address_str}><span></span> {address}</p>
                        <ul>
                            <li>
                                <a href={`tel:${phone}`} className={s.address_item}>{phone}</a>
                            </li>
                            <li>
                                <a href={`mailto:${email}`} className={s.address_item}>{email}</a>
                            </li>
                        </ul>
                    </address>
                    <iframe
                        title="map"
                        className="map__iframe"
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d5940.799336478118!2d-87.65761653330568!3d41.8842610525952!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x880e2cdb06efc9eb%3A0x523e0685c502fc25!2zOTE1IFcgV2FzaGluZ3RvbiBCbHZkLCBDaGljYWdvLCBJTCA2MDYwNywg0KHQqNCQ!5e0!3m2!1sru!2sua!4v1641910586619!5m2!1sru!2sua"
                        name="map"
                        width="200"
                        height="200"
                        loading="lazy"
                    >
                    </iframe>
                    <div className="mapouter">
                        <div className="gmap_canvas">
                            <iframe
                                title="map2"
                                className="gmap_iframe"
                                loading="lazy"
                                src={`https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=${location.lat},${location.long}&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed`}></iframe>
                            <a href="https://piratebay-proxys.com/">Piratebay</a>
                        </div>
                    </div>
                </div>
            </div>
        )
    };
    
    return isLoading ? (<Loader />) : (<div className={s.error}>
        <p>Update, something go wrong! </p>
    </div>)
}

export default Details;