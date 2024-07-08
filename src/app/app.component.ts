import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToastModule } from 'primeng/toast';
import { ConfirmDialogModule } from 'primeng/confirmdialog';
import { PrimeNGConfig } from 'primeng/api';
import { registerLocaleData } from '@angular/common';
import localeEs from '@angular/common/locales/es';
import { BadgeModule } from 'primeng/badge';
import { HttpClient } from '@angular/common/http';

registerLocaleData(localeEs, 'es');
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, ToastModule, ConfirmDialogModule, BadgeModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent implements OnInit{
  title = 'apuesta-frontend';

  constructor(
    private primengConfig : PrimeNGConfig
  ) {
    
  }

  public  ngOnInit(): void {
    this.primengConfig.ripple = true;
    this.primengConfig.setTranslation({
      // accept	Yes
      accept: 'Sí',
      // reject	No
      reject: 'No',
      // startsWith	Starts with
      startsWith: 'Empieza con',
      // contains	Contains
      contains: 'Contiene',
      // notContains	Not contains
      notContains: 'No contiene',
      // endsWith	Ends with
      endsWith: 'Termina con',
      // equals	Equals
      equals: 'Igual',
      // notEquals	Not equals
      notEquals: 'No es igual',
      // noFilter	No Filter
      noFilter: 'Sin filtro',
      // lt	Less than
      lt: 'Menor que',
      // lte	Less than or equal to
      lte: 'Menor o igual que',
      // gt	Greater than
      gt: 'Mayor que',
      // gte	Greater than or equal to
      gte: 'Mayor o igual que',
      // dateIs	Date is
      dateIs: 'La fecha es',
      // dateIsNot	Date is not
      dateIsNot: 'La fecha no es',
      // dateBefore	Date is before
      dateBefore: 'La fecha es antes',
      // dateAfter	Date is after
      dateAfter: 'La fecha es después',
      // clear	Clear
      clear: 'Limpiar',
      // apply	Apply
      apply: 'Aplicar',
      // matchAll	Match All
      matchAll: 'Coincidir todos',
      // matchAny	Match Any
      matchAny: 'Coincidir cualquier',
      // addRule	Add Rule
      addRule: 'Agregar regla',
      // removeRule	Remove Rule
      removeRule: 'Eliminar regla',
      // choose	Choose
      choose: 'Elegir',
      // upload	Upload
      upload: 'Subir',
      // cancel	Cancel
      cancel: 'Cancelar',
      // pending	Pending
      pending: 'Pendiente',
      // fileSizeTypes	['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB']
      fileSizeTypes: ['B', 'KB', 'MB', 'GB', 'TB', 'PB', 'EB', 'ZB', 'YB'],
      // dayNames	['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday']
      dayNames: ['Domingo', 'Lunes', 'Martes', 'Miércoles', 'Jueves', 'Viernes', 'Sábado'],
      // dayNamesShort	['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat']
      dayNamesShort: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb'],
      // dayNamesMin	['Su', 'Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa']
      dayNamesMin: ['Do', 'Lu', 'Ma', 'Mi', 'Ju', 'Vi', 'Sá'],
      // monthNames	['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December']
      monthNames: [
        'Enero',
        'Febrero',
        'Marzo',
        'Abril',
        'Mayo',
        'Junio',
        'Julio',
        'Agosto',
        'Septiembre',
        'Octubre',
        'Noviembre',
        'Diciembre',
      ],
      // monthNamesShort	['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec']
      monthNamesShort: ['Ene', 'Feb', 'Mar', 'Abr', 'May', 'Jun', 'Jul', 'Ago', 'Sep', 'Oct', 'Nov', 'Dic'],
      // chooseYear	Choose Year
      chooseYear: 'Elegir año',
      // chooseMonth	Choose Month
      chooseMonth: 'Elegir mes',
      // chooseDate	Choose Date
      chooseDate: 'Elegir fecha',
      // prevDecade	Previous Decade
      prevDecade: 'Década anterior',
      // nextDecade	Next Decade
      nextDecade: 'Década siguiente',
      // prevYear	Previous Year
      prevYear: 'Año anterior',
      // nextYear	Next Year
      nextYear: 'Año siguiente',
      // prevMonth	Previous Month
      prevMonth: 'Mes anterior',
      // nextMonth	Next Month
      nextMonth: 'Mes siguiente',
      // prevHour	Previous Hour
      prevHour: 'Hora anterior',
      // nextHour	Next Hour
      nextHour: 'Hora siguiente',
      // prevMinute	Previous Minute
      prevMinute: 'Minuto anterior',
      // nextMinute	Next Minute
      nextMinute: 'Minuto siguiente',
      // prevSecond	Previous Second
      prevSecond: 'Segundo anterior',
      // nextSecond	Next Second
      nextSecond: 'Segundo siguiente',
      // am	am
      am: 'am',
      // pm	pm
      pm: 'pm',
      // today	Today
      today: 'Hoy',
      // weekHeader	Wk
      weekHeader: 'Sem',
      // firstDayOfWeek	0
      firstDayOfWeek: 0,
      // dateFormat	mm/dd/yy
      dateFormat: 'dd/mm/yy',
      // weak	Weak
      weak: 'Semana',
      // medium	Medium
      medium: 'Media',
      // strong	Strong
      strong: 'Fuerte',
      // passwordPrompt	Enter a password
      passwordPrompt: 'Ingrese una contraseña',
      // emptyFilterMessage	No results found'
      emptyFilterMessage: 'No se encontraron resultados',
      // searchMessage	{0} results are available
      searchMessage: '{0} resultados disponibles',
      // selectionMessage	{0} items selected
      selectionMessage: '{0} elementos seleccionados',
      // emptySelectionMessage	No selected item
      emptySelectionMessage: 'Ningún elemento seleccionado',
      // emptySearchMessage	No results found
      emptySearchMessage: 'No se encontraron resultados',
      // emptyMessage	No available options
      emptyMessage: 'No hay opciones disponibles',
      after: 'Después',
      before: 'Antes',
      isNot: 'No es',
      is: 'Es',
      aria: {
        // aria.trueLabel	True
        trueLabel: 'Verdadero',
        // aria.falseLabel	False
        falseLabel: 'Falso',
        // aria.nullLabel	Not Selected
        nullLabel: 'No seleccionado',
        // aria.star	1 star
        star: '1 estrella',
        // aria.stars	{star} stars
        stars: '{star} estrellas',
        // aria.selectAll	All items selected
        selectAll: 'Todos los elementos seleccionados',
        // aria.unselectAll	All items unselected
        unselectAll: 'Todos los elementos de seleccionados',
        // aria.close	Close
        close: 'Cerrar',
        // aria.previous	Previous
        previous: 'Anterior',
        // aria.next	Next
        next: 'Siguiente',
        // aria.navigation	Navigation
        navigation: 'Navegación',
        // aria.scrollTop	Scroll Top
        scrollTop: 'Desplazamiento superior',
        // aria.moveTop	Move Top
        moveTop: 'Mover arriba',
        // aria.moveUp	Move Up
        moveUp: 'Mover arriba',
        // aria.moveDown	Move Down
        moveDown: 'Mover abajo',
        // aria.moveBottom	Move Bottom
        moveBottom: 'Mover abajo',
        // aria.moveToTarget	Move to Target
        moveToTarget: 'Mover a destino',
        // aria.moveToSource	Move to Source
        moveToSource: 'Mover a origen',
        // aria.moveAllToTarget	Move All to Target
        moveAllToTarget: 'Mover todos a destino',
        // aria.moveAllToSource	Move All to Source
        moveAllToSource: 'Mover todos a origen',
        // aria.pageLabel	{page}
        pageLabel: '{page}',
        // aria.firstPageLabel	First Page
        firstPageLabel: 'Primera página',
        // aria.lastPageLabel	Last Page
        lastPageLabel: 'Última página',
        // aria.nextPageLabel	Next Page
        nextPageLabel: 'Siguiente página',
        // aria.prevPageLabel	Previous Page
        prevPageLabel: 'Página anterior',
        // aria.rowsPerPageLabel	Rows per page
        rowsPerPageLabel: 'Filas por página',
        // aria.jumpToPageDropdownLabel	Jump to Page Dropdown
        jumpToPageDropdownLabel: 'Ir a página desplegable',
        // aria.jumpToPageInputLabel	Jump to Page Input
        jumpToPageInputLabel: 'Ir a página de entrada',
        // aria.selectRow	Row Selected
        selectRow: 'Fila seleccionada',
        // aria.unselectRow	Row Unselected
        unselectRow: 'Fila no seleccionada',
        // aria.expandRow	Row Expanded
        expandRow: 'Fila expandida',
        // aria.collapseRow	Row Collapsed
        collapseRow: 'Fila colapsada',
        // aria.showFilterMenu	Show Filter Menu
        showFilterMenu: 'Mostrar menú de filtro',
        // aria.hideFilterMenu	Hide Filter Menu
        hideFilterMenu: 'Ocultar menú de filtro',
        // aria.filterOperator	Filter Operator
        filterOperator: 'Operador de filtro',
        // aria.filterConstraint	Filter Constraint
        filterConstraint: 'Restricción de filtro',
        // aria.editRow	Row Edit
        editRow: 'Editar fila',
        // aria.saveEdit	Save Edit
        saveEdit: 'Guardar edición',
        // aria.cancelEdit	Cancel Edit
        cancelEdit: 'Cancelar edición',
        // aria.listView	List View
        listView: 'Vista de lista',
        // aria.gridView	Grid View
        gridView: 'Vista de cuadrícula',
        // aria.slide	Slide
        slide: 'Diapositiva',
        // aria.slideNumber	{slideNumber}
        slideNumber: '{slideNumber}',
        // aria.zoomImage	Zoom Image
        zoomImage: 'Ampliar la imagen',
        // aria.zoomIn	Zoom In
        zoomIn: 'Acercar',
        // aria.zoomOut	Zoom Out
        zoomOut: 'Alejar',
        // aria.rotateRight	Rotate Right
        rotateRight: 'Girar a la derecha',
        // aria.rotateLeft	Rotate Left
        rotateLeft: 'Girar a la izquierda',
      },
    });
  }
}
