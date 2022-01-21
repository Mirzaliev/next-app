import {ReviewProps} from "./Review.props";
import React from "react";
import UserIcon from './user.svg';
import style from './Review.module.css';
import {Rating} from "../../components/Rating";
import {P} from "../../components/P";
import { format } from 'date-fns';
import { ru } from 'date-fns/locale';
export const Review = ({ review }: ReviewProps): JSX.Element=> {
  const {name,createdAt, description, rating, title} = review;
  return (
    <div className={style.review}>
      <UserIcon className={style.icon}/>
      <div className={style.user}>
        <span className={style.userName}>{name}: </span>
        <span className={style.title}>{title}</span>
      </div>
      <div className={style.date}>
        <span>{format(new Date(createdAt), 'dd MMMM yyyy', {locale: ru} )}</span>
      </div>
      <div className={style.rating}>
        <Rating rating={rating} isEditable={false}/>
      </div>
      <div className={style.desc}>
        <P>{description}</P>
      </div>
    </div>
  );
};
