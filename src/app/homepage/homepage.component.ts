import { Component } from '@angular/core';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css']
})
export class HomepageComponent {

  randomString : any;

  constructor() { }

  generateRandom()
  {
    var chars = "0123456789ABCDEFGHIJKLMNOPQRSTUVWXTZabcdefghiklmnopqrstuvwxyz"; 
    var string_length = 10;
    var rString='';

      for(var i=0;i<string_length;i++){
        var rnum = Math.floor(Math.random() * chars.length);  
        rString += chars.substring(rnum,rnum+1); 
       }  
       this.randomString =rString; 
  }

}
