import { Component, OnInit } from '@angular/core';
import { featured } from '../featured/featured';
import { faHandHoldingUsd } from '@fortawesome/free-solid-svg-icons';
     
@Component({
  selector: 'app-featured',
  templateUrl: './featured.component.html',
  styleUrls: ['./featured.component.scss']
}) 
export class FeaturedComponent implements OnInit {
	public featured = featured;
	public faHandHoldingUsd = faHandHoldingUsd;
           
	customOptions: any = {
		loop: true,
		margin: 40, 
		responsiveClass: false,
		navText: ['<', '>'],
		dots: false,
		autoHeight: false,
		responsive: {
		  0: {
		   items: 2
		 },
		  480: {
		   items: 3
		 },
		  940: {
		   items: 5
		 }
		}, 
	   nav: true
	  }

  constructor() { 
	
  }
  
  ngOnInit() {

  }

}
