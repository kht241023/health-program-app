### 📌 **[조건]**
아래 조건을 만족하도록 코드를 수정해야 합니다.

---

### **1. 파일 및 컴포넌트 구조**
- `package.json` `App.js`, `HealthList.jsx`, `HealthForm.jsx`, `HealthDetail.jsx` 이외의 파일은 수정하지 않는다.
- 컴포넌트의 역할과 경로는 아래 표를 따른다.

| **컴포넌트명 (element)** | **역할** |
|-------------------|--------------------------|
| `Home.jsx`        | 홈 화면 (앱 소개, 주요 버튼 등 포함) |
| `HealthList.jsx`  | 등록된 운동 프로그램 목록을 조회하는 페이지 |
| `HealthDetail.jsx` | 특정 운동 프로그램의 상세 정보를 보여주는 페이지 (id 기반 조회) |
| `HealthForm.jsx`  | 새로운 운동 프로그램을 추가하는 페이지 |

---

### **2. App.js 설정**
    - `/` → `Home.jsx`
    - `/healths` → `HealthList.jsx`
    - `/healths/:id` → `HealthDetail.jsx`
    - `/healths/add` → `HealthForm.jsx`
- 네비게이션이 정상적으로 작동해야 한다.

---

### **3. HealthList.jsx (운동 프로그램 목록)**
- `useState`를 사용하여 `healthPrograms`의 초기값을 빈 배열(`[]`)로 설정한다.
- 화면에는 기본적으로운동 프로그램들이 나타나야 한다.
- `healthPrograms` 데이터를 `map()`을 이용해 화면에 출력해야 한다.
- 스타일을 변경하지 않는다.

---

### **4. HealthDetail.jsx (운동 프로그램 상세 정보)**
- `useParams()`를 이용하여 `id` 값을 정상적으로 가져와야 한다.
- 운동 프로그램 정보를 `useEffect()`에서 `axios.get()`을 이용하여 가져와야 한다.
- `loading` 상태가 `true`일 때 `"데이터 불러오는 중..."`이 표시되고, 데이터가 없을 경우 `"데이터가 없습니다."`가 나타나야 한다.
- `목록으로 돌아가기` 버튼을 누르면 `/healths` 경로로 이동해야 한다.

---

### **5. HealthForm.jsx (운동 프로그램 추가)**
- `useState`를 이용하여 입력 필드(`programName`, `programType`, `workoutDuration`, `intensityLevel`, `programDescription`)를 정상적으로 관리해야 한다.
- `handleSubmit()`에서 입력값을 확인하고, `axios.post()`를 이용하여 새로운 운동 프로그램을 등록해야 한다.
- `handleSubmit()`이 호출된 후 입력 필드의 값이 초기화되어야 한다.
- 등록 후 `/healths` 경로로 이동해야 한다.

---

### **6. 스타일 및 UI**
- `styled-components`를 변경하지 않는다.
- 모든 컴포넌트는 현재 스타일을 유지해야 한다.

---
