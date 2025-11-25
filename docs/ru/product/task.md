---
title: Задача
createTime: 2025/11/21 12:47:35
permalink: /ru/product/i7twyupy/
---

Задача - это самые основные данные во всей программе.

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

## Свойства задачи

| Поле                 | key         |
| -------------------- | ----------- |
| id                   | id          |
| Содержание           | content     |
| Описание             | description |
| Порядок сортировки   | sortOrder   |
| Приоритет            | priority    |
| Трудоемкость         | factor      |
| Статус выполнения    | state       |
| ID группы            | groupId     |
| ID родительской задачи | parentId    |
| Цель                 | target      |
| Тип цели             | targetType  |
| Дата начала          | startAt     |
| Дата окончания       | endAt       |
| Время выполнения     | doneAt      |
| Время создания       | createdAt   |
| Время обновления     | updatedAt   |

## Операции с задачами

Все операции с задачами находятся на панели инструментов задачи. Нажмите на пустую область задачи или значок «Ещё» справа, чтобы увидеть их.

![task-tools](/steps/task/task_tools.png)

Слева направо:

- Редактировать содержимое задачи
- Редактировать подзадачи
- Редактировать описание задачи
- Редактировать время задачи
- Редактировать трудоемкость
- Редактировать приоритет
- Установить цель задачи
- Переместить расположение задачи (изменить родительскую задачу)
- Установить/отменить якорь задачи
- Управлять ручными представлениями, содержащими эту задачу
- Установить повторяющуюся задачу
- Удалить задачу / (в ручном представлении) удалить из представления
  - Значок корзины: удалить
  - Значок X: удалить из представления

### Редактировать содержимое задачи

![task-edit-content](/steps/task/edit_content1.png)
![task-edit-content](/steps/task/edit_content2.png)

### Редактировать подзадачи

#### Редактировать подзадачи через якорь

Редактировать в главном интерфейсе

![task-edit-subtasks](/steps/task/edit_subtasksA1.png)
![task-edit-subtasks](/steps/task/edit_subtasksA2.png)

#### Через инструмент редактирования подзадач

Найдите значок «Редактировать подзадачи» на панели инструментов задачи и откройте панель редактирования подзадач

![task-edit-subtasks](/steps/task/edit_subtasks1.png)
![task-edit-subtasks](/steps/task/edit_subtasks2.png)

### Редактировать описание задачи

Описание задачи поддерживает синтаксис Markdown.

![task-edit-description](/steps/task/edit_description1.png)
![task-edit-description](/steps/task/edit_description2.png)

#### Добавить изображения к описанию задачи

Есть два способа добавить изображения к описанию задачи. Изображения будут сохранены в папке пользовательских данных и будут использоваться через синтаксис Markdown:

- Вставить через буфер обмена, например, использовать `Ctrl + V` сразу после создания скриншота
- Нажать кнопку загрузки изображения, чтобы выбрать изображение для загрузки

![task-edit-description-image](/steps/task/edit_description_image.png)

### Редактировать время задачи

Наведите курсор на значок инструмента, чтобы увидеть выпадающий список быстрой настройки времени, или нажмите на значок, чтобы настроить время

- Сегодня
- Завтра
- Послезавтра
- Очистить дату

![task-edit-start-end-at](/steps/task/edit_start_end_at1.png)
![task-edit-start-end-at](/steps/task/edit_start_end_at2.png)
![task-edit-start-end-at](/steps/task/edit_start_end_at3.png)

### Редактировать трудоемкость

Трудоемкость представляет вес задачи. При расчете прогресса выполнения подзадач трудоемкость используется для расчета средневзвешенного значения. Трудоемкость по умолчанию равна 1. Если не изменять, прогресс выполнения задачи согласуется со статистикой на основе количества.

Наведите курсор на значок инструмента, чтобы увидеть выпадающий список быстрой настройки трудоемкости, или нажмите на значок, чтобы настроить. Для задач с установленной трудоемкостью вы можете редактировать, нажав на трудоемкость в описании задачи. Ввод трудоемкости по умолчанию удалит маркер.

![task-edit-factor](/steps/task/edit_factor1.png)
![task-edit-factor](/steps/task/edit_factor2.png)
![task-edit-factor](/steps/task/edit_factor3.png)

### Редактировать приоритет

Наведите курсор на значок инструмента, чтобы увидеть выпадающий список быстрой настройки приоритета, или нажмите на значок, чтобы настроить. Для задач с установленным приоритетом вы можете редактировать, нажав на приоритет в описании задачи. Ввод приоритета по умолчанию удалит маркер.

![task-edit-priority](/steps/task/edit_priority1.png)
![task-edit-priority](/steps/task/edit_priority2.png)
![task-edit-priority](/steps/task/edit_priority3.png)

### Редактировать цель задачи

![task-edit-target](/steps/task/edit_target1.png)
![task-edit-target](/steps/task/edit_target2.png)

#### Добавить запись цели задачи

![task-edit-target-record](/steps/task/edit_target_record1.png)

#### Редактировать запись цели задачи

![task-edit-target-record](/steps/task/edit_target_record2.png)

#### Удалить запись цели задачи

![task-edit-target-record](/steps/task/edit_target_record3.png)

### Переместить расположение задачи

Есть несколько способов изменить родительскую задачу и группу задач:

- Перетащить задачу в другую группу задач или якорь задачи
- Использовать инструмент «Переместить в» на панели инструментов

![task-move](/steps/task/edit_move1.png)
![task-move](/steps/task/edit_move2.png)

### Открыть окно «В работе» для этой задачи

![task-edit-doingwindow](/steps/task/edit_doingwindow1.png)
![task-edit-doingwindow](/steps/task/edit_doingwindow2.png)

### Добавить эту задачу к якорю

См. [Якорь задачи](./taskanchor)

![task-edit-taskanchor](/steps/task/edit_taskanchor1.png)
![task-edit-taskanchor](/steps/task/edit_taskanchor2.png)

### Управлять ручными представлениями, содержащими эту задачу

Вы можете добавлять задачи только к ручным представлениям задач, поэтому этот инструмент управляет ручными представлениями задач, в которых находится задача.

![task-edit-taskview](/steps/task/edit_taskview1.png)
![task-edit-taskview](/steps/task/edit_taskview2.png)
![task-edit-taskview](/steps/task/edit_taskview3.png)

### Редактировать статус задачи

#### Завершить задачу

![task-edit-state](/steps/task/edit_state_finish.png)

#### Отменить завершение

![task-edit-state](/steps/task/edit_state_cancel_finish.png)

### Редактировать настройки повторения задачи

См. [Повторяющиеся задачи](./nexttask)

![task-edit-nexttask](/steps/task/edit_nexttask1.png)
![task-edit-nexttask](/steps/task/edit_nexttask2.png)

### Удалить задачу

:::warning
Удаление необратимо и потребует подтверждения.
:::

![task-edit-delete](/steps/task/edit_delete.png)
