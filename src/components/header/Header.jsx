import React, { useState, useRef, useCallback } from 'react';
import querystring from 'querystring';
import { HeaderStyle, MoreActionStyle } from './Style';
import { useHistory } from 'react-router-dom';
import InputText from '../form/InputText';
import { Button } from '..';
import MoreAction from './MoreAction';
import { useDispatch } from 'react-redux';
import { TODO_LIST_REQUEST } from '../../reducers/todos';

const Header = props => {
  const history = useHistory();
  const [search, setSearch] = useState('');
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

      history.push(`./1?${querystring.stringify(query)}`);
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

  return (
    <HeaderStyle>
      <InputText
        className="search"
        placeholder="검색 ex) 내용 , @1"
        onChange={onChange}
        onKeyDown={onKeyDown}
        value={search}
      />
      <Button type="button" className="more-action" name="더보기" />
      {/* <MoreAction /> */}
    </HeaderStyle>
  );
};

export default Header;
