import { Component, OnInit } from '@angular/core';
import {  faFacebookSquare, faTwitterSquare, faInstagramSquare} from '@fortawesome/free-brands-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})  
export class FooterComponent implements OnInit {
 
  public fbIcon = faFacebookSquare;
  public twitterIcon = faTwitterSquare;
  public instaIcon = faInstagramSquare;
     
  constructor() { }     
     
  ngOnInit() {   
  }

}
