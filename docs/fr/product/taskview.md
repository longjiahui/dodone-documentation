---
title: Vue de tâche
createTime: 2025/11/21 13:22:20
permalink: /fr/product/2pkw6kb9/
---

Les vues de tâches vous permettent de personnaliser les requêtes de tâches sans stocker réellement les données de tâches. Elles sont divisées en vues automatiques et vues manuelles. Les vues automatiques ont une logique de recherche de tâches et recherchent automatiquement dans la liste des tâches, tandis que les vues manuelles nécessitent une affectation manuelle des tâches, similaire à une fonction `d'étiquette`.

## Propriétés de la vue de tâche

- Nom
- Icône. L'icône pour les vues de tâches manuelles sera affichée sur les tâches assignées à cette vue. L'icône par défaut pour les vues manuelles est une icône d'étiquette, et l'icône par défaut pour les vues automatiques est une icône de robot
- Description
- Type
  - Automatique
  - Manuel
- Logique de vue automatique
  - Script
  - Configuration de la logique assistée par GUI

## Opérations sur les vues de tâches

### Créer une vue de tâche

![taskview](/steps/taskview/create.png)

#### Créer une vue de tâche prédéfinie

Comme indiqué dans le menu déroulant ci-dessus, il existe des vues de tâches prédéfinies :

- `Aujourd'hui` - Afficher les tâches où `startAt` ou `endAt` inclut aujourd'hui
- `Demain` - Afficher les tâches où `startAt` ou `endAt` inclut demain
- `Après-demain` - Afficher les tâches où `startAt` ou `endAt` inclut après-demain
- `Cette semaine` - Afficher les tâches où `startAt` ou `endAt` inclut cette semaine
- `Ce mois-ci` - Afficher les tâches où `startAt` ou `endAt` inclut ce mois-ci

### Modifier une vue de tâche

![taskview](/steps/taskview/edit.png)

### Supprimer une vue de tâche

![taskview](/steps/taskview/delete.png)

## Configuration de la logique GUI de vue de tâche automatique

![taskview](/steps/taskview/gui.png)

Vous pouvez créer une logique de requête de vue de tâche de manière graphique :

- Condition - Un seul point de jugement logique
- Groupe logique - Une combinaison de conditions, peut être définie sur une logique ET/OU

Fondamentalement, la configuration de la logique de vue GUI consiste à configurer un groupe logique puis à l'imbriquer de manière récursive.

Par exemple, la logique pour `Aujourd'hui` est :

- `Heure de début` `supérieur ou égal à` `aujourd'hui à 0h00` ET `Heure de début` `inférieur ou égal à` `aujourd'hui à 24h00`
- OU
- `Heure de début` `inférieur ou égal à` `aujourd'hui à 0h00` ET `Heure de fin` `supérieur ou égal à` `aujourd'hui à 0h00`

## Configuration de la logique de script de vue de tâche automatique

![taskview](/steps/taskview/script.png)

Vous pouvez utiliser des scripts pour créer une logique de requête de vue de tâche complexe, comme `Cette semaine` et `Ce mois-ci`.

Essentiellement, le script doit être une fonction `javascript` `(t: Task) => boolean`. Voir l'exemple de `Ce mois-ci` :

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

Le type de paramètre `Task` est le suivant, vous pouvez également vous référer à [task](./task#task-properties) :

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

Pour le traitement lié au temps, vous pouvez utiliser dayjs. Consultez [Dayjs Documentation](https://day.js.org/docs/en/installation/installation)
