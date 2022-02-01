import { Component, ViewChild, ViewEncapsulation } from '@angular/core';
import { extend, L10n, loadCldr } from '@syncfusion/ej2-base';
import {
  TimelineViewsService,
  AgendaService,
  GroupModel,
  EventSettingsModel,
  ResizeService,
  DragAndDropService, ScheduleComponent
} from '@syncfusion/ej2-angular-schedule';
import { timelineResourceData, resourceData } from './data';

import * as numberingSystems from './cldr-data/numberingSystems.json';
import * as gregorian from './cldr-data/fr-CH/ca-gregorian.json';
import * as numbers from './cldr-data/fr-CH/numbers.json';
import * as timeZoneNames from './cldr-data/fr-CH/timeZoneNames.json';
import { DropDownListComponent } from '@syncfusion/ej2-angular-dropdowns';


import * as gregorianFr from './cldr-data/fr/ca-gregorian.json';
import * as numbersFr from './cldr-data/fr/numbers.json';
import * as timeZoneNamesFr from './cldr-data/fr/timeZoneNames.json';

import * as gregorianPt from './cldr-data/pt/ca-gregorian.json';
import * as numbersPt from './cldr-data/pt/numbers.json';
import * as timeZoneNamesPt from './cldr-data/pt/timeZoneNames.json';

loadCldr(numberingSystems, gregorian, numbers, timeZoneNames);
loadCldr(numberingSystems, gregorianFr, numbersFr, timeZoneNamesFr);
loadCldr(numberingSystems, gregorianPt, numbersPt, timeZoneNamesPt);

L10n.load({
  'fr-CH': {
    schedule: {
      day: 'journée',
      week: 'La semaine',
      workWeek: 'Semaine de travail',
      month: 'Mois',
      year: 'An',
      agenda: 'Ordre du jour',
      weekAgenda: 'Agenda de la semaine',
      workWeekAgenda: 'Agenda de la semaine de travail',
      monthAgenda: 'Agenda du mois',
      today: "Aujourd'hui",
      noEvents: "Pas d'événements",
      emptyContainer: "Aucun événement n'est prévu ce jour-là.",
      allDay: 'Toute la journée',
      start: 'Début',
      end: 'Fin',
      more: 'plus',
      close: 'Fermer',
      cancel: 'Annuler',
      noTitle: '(Pas de titre)',
      delete: 'Supprimer',
      deleteEvent: 'Cet evènement',
      deleteMultipleEvent: 'Supprimer plusieurs événements',
      selectedItems: 'Articles sélectionnés',
      deleteSeries: 'Série entière',
      edit: 'Éditer',
      editSeries: 'Série entière',
      editEvent: 'Cet evènement',
      createEvent: 'Créer',
      subject: 'Matière',
      addTitle: 'Ajouter un titre',
      moreDetails: 'Plus de détails',
      save: 'sauvegarder',
      editContent: 'Comment aimeriez-vous changer le rendez-vous de la série ?',
      deleteContent: 'Voulez-vous vraiment supprimer cet événement ?',
      deleteMultipleContent:
        'Voulez-vous vraiment supprimer les événements sélectionnés ?',
      newEvent: 'Nouvel évènement',
      title: 'Titre',
      location: 'Emplacement',
      description: 'La description',
      timezone: 'Fuseau horaire',
      startTimezone: 'Démarrer le fuseau horaire',
      endTimezone: 'Fin du fuseau horaire',
      repeat: 'Répéter',
      saveButton: 'sauvegarder',
      cancelButton: 'Annuler',
      deleteButton: 'Supprimer',
      recurrence: 'Récurrence',
      wrongPattern: "Le modèle de récurrence n'est pas valide.",
      seriesChangeAlert:
        "Voulez-vous annuler les modifications apportées à des instances spécifiques de cette série et les associer à nouveau à l'ensemble de la série ?",
      createError:
        "La durée de l'événement doit être plus courte que sa fréquence. Raccourcissez la durée ou modifiez le modèle de récurrence dans l'éditeur d'événements de récurrence.",
      sameDayAlert:
        'Deux occurrences du même événement ne peuvent pas se produire le même jour.',
      editRecurrence: 'Modifier la récurrence',
      repeats: 'Répète',
      alert: 'Alerte',
      startEndError:
        'La date de fin sélectionnée se produit avant la date de début.',
      invalidDateError: "La valeur de date entrée n'est pas valide.",
      blockAlert:
        "Les événements ne peuvent pas être planifiés dans l'intervalle de temps bloqué.",
      ok: 'Valider',
      yes: 'Oui',
      no: 'Non',
      occurrence: 'Occurrence',
      series: 'Séries',
      previous: 'précédent',
      next: 'Prochain',
      timelineDay: 'Jour de la chronologie',
      timelineWeek: 'Semaine chronologique',
      timelineWorkWeek: 'Semaine de travail',
      timelineMonth: 'Mois de la chronologie',
      timelineYear: 'Année de la chronologie',
      editFollowingEvent: 'Événements suivants',
      deleteTitle: "Supprimer l'événement",
      editTitle: "Modifier l'événement",
      beginFrom: 'Commencer à partir de',
      endAt: 'Fin à',
      expandAllDaySection: 'Développer la section toute la journée',
      collapseAllDaySection: 'Réduire la section toute la journée'
    },
    calendar: {
      today: 'Aujourd`hui'
    }
  }
});

L10n.load({
  'fr': {
    "schedule": {
      "day": "﻿journée",
      "week": "La semaine",
      "workWeek": "Semaine de travail",
      "month": "Mois",
      "agenda": "Ordre du jour",
      "weekAgenda": "Agenda de la semaine",
      "workWeekAgenda": "Agenda de la semaine de travail",
      "monthAgenda": "Agenda du mois",
      "today": "Aujourd'hui",
      "noEvents": "Pas d'événements",
      "emptyContainer": "Il n'y a pas d'événements prévus pour ce jour.",
      "allDay": "Toute la journée",
      "start": "Début",
      "end": "Fin",
      "more": "plus",
      "close": "proche",
      "cancel": "Annuler",
      "noTitle": "(Pas de titre)",
      "delete": "Effacer",
      "deleteEvent": "Supprimer l'événement",
      "deleteMultipleEvent": "Supprimer plusieurs événements",
      "selectedItems": "Articles sélectionnés",
      "deleteSeries": "Supprimer la série",
      "edit": "Modifier",
      "editSeries": "Editer une série",
      "editEvent": "Modifier l'événement",
      "createEvent": "Créer",
      "subject": "Matière",
      "addTitle": "Ajouter un titre",
      "moreDetails": "Plus de détails",
      "save": "sauver",
      "editContent": "Voulez-vous éditer uniquement cet événement ou une série entière?",
      "deleteRecurrenceContent": "Voulez-vous supprimer uniquement cet événement ou une série entière?",
      "deleteContent": "Êtes-vous sûr de vouloir supprimer cet événement?",
      "deleteMultipleContent": "Êtes-vous sûr de vouloir supprimer les événements sélectionnés?",
      "newEvent": "Nouvel évènement",
      "title": "Titre",
      "location": "Emplacement",
      "description": "La description",
      "timezone": "Fuseau horaire",
      "startTimezone": "Démarrer le fuseau horaire",
      "endTimezone": "Fin du fuseau horaire",
      "repeat": "Répéter",
      "saveButton": "sauver",
      "cancelButton": "Annuler",
      "deleteButton": "Effacer",
      "recurrence": "Récurrence",
      "wrongPattern": "Le modèle de récurrence n'est pas valide.",
      "seriesChangeAlert": "Les modifications apportées à des instances spécifiques de cette série seront annulées et ces événements correspondront à nouveau à la série.",
      "createError": "La durée de l'événement doit être plus courte que sa fréquence. Réduisez la durée ou modifiez le modèle de récurrence dans l'éditeur d'événements de récurrence.",
      "recurrenceDateValidation": "Certains mois ont moins que la date sélectionnée. Pour ces mois, l'événement se situera à la dernière date du mois.",
      "sameDayAlert": "Deux occurrences du même événement ne peuvent pas se produire le même jour.",
      "editRecurrence": "Modifier la périodicité",
      "repeats": "Répétitions",
      "alert": "Alerte",
      "startEndError": "La date de fin sélectionnée est antérieure à la date de début.",
      "invalidDateError": "La date entrée n'est pas valide.",
      "ok": "D'accord",
      "occurrence": "Occurrence",
      "series": "Séries",
      "previous": "précédent",
      "next": "Prochain",
      "timelineDay": "Jour de la chronologie",
      "timelineWeek": "Semaine de la chronologie",
      "timelineWorkWeek": "Semaine de travail",
      "timelineMonth": "Mois de la chronologie"
    },
    "recurrenceeditor": {
      "none": "Aucun",
      "daily": "du quotidien",
      "weekly": "Hebdomadaire",
      "monthly": "Mensuel",
      "month": "Mois",
      "yearly": "Annuel",
      "never": "Jamais",
      "until": "Jusqu'à ce que",
      "count": "Compter",
      "first": "Première",
      "second": "Seconde",
      "third": "Troisième",
      "fourth": "Quatrième",
      "last": "Dernier",
      "repeat": "Répéter",
      "repeatEvery": "Répéter tous les",
      "on": "Répéter le",
      "end": "Fin",
      "onDay": "journée",
      "days": "Journées)",
      "weeks": "Semaines)",
      "months": "Mois)",
      "years": "Années)",
      "every": "chaque",
      "summaryTimes": "fois)",
      "summaryOn": "sur",
      "summaryUntil": "jusqu'à ce que",
      "summaryRepeat": "Répétitions",
      "summaryDay": "journées)",
      "summaryWeek": "semaines)",
      "summaryMonth": "mois)",
      "summaryYear": "années)",
      "monthWeek": "Mois Semaine",
      "monthPosition": "Position du mois",
      "monthExpander": "Mois Expander",
      "yearExpander": "Année Expander",
      "repeatInterval": "Intervalle de répétition"
    }
  }
});

L10n.load({
  'pt': {
    "schedule": {
      "day": "Dia",
      "week": "Semana",
      "workWeek": "Semana de trabalho",
      "month": "Mês",
      "year": "Ano",
      "agenda": "Agenda",
      "weekAgenda": "Agenda da semana",
      "workWeekAgenda": "Agenda da Semana de Trabalho",
      "monthAgenda": "Agenda do mês",
      "today": "Hoje",
      "noEvents": "Sem eventos",
      "emptyContainer": "Não há eventos agendados para este dia.",
      "allDay": "Dia todo",
      "start": "Começar",
      "end": "Fim",
      "more": "Mais",
      "close": "Fechar",
      "cancel": "Cancelar",
      "noTitle": "(Sem título)",
      "delete": "Excluir",
      "deleteEvent": "Este evento",
      "deleteMultipleEvent": "Excluir vários eventos",
      "selectedItems": "Itens selecionados",
      "deleteSeries": "Série inteira",
      "edit": "Editar",
      "editSeries": "Série inteira",
      "editEvent": "Este evento",
      "createEvent": "Crio",
      "subject": "Sujeito",
      "addTitle": "Adicionar título",
      "moreDetails": "Mais detalhes",
      "save": "Salve ",
      "editContent": "Como você gostaria de alterar o compromisso na série?",
      "deleteContent": "Tem certeza de que deseja excluir este evento?",
      "deleteMultipleContent": "Tem certeza de que deseja excluir os eventos selecionados?",
      "newEvent": "Novo evento",
      "title": "Título",
      "location": "Localização",
      "description": "Descrição",
      "timezone": "Fuso horário",
      "startTimezone": "Iniciar fuso horário",
      "endTimezone": "Fuso horário final",
      "repeat": "Repetir",
      "saveButton": "Salve ",
      "cancelButton": "Cancelar",
      "deleteButton": "Excluir",
      "recurrence": "Recorrência",
      "wrongPattern": "O padrão de recorrência não é válido.",
      "seriesChangeAlert": "Deseja cancelar as alterações feitas em instâncias específicas desta série e associá-las à série inteira novamente?",
      "createError": "A duração do evento deve ser menor que a frequência com que ele ocorre. Diminua a duração ou altere o padrão de recorrência no editor de eventos de recorrência.",
      "sameDayAlert": "Duas ocorrências do mesmo evento não podem ocorrer no mesmo dia.",
      "editRecurrence": "Editar recorrência",
      "repeats": "Repete",
      "alert": "Alerta",
      "startEndError": "A data final selecionada ocorre antes da data de início.",
      "invalidDateError": "O valor da data inserida é inválido.",
      "blockAlert": "Os eventos não podem ser agendados dentro do intervalo de tempo bloqueado.",
      "ok": "Está bem",
      "yes": "sim",
      "no": "Não",
      "occurrence": "Ocorrência",
      "series": "Series",
      "previous": "Anterior",
      "next": "Próximo",
      "timelineDay": "Dia da linha do tempo",
      "timelineWeek": "Semana da Linha do Tempo",
      "timelineWorkWeek": "Semana de trabalho da linha do tempo",
      "timelineMonth": "Mês da linha do tempo",
      "timelineYear": "Ano da Linha do Tempo",
      "editFollowingEvent": "Eventos seguintes",
      "deleteTitle": "Excluir evento",
      "editTitle": "Editar evento",
      "beginFrom": "Começar de",
      "endAt": "Termina em",
      "expandAllDaySection": "Seção de expansão para o dia todo",
      "collapseAllDaySection": "Recolher a seção do dia inteiro"
    },
    "recurrenceeditor": {
      "none": "Nenhum",
      "daily": "Diariamente",
      "weekly": "Semanal",
      "monthly": "Por mês",
      "month": "Mês",
      "yearly": "Anual",
      "never": "Nunca",
      "until": "Até",
      "count": "Contagem",
      "first": "Primeiro",
      "second": "Segundo",
      "third": "Terceiro",
      "fourth": "Quarto",
      "last": "Último",
      "repeat": "Repetir",
      "repeatEvery": "Repita cada",
      "on": "Repetir em",
      "end": "Fim",
      "onDay": "Dia",
      "days": "Dias)",
      "weeks": "Semana (s)",
      "months": "Mês (es)",
      "years": "Anos)",
      "every": "cada",
      "summaryTimes": "tempo (s)",
      "summaryOn": "em",
      "summaryUntil": "até",
      "summaryRepeat": "Repete",
      "summaryDay": "dias)",
      "summaryWeek": "semana (s)",
      "summaryMonth": "mês (es)",
      "summaryYear": "anos)",
      "monthWeek": "Mês Semana",
      "monthPosition": "Posição do mês",
      "monthExpander": "Expansor do mês",
      "yearExpander": "Expansor do ano",
      "repeatInterval": "Intervalo de repetição"
    },
    "calendar": {
      "today": "Hoje"
    }
  }
});

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styles: [
    `
      .timeline-resource-grouping.e-schedule:not(.e-device)
        .e-agenda-view
        .e-content-wrap
        table
        td:first-child {
        width: 90px;
      }
      .timeline-resource-grouping.e-schedule .e-agenda-view .e-resource-column {
        width: 100px;
      }
    `
  ],
  encapsulation: ViewEncapsulation.None,
  providers: [
    TimelineViewsService,
    AgendaService,
    ResizeService,
    DragAndDropService
  ]
})
export class AppComponent {
  public selectedDate: Date = new Date(2018, 3, 4);
  public group: GroupModel = {
    resources: ['Projects', 'Categories']
  };
  public projectDataSource: Object[] = [
    { text: 'PROJECT 1', id: 1, color: '#cb6bb2' },
    { text: 'PROJECT 2', id: 2, color: '#56ca85' },
    { text: 'PROJECT 3', id: 3, color: '#df5286' }
  ];
  public categoryDataSource: Object[] = [
    { text: 'Nancy', id: 1, groupId: 1, color: '#df5286' },
    { text: 'Steven', id: 2, groupId: 1, color: '#7fa900' },
    { text: 'Robert', id: 3, groupId: 2, color: '#ea7a57' },
    { text: 'Smith', id: 4, groupId: 2, color: '#5978ee' },
    { text: 'Micheal', id: 5, groupId: 3, color: '#df5286' },
    { text: 'Root', id: 6, groupId: 3, color: '#00bdae' }
  ];
  public allowMultiple: Boolean = true;
  public eventSettings: EventSettingsModel = {
    dataSource: <Object[]>(
      extend([], resourceData.concat(timelineResourceData), null, true)
    )
  };
  @ViewChild('scheduleObj')
  public scheduleObj: ScheduleComponent;
  @ViewChild('localeDropdown')
  public localeDropdownObj: DropDownListComponent;
  public localeData: Object[] = [
    { locale: 'en', text: 'en' },
    { locale: 'fr', text: 'fr' },
    { locale: 'pt', text: 'pt' },
    { locale: 'fr-CH', text: 'fr-CH' }
  ];
  public fields: Object = { text: 'text', value: 'locale' };
  public dropDownValue: string = 'en';
  public onLocaleDropDownChange(args: any): void {
    this.scheduleObj.locale = this.localeDropdownObj.value.toString();
  }
}
