import {Component, ViewContainerRef, Input, AfterViewInit} from 'angular2/core';
import {NgIf, NgFor, NgClass, NgModel, FORM_DIRECTIVES, ControlValueAccessor} from 'angular2/common';
// import * as moment_ from 'moment';
declare var moment_:any;
const moment: any = (<any>moment_)['default'] || moment_;
@Component({
  selector: 'datepicker[ngModel]',
  template: require('./datepicker.html'),
//   styles: [ require('./datepicker.css') ],
  directives: [FORM_DIRECTIVES, NgIf, NgFor, NgClass],
   styles: [`
    .ng-datepicker-input {
    position: relative;
    }

    .ng-datepicker {
    position: absolute;
    z-index: 99;
    width: 250px;
    background: #fff; 
    font-size: 12px; 
    color: #565a5c; 
    display: inline-block; 
    border: 1px solid #c4c4c4;
    border-radius: 2px;
    margin: 0;
    padding: 0;
    }

    .ng-datepicker > .controls {
    width: 250px;
    display: inline-block;
    padding: 5px 0 0 0;
    }

    .ng-datepicker > .controls i {
    font-size: 25px;
    cursor: pointer;
    }

    .ng-datepicker > .controls > .left {
    width: 35px;
    display: inline-block;
    float: left;
    margin: 5px 0 0 3px;
    }

    .ng-datepicker > .controls > .left > i.prev-year-btn {
    float: left;
    display: block;
    font-size: 14px;
    opacity: 0.4;
    }

    .ng-datepicker > .controls > .left > i.prev-month-btn {
    float: left;
    margin: -5px 0 0 9px;
    display: block;
    }

    .ng-datepicker > .controls > span.date {
    width: 170px;
    text-align: center;
    font-size: 14px;
    color: #565a5c;
    font-weight: bold;
    float: left; 
    padding: 3px 0 0 0;
    }

    .ng-datepicker > .controls > .right {
    width: 35px;
    display: inline-block;
    float: right;
    margin: 5px 0 0 0;
    }

    .ng-datepicker > .controls > .right > i.next-year-btn {
    float: left;
    display: block;
    font-size: 14px;
    opacity: 0.4;
    }

    .ng-datepicker > .controls > .right > i.next-month-btn {
    float: left;
    margin: -6px 9px 0 0;
    }

    .ng-datepicker > .day-names {
    width: 250px;
    border-bottom: 1px solid #c4c4c4;
    display: inline-block;
    }

    .ng-datepicker > .day-names > span {
    width: 35.7px;
    text-align: center;
    color: #82888a;
    float: left;
    display: block;
    }

    .ng-datepicker > .calendar {
    width: 255px;
    display: inline-block;
    margin: 0 0 -1px -1px;
    padding: 0;
    }

    .ng-datepicker > .calendar > span > span.day {
    width: 35px;
    height: 35px;
    border-left: 1px solid #c4c4c4;
    border-bottom: 1px solid #c4c4c4;
    float: left;
    display: block;
    color: #565a5c;
    text-align: center;
    font-weight: bold;
    line-height: 35px;
    margin: 0;
    padding: 0;
    font-size: 14px;
    cursor: pointer;
    }

    .ng-datepicker > .calendar > span:last-child > span.day {
    border-right: 1px solid #c4c4c4;
    }

    .ng-datepicker > .calendar > span > span.day.disabled {
    border-left: 1px solid transparent;
    cursor: default;
    pointer-events: none;
    }

    .ng-datepicker > .calendar > span > span.day:hover {
    background: #2193b0;
    color: #fff;
    }
  `]
})

export class DatePicker implements ControlValueAccessor, AfterViewInit {
  public isOpened: boolean;
  public dateValue: string;
  public viewValue: string;
  public days: Array<Object>;
  public dayNames: Array<string>;
  private el: any;
  private date: any;
  private viewContainer: ViewContainerRef;
  private onChange: Function;
  private onTouched: Function;
  private cd: any;

  @Input('model-format') modelFormat: string;
  @Input('view-format') viewFormat: string;
  @Input('init-date') initDate: string;
  @Input('first-week-day-sunday') firstWeekDaySunday: boolean;

  constructor(cd: NgModel, viewContainer: ViewContainerRef) {
    cd.valueAccessor = this;
    this.cd = cd;
    this.viewContainer = viewContainer;
    this.el = viewContainer.element.nativeElement;
    this.init();
  }

  ngAfterViewInit() {
    this.initValue();
  }

  public openDatepicker(): void {
    this.isOpened = true;
  }

  public closeDatepicker(): void {
    this.isOpened = false;
  }

  public prevYear(): void {
    this.date.subtract(1, 'Y');
    this.generateCalendar(this.date);
  }

  public prevMonth(): void {
    this.date.subtract(1, 'M');
    this.generateCalendar(this.date);
  }

  public nextYear(): void {
    this.date.add(1, 'Y');
    this.generateCalendar(this.date);
  }

  public nextMonth(): void {
    this.date.add(1, 'M');
    this.generateCalendar(this.date);
  }

  public selectDate(e, date): void {
    e.preventDefault();
    let selectedDate = moment(date.day + '.' + date.month + '.' + date.year, 'DD.MM.YYYY');
    this.setValue(selectedDate);
    this.closeDatepicker();
  }

  private generateCalendar(date): void {
    let lastDayOfMonth = date.endOf('month').date();
    let month = date.month();
    let year = date.year();
    let n = 1;
    let firstWeekDay = null;

    this.dateValue = date.format('MMMM YYYY');
    this.days = [];

    if (this.firstWeekDaySunday === true) {
      firstWeekDay = date.set('date', 2).day();
    } else {
      firstWeekDay = date.set('date', 1).day();
    }

    if (firstWeekDay !== 1) {
        n -= firstWeekDay - 1;
    }

    for (let i = n; i <= lastDayOfMonth; i += 1) {
      if (i > 0) {
        this.days.push({ day: i, month: month + 1, year: year, enabled: true });
      } else {
        this.days.push({ day: null, month: null, year: null, enabled: false });
      }
    }
  }

  private generateDayNames(): void {
    this.dayNames = [];
    let date = this.firstWeekDaySunday === true ? moment('2015-06-07') : moment('2015-06-01');
    for (let i = 0; i < 7; i += 1) {
      this.dayNames.push(date.format('ddd'));
      date.add('1', 'd');
    }
  }

  private initMouseEvents(): void {
    let body = document.getElementsByTagName('body')[0];

    body.addEventListener('click', (e) => {
      if (!this.isOpened || !e.target) { return; }
      if (this.el !== e.target && !this.el.contains(e.target)) {
        this.closeDatepicker();
      }
    }, false);
  }

  private setValue(value: any): void {
    let val = moment(value, this.modelFormat || 'YYYY-MM-DD');
    this.viewValue = val.format(this.viewFormat || 'Do MMMM YYYY');
    this.cd.viewToModelUpdate(val.format(this.modelFormat || 'YYYY-MM-DD'));
  }

  private initValue(): void {
    setTimeout(() => {
      if (!this.initDate) {
        this.setValue(moment().format(this.modelFormat || 'YYYY-MM-DD'));
      } else {
        this.setValue(moment(this.initDate, this.modelFormat || 'YYYY-MM-DD'));
      }
    });
  }

  writeValue(value: string): void {
    if (!value) { return; }
    this.setValue(value);
  }

  registerOnChange(fn: (_: any) => {}): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: (_: any) => {}): void {
    this.onTouched = fn;
  }

  private init(): void {
    this.isOpened = false;
    this.date = moment();
    this.firstWeekDaySunday = false;
    this.generateDayNames();
    this.generateCalendar(this.date);
    this.initMouseEvents();
  }
}