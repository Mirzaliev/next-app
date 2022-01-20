import {TopPageProps} from "./TopPage.props";
import {ProductModel} from "../../interfaces/product.interface";
import React, {useEffect, useReducer} from "react";
import {Product} from "../Product/Product";
import {Htag, Label} from "../../components";
import style from './TopPage.module.css';
import {Sorting} from "../../components/Sorting";
import {SortVariant} from "../../components/Sorting/Sorting.props";
import {sortReducer} from "../../components/Sorting/sorting.reducer";

export const TopPage = ({page, firstCategory, products}: TopPageProps): JSX.Element => {

  const [{products: _products, sort}, dispatchProducts] = useReducer(sortReducer, {products, sort: SortVariant.Rating});


  const setSort = (sort: SortVariant) => {
    dispatchProducts({type: sort});
  };

  useEffect(() => {
    dispatchProducts({type: 'reset', initialState: products});
  }, [products]);

  return (
    <>
      <div className={style.title}>
        <Htag tag={"h1"} children={page.title}/>
        <Label mode={"grey"}>{products.length}</Label>
        <Sorting sort={sort} setSort={setSort}/>
      </div>
      {_products && _products.map((product: ProductModel) => (<Product key={product._id} product={product}/>))}
    </>
  );
};
