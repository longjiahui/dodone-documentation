---
title: Task
createTime: 2025/11/21 12:47:35
permalink: /en/product/09281pxh/
---

Task is the most fundamental data in the entire program.

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

## Task Properties

| Field          | key         |
| -------------- | ----------- |
| id             | id          |
| Content        | content     |
| Description    | description |
| Sort Order     | sortOrder   |
| Priority       | priority    |
| Workload       | factor      |
| Status         | state       |
| Group ID       | groupId     |
| Parent Task ID | parentId    |
| Target         | target      |
| Target Type    | targetType  |
| Start Date     | startAt     |
| End Date       | endAt       |
| Done At        | doneAt      |
| Created At     | createdAt   |
| Updated At     | updatedAt   |

## Task Operations

All task operations are placed on the task toolbar. Click on the blank area of a task or the more icon on the right to view them.

![task-tools](/steps/task/task_tools.png)

From left to right:

- Edit task content
- Edit task subtasks
- Edit task description
- Edit task time
- Edit task workload
- Edit task priority
- Set task target
- Move task location (change parent task)
- Set/unset task anchor
- Manage manual task views containing this task
- Set recurring task
- Delete task / (in manual view) remove from view
  - Trash icon: delete
  - X icon: remove from view

### Edit Task Content

![task-edit-content](/steps/task/edit_content1.png)
![task-edit-content](/steps/task/edit_content2.png)

### Edit Task Subtasks

#### Edit Subtasks via Anchor

Edit in the main interface

![task-edit-subtasks](/steps/task/edit_subtasksA1.png)
![task-edit-subtasks](/steps/task/edit_subtasksA2.png)

#### Via Subtask Editing Tool

Find the "Edit Subtasks" icon on the task toolbar and open the subtask editing drawer

![task-edit-subtasks](/steps/task/edit_subtasks1.png)
![task-edit-subtasks](/steps/task/edit_subtasks2.png)

### Edit Task Description

Task description supports markdown syntax.

![task-edit-description](/steps/task/edit_description1.png)
![task-edit-description](/steps/task/edit_description2.png)

#### Add Images to Task Description

There are two ways to add images to task description. Images will be saved to the user data folder and referenced via markdown syntax:

- Paste via clipboard, for example, use `ctrl + v` directly after taking a screenshot
- Click the upload image button to select the image to upload

![task-edit-description-image](/steps/task/edit_description_image.png)

### Edit Task Time

Hover over the tool icon to see a quick time setting dropdown, or click the icon to customize time

- Today
- Tomorrow
- Day After Tomorrow
- Clear Date

![task-edit-start-end-at](/steps/task/edit_start_end_at1.png)
![task-edit-start-end-at](/steps/task/edit_start_end_at2.png)
![task-edit-start-end-at](/steps/task/edit_start_end_at3.png)

### Edit Task Workload

Workload represents the weight of a task. When calculating subtask completion progress, task workload is used for weighted average calculation. The default task workload is 1, so if not modified, the task completion progress is consistent with the count-based weighted statistics.

Hover over the tool icon to see a quick workload setting dropdown, or click the icon to customize workload. For tasks with workload set, you can edit by clicking the workload in the task description. Entering the default workload will remove the marker.

![task-edit-factor](/steps/task/edit_factor1.png)
![task-edit-factor](/steps/task/edit_factor2.png)
![task-edit-factor](/steps/task/edit_factor3.png)

### Edit Task Priority

Hover over the tool icon to see a quick priority setting dropdown, or click the icon to customize it. For tasks with priority set, you can edit by clicking the priority in the task description. Entering the default priority will remove the marker.

![task-edit-priority](/steps/task/edit_priority1.png)
![task-edit-priority](/steps/task/edit_priority2.png)
![task-edit-priority](/steps/task/edit_priority3.png)

### Edit Task Target

![task-edit-target](/steps/task/edit_target1.png)
![task-edit-target](/steps/task/edit_target2.png)

#### Add Task Target Record

![task-edit-target-record](/steps/task/edit_target_record1.png)

#### Edit Task Target Record

![task-edit-target-record](/steps/task/edit_target_record2.png)

#### Delete Task Target Record

![task-edit-target-record](/steps/task/edit_target_record3.png)

### Move Task Location

There are multiple ways to change parent task and task group:

- Drag and drop the task to another task group or task anchor
- Use the "Move To" tool in the toolbar

![task-move](/steps/task/edit_move1.png)
![task-move](/steps/task/edit_move2.png)

### Open Doing Window for This Task

![task-edit-doingwindow](/steps/task/edit_doingwindow1.png)
![task-edit-doingwindow](/steps/task/edit_doingwindow2.png)

### Add This Task to Anchor

See [Task Anchor](./taskanchor)

![task-edit-taskanchor](/steps/task/edit_taskanchor1.png)
![task-edit-taskanchor](/steps/task/edit_taskanchor2.png)

### Manage Manual Views Containing This Task

You can only add tasks to manual type task views, so this tool manages the manual task views where the task is located.

![task-edit-taskview](/steps/task/edit_taskview1.png)
![task-edit-taskview](/steps/task/edit_taskview2.png)
![task-edit-taskview](/steps/task/edit_taskview3.png)

### Edit Task Status

#### Complete Task

![task-edit-state](/steps/task/edit_state_finish.png)

#### Cancel Completion

![task-edit-state](/steps/task/edit_state_cancel_finish.png)

### Edit Task Recurrence Settings

See [Recurring Tasks](./nexttask)

![task-edit-nexttask](/steps/task/edit_nexttask1.png)
![task-edit-nexttask](/steps/task/edit_nexttask2.png)

### Delete Task

:::warning
Deletion is irreversible and will prompt for confirmation.
:::

![task-edit-delete](/steps/task/edit_delete.png)
