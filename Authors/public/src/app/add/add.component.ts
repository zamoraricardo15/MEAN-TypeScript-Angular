import { Component, OnInit } from '@angular/core';
import { HttpService } from '../http.service';
import { ActivatedRoute, Params, Router } from '@angular/router';
import { AuthorsComponent } from '../authors/authors.component';

@Component({
  selector: 'app-add',
  templateUrl: './add.component.html',
  styleUrls: ['./add.component.css']
})
export class AddComponent implements OnInit {
  title = "Add a new Author."
  newAuthor: any = {
    name: ""
  }
  errs: any = [];

  


  constructor(    
    private _httpService: HttpService,
 
    
    private _router: Router
  ) { }

  ngOnInit() {
    this.newAuthor = {name: ""}

    
  }
  addAuthorEvent(){

    console.log("Do you want to add an author?")

    let observable = this._httpService.addAuthor(this.newAuthor);
    observable.subscribe(data => {

      console.log("Continue", data)

      if(data['errors']){
        console.log("in errors")

        if (data['errors']['name']['message'])

        this.errs.push(data['errors']['name']['message'])

        console.log("Error adding new author:", this.errs)
      }
      else{

        console.log("Successfully got post data!", data)

        this.newAuthor = {name:""}
        this.goHome()
      }

    });
  }

  goHome() {

    this._router.navigate(['/']);
    
  }

}
