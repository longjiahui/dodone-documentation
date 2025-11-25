---
title: Aufgabenansicht
createTime: 2025/11/21 13:22:20
permalink: /de/product/tu5cax29/
---

Aufgabenansichten ermöglichen es Ihnen, Aufgabenabfragen anzupassen, ohne tatsächlich Aufgabendaten zu speichern. Sie sind in automatische Ansichten und manuelle Ansichten unterteilt. Automatische Ansichten verfügen über Aufgabensuchlogik und durchsuchen automatisch die Aufgabenliste, während manuelle Ansichten eine manuelle Aufgabenzuweisung erfordern, ähnlich einer `Tag`-Funktion.

## Aufgabenansichts-Eigenschaften

- Name
- Symbol. Das Symbol für manuelle Aufgabenansichten wird auf Aufgaben angezeigt, die dieser Ansicht zugewiesen sind. Das Standardsymbol für manuelle Ansichten ist ein Tag-Symbol, und das Standardsymbol für automatische Ansichten ist ein Roboter-Symbol
- Beschreibung
- Typ
  - Automatisch
  - Manuell
- Automatische Ansichtslogik
  - Skript
  - GUI-gestützte Logikkonfiguration

## Aufgabenansichts-Vorgänge

### Aufgabenansicht erstellen

![taskview](/steps/taskview/create.png)

#### Voreingestellte Aufgabenansicht erstellen

Wie im obigen Dropdown-Menü gezeigt, gibt es voreingestellte Aufgabenansichten:

- `Heute` - Aufgaben anzeigen, bei denen `startAt` oder `endAt` heute enthält
- `Morgen` - Aufgaben anzeigen, bei denen `startAt` oder `endAt` morgen enthält
- `Übermorgen` - Aufgaben anzeigen, bei denen `startAt` oder `endAt` übermorgen enthält
- `Diese Woche` - Aufgaben anzeigen, bei denen `startAt` oder `endAt` diese Woche enthält
- `Dieser Monat` - Aufgaben anzeigen, bei denen `startAt` oder `endAt` diesen Monat enthält

### Aufgabenansicht bearbeiten

![taskview](/steps/taskview/edit.png)

### Aufgabenansicht löschen

![taskview](/steps/taskview/delete.png)

## Automatische Aufgabenansicht GUI-Logikkonfiguration

![taskview](/steps/taskview/gui.png)

Sie können Aufgabenansichtsabfragelogik auf grafische Weise erstellen:

- Bedingung - Ein einzelner logischer Beurteilungspunkt
- Logikgruppe - Eine Kombination von Bedingungen, kann auf UND/ODER-Logik eingestellt werden

Im Grunde genommen ist die GUI-Ansichtslogikkonfiguration das Einrichten einer Logikgruppe und dann rekursives Verschachteln.

Zum Beispiel ist die Logik für `Heute`:

- `Startzeit` `größer oder gleich` `heute um 0:00 Uhr` UND `Startzeit` `kleiner oder gleich` `heute um 24:00 Uhr`
- ODER
- `Startzeit` `kleiner oder gleich` `heute um 0:00 Uhr` UND `Endzeit` `größer oder gleich` `heute um 0:00 Uhr`

## Automatische Aufgabenansicht Skript-Logikkonfiguration

![taskview](/steps/taskview/script.png)

Sie können Skripte verwenden, um komplexe Aufgabenansichtsabfragelogik zu erstellen, wie z. B. `Diese Woche` und `Dieser Monat`.

Im Wesentlichen muss das Skript eine `javascript`-Funktion `(t: Task) => boolean` sein. Siehe das Beispiel für `Dieser Monat`:

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

Der Parameter `Task`-Typ ist wie folgt, Sie können auch auf [task](./task#task-properties) verweisen:

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

Für zeitbezogene Verarbeitung können Sie dayjs verwenden. Siehe [Dayjs Documentation](https://day.js.org/docs/en/installation/installation)
