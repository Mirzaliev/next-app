import {ProductProps} from "./Product.props";
import style from './Product.module.css';
import {P, LabelGroup, Label, Button, Rating, Htag} from '../../components';
import {pluralText} from '../../helper/pluralText';

import React, {ForwardedRef, forwardRef, useRef, useState} from "react";
import {price} from "../../helper/price";
import Image from 'next/image';
import classNames from "classnames";
import {Review} from "../Review/Review";
import {ReviewForm} from "..";
import {motion} from "framer-motion";

export const Product = motion(forwardRef(({product}: ProductProps, ref:ForwardedRef<HTMLDivElement>): JSX.Element=> {
  const [reviewOpen, setReviewOpen] = useState<boolean>(false);

  const reviewRef = useRef<HTMLFormElement>(null);

  const goScrollReview = () => {
    setReviewOpen(!reviewOpen);
    reviewRef.current?.scrollIntoView({
      behavior: "smooth",
      block: "start"
    });
  };

  return (<div className={style.wrapper} ref={ref}>
    <div className={style.grid}>
      <div className={style.title}>
        <img
          src={process.env.NEXT_PUBLIC_DOMAIN + product.image}
          alt={product.title}
        />
        <Htag tag={'h3'} children={product.title}/>
        <LabelGroup>
          {product.categories && product.categories.map(p => (<Label key={p}>{p}</Label>))}
        </LabelGroup>
      </div>
      <div className="">
        <table width="100%">
          <tr >
            <th align='left'>{price(product.price)} <Label mode={"green"}>{`-${price(product.oldPrice - product.price)}`}</Label></th>
            <th align='left'>Contact</th>
            <th align='left'><Rating rating={product.initialRating}/></th>
          </tr>
          <tr>
            <td>цена курса</td>
            <td>в рассрочку</td>
            <td><a href="#ref" onClick={goScrollReview}>{pluralText(product.reviewCount, ['отзыв', 'отзыва', 'отзывов'])} о курсе</a></td>
          </tr>
        </table>
      </div>
      <div className={style.divider}><hr className='hr'/></div>
      <div className={style.desc}>
        <P>{product.description}</P>
      </div>

      <div className="">
        <table width="100%">
          {product.characteristics && product.characteristics.map((p) => (
            <tr key={p.value}>
              <td className='text-bold'>{p.name}</td>
              <td>{p.value}</td>
            </tr>
          ))}

        </table>
      </div>
      <div className="">

        {product.advantages && <>
          <table width="100%" className='mb15'>
            <tr  className='mb10'>
              <th align='left' >Преимущества</th>
            </tr>
            <tr>
              <td>{product.advantages}</td>
            </tr>
          </table>
        </>
        }

      </div>
      <LabelGroup>
        {product.tags && product.tags.map(p => (<Label key={p}>{p}</Label>))}
      </LabelGroup>
      <div className={style.divider}><hr className='hr'/></div>
      <div className={style.btns}>
        <Button mode={"primary"}>Подробнее о курсе</Button>
        <Button mode={"ghost"} arrow={ reviewOpen ? 'down' : 'right'} onClick={() => setReviewOpen(!reviewOpen)}>Отзывы о курсе </Button>
      </div>
      <motion.div className={classNames(style.reviews, {
        [style.reviewOpen]: reviewOpen
      })}>
        {product.reviews && product.reviews.map((review, index) => (<Review key={index} review={review}/>)) }
        <div className={style.divider}><hr className='hr'/></div>
        <ReviewForm ref={reviewRef} productId={product._id}/>
      </motion.div>
    </div>
  </div>);
}));
