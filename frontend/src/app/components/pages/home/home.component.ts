import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FoodService } from 'src/app/services/food.service';
import { Food } from 'src/app/shared/models/Food';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})

export class HomeComponent implements OnInit{

  foods: Food[] = [];

  constructor(private foodService: FoodService, activatedRoute: ActivatedRoute){
    // Subscribe to the ActivatedRoute params to get the search term from the URL
    activatedRoute.params.subscribe((params)=>{
       // Check if the 'searchTerm' parameter exists in the URL
      if(params.searchTerm)
      // If 'searchTerm' is present, get all foods matching the search term
        this.foods = this.foodService.getAllFoodsBySearchTerm(params.searchTerm);
      else if (params.tag)
      // If 'tag' is present, get all foods matching the tag term
        this.foods = this.foodService.getAllFoodsByTag(params.tag);
      else
      // If 'searchTerm' is not present, get all foods from the FoodService
        this.foods = foodService.getAll();
    })

  }


  /*In Angular, the params object is part of the ActivatedRoute and
  represents the route parameters extracted from the URL. When a user
  navigates to a route that contains route parameters,
  such as /food-list/:searchTerm, Angular will extract the values
  of those parameters from the URL and make them accessible through
  the params property of the ActivatedRoute.*/

  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }
}
