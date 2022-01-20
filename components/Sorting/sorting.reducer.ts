import {SortVariant} from "./Sorting.props";
import {ProductModel} from "../../interfaces/product.interface";


export type SortActions = { type: SortVariant.Price} |  { type: SortVariant.Rating} | {type: 'reset', initialState: ProductModel[]};

export interface SortingReducerState {
  sort: SortVariant;
  products: ProductModel[];
}


export const sortReducer = ( state: SortingReducerState, action: SortActions): SortingReducerState => {
  switch (action.type) {
  case SortVariant.Rating:
    return {
      sort: SortVariant.Rating,
      products: state.products.sort((a, b) => a.initialRating > b.initialRating ? -1 : 1)
    };
  case SortVariant.Price:
    return {
      sort: SortVariant.Price,
      products: state.products.sort((a, b) => a.price > b.price ? 1 : -1)
    };
  case "reset":
    return {
      sort: SortVariant.Rating,
      products: action.initialState
    };
  default:
    throw new Error('Неверный тип сортивровки');
  }
};