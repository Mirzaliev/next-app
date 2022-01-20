import {ProductProps} from "./Product.props";
import style from './Product.module.css';
import {P, LabelGroup, Label, Button, Rating, Htag} from '../../components';


import React from "react";
import {price} from "../../helper/price";

export const Product = ({product}: ProductProps): JSX.Element=> {

  return (<div className={style.wrapper}>
    <div className={style.grid}>
      <div className="title">
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
            <td>0 отзывов о курсе</td>
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
        <Button mode={"ghost"} arrow='right'>Отзывы о курсе </Button>
      </div>
    </div>
  </div>);
};