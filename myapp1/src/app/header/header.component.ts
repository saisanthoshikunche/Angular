import { Component, Input, OnInit, Output } from '@angular/core';
import { EventEmitter } from 'events';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {
 
        public name="sai";
        public greeting ="";
        public sai="";
     
        
  constructor() { }

  ngOnInit(){
  }
  onsubmit(value:any){
    
    alert(value);
    this.greeting="greeting from cs";
  }
  

}
