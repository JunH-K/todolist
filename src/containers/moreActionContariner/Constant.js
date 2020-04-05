const MENUS = [
  { name: '생성일 오름차순', key: 'createdAsc' },
  { name: '생성일 내림차순', key: 'createdDesc' },
  '',
  { name: '수정일 오름차순', key: 'updatedAsc' },
  { name: '수정일 내림차순', key: 'updatedDesc' },
  '',
  { name: '전체목록 표시', key: 'all' },
  { name: '완료목록 표시', key: 'done' },
  { name: '미완료목록 표시', key: 'undone' },
  '',
];

const MENUS_QUERY = {
  createdAsc: { sort: 'createdAt', order: 'asc' },
  createdDesc: { sort: 'createdAt', order: 'desc' },
  updatedAsc: { sort: 'updateAt', order: 'asc' },
  updatedDesc: { sort: 'updateAt', order: 'desc' },
  all: { done: '' },
  done: { done: true },
  undone: { done: false },
};

export { MENUS, MENUS_QUERY };
