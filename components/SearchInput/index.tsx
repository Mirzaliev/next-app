import {SearchInputProps} from "./SearchInput.props";
import React, {ChangeEvent,KeyboardEvent, useState} from "react";
import cn from 'classnames';
import style from './SearchInput.module.css';
import classNames from "classnames";
import {Input} from "../Input";
import {Button} from "../Button";
import SerachIcon from './glass.svg';
import {useRouter} from "next/router";

export const SearchInput = ({className, ...props}: SearchInputProps): JSX.Element => {

  const [search, setSearch] = useState<string>('');
  const router = useRouter();

  const goSearch = () => {
    if(!search) {
      return false;
    }
    router.push({
      pathname: '/serach',
      query: {
        q: search
      }
    });
  };

  const handleKeyDown = (e: KeyboardEvent<HTMLInputElement>) => {
    if(!search) {
      return false;
    }
    if(e.key == 'Enter') {
      goSearch();
    }
  };
  return (
    <div className={classNames(className, style.searchWrapper)} {...props}>
      <Input
        className={style.searchInput}
        placeholder='...'  value={search}
        onChange={(e:ChangeEvent<HTMLInputElement>) => setSearch(e.target.value)}
        onKeyDown={handleKeyDown}
      />
      <Button
        mode='primary'
        className={style.searchButton}
        onClick={() => goSearch()}
      >
        <SerachIcon/>
      </Button>
    </div>);
};
