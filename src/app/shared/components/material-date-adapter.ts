import { NativeDateAdapter } from '@angular/material';
import { Platform } from '@angular/cdk/platform';


export class MaterialDateAdapter extends NativeDateAdapter {

  constructor(matDateLocale: string) {
    super(matDateLocale, new Platform());
  }

  format(date: Date, displayFormat: object): string {

    const day = date.getDate();
    const month = date.getMonth() + 1;
    const year = date.getFullYear();

    return `${day}/${month}/${year}`;
  }

  getDayOfWeekNames(style): string[] {
    return ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'];
  }

  getMonthNames(style): string[] {
    return ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];
  }

}

export const MY_FORMATS = {
  parse: {
    dateInput: 'input',
  },
  display: {
    dateInput: 'input',
    monthYearLabel: 'input',
    dateA11yLabel: 'input',
    monthYearA11yLabel: 'input'
  },
};
