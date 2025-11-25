---
title: Task View
createTime: 2025/11/21 13:22:20
permalink: /en/product/iyz7mfg8/
---

Task views allow you to customize task queries without actually storing task data. They are divided into automatic views and manual views. Automatic views have task search logic and will automatically search the task list, while manual views require manual task assignment, similar to a `tag` function.

## Task View Properties

- Name
- Icon. The icon for manual task views will be displayed on tasks assigned to that view. The default icon for manual views is a tag icon, and the default icon for automatic views is a robot icon
- Description
- Type
  - Automatic
  - Manual
- Automatic View Logic
  - Script
  - GUI-assisted logic configuration

## Task View Operations

### Create Task View

![taskview](/steps/taskview/create.png)

#### Create Preset Task View

As shown in the dropdown menu above, there are preset task views:

- `Today` - View tasks where `startAt` or `endAt` includes today
- `Tomorrow` - View tasks where `startAt` or `endAt` includes tomorrow
- `Day After Tomorrow` - View tasks where `startAt` or `endAt` includes the day after tomorrow
- `This Week` - View tasks where `startAt` or `endAt` includes this week
- `This Month` - View tasks where `startAt` or `endAt` includes this month

### Edit Task View

![taskview](/steps/taskview/edit.png)

### Delete Task View

![taskview](/steps/taskview/delete.png)

## Automatic Task View GUI Logic Configuration

![taskview](/steps/taskview/gui.png)

You can create task view query logic in a graphical way:

- Condition - A single logical judgment point
- Logic Group - A combination of conditions, can be set to AND/OR logic

Fundamentally, GUI view logic configuration is setting up a logic group and then recursively nesting.

For example, the logic for `Today` is:

- `Start Time` `greater than or equal to` `today at 0:00` AND `Start Time` `less than or equal to` `today at 24:00`
- OR
- `Start Time` `less than or equal to` `today at 0:00` AND `End Time` `greater than or equal to` `today at 0:00`

## Automatic Task View Script Logic Configuration

![taskview](/steps/taskview/script.png)

You can use scripts to create complex task view query logic, such as `This Week` and `This Month`.

Essentially, the script needs to be a `javascript` function `(t: Task) => boolean`. See the `This Month` example:

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

The parameter `Task` type is as follows, you can also refer to [task](./task#task-properties):

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

For time-related processing, you can use dayjs. Refer to [Dayjs Documentation](https://day.js.org/docs/en/installation/installation)
