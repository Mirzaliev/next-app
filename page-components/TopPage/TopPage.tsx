import {TopPageProps} from "./TopPage.props";
import {ProductModel} from "../../interfaces/product.interface";
import React from "react";

export const TopPage = ({page, firstCategory, products}: TopPageProps): JSX.Element => {
  return (
    <p>
      <b>{page.title}</b>
      {products && products.map((p: ProductModel) => (<li key={p._id}>{p.title}</li>))}
    </p>
  );
};
