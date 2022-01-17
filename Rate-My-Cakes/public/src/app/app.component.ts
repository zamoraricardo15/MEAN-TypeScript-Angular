import { Component } from '@angular/core';
import { HttpService } from './http.service';

@Component({

  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  cake: any;
  cakes: any;
  newCake: any;
  newRating: any;
  x;
  avg;

  constructor(private _httpService: HttpService){

  }

  ngOnInit() {
    


    this.cakes = [];
    this.newCake = {baker:"", image:""};
    this.newRating = {rating:0, comment:""};
    this.getCakes();
  }


  getCakes(){
    this._httpService.getCakes().subscribe(data=>{
      this.cakes = data;


    })
  }


  submitCake(){
    console.log('submit cake called')


   this._httpService.addCake(this.newCake).subscribe(data => {
    console.log('data returned from httpservice addcake',data)
   })
       this.newCake = { baker: "", image: ""};
       this.getCakes();

   }

  postRating(id){

   this._httpService.postRating(id, this.newRating).subscribe(data => {
      
    this.getCakes();
    })    
  }

  cakeToShow(caketoshow){
    this.cake = caketoshow;
    var sum = 0;
    console.log(this.cake);
    for (var i =0; i < caketoshow.ratings.length; i++){

      sum += caketoshow.ratings[i].rating
    }
    this.avg = sum/caketoshow.ratings.length;


    
  }
}
