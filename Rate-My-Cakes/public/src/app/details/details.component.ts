import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',

  templateUrl: './details.component.html',

  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {


  @Input() cakeToShow: any;
  
  @Input() avgRating: any;

  constructor() { }

  ngOnInit() {
  }

}
