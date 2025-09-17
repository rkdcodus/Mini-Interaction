# GSAP을 이용한 칵테일 웹 사이트

### 목표

GSAP 라이브러리를 사용하기 위한 기본적인 지식을 학습합니다.

### 학습 방법

[Javascript Mastery](https://youtu.be/AW1yfBKRMKc?si=VT-rf6qUVshehjF-)의 유튜브 강의를 통해 칵테일 웹 사이트를 함께 제작하며 실습합니다.

### GSAP이란?

GSAP은 Javascript 기반의 애니메이션 라이브러리입니다.

DOM 요소, SVG, Canvas, WebGL까지 거의 모든 웹 요소를 애니메이션화할 수 있으며 성능 최적화가 잘 되어 있어 CSS의 transition, animation 보다 부드러운 효과 구현이 가능합니다.

GSAP을 사용하면 CSS 애니메이션 대비 정밀 제어가 가능하며 스크롤, 마우스 움직임, 드래그와 같은 사용자 입력 기반의 애니메이션 구현에 용이합니다. 대규모 인터랙티브 웹사이트, 랜딩 페이지, 데이터 시각화에 많이 사용됩니다.

### 웹 사이트 애니메이션 시연

![2025-09-18 00;44;32](https://github.com/user-attachments/assets/98a2d7e8-7161-4f28-a2a0-839db4f9487d)
![2025-09-18 00;45;27](https://github.com/user-attachments/assets/69354b20-2c5b-412f-bd35-01c04b44b1d2)
![2025-09-18 00;46;08](https://github.com/user-attachments/assets/90e1bc7f-c57c-4850-9cc4-8cfc5399a925)
![2025-09-18 00;46;34](https://github.com/user-attachments/assets/016da3b8-7f4d-4cce-93b9-7dff43f921dc)


### 칵테일 웹 사이트에서 사용한 GSAP 기능

- gsap.to(), from(), fromTo()
- gsap.timeline()의 scrollTrigger
- splitText (lines, words, chars)

### 기타

- **FFmpeg 처리된 비디오**  
   FFmpeg는 오픈소스 멀티미디어 처리 툴로 인코딩, 디코딩, 변환, 편집 가능하다. 스크롤 재생용으로 변환된 비디오 더 부드러운 스크롤 움직임 구현 가능하다.
- **슬라이드 구현**  
   Javascript의 `%`를 사용하여 무한 루프 슬라이드를 구현할 수 있다.
