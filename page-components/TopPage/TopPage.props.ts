import {AliasPageModel, TopLevelCategory} from "../../interfaces/aliaspage.interface";
import {ProductModel} from "../../interfaces/product.interface";

export interface TopPageProps {
  firstCategory: TopLevelCategory;
  page: AliasPageModel;
  products: ProductModel[];
}
