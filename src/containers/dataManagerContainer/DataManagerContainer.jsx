import React, { useRef, useCallback } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import { showToast } from '../../components';
import { ADD_TODO_REQUEST } from '../../reducers/todos';

const DataManagerContainer = () => {
  const dispatch = useDispatch();
  const download = useRef(null);
  const restore = useRef(null);

  const fetchBackupData = useCallback(async () => {
    try {
      showToast('백업중..');
      const backupData = await axios.get('/todos');
      return backupData.data.row;
    } catch (error) {
      console.error(error);
      showToast('백업실패');
    }
  }, []);

  const onClickBackup = useCallback(() => {
    fetchBackupData().then(backupData => {
      download.current.href = `data:text/json;charset=utf-8,${encodeURIComponent(
        JSON.stringify(backupData)
      )}`;
      download.current.click();
    });
  }, []);

  const onClickRestore = useCallback(() => {
    restore.current.click();
  }, []);

  const onChangeHandleFiles = useCallback(e => {
    const [file] = e.target.files;
    if (file) {
      file.text().then(data => {
        const backup = JSON.parse(data);
        showToast('데이터 복원 중...');
        dispatch({
          type: ADD_TODO_REQUEST,
          data: backup,
        });
      });
    }
  }, []);
  return (
    <>
      <a
        id="download"
        download="backupTodo.json"
        ref={download}
        style={{ display: 'none' }}
      >
        데이터백업
      </a>
      <div onClick={onClickBackup} className="menu">
        데이터 백업
      </div>
      <input
        type="file"
        id="fileElem"
        multiple
        accept="application/json"
        style={{ display: 'none' }}
        ref={restore}
        onChange={onChangeHandleFiles}
      />
      <div
        onClick={onClickRestore}
        className="menu"
        title="할일이 복원파일로 대체됩니다."
      >
        데이터 복원
      </div>
    </>
  );
};

export default DataManagerContainer;
