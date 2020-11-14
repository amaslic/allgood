import { Component, OnInit } from '@angular/core';
import { categories } from './categories';
import { user } from './user';
import {Observable} from 'rxjs';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { faHandHoldingUsd, faMobileAlt, faHeart, faSearch, faUser, faEnvelope, faBell } from '@fortawesome/free-solid-svg-icons';
     
const _locations = ['A location', 'B location', 'C location', 'AA Location'];
const _categories = ['A categorie', 'B categorie', 'C categorie', 'AA categorie'];
const _charity = ['A charity', 'B charity', 'C charity', 'AA charity'];
  
@Component({ 
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})     
export class HeaderComponent implements OnInit {  
   
  public cat = categories;   
  public loc: any;
  public cats: any; 
  public char: any; 
  public faHandHoldingUsd = faHandHoldingUsd; 
  public faMobileAlt = faMobileAlt;
  public faHeart = faHeart;
  public faSearch = faSearch;  
  public faUser = faUser;  
  public user = user;
  public faEnvelope = faEnvelope;
   public faBell = faBell;
   public unread = 0;  
   
	public searchLoc = (text$: Observable<string>) =>
	text$.pipe(  
	  debounceTime(200),
	  distinctUntilChanged(),
	  map(term => term.length < 2 ? []
		: _locations.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
	)
     
	public searchCat = (text$: Observable<string>) =>
	text$.pipe(
	  debounceTime(200),
	  distinctUntilChanged(),
	  map(term => term.length < 2 ? []
		: _categories.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
	)

	public searchChar = (text$: Observable<string>) =>
	text$.pipe(
	  debounceTime(200),
	  distinctUntilChanged(),
	  map(term => term.length < 2 ? []
		: _charity.filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
	)

	public setIcon = (val) =>{
	
		if(val ===  "hand")
			return faHandHoldingUsd;
		else if(val === "mobile")
			return faMobileAlt;
		
		return faHeart;
	}

	public countUnread = () => {
		this.user.msg.forEach(val => { 
			if(val.status === "unread") 
				this.unread++;
		})
	}

  constructor() { }

  ngOnInit() {
	this.countUnread();
		
}
  
}
