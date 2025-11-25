---
title: 작업 보기
createTime: 2025/11/21 13:22:20
permalink: /ko/product/y3v1dvwu/
---

작업 보기를 사용하면 실제로 작업 데이터를 저장하지 않고 작업 쿼리를 사용자 지정할 수 있습니다. 자동 보기와 수동 보기로 나뉩니다. 자동 보기에는 작업 검색 로직이 있으며 작업 목록을 자동으로 검색하는 반면 수동 보기에는 수동 작업 할당이 필요하며 `태그` 기능과 유사합니다.

## 작업 보기 속성

- 이름
- 아이콘. 수동 작업 보기의 아이콘은 해당 보기에 할당된 작업에 표시됩니다. 수동 보기의 기본 아이콘은 태그 아이콘이고 자동 보기의 기본 아이콘은 로봇 아이콘입니다
- 설명
- 유형
  - 자동
  - 수동
- 자동 보기 로직
  - 스크립트
  - GUI 지원 로직 구성

## 작업 보기 작업

### 작업 보기 만들기

![taskview](/steps/taskview/create.png)

#### 사전 설정 작업 보기 만들기

위의 드롭다운 메뉴에 표시된 것처럼 사전 설정 작업 보기가 있습니다:

- `오늘` - `startAt` 또는 `endAt`에 오늘이 포함된 작업 보기
- `내일` - `startAt` 또는 `endAt`에 내일이 포함된 작업 보기
- `모레` - `startAt` 또는 `endAt`에 모레가 포함된 작업 보기
- `이번 주` - `startAt` 또는 `endAt`에 이번 주가 포함된 작업 보기
- `이번 달` - `startAt` 또는 `endAt`에 이번 달이 포함된 작업 보기

### 작업 보기 편집

![taskview](/steps/taskview/edit.png)

### 작업 보기 삭제

![taskview](/steps/taskview/delete.png)

## 자동 작업 보기 GUI 로직 구성

![taskview](/steps/taskview/gui.png)

그래픽 방식으로 작업 보기 쿼리 로직을 만들 수 있습니다:

- 조건 - 단일 논리 판단 지점
- 논리 그룹 - 조건의 조합으로 AND/OR 로직으로 설정할 수 있습니다

기본적으로 GUI 보기 로직 구성은 논리 그룹을 설정한 다음 재귀적으로 중첩하는 것입니다.

예를 들어 `오늘`의 로직은:

- `시작 시간` `이상` `오늘 0시` AND `시작 시간` `이하` `오늘 24시`
- OR
- `시작 시간` `이하` `오늘 0시` AND `종료 시간` `이상` `오늘 0시`

## 자동 작업 보기 스크립트 로직 구성

![taskview](/steps/taskview/script.png)

스크립트를 사용하여 `이번 주` 및 `이번 달`과 같은 복잡한 작업 보기 쿼리 로직을 만들 수 있습니다.

본질적으로 스크립트는 `javascript` 함수 `(t: Task) => boolean`이어야 합니다. `이번 달`의 예를 참조하세요:

```javascript
t => {
  if(t.startAt || t.endAt){
    const monthBetween = [dayjs().startOf('month'), dayjs().endOf('month')]
    if(!(t.startAt && t.endAt)){
      const d = t.startAt || t.endAt
      if(dayjs(d).isBetween(...monthBetween)){
        return true
      }
    }else{
      // both startAt endAt
      return dayjs(t.endAt).isBetween(...monthBetween)
    }
  }
  return false
}
```

매개변수 `Task` 유형은 다음과 같으며 [task](./task#task-properties)도 참조할 수 있습니다:

```typescript
interface Task {
  id: string;
  sortOrder: number;
  description: string | null;
  createdAt: string;
  updatedAt: string;
  content: string;
  groupId: string;
  doneAt: string | null;
  startAt: string | null;
  endAt: string | null;
  state: "DONE" | "UNDONE" | null;
  priority: number;
  factor: number;
  parentId: string | null;
  createIndex: number;
  createdByTaskId: string | null;
  target: string | null;
  targetType: "DEFAULT" | "INCREMENT" | null;
};
```

시간 관련 처리의 경우 dayjs를 사용할 수 있습니다. [Dayjs Documentation](https://day.js.org/docs/en/installation/installation) 참조
