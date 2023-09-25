import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-btn',
  templateUrl: './btn.component.html',
  styleUrls: ['./btn.component.scss']
})
export class BtnComponent {

  @Input() bntType:'submit'| 'reset' = 'submit';
  @Input() color = 'primary';
  @Input() fullWidht: 'full' | 'min' = 'min';

  constructor(){}

  getColors(){
    return{
      'w-full' : this.fullWidht === 'full',

      'px-5 py-2 text-white font-medium text-sm ': false,
      
      'px-8  py-4': this.color === 'auth',
      'bg-primary-100': this.color === 'auth',
      'hover:bg-primary-300': this.color === 'auth',
      'focus:ring-primary-200': this.color === 'auth',

      'bg-success-700': this.color === 'success',
      'hover:bg-success-800': this.color === 'success',
      'focus:ring-success-300': this.color === 'success',

      'bg-primary-700': this.color === 'primary',
      'hover:bg-primary-800': this.color === 'primary',
      'focus:ring-primary-300': this.color === 'primary',

      'bg-red-700': this.color === 'red',
      'hover:bg-red-800': this.color === 'red',
      'focus:ring-red-300': this.color === 'red',
    }
  }
  
}
