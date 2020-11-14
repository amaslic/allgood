import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { item } from './item'; 
import { faFileAlt, faCheckCircle, faCoins, faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
       
@Component({  
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})     
export class AboutComponent implements OnInit {
     
  public items = item;   
  public faFileAlt = faFileAlt;
  public faCheckCircle = faCheckCircle;
  public faCoins = faCoins; 
  public faHandHoldingUsd = faHandHoldingUsd;
   
  myIcon: string
  @ViewChild('iconContainer') public iconContainer: ElementRef;
 
  public generateClass = (val: any) =>{
	  return val.color +" "+val.shape;
  }
  
  public setIcon = (val) =>{
	if(val ===  "hand")
		return faHandHoldingUsd;
	else if(val === "file")
		return faFileAlt;
	else if(val === "coin")
		return faCoins;
	
	return faCheckCircle;
}

  constructor() { }

  ngOnInit() {
  }

}
