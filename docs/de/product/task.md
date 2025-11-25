---
title: Aufgabe
createTime: 2025/11/21 12:47:35
permalink: /de/product/gaeluruy/
---

Aufgaben sind die grundlegendsten Daten im gesamten Programm.

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

## Aufgabeneigenschaften

| Feld                | key         |
| ------------------- | ----------- |
| id                  | id          |
| Inhalt              | content     |
| Beschreibung        | description |
| Sortierung          | sortOrder   |
| Priorität           | priority    |
| Arbeitsaufwand      | factor      |
| Abschlussstatus     | state       |
| Gruppen-ID          | groupId     |
| Elternaufgabe-ID    | parentId    |
| Ziel                | target      |
| Zieltyp             | targetType  |
| Startdatum          | startAt     |
| Enddatum            | endAt       |
| Abschlusszeit       | doneAt      |
| Erstellungszeit     | createdAt   |
| Aktualisierungszeit | updatedAt   |

## Aufgabenvorgänge

Alle Aufgabenvorgänge befinden sich in der Aufgaben-Symbolleiste. Klicken Sie auf den leeren Bereich einer Aufgabe oder das Symbol „Mehr" auf der rechten Seite, um sie anzuzeigen.

![task-tools](/steps/task/task_tools.png)

Von links nach rechts:

- Aufgabeninhalt bearbeiten
- Unteraufgaben bearbeiten
- Aufgabenbeschreibung bearbeiten
- Aufgabenzeit bearbeiten
- Arbeitsaufwand bearbeiten
- Priorität bearbeiten
- Aufgabenziel festlegen
- Aufgabenposition verschieben (Elternaufgabe ändern)
- Aufgaben-Anker setzen/entfernen
- Manuelle Aufgabenansichten verwalten, die diese Aufgabe enthalten
- Wiederholende Aufgabe festlegen
- Aufgabe löschen / (in manueller Ansicht) aus Ansicht entfernen
  - Papierkorbsymbol: löschen
  - X-Symbol: aus Ansicht entfernen

### Aufgabeninhalt bearbeiten

![task-edit-content](/steps/task/edit_content1.png)
![task-edit-content](/steps/task/edit_content2.png)

### Unteraufgaben bearbeiten

#### Unteraufgaben über Anker bearbeiten

In der Hauptoberfläche bearbeiten

![task-edit-subtasks](/steps/task/edit_subtasksA1.png)
![task-edit-subtasks](/steps/task/edit_subtasksA2.png)

#### Über Unteraufgaben-Bearbeitungstool

Finden Sie das Symbol „Unteraufgaben bearbeiten" in der Aufgaben-Symbolleiste und öffnen Sie die Unteraufgaben-Bearbeitungsschublade

![task-edit-subtasks](/steps/task/edit_subtasks1.png)
![task-edit-subtasks](/steps/task/edit_subtasks2.png)

### Aufgabenbeschreibung bearbeiten

Die Aufgabenbeschreibung unterstützt Markdown-Syntax.

![task-edit-description](/steps/task/edit_description1.png)
![task-edit-description](/steps/task/edit_description2.png)

#### Bilder zur Aufgabenbeschreibung hinzufügen

Es gibt zwei Möglichkeiten, Bilder zur Aufgabenbeschreibung hinzuzufügen. Bilder werden im Benutzerdatenordner gespeichert und über Markdown-Syntax referenziert:

- Über die Zwischenablage einfügen, z. B. nach einem Screenshot direkt `Strg + V` verwenden
- Auf die Schaltfläche zum Hochladen von Bildern klicken und das hochzuladende Bild auswählen

![task-edit-description-image](/steps/task/edit_description_image.png)

### Aufgabenzeit bearbeiten

Bewegen Sie die Maus über das Werkzeugsymbol, um ein Dropdown-Menü zur schnellen Zeiteinstellung anzuzeigen, oder klicken Sie auf das Symbol, um die Zeit anzupassen

- Heute
- Morgen
- Übermorgen
- Datum löschen

![task-edit-start-end-at](/steps/task/edit_start_end_at1.png)
![task-edit-start-end-at](/steps/task/edit_start_end_at2.png)
![task-edit-start-end-at](/steps/task/edit_start_end_at3.png)

### Arbeitsaufwand bearbeiten

Der Arbeitsaufwand repräsentiert das Gewicht einer Aufgabe. Bei der Berechnung des Abschlussfortschritts von Unteraufgaben wird der Arbeitsaufwand für die gewichtete Durchschnittsberechnung verwendet. Der Standard-Arbeitsaufwand ist 1. Wenn er nicht geändert wird, ist der Aufgabenabschlussfortschritt mit der anzahlbasierten gewichteten Statistik konsistent.

Bewegen Sie die Maus über das Werkzeugsymbol, um ein Dropdown-Menü zur schnellen Einstellung des Arbeitsaufwands anzuzeigen, oder klicken Sie auf das Symbol, um den Arbeitsaufwand anzupassen. Für Aufgaben mit festgelegtem Arbeitsaufwand können Sie durch Klicken auf den Arbeitsaufwand in der Aufgabenbeschreibung bearbeiten. Die Eingabe des Standard-Arbeitsaufwands entfernt die Markierung.

![task-edit-factor](/steps/task/edit_factor1.png)
![task-edit-factor](/steps/task/edit_factor2.png)
![task-edit-factor](/steps/task/edit_factor3.png)

### Priorität bearbeiten

Bewegen Sie die Maus über das Werkzeugsymbol, um ein Dropdown-Menü zur schnellen Prioritätseinstellung anzuzeigen, oder klicken Sie auf das Symbol, um sie anzupassen. Für Aufgaben mit festgelegter Priorität können Sie durch Klicken auf die Priorität in der Aufgabenbeschreibung bearbeiten. Die Eingabe der Standardpriorität entfernt die Markierung.

![task-edit-priority](/steps/task/edit_priority1.png)
![task-edit-priority](/steps/task/edit_priority2.png)
![task-edit-priority](/steps/task/edit_priority3.png)

### Aufgabenziel bearbeiten

![task-edit-target](/steps/task/edit_target1.png)
![task-edit-target](/steps/task/edit_target2.png)

#### Aufgabenziel-Datensatz hinzufügen

![task-edit-target-record](/steps/task/edit_target_record1.png)

#### Aufgabenziel-Datensatz bearbeiten

![task-edit-target-record](/steps/task/edit_target_record2.png)

#### Aufgabenziel-Datensatz löschen

![task-edit-target-record](/steps/task/edit_target_record3.png)

### Aufgabenposition verschieben

Es gibt mehrere Möglichkeiten, die Elternaufgabe und Aufgabengruppe zu ändern:

- Die Aufgabe per Drag & Drop zu einer anderen Aufgabengruppe oder einem Aufgaben-Anker ziehen
- Das Werkzeug „Verschieben nach" in der Symbolleiste verwenden

![task-move](/steps/task/edit_move1.png)
![task-move](/steps/task/edit_move2.png)

### Fenster „Wird bearbeitet" für diese Aufgabe öffnen

![task-edit-doingwindow](/steps/task/edit_doingwindow1.png)
![task-edit-doingwindow](/steps/task/edit_doingwindow2.png)

### Diese Aufgabe zum Anker hinzufügen

Siehe [Aufgaben-Anker](./taskanchor)

![task-edit-taskanchor](/steps/task/edit_taskanchor1.png)
![task-edit-taskanchor](/steps/task/edit_taskanchor2.png)

### Manuelle Ansichten verwalten, die diese Aufgabe enthalten

Sie können Aufgaben nur zu manuellen Aufgabenansichten hinzufügen, daher verwaltet dieses Tool die manuellen Aufgabenansichten, in denen sich die Aufgabe befindet.

![task-edit-taskview](/steps/task/edit_taskview1.png)
![task-edit-taskview](/steps/task/edit_taskview2.png)
![task-edit-taskview](/steps/task/edit_taskview3.png)

### Aufgabenstatus bearbeiten

#### Aufgabe abschließen

![task-edit-state](/steps/task/edit_state_finish.png)

#### Abschluss abbrechen

![task-edit-state](/steps/task/edit_state_cancel_finish.png)

### Wiederholungseinstellungen der Aufgabe bearbeiten

Siehe [Wiederholende Aufgaben](./nexttask)

![task-edit-nexttask](/steps/task/edit_nexttask1.png)
![task-edit-nexttask](/steps/task/edit_nexttask2.png)

### Aufgabe löschen

:::warning
Das Löschen ist irreversibel und wird zur Bestätigung aufgefordert.
:::

![task-edit-delete](/steps/task/edit_delete.png)
