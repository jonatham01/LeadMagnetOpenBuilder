import { Component, EventEmitter, Input, OnChanges, Output, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-images-active',
  templateUrl: './images-active.component.html',
  styleUrls: ['./images-active.component.scss']
})
export class ImagesActiveComponent implements OnChanges {

  @Input() imagen!:string;

  @Input() imageNum!:number;

  @Input() imageActive!:number;

  @Output() onSelected = new EventEmitter<number>();

  isActive = false;

  get colors() {
    return {
      'w-full':true,
      'hover:brightness-50':true,

      'p-4': this.isActive===true,
      'border-4 ': this.isActive===true,
      'border-amber-500': this.isActive===true,
      'brightness-100': this.isActive===true,
    
    };
  }

  ngOnChanges(changes: SimpleChanges): void {
      if(this.imageNum !== this.imageActive){
        this.isActive=false
      }
  }

  toActive(){
    this.isActive = true;
    this.onSelected.emit(this.imageNum);
  }
}
