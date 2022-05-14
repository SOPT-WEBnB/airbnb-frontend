![4조](https://user-images.githubusercontent.com/58380158/168250719-1bc5c94a-b24c-4ff3-b262-8d645185f287.png)
# airbnb-frontend
30기 THE SOPT 합동 세미나 4조

## 🌠 개발자 소개 및 역할 분배
|백지연|김형겸|최유림|
|:-:|:-:|:-:|
|[@Jiyeon Baek](https://github.com/100Gyeon)|[@Hyeongkyeom Kim](https://github.com/Brokyeom)|[@Yoorim Choi](https://github.com/choiyoorim)|
|룸 상세 페이지<br/>위시리스트 저장 페이지|여행 페이지<br/>로딩 화면|위시리스트 페이지<br/>위시리스트 상세 페이지|

## 🪄 협업 방식
### ⌨️ Code Convention
<details>
<summary>토글 버튼을 클릭하면 확인할 수 있습니다.</summary>

- ESLint, prettier 사용
- 폴더명은 소문자로 시작
- Event handler 이름 : on으로 시작
- 배열과 관련된 변수명은 `__List` (ex. reservationList)
- 변수, 함수 : Camel case 사용
- 함수
  - 함수명은 동사로 시작
  - `const 함수명 = () => {}` 형식으로 작성
- 컴포넌트
  - 컴포넌트를 정의한 파일 : Pascal case 사용
  - `function 컴포넌트명() {}` 형식으로 작성
- styled-components
  - 코드 하단에 작성
  - px 대신 rem 사용 (ex. 12px로 설정하고 싶다면? 1.2rem이라고 작성하면 된다.)
  - 항상 맨 앞에 `Styled` 붙여주기 
  - 최상단 태그 이름은 `Styled[컴포넌트명]`
    ```javascript
    function Home() {
      return (
        <StyledHome>
        ...
        </StyledHome>
      );
    }
    ```
  - 색상은 항상 아래처럼 ThemeProvider 활용해서 설정
    ```javascript
    button {
      background-color: ${(props) => props.theme.colors.airPink};
      color: ${(props) => props.theme.colors.airWhite};
    }
    ```
- API 호출 함수 : api.js에 작성하기
- 피그마에서 svg를 export해서 `src/assets/icons` 혹은 `src/assets/images`에 저장하고, `src/assets/index.js`에 아래처럼 추가해 사용
  ```javascript
  export { default as icSample } from './icons/ic_sample.svg';
  export { default as imgSample } from './images/img_sample.svg';
  ```
</details>

  
### ✉️ Commit Message Convention
- init: 개발 환경 초기 세팅
- feat: 새로운 기능 추가
- design: UI를 위한 스타일링 
- fix: 버그 수정
- docs: 문서 추가, 수정, 삭제
- style: 코드 포맷팅(코드 순서 변경, 세미콜론 추가)
- refactor: 코드 리팩토링
- chore: 그 외 자잘한 수정

### ♣️ Git branch strategy
- **main - develop - feature**
- main : 배포
- develop : 개발된 기능을 통합하는 브랜치
- feat/[기능] : 기능별로 개발을 진행하는 브랜치
