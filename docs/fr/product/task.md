---
title: Tâche
createTime: 2025/11/21 12:47:35
permalink: /fr/product/kj3furq7/
---

La tâche est la donnée la plus fondamentale de l'ensemble du programme.

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

## Propriétés de la tâche

| Champ                | key         |
| -------------------- | ----------- |
| id                   | id          |
| Contenu              | content     |
| Description          | description |
| Ordre de tri         | sortOrder   |
| Priorité             | priority    |
| Charge de travail    | factor      |
| Statut d'achèvement  | state       |
| ID de groupe         | groupId     |
| ID de tâche parente  | parentId    |
| Objectif             | target      |
| Type d'objectif      | targetType  |
| Date de début        | startAt     |
| Date de fin          | endAt       |
| Date d'achèvement    | doneAt      |
| Date de création     | createdAt   |
| Date de mise à jour  | updatedAt   |

## Opérations sur les tâches

Toutes les opérations sur les tâches se trouvent dans la barre d'outils de la tâche. Cliquez sur la zone vide d'une tâche ou sur l'icône « Plus » à droite pour les afficher.

![task-tools](/steps/task/task_tools.png)

De gauche à droite :

- Modifier le contenu de la tâche
- Modifier les sous-tâches
- Modifier la description de la tâche
- Modifier l'heure de la tâche
- Modifier la charge de travail
- Modifier la priorité
- Définir l'objectif de la tâche
- Déplacer l'emplacement de la tâche (modifier la tâche parente)
- Définir/annuler l'ancre de la tâche
- Gérer les vues manuelles contenant cette tâche
- Définir une tâche récurrente
- Supprimer la tâche / (dans la vue manuelle) retirer de la vue
  - Icône de corbeille : supprimer
  - Icône X : retirer de la vue

### Modifier le contenu de la tâche

![task-edit-content](/steps/task/edit_content1.png)
![task-edit-content](/steps/task/edit_content2.png)

### Modifier les sous-tâches

#### Modifier les sous-tâches via l'ancre

Modifier dans l'interface principale

![task-edit-subtasks](/steps/task/edit_subtasksA1.png)
![task-edit-subtasks](/steps/task/edit_subtasksA2.png)

#### Via l'outil de modification des sous-tâches

Trouvez l'icône « Modifier les sous-tâches » dans la barre d'outils de la tâche et ouvrez le tiroir de modification des sous-tâches

![task-edit-subtasks](/steps/task/edit_subtasks1.png)
![task-edit-subtasks](/steps/task/edit_subtasks2.png)

### Modifier la description de la tâche

La description de la tâche prend en charge la syntaxe Markdown.

![task-edit-description](/steps/task/edit_description1.png)
![task-edit-description](/steps/task/edit_description2.png)

#### Ajouter des images à la description de la tâche

Il existe deux façons d'ajouter des images à la description de la tâche. Les images seront enregistrées dans le dossier des données utilisateur et référencées via la syntaxe Markdown :

- Coller via le presse-papiers, par exemple, utiliser `Ctrl + V` directement après une capture d'écran
- Cliquer sur le bouton de téléchargement d'image pour sélectionner l'image à télécharger

![task-edit-description-image](/steps/task/edit_description_image.png)

### Modifier l'heure de la tâche

Survolez l'icône de l'outil pour voir un menu déroulant de réglage rapide de l'heure, ou cliquez sur l'icône pour personnaliser l'heure

- Aujourd'hui
- Demain
- Après-demain
- Effacer la date

![task-edit-start-end-at](/steps/task/edit_start_end_at1.png)
![task-edit-start-end-at](/steps/task/edit_start_end_at2.png)
![task-edit-start-end-at](/steps/task/edit_start_end_at3.png)

### Modifier la charge de travail

La charge de travail représente le poids d'une tâche. Lors du calcul de la progression d'achèvement des sous-tâches, la charge de travail est utilisée pour le calcul de la moyenne pondérée. La charge de travail par défaut est 1. Si elle n'est pas modifiée, la progression d'achèvement de la tâche est cohérente avec les statistiques pondérées basées sur le nombre.

Survolez l'icône de l'outil pour voir un menu déroulant de réglage rapide de la charge de travail, ou cliquez sur l'icône pour la personnaliser. Pour les tâches avec une charge de travail définie, vous pouvez modifier en cliquant sur la charge de travail dans la description de la tâche. La saisie de la charge de travail par défaut supprimera le marqueur.

![task-edit-factor](/steps/task/edit_factor1.png)
![task-edit-factor](/steps/task/edit_factor2.png)
![task-edit-factor](/steps/task/edit_factor3.png)

### Modifier la priorité

Survolez l'icône de l'outil pour voir un menu déroulant de réglage rapide de la priorité, ou cliquez sur l'icône pour la personnaliser. Pour les tâches avec une priorité définie, vous pouvez modifier en cliquant sur la priorité dans la description de la tâche. La saisie de la priorité par défaut supprimera le marqueur.

![task-edit-priority](/steps/task/edit_priority1.png)
![task-edit-priority](/steps/task/edit_priority2.png)
![task-edit-priority](/steps/task/edit_priority3.png)

### Modifier l'objectif de la tâche

![task-edit-target](/steps/task/edit_target1.png)
![task-edit-target](/steps/task/edit_target2.png)

#### Ajouter un enregistrement d'objectif de tâche

![task-edit-target-record](/steps/task/edit_target_record1.png)

#### Modifier un enregistrement d'objectif de tâche

![task-edit-target-record](/steps/task/edit_target_record2.png)

#### Supprimer un enregistrement d'objectif de tâche

![task-edit-target-record](/steps/task/edit_target_record3.png)

### Déplacer l'emplacement de la tâche

Il existe plusieurs façons de modifier la tâche parente et le groupe de tâches :

- Glisser-déposer la tâche vers un autre groupe de tâches ou une ancre de tâche
- Utiliser l'outil « Déplacer vers » dans la barre d'outils

![task-move](/steps/task/edit_move1.png)
![task-move](/steps/task/edit_move2.png)

### Ouvrir la fenêtre « En cours » pour cette tâche

![task-edit-doingwindow](/steps/task/edit_doingwindow1.png)
![task-edit-doingwindow](/steps/task/edit_doingwindow2.png)

### Ajouter cette tâche à l'ancre

Voir [Ancre de tâche](./taskanchor)

![task-edit-taskanchor](/steps/task/edit_taskanchor1.png)
![task-edit-taskanchor](/steps/task/edit_taskanchor2.png)

### Gérer les vues manuelles contenant cette tâche

Vous ne pouvez ajouter des tâches qu'aux vues de tâches manuelles, donc cet outil gère les vues de tâches manuelles où se trouve la tâche.

![task-edit-taskview](/steps/task/edit_taskview1.png)
![task-edit-taskview](/steps/task/edit_taskview2.png)
![task-edit-taskview](/steps/task/edit_taskview3.png)

### Modifier le statut de la tâche

#### Terminer la tâche

![task-edit-state](/steps/task/edit_state_finish.png)

#### Annuler l'achèvement

![task-edit-state](/steps/task/edit_state_cancel_finish.png)

### Modifier les paramètres de récurrence de la tâche

Voir [Tâches récurrentes](./nexttask)

![task-edit-nexttask](/steps/task/edit_nexttask1.png)
![task-edit-nexttask](/steps/task/edit_nexttask2.png)

### Supprimer la tâche

:::warning
La suppression est irréversible et demandera une confirmation.
:::

![task-edit-delete](/steps/task/edit_delete.png)
