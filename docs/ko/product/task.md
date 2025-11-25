---
title: 작업
createTime: 2025/11/21 12:47:35
permalink: /ko/product/7m3o44zd/
---

작업은 전체 프로그램에서 가장 기본적인 데이터입니다.

<!-- export type Task = {
  sortOrder: number;
  id: string;
  description: string | null;
  createdAt: DateType;
  updatedAt: DateType;
  content: string;
  groupId: string;
  doneAt: DateType | null;
  startAt: DateType | null;
  endAt: DateType | null;
  state: $Enums.TaskState | null;
  priority: number;
  factor: number;
  parentId: string | null;
  createIndex: number;
  createdByTaskId: string | null;
  target: NumberType | null;
  targetType: $Enums.TaskTargetType | null;
}; -->

## 작업 속성

| 필드           | key         |
| -------------- | ----------- |
| id             | id          |
| 내용           | content     |
| 설명           | description |
| 정렬 순서      | sortOrder   |
| 우선순위       | priority    |
| 작업량         | factor      |
| 완료 상태      | state       |
| 그룹 ID        | groupId     |
| 상위 작업 ID   | parentId    |
| 목표           | target      |
| 목표 유형      | targetType  |
| 시작 날짜      | startAt     |
| 종료 날짜      | endAt       |
| 완료 일시      | doneAt      |
| 생성 일시      | createdAt   |
| 업데이트 일시  | updatedAt   |

## 작업 작업

모든 작업 작업은 작업 도구 모음에 있습니다. 작업의 빈 영역이나 오른쪽의 더보기 아이콘을 클릭하여 표시합니다.

![task-tools](/steps/task/task_tools.png)

왼쪽에서 오른쪽으로:

- 작업 내용 편집
- 하위 작업 편집
- 작업 설명 편집
- 작업 시간 편집
- 작업량 편집
- 우선순위 편집
- 작업 목표 설정
- 작업 위치 이동 (상위 작업 변경)
- 작업 앵커 설정/해제
- 이 작업이 포함된 수동 보기 관리
- 반복 작업 설정
- 작업 삭제 / (수동 보기에서) 보기에서 제거
  - 휴지통 아이콘: 삭제
  - X 아이콘: 보기에서 제거

### 작업 내용 편집

![task-edit-content](/steps/task/edit_content1.png)
![task-edit-content](/steps/task/edit_content2.png)

### 하위 작업 편집

#### 앵커를 통해 하위 작업 편집

메인 인터페이스에서 편집

![task-edit-subtasks](/steps/task/edit_subtasksA1.png)
![task-edit-subtasks](/steps/task/edit_subtasksA2.png)

#### 하위 작업 편집 도구를 통해

작업 도구 모음에서 "하위 작업 편집" 아이콘을 찾아 하위 작업 편집 드로어를 엽니다

![task-edit-subtasks](/steps/task/edit_subtasks1.png)
![task-edit-subtasks](/steps/task/edit_subtasks2.png)

### 작업 설명 편집

작업 설명은 Markdown 구문을 지원합니다.

![task-edit-description](/steps/task/edit_description1.png)
![task-edit-description](/steps/task/edit_description2.png)

#### 작업 설명에 이미지 추가

작업 설명에 이미지를 추가하는 방법은 두 가지입니다. 이미지는 사용자 데이터 폴더에 저장되고 Markdown 구문으로 참조됩니다:

- 클립보드를 통해 붙여넣기, 예를 들어 스크린샷 후 `Ctrl + V`를 직접 사용
- 이미지 업로드 버튼을 클릭하여 업로드할 이미지를 선택

![task-edit-description-image](/steps/task/edit_description_image.png)

### 작업 시간 편집

도구 아이콘에 마우스를 올리면 빠른 시간 설정 드롭다운이 표시되거나 아이콘을 클릭하여 시간을 사용자 지정할 수 있습니다

- 오늘
- 내일
- 모레
- 날짜 지우기

![task-edit-start-end-at](/steps/task/edit_start_end_at1.png)
![task-edit-start-end-at](/steps/task/edit_start_end_at2.png)
![task-edit-start-end-at](/steps/task/edit_start_end_at3.png)

### 작업량 편집

작업량은 작업의 가중치를 나타냅니다. 하위 작업 완료 진행률을 계산할 때 작업량을 사용하여 가중 평균 계산이 수행됩니다. 기본 작업량은 1입니다. 수정하지 않으면 작업 완료 진행률은 개수 기반 가중 통계와 일치합니다.

도구 아이콘에 마우스를 올리면 빠른 작업량 설정 드롭다운이 표시되거나 아이콘을 클릭하여 사용자 지정할 수 있습니다. 작업량이 설정된 작업의 경우 작업 설명의 작업량을 클릭하여 편집할 수 있습니다. 기본 작업량을 입력하면 마커가 제거됩니다.

![task-edit-factor](/steps/task/edit_factor1.png)
![task-edit-factor](/steps/task/edit_factor2.png)
![task-edit-factor](/steps/task/edit_factor3.png)

### 우선순위 편집

도구 아이콘에 마우스를 올리면 빠른 우선순위 설정 드롭다운이 표시되거나 아이콘을 클릭하여 사용자 지정할 수 있습니다. 우선순위가 설정된 작업의 경우 작업 설명의 우선순위를 클릭하여 편집할 수 있습니다. 기본 우선순위를 입력하면 마커가 제거됩니다.

![task-edit-priority](/steps/task/edit_priority1.png)
![task-edit-priority](/steps/task/edit_priority2.png)
![task-edit-priority](/steps/task/edit_priority3.png)

### 작업 목표 편집

![task-edit-target](/steps/task/edit_target1.png)
![task-edit-target](/steps/task/edit_target2.png)

#### 작업 목표 기록 추가

![task-edit-target-record](/steps/task/edit_target_record1.png)

#### 작업 목표 기록 편집

![task-edit-target-record](/steps/task/edit_target_record2.png)

#### 작업 목표 기록 삭제

![task-edit-target-record](/steps/task/edit_target_record3.png)

### 작업 위치 이동

상위 작업 및 작업 그룹을 변경하는 방법은 여러 가지가 있습니다:

- 작업을 다른 작업 그룹 또는 작업 앵커로 드래그 앤 드롭
- 도구 모음의 "이동" 도구 사용

![task-move](/steps/task/edit_move1.png)
![task-move](/steps/task/edit_move2.png)

### 이 작업의 작업 중 창 열기

![task-edit-doingwindow](/steps/task/edit_doingwindow1.png)
![task-edit-doingwindow](/steps/task/edit_doingwindow2.png)

### 이 작업을 앵커에 추가

[작업 앵커](./taskanchor) 참조

![task-edit-taskanchor](/steps/task/edit_taskanchor1.png)
![task-edit-taskanchor](/steps/task/edit_taskanchor2.png)

### 이 작업이 포함된 수동 보기 관리

작업은 수동 유형 작업 보기에만 추가할 수 있으므로 이 도구는 작업이 위치한 수동 작업 보기를 관리합니다.

![task-edit-taskview](/steps/task/edit_taskview1.png)
![task-edit-taskview](/steps/task/edit_taskview2.png)
![task-edit-taskview](/steps/task/edit_taskview3.png)

### 작업 상태 편집

#### 작업 완료

![task-edit-state](/steps/task/edit_state_finish.png)

#### 완료 취소

![task-edit-state](/steps/task/edit_state_cancel_finish.png)

### 작업 반복 설정 편집

[반복 작업](./nexttask) 참조

![task-edit-nexttask](/steps/task/edit_nexttask1.png)
![task-edit-nexttask](/steps/task/edit_nexttask2.png)

### 작업 삭제

:::warning
삭제는 되돌릴 수 없으며 확인을 요청합니다.
:::

![task-edit-delete](/steps/task/edit_delete.png)
