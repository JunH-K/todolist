import React, { useCallback, useRef, useState } from 'react';
import querystring from 'querystring';
import { useHistory } from 'react-router-dom';
import { HeaderStyle } from './Style';
import InputText from '../form/InputText';
import { Button } from '..';
import MoreAction from './MoreAction';

const Header = () => {
  const history = useHistory();
  const [search, setSearch] = useState('');
  const [isMoreMenu, setIsMoreMenu] = useState(false);
  const timer = useRef(0);

  const request = useCallback(value => {
    if (timer.current) {
      clearTimeout(timer.current);
    }
    timer.current = setTimeout(() => {
      let query = {};
      if (value) {
        query = {
          searchText: value,
        };
      }

      history.push(`?${querystring.stringify(query)}`);
    }, 500);
  }, []);

  const onChange = useCallback(e => {
    const {
      target: { value },
    } = e;
    setSearch(value);
    request(value);
  }, []);

  const onKeyDown = useCallback(e => {
    if (e.keyCode === 13) {
      request(search);
    }
  }, []);

  const onClickMoreAction = useCallback(() => {
    setIsMoreMenu(!isMoreMenu);
  }, [isMoreMenu]);

  const onClickOutside = () => {
    setIsMoreMenu(false);
  };

  return (
    <HeaderStyle>
      <InputText
        className="search"
        placeholder="검색 ex) 내용 , @1"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={search}
      />
      <Button
        type="button"
        className="more-action"
        name="더보기"
        onClick={onClickMoreAction}
      />
      {isMoreMenu && <MoreAction onClickOutside={onClickOutside} />}
    </HeaderStyle>
  );
};

export default Header;
