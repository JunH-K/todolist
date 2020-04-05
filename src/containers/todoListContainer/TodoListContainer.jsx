import React, { useState, useEffect, useRef } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { TodoStyle, CheckBox } from './Style';
import { attachPrefix, getMillisecondsToDate } from '../../util/util';
import EditContainer from '../editContainer/EditContainer';
import { STATUS_INIT, EDIT_TODO_REQUEST } from '../../reducers/todos';
import { showToast } from '../../components';

const TodoListContainer = () => {
  const history = useHistory();
  const dispatch = useDispatch();
  const [editId, setEditId] = useState(-1);
  const { todoList = [], pageInfo } = useSelector(state => state.todos);
  const noEditing = useRef(-1);

  useEffect(() => {
    if (!todoList.length) {
      const { curPage } = pageInfo;
      if (curPage) {
        return history.replace(`/page/${curPage}`);
      }

      showToast('Todo 를 생성하세요!');
    }

    setEditId(noEditing.current);
  }, [todoList]);

  const getRefTodoState = id => {
    const [todo] = todoList.filter(todo => {
      return todo.id === id;
    });
    const { refTodo = [] } = todo;

    const refTodoFilter = todoList.filter(todo => {
      return refTodo.includes(todo.id.toString());
    });

    return refTodoFilter.reduce(
      (preValue, curValue) => {
        if (curValue.done) {
          return {
            ...preValue,
            done: [curValue.id, ...preValue.done],
          };
        }
        return {
          ...preValue,
          notDone: [curValue.id, ...preValue.notDone],
        };
      },
      { done: [], notDone: [] }
    );
  };

  const onChangeChecked = id => e => {
    const {
      target: { checked },
    } = e;
    if (checked) {
      const { notDone } = getRefTodoState(id);
      if (notDone.length) {
        showToast(`${attachPrefix(notDone, '@')} 이 완료되지 않았습니다.`);
        return;
      }
    }

    dispatch({
      type: EDIT_TODO_REQUEST,
      data: {
        id,
        done: checked,
      },
    });
  };

  const onClickEdit = id => e => {
    if (e.target.type === 'checkbox') {
      return;
    }
    dispatch({ type: STATUS_INIT });
    setEditId(id);
  };

  const onClickCancel = () => {
    setEditId(noEditing.current);
  };

  return todoList.map(todo => {
    if (todo.id === editId) {
      return (
        <EditContainer
          todoValue={todo.content}
          refValue={todo.refTodo}
          id={todo.id}
          key={todo.id + todo.createdAt}
          onClickCancel={onClickCancel}
        />
      );
    }

    return (
      <TodoStyle
        key={todo.id + todo.createdAt}
        done={todo.done}
        onClick={onClickEdit(todo.id)}
        title="클릭하여 수정하세요."
      >
        <CheckBox
          type="checkbox"
          checked={todo.done}
          onChange={onChangeChecked(todo.id)}
        />
        <span data-id="1" className="todo-id">
          @{todo.id}
        </span>
        <p className="content">{todo.content}</p>
        <div className="ref-id">
          <p>
            {Array.isArray(todo.refTodo) && attachPrefix(todo.refTodo, '@')}
          </p>
        </div>
        <div className="date">
          <span className="create-date">
            작성일자 : {getMillisecondsToDate(todo.createdAt)}
          </span>
          <span className="update-date">
            수정일자 : {getMillisecondsToDate(todo.updateAt)}
          </span>
        </div>
      </TodoStyle>
    );
  });
};

export default TodoListContainer;
