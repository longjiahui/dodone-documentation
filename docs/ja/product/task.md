---
title: タスク
createTime: 2025/11/21 12:47:35
permalink: /ja/product/7mk58b8q/
---

タスクはプログラム全体で最も基本的なデータです。

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

## タスクのプロパティ

| フィールド       | key         |
| ---------------- | ----------- |
| id               | id          |
| 内容             | content     |
| 説明             | description |
| 並び順           | sortOrder   |
| 優先度           | priority    |
| 作業量           | factor      |
| 完了ステータス   | state       |
| グループID       | groupId     |
| 親タスクID       | parentId    |
| 目標             | target      |
| 目標タイプ       | targetType  |
| 開始日           | startAt     |
| 終了日           | endAt       |
| 完了日時         | doneAt      |
| 作成日時         | createdAt   |
| 更新日時         | updatedAt   |

## タスクの操作

すべてのタスク操作はタスクのツールバーにあります。タスクの空白領域または右側の「もっと見る」アイコンをクリックして表示します。

![task-tools](/steps/task/task_tools.png)

左から右へ：

- タスク内容を編集
- サブタスクを編集
- タスク説明を編集
- タスク時間を編集
- 作業量を編集
- 優先度を編集
- タスク目標を設定
- タスクの場所を移動（親タスクを変更）
- タスクアンカーを設定/解除
- このタスクを含む手動ビューを管理
- 繰り返しタスクを設定
- タスクを削除 / （手動ビューで）ビューから削除
  - ゴミ箱アイコン：削除
  - Xアイコン：ビューから削除

### タスク内容を編集

![task-edit-content](/steps/task/edit_content1.png)
![task-edit-content](/steps/task/edit_content2.png)

### サブタスクを編集

#### アンカー経由でサブタスクを編集

メインインターフェースで編集

![task-edit-subtasks](/steps/task/edit_subtasksA1.png)
![task-edit-subtasks](/steps/task/edit_subtasksA2.png)

#### サブタスク編集ツール経由

タスクツールバーで「サブタスクを編集」アイコンを見つけ、サブタスク編集ドロワーを開く

![task-edit-subtasks](/steps/task/edit_subtasks1.png)
![task-edit-subtasks](/steps/task/edit_subtasks2.png)

### タスク説明を編集

タスク説明はMarkdown構文をサポートしています。

![task-edit-description](/steps/task/edit_description1.png)
![task-edit-description](/steps/task/edit_description2.png)

#### タスク説明に画像を追加

タスク説明に画像を追加する方法は2つあります。画像はユーザーデータフォルダに保存され、Markdown構文で参照されます：

- クリップボード経由で貼り付け、例えばスクリーンショット後に `Ctrl + V` を直接使用
- 画像アップロードボタンをクリックしてアップロードする画像を選択

![task-edit-description-image](/steps/task/edit_description_image.png)

### タスク時間を編集

ツールアイコンにマウスを合わせると、クイック時間設定ドロップダウンが表示されます。またはアイコンをクリックして時間をカスタマイズ

- 今日
- 明日
- 明後日
- 日付をクリア

![task-edit-start-end-at](/steps/task/edit_start_end_at1.png)
![task-edit-start-end-at](/steps/task/edit_start_end_at2.png)
![task-edit-start-end-at](/steps/task/edit_start_end_at3.png)

### 作業量を編集

作業量はタスクの重みを表します。サブタスクの完了進捗を計算する際、作業量を使用して加重平均計算が行われます。デフォルトの作業量は1です。変更しない場合、タスクの完了進捗は数に基づく加重統計と一致します。

ツールアイコンにマウスを合わせると、クイック作業量設定ドロップダウンが表示されます。またはアイコンをクリックしてカスタマイズします。作業量が設定されたタスクの場合、タスク説明の作業量をクリックして編集できます。デフォルトの作業量を入力するとマーカーが削除されます。

![task-edit-factor](/steps/task/edit_factor1.png)
![task-edit-factor](/steps/task/edit_factor2.png)
![task-edit-factor](/steps/task/edit_factor3.png)

### 優先度を編集

ツールアイコンにマウスを合わせると、クイック優先度設定ドロップダウンが表示されます。またはアイコンをクリックしてカスタマイズします。優先度が設定されたタスクの場合、タスク説明の優先度をクリックして編集できます。デフォルトの優先度を入力するとマーカーが削除されます。

![task-edit-priority](/steps/task/edit_priority1.png)
![task-edit-priority](/steps/task/edit_priority2.png)
![task-edit-priority](/steps/task/edit_priority3.png)

### タスク目標を編集

![task-edit-target](/steps/task/edit_target1.png)
![task-edit-target](/steps/task/edit_target2.png)

#### タスク目標記録を追加

![task-edit-target-record](/steps/task/edit_target_record1.png)

#### タスク目標記録を編集

![task-edit-target-record](/steps/task/edit_target_record2.png)

#### タスク目標記録を削除

![task-edit-target-record](/steps/task/edit_target_record3.png)

### タスクの場所を移動

親タスクとタスクグループを変更する方法は複数あります：

- タスクを別のタスクグループまたはタスクアンカーにドラッグ＆ドロップ
- ツールバーの「移動先」ツールを使用

![task-move](/steps/task/edit_move1.png)
![task-move](/steps/task/edit_move2.png)

### このタスクの「作業中」ウィンドウを開く

![task-edit-doingwindow](/steps/task/edit_doingwindow1.png)
![task-edit-doingwindow](/steps/task/edit_doingwindow2.png)

### このタスクをアンカーに追加

[タスクアンカー](./taskanchor)を参照

![task-edit-taskanchor](/steps/task/edit_taskanchor1.png)
![task-edit-taskanchor](/steps/task/edit_taskanchor2.png)

### このタスクを含む手動ビューを管理

タスクは手動タイプのタスクビューにのみ追加できるため、このツールはタスクが配置されている手動タスクビューを管理します。

![task-edit-taskview](/steps/task/edit_taskview1.png)
![task-edit-taskview](/steps/task/edit_taskview2.png)
![task-edit-taskview](/steps/task/edit_taskview3.png)

### タスクステータスを編集

#### タスクを完了

![task-edit-state](/steps/task/edit_state_finish.png)

#### 完了をキャンセル

![task-edit-state](/steps/task/edit_state_cancel_finish.png)

### タスクの繰り返し設定を編集

[繰り返しタスク](./nexttask)を参照

![task-edit-nexttask](/steps/task/edit_nexttask1.png)
![task-edit-nexttask](/steps/task/edit_nexttask2.png)

### タスクを削除

:::warning
削除は元に戻せず、確認を求められます。
:::

![task-edit-delete](/steps/task/edit_delete.png)
