import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: 'telephoneFormat' })
export class TelephoneFormatPipe implements PipeTransform {
    transform(phoneNumberArr: string[]): string {
      let numbersFormatted = phoneNumberArr.map(p => {
        return this.format(p) 
      })
      .join(' / ')

      return numbersFormatted;
    }
    
    format(phone: string) {
      var cleaned = ('' + phone).replace(/\D/g, '');
      
      var match = cleaned.match(/^(1|)?(\d{3})(\d{3})(\d{4})$/);
      if (match) {
        var intlCode = (match[1] ? '+1 ' : '');
        return [intlCode, '(', match[2], ') ', match[3], '-', match[4]].join('');
      }
        
      return null;
    }
}