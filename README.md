# @rchada/dlds — 딜러나라 디자인 시스템 (SDK)

테마러블(CSS 변수) 토큰 + React 컴포넌트. **컴포넌트는 하나, 브랜드는 테마로 N개**.
설계 근거: `toss-lead-engine-claude/docs/DLDS-design-guide.md` (DLDS v2, 아정당 정서 + 애플 규율).

## 설치 (git 의존성 — 레지스트리 불필요)
```bash
npm i github:pshcream/dlds#v0.1.0
```
> 버전은 git 태그로 핀. 갱신: 새 태그 push 후 앱에서 `#v0.2.0` 으로 올림.

## 사용
```js
import '@rchada/dlds/dlds.css'                 // 토큰 + 컴포넌트 스타일
import '@rchada/dlds/themes/dealernara.css'    // 브랜드 테마(레드/웜). 차모임이면 themes/carmoim.css
// (선택) import '@rchada/dlds/fonts.css'       // Pretendard 웹폰트. CSP에 jsdelivr 허용 필요

import { Button, Input, Card, Chip, Badge, Callout, TrustBar, Sheet } from '@rchada/dlds'

<Button onClick={...}>비교 시작하기</Button>
<Button variant="ghost">취소</Button>
<Button variant="kakao">카카오로 상담</Button>
<Input placeholder="월 납입금" />
<Card elevation="soft">…</Card>
<Chip selected>현대</Chip>
<Callout value="최대 120만원" label="이번 달 출고 지원금" />
<TrustBar items={['실시간 비교','무료 상담','출고 케어']} />
```

## 테마(브랜드) 커스터마이즈
컴포넌트는 hex를 박지 않고 CSS 변수만 참조. 앱에서 `:root` 변수만 덮어쓰면 색이 바뀜:
```css
:root { --dl-brand:#DD2121; --dl-canvas:#FBF8F6; --dl-ink:#1B1B1F; /* ... */ }
```
전체 토큰은 `src/dlds.css` 상단 참조.

## 컴포넌트
Button(primary/ghost/kakao, size sm) · Input · Card(elevation flat/soft) · Chip(selected) · Badge · Callout(혜택 숫자) · TrustBar · Sheet(바텀시트).

## 개발
```bash
npm i && npm run build   # dist/dlds.js 생성 (커밋해서 git-install 시 빌드 불필요)
```

## 원칙 (DLDS v2)
단일 액센트(브랜드색 하나, 앰버는 혜택 숫자 전용) · 절제된 엘리베이션(Soft 1단계+히어로 시그니처) · 타이트 타이포(음수 자간·800) · 라디우스/스페이싱 사다리 · Pressed scale(0.97) · hover 비의존(터치 우선).
