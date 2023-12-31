import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit{
  searchTerm = '';
  constructor(activatedRoute: ActivatedRoute, private router: Router){
    activatedRoute.params.subscribe((params)=>{
      // Check if the 'searchTerm' parameter exists in the URL
      if(params.searchTerm)
        this.searchTerm = params.searchTerm;
   });
  }
   ngOnInit(): void {
}

  search(term:string):void{
    if(term)
    // If 'term' is not empty, navigate to the search route with the provided search term
    this.router.navigateByUrl('/search/'+term);
  }
}

