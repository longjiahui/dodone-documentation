---
title: 任务视图
createTime: 2025/11/21 13:22:20
permalink: /product/g9yhk0fb/
---

任务视图可以自定义任务的查询，并不实际存储任务数据，分为自动视图和手动视图，自动视图具有搜索任务的逻辑，会自动搜索任务列表，手动视图需要手动设置任务，类似`标签`的功能。

## 任务视图属性

- 名称
- 图标，手动任务的视图图标会显示在被设置了该视图的任务上，手动视图默认图标是标签图标，自动视图默认图标是机器人图标
- 描述
- 类型
  - 自动
  - 手动
- 自动视图逻辑
  - 脚本
  - GUI 辅助设置逻辑

## 任务视图操作

### 创建任务视图

![taskview](/steps/taskview/create.png)

#### 创建预设任务视图

如上图所示的下拉菜单中有预设的任务视图

- `今天` 查看`startAt`、`endAt`包含今天的任务
- `明天` 查看`startAt`、`endAt`包含明天的任务
- `后天` 查看`startAt`、`endAt`包含后天的任务
- `本周` 查看`startAt`、`endAt`包含本周的任务
- `本月` 查看`startAt`、`endAt`包含本月的任务

### 修改任务视图

![taskview](/steps/taskview/edit.png)

### 删除任务视图

![taskview](/steps/taskview/delete.png)

## 自动任务视图 GUI 创建逻辑说明

![taskview](/steps/taskview/gui.png)

可以使用图形化的方式创建任务视图的查询逻辑

- 条件 即一个判断的逻辑点
- 逻辑分组 是条件的组合，可以设置与、或逻辑

从根本上看GUI设置视图逻辑是设置一个逻辑分组，然后无限递归。

例如`今天`的逻辑是：

- `开始时间``大于等于``今天0点` 且 `开始时间``小于等于``今天24点`
- 或
- `开始时间``小于等于``今天0点` 且 `结束时间``大于等于``今天0点`

## 自动任务视图 脚本 创建逻辑说明

![taskview](/steps/taskview/script.png)

可以使用脚本的方式创建复杂的任务视图查询逻辑，例如`本周``本月`

本质上脚本需要写的是一个`javascript`函数`(t: Task) => boolean`，查看`本月`的例子

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

参数的`Task`类型如下，也可以参考[task](./task#task-properties)

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

时间相关的库可以使用dayjs进行处理，可以参考[Dayjs Documentation](https://day.js.org/docs/en/installation/installation)
