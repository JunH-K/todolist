# TodoList

> 기술스택


* backend
    * node.js
    * express(memory DB)

* frontend
    * react.js
    * axios
    * prop-types
    * redux
    * redux-saga
    * styled-components


> 데모

https://todolist-sigma.now.sh/


> 개발환경 세팅 및 실행

* node.js v12.16.1 install

https://nodejs.org/dist/v12.16.1/node-v12.16.1-x64.msi


* git clone

```shell script
git clone https://github.com/JunH-K/todolist.git
```

* /todolist 경로에서 npm install

```shell script
npm install
```

* 실행
```shell script
npm run dev
```

> 기능 요구 사항

* todo 항목추가
    * todo 는 다른 todo 를 참조 할 수 있다.(ex:@1@2)
* todo 조회
* todo 수정
* todo 삭제
* 페이지네이션
* todo 상태 체크박스로 완료 미완료
    * 참조하는 todo 가 미완료시 완료불가
* 더보기 메뉴
    * 생성일 오름차순 정렬
    * 생성일 내림차순 정렬
    * 수정일 오름차순 정렬
    * 수정일 내림차순 정렬
    * 전체목록 보기
    * 완료목록 보기
    * 미완료목록 보기
    * 백업(json)파일 다운로드
    * 복원(json)파일 업로드
        * 기존 todo 데이터를 대체
* 검색
    * todo 내용검색

> target browser

* chrome last 2 version

> test browser

* chrome last 2 version
* ie11
* samsung internet 11.1.2.2(mobile)

> Issue

* ie11 백업, 복원 기능불가
* samsung internet 백업, 복원 기능불가




