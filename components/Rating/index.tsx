import { RatingProps } from "./Rating.props";
import style from "./Rating.module.css";
import {useEffect, useState, KeyboardEvent} from "react";
import StarIcon from './star.svg';
import cn from 'classnames';
import set = Reflect.set;

export const Rating = ({rating, setRating, isEditable = true, className, ...props} : RatingProps): JSX.Element => {

  const [ratingArray, setRatingArray] = useState<JSX.Element[]>(new Array(5).fill(<></>));

  useEffect(() => {
    buildRating(rating);
  }, [rating]);

  const buildRating = (currentRating: number) => {
    const updateedArray = ratingArray.map((r: JSX.Element, index : number): JSX.Element => {
      return (
        <StarIcon className={cn(style.star, {
          [style.active]: index < currentRating,
          [style.isEditable]: isEditable
        })}
        onMouseEnter = {() => onChangeRating(index+1)}
        onMouseLeave = {() => onChangeRating(rating)}
        onClick={() => onCLick(index + 1)}
        tabIndex={isEditable ? 0 : -1}
        onKeyDown={(e: KeyboardEvent<SVGAElement>) => isEditable &&  handleSpace(index + 1, e)
        }
        />);
    });
    setRatingArray(updateedArray);
  };

  const onChangeRating = (i: number): void => {
    if(isEditable) {
      buildRating(i);
    }
  };

  const onCLick =(rating: number): void => {
    if(isEditable && setRating) {
      setRating(rating);
    }
  };

  const handleSpace = (rating: number, event: KeyboardEvent<SVGElement>) => {
    if(event.code == 'Space' && setRating) {
      setRating(rating);
    }
  };

  return (<div className={className} {...props}>{
    ratingArray.map((r: JSX.Element, i:number) => (<span key={i}>{r}</span>))
  }</div>);
};
