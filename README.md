<div align='center'>

<img src="./client/src/assets/images/logo/logo.png"/>

<p style=" font-size: 24px; font-weight:900; color: #8D8DE5">Eat the World, Meet the World!</p>

당신이 알지 못했던 세계음식 맛집 소개 서비스, 미지의 세계
<br>

(해당 프로젝트는 5인이 진행했던 Ruby on rails 웹 프로젝트를 혼자 React, Express로 마이그레이션한 프로젝트입니다.)

</div>
<br>

## 🔗 Dev Log

[🌐 미지의 세계]() - 배포 준비중

[📝 작업 기록 보기](https://hyejiyeom.notion.site/b9112274ebc94665959070f0362f8e31?pvs=4)

<br>

## 📄 Pages

### 1. 메인 페이지

![](https://user-images.githubusercontent.com/77879373/249679429-84beb174-839c-4495-92c3-a0d61bc07909.png)

### 2. 지도 페이지

![](https://user-images.githubusercontent.com/77879373/249679627-4027edbc-49a4-4bbe-9fc1-841ab4ece66f.png)
등록된 음식점들을 세계 지도 위에서 확인할 수 있습니다.

### 3. 목록 페이지

![](https://user-images.githubusercontent.com/77879373/249679669-1961f5fc-9c1d-4fa5-8ba3-35968af4db68.png)
등록된 음식점들을 리스트 형태로 확인할 수 있습니다.

![](https://user-images.githubusercontent.com/77879373/249682648-c0fbcec7-4297-4c6a-b1fa-9d0334e83d66.gif)
검색을 통해 음식점 필터링을 할 수 있습니다.

### 4. 상세 페이지

![](https://user-images.githubusercontent.com/77879373/249680162-3add416a-eff7-4e23-a116-0fefc869679b.png)
지도 페이지/목록 페이지에서 클릭한 음식점의 상세 정보를 모달의 형태로 확인할 수 있습니다.

![](https://user-images.githubusercontent.com/77879373/249681959-b5a2a113-6027-4688-95d9-771f109589fa.gif)
음식점 전용 커스텀 티켓을 다운로드할 수 있습니다.

<br>

## 🛠 Stack

<div align="center" style="display:flex; flex-direction: column; gap: 0.5px">
<div style="display:flex; gap:0.5px; justify-content:center">
<img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black">
<img src="https://img.shields.io/badge/typescript-3178C6?style=for-the-badge&logo=typescript&logoColor=white">
</div>
<div style="display:flex; gap: 0.5px; justify-content:center">
<img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
<img src="https://img.shields.io/badge/react router-CA4245?style=for-the-badge&logo=reactrouter&logoColor=white">
<img src="https://img.shields.io/badge/react query-FF4154?style=for-the-badge&logo=reactquery&logoColor=white">
</div>
<div style="display:flex; gap:0.5px; justify-content:center">
<img src="https://img.shields.io/badge/styled components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
</div>
<div style="display:flex; gap:0.5px; justify-content: center">
<img src="https://img.shields.io/badge/node.js-339933?style=for-the-badge&logo=Node.js&logoColor=white">
<img src="https://img.shields.io/badge/express-000000?style=for-the-badge&logo=express&logoColor=white">
</div>
<div style="display:flex; gap:0.5px; justify-content:center">
<img src="https://img.shields.io/badge/mysql-4479A1?style=for-the-badge&logo=mysql&logoColor=white">
<img src="https://img.shields.io/badge/typeorm-F0AD3C?style=for-the-badge&logo=typeorm&logoColor=white">
</div>
</div>
<br>
## 📂 Directory

```
🗂️ client 폴더 구조
src
⎿ assets : 정적인 이미지 파일
⎿ apis : axios 라이브러리를 사용한 api
⎿ components
   ⎿ common : atom, molecule 컴포넌트
   ⎿ Map : MapPage에서만 사용하는 컴포넌트
   ⎿ List : ListPage에서만 사용하는 컴포넌트
   ⎿ Modal : Modal에서만 사용하는 컴포넌트
⎿ pages : 컴포넌트의 종합으로 이루어진 페이지
⎿ constants : 각종 상수
⎿ hooks : 각종 커스텀 훅
   ⎿ queries : React-query를 감싼 커스텀 훅
⎿ styles : global, module css 파일
⎿ types : TS 타입 모음
⎿ utils : 유용한 유틸 함수
```

```
🗂️ server 폴더 구조
src
⎿ assets : 정적인 이미지 파일
⎿ controllers : 외부 요청 처리 모듈
⎿ entity : typeorm 엔티티
⎿ jobs : DB 데이터 셋업용 파일
⎿ routes : 각종 라우터
```
