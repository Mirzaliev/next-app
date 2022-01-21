import {ReviewFormProps} from "./ReviewForm.props";
import React, {useState} from "react";
import style from './ReviewForm.module.css';
import {Input} from "../../components/Input";
import {Rating} from "../../components/Rating";
import {Textarea} from "../../components/Textarea";
import {Button} from "../../components/Button";
import CloseIcon from './close.svg';
import {useForm, Controller} from "react-hook-form";
import {IReviewForm, IReviewFormResponse} from "./ReviewForm.interface";
import axios, {AxiosError} from "axios";
import {API} from "../../helper/api";
export const ReviewForm = ({ productId, className, ...props }: ReviewFormProps): JSX.Element=> {

  const { register, control, handleSubmit, formState: { errors }} = useForm<IReviewForm>();
  const [isSuccess, setSuccess] = useState<boolean>(false);
  const [isError, setIsError] = useState<string>('');

  const postReview = async (formData: IReviewForm) => {
    try {
      const {data} =  await axios.post<IReviewFormResponse>(API.review.createDemo, {...formData, productId});
      data.message ? setSuccess(true) : setIsError('Произошла ошибка запроса');
    }catch (e) {
      if (e instanceof Error) {
        setIsError(e.message);
      }
    }

  };

  return (
    <form onSubmit={handleSubmit(postReview)}>
      <div className={style.form} {...props}>
        <Input {...register('name', { required: { value: true, message: 'Заполните имя' } })} error={errors.name} placeholder={'Ваше имя'}/>
        <Input {...register('title',{ required: { value: true, message: 'Заполните заголовок' } })} error={errors.title} className={style.title} placeholder={'Заголовок'}/>
        <div className={style.rating}>
          <span>Оценка</span>
          <Controller control={control} name='rating' render={({field}) => (
            <Rating rating={field.value} ref={field.ref} setRating={field.onChange} error={errors.rating}/>
          )} rules={{required: { value: true, message: 'Укажите рейтинг' } }}/>

        </div>
        <Textarea {...register('description', {required: { value: true, message: 'Заполните описание'}})} error={errors.description}  className={style.textarea} defaultValue={'Текст'}/>
        <div className={style.actions}>
          <Button  type="submit" mode={"primary"}>Отправить</Button>
          <span>* Перед публикацией отзыв пройдет предварительную модерацию и проверку</span>
        </div>
      </div>
      {isSuccess && <div className={style.alert}>
        <p>Спасибо, ваш отзыв отправлен</p>
        <CloseIcon onClick={() => setSuccess(false)}/>
      </div>}
      {isError && <div className={style.error}>
        {isError}
        <CloseIcon onClick={() => setIsError('')}/>
      </div>}
    </form>
  );
};
