---
title: 任务
createTime: 2025/11/21 12:47:35
permalink: /product/w2wrcjhb/
---

任务是整个程序最基础的数据。

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

## 任务的属性

| 字段      | key         |
| --------- | ----------- |
| id        | id          |
| 内容      | content     |
| 描述      | description |
| 排序      | sortOrder   |
| 优先级    | priority    |
| 工作量    | factor      |
| 完成状态  | state       |
| 分组 id   | groupId     |
| 父任务 id | parentId    |
| 目标      | target      |
| 目标类型  | targetType  |
| 开始日期  | startAt     |
| 结束日期  | endAt       |
| 完成时间  | doneAt      |
| 创建时间  | createdAt   |
| 更新时间  | updatedAt   |

## 任务操作

所有的任务操作都放在了任务的工具栏上，点击一下任务的空白区域或右边的更多图标即可看见。

![task-tools](/steps/task/task_tools.png)

从左到右分别是

- 修改任务内容
- 编辑任务子任务
- 修改任务描述
- 修改任务时间
- 修改任务工作量
- 修改任务优先级
- 设置任务目标
- 移动任务所在节点（修改任务父任务）
- 设置/取消设置任务锚点
- 管理任务所在手动任务视图
- 设置循环任务
- 删除任务 / （在手动视图下）从视图移除
  - 垃圾桶图标：删除
  - X 图标：从视图移除

### 修改任务内容

![task-edit-content](/steps/task/edit_content1.png)
![task-edit-content](/steps/task/edit_content2.png)

### 编辑任务子任务

#### 通过锚点编辑子任务

在主界面下编辑

![task-edit-subtasks](/steps/task/edit_subtasksA1.png)
![task-edit-subtasks](/steps/task/edit_subtasksA2.png)

#### 通过子任务编辑工具

任务工具栏上找到 “编辑子任务”图标，打开编辑子任务抽屉进行子任务编辑

![task-edit-subtasks](/steps/task/edit_subtasks1.png)
![task-edit-subtasks](/steps/task/edit_subtasks2.png)

### 修改任务描述

任务描述支持 markdown 语法。

![task-edit-description](/steps/task/edit_description1.png)
![task-edit-description](/steps/task/edit_description2.png)

#### 添加图片到任务描述

添加图片到任务描述的方法有两种，添加图片后会图片会保存到用户数据文件夹中，通过 markdown 语法进行引用：

- 通过剪贴板粘贴图片，例如截图后直接在内容中使用`ctrl + v`即可。
- 通过点击上传图片的按钮选择需要上传的图片即可。

![task-edit-description-image](/steps/task/edit_description_image.png)

### 修改任务时间

鼠标移动到工具图标上会有快速设置时间的下拉列表出现，或直接点击图标自定义工作量

- 今天
- 明天
- 后天
- 清空日期

![task-edit-start-end-at](/steps/task/edit_start_end_at1.png)
![task-edit-start-end-at](/steps/task/edit_start_end_at2.png)
![task-edit-start-end-at](/steps/task/edit_start_end_at3.png)

### 修改任务工作量

工作量表示一个任务的轻重程度，在进行子任务完成进度统计的时候会使用任务工作量进行加权平均计算完成进度。默认的任务工作量是 1，所以如果不加修改任务的完成进度统计与任务数量的加权统计值是一致的。

鼠标移动到工具图标上会有快速设置工作量的下拉列表出现，或直接点击图标自定义工作，对于已设置工作量的任务，可以通过点击任务描述的工作量进行编辑，填入默认工作量即可删除标志。

![task-edit-factor](/steps/task/edit_factor1.png)
![task-edit-factor](/steps/task/edit_factor2.png)
![task-edit-factor](/steps/task/edit_factor3.png)

### 修改任务优先级

鼠标移动到工具图标上会有快速设置优先级的下拉列表出现，或直接点击图标自定义工作，对于已设置优先级的任务，可以通过点击任务描述的优先级进行编辑，填入默认优先级即可删除标志。

![task-edit-priority](/steps/task/edit_priority1.png)
![task-edit-priority](/steps/task/edit_priority2.png)
![task-edit-priority](/steps/task/edit_priority3.png)

### 修改任务目标

![task-edit-target](/steps/task/edit_target1.png)
![task-edit-target](/steps/task/edit_target2.png)

#### 添加任务目标记录

![task-edit-target-record](/steps/task/edit_target_record1.png)

#### 修改任务目标记录

![task-edit-target-record](/steps/task/edit_target_record2.png)

#### 删除任务目标记录

![task-edit-target-record](/steps/task/edit_target_record3.png)

### 修改任务所在位置

修改任务父任务、任务分组有多种方式

- 拖拽的方式将任务拖拽到别的任务分组或任务锚点上
- 使用工具栏的“移动到”工具

![task-move](/steps/task/edit_move1.png)
![task-move](/steps/task/edit_move2.png)

### 打开此任务的正在做窗口

![task-edit-doingwindow](/steps/task/edit_doingwindow1.png)
![task-edit-doingwindow](/steps/task/edit_doingwindow2.png)

### 将此任务添加到锚点

参考 [任务锚点](./taskanchor)

![task-edit-taskanchor](/steps/task/edit_taskanchor1.png)
![task-edit-taskanchor](/steps/task/edit_taskanchor2.png)

### 管理改任务所在的手动视图

只能把任务添加到手动类型的任务视图，所以这个工具管理的是任务所在的手动任务视图。

![task-edit-taskview](/steps/task/edit_taskview1.png)
![task-edit-taskview](/steps/task/edit_taskview2.png)
![task-edit-taskview](/steps/task/edit_taskview3.png)

### 修改任务状态

#### 完成任务

![task-edit-state](/steps/task/edit_state_finish.png)

#### 取消完成

![task-edit-state](/steps/task/edit_state_cancel_finish.png)

### 修改任务重复设置

参考 [重复任务](./nexttask)

![task-edit-nexttask](/steps/task/edit_nexttask1.png)
![task-edit-nexttask](/steps/task/edit_nexttask2.png)

### 删除任务

:::warning
删除操作是不可逆，会有二次确认提醒。
:::

![task-edit-delete](/steps/task/edit_delete.png)
