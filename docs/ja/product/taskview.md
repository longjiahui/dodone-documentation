---
title: タスクビュー
createTime: 2025/11/21 13:22:20
permalink: /ja/product/b56bxtcu/
---

タスクビューでは、実際にタスクデータを保存せずにタスククエリをカスタマイズできます。自動ビューと手動ビューに分かれています。自動ビューにはタスク検索ロジックがあり、タスクリストを自動的に検索しますが、手動ビューではタスクの手動割り当てが必要で、`タグ`機能に似ています。

## タスクビューのプロパティ

- 名前
- アイコン。手動タスクビューのアイコンは、そのビューに割り当てられたタスクに表示されます。手動ビューのデフォルトアイコンはタグアイコンで、自動ビューのデフォルトアイコンはロボットアイコンです
- 説明
- タイプ
  - 自動
  - 手動
- 自動ビューロジック
  - スクリプト
  - GUI支援ロジック設定

## タスクビューの操作

### タスクビューを作成

![taskview](/steps/taskview/create.png)

#### プリセットタスクビューを作成

上記のドロップダウンメニューに示されているように、プリセットタスクビューがあります：

- `今日` - `startAt`または`endAt`が今日を含むタスクを表示
- `明日` - `startAt`または`endAt`が明日を含むタスクを表示
- `明後日` - `startAt`または`endAt`が明後日を含むタスクを表示
- `今週` - `startAt`または`endAt`が今週を含むタスクを表示
- `今月` - `startAt`または`endAt`が今月を含むタスクを表示

### タスクビューを編集

![taskview](/steps/taskview/edit.png)

### タスクビューを削除

![taskview](/steps/taskview/delete.png)

## 自動タスクビューGUIロジック設定

![taskview](/steps/taskview/gui.png)

グラフィカルな方法でタスクビュークエリロジックを作成できます：

- 条件 - 単一の論理判定ポイント
- ロジックグループ - 条件の組み合わせで、AND/ORロジックに設定できます

基本的に、GUIビューロジック設定は、ロジックグループを設定し、それを再帰的にネストすることです。

たとえば、`今日`のロジックは：

- `開始時刻` `以上` `今日の0時` AND `開始時刻` `以下` `今日の24時`
- OR
- `開始時刻` `以下` `今日の0時` AND `終了時刻` `以上` `今日の0時`

## 自動タスクビュースクリプトロジック設定

![taskview](/steps/taskview/script.png)

スクリプトを使用して、`今週`や`今月`などの複雑なタスクビュークエリロジックを作成できます。

本質的に、スクリプトは`javascript`関数`(t: Task) => boolean`である必要があります。`今月`の例を参照してください：

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

パラメータ`Task`型は以下の通りです。[task](./task#task-properties)も参照してください：

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

時間関連の処理には、dayjsを使用できます。[Dayjs Documentation](https://day.js.org/docs/en/installation/installation)を参照してください
