## Glowing Button

![glowing button](https://github.com/user-attachments/assets/12c6b165-443e-4fd0-acd6-c381b70fe6a0)

### 1. `opacity: 0;` 과 `background: transparent;`의 차이

두가지 방법 모두 투명도를 조절할 수 있지만 동작과 영향 범위가 다르다.

- `opacity: 0;`
  opacity: 0 은 해당 요소 전체의 투명도를 조절하며 DOM에 남아있다. 클릭, 포커스의 이벤트도 받을 수 있다.

- `background: transparent;`
  background: transparent는 해당 요소의 배경색만 투명해진다. 텍스트, 테두리, 그림자 등은 그대로 보인다.

**즉, opacity는 모든 걸 투명하게! background는 배경색만 투명하게!**

<br/>

### 2. 해당 버튼의 구조 이해하기

`.btn` 클래스를 가지는 버튼은 before, after 가상요소를 활용하여 glowing 효과를 나타낸다.  
before와 after는 기본적으로 요소의 내용 앞뒤에 생성되는 가상의 박스이다.  
가상요소들은 `position: absolute`를 가지고 있기 때문에 `.btn`을 기준으로 레이어처럼 위치한다.

이 세가지 요소의 역할은 아래와 같다.

#### `::after`

- 기본 배경 역할
- `z-index: -1`을 통해 `.btn`의 텍스트 뒤에 깔림
- `:active`시 배경색만 투명하게 바뀜

#### `.btn`

- 실제 버튼 요소
- 가상요소들의 기준
- 텍스트를 가짐.

#### `::before`

- 그라디언트 광효과
- 기본 상태에서는 opacity가 0으로 보이지 않다가 `:hover` 시 1로 변함
- `z-index: -1`을 통해 `.btn`의 텍스트 뒤에 있지만 `::after` 보다 아래, 위가 될지는 stacking 순서 규칙에 따라 결정됨 (HTML 등장 순서에 따라 겹침 순서가 정해짐.)

<br/>

실습 출저: Coding Play, https://www.youtube.com/watch?v=b_8fHNIHFk4
