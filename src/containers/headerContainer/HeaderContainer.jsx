import React, { useCallback, useRef, useState } from 'react';
import querystring from 'querystring';
import { useHistory } from 'react-router-dom';
import MoreActionContainer from '../moreActionContariner/MoreActionContainer';
import { Header } from '../../components';

const HeaderContainer = () => {
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

  const onClickOutside = e => {
    if (e.target.dataset.name === 'outside') {
      setIsMoreMenu(false);
    }
  };

  return (
    <Header
      onChange={onChange}
      onKeyDown={onKeyDown}
      search={search}
      onClickMoreAction={onClickMoreAction}
    >
      {isMoreMenu && <MoreActionContainer onClickOutside={onClickOutside} />}
    </Header>
  );
};

export default HeaderContainer;
