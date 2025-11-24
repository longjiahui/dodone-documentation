---
title: Tareas recurrentes
createTime: 2025/11/21 12:47:35
permalink: /es/product/2ina93gv/
---

# Tareas recurrentes

En dodone, las tareas recurrentes pueden diferir ligeramente de otras herramientas. Más precisamente, son "tareas siguientes". Las tareas recurrentes futuras no se crean por adelantado; en su lugar, se le pedirá que cree la siguiente tarea cuando complete la tarea actual. Por ejemplo, si configura una tarea recurrente diaria, al completar la tarea se le pedirá que cree la siguiente tarea y se sugerirá establecer la hora para el día siguiente.

Si configura la recurrencia en una tarea principal, al crear la siguiente tarea se copiarán automáticamente las subtareas.

Tanto las tareas padre como las subtareas pueden tener subtareas, y todas siguen las reglas descritas anteriormente.

## Propiedades de las tareas recurrentes

- a: Repetir cada N días
- b: Intervalo de descanso por ciclo. Si se establece en 2, el primer ciclo descansa 1 día y el segundo no; si se establece en 3, el primer ciclo descansa 1 día, el segundo descansa 2 días y el tercero no.
- endDate: Fecha de finalización. Después de esta fecha, no se le pedirá que cree la siguiente tarea.

## Operaciones

### Configurar tarea recurrente

![next-task](/steps/nexttask/set.png)

### Eliminar configuración de tarea recurrente

![next-task](/steps/nexttask/unset.png)
