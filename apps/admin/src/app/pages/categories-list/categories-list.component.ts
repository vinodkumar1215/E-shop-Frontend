import { Component, OnInit } from '@angular/core';
import { CategoriesService, Category } from '@bluebits/products';

@Component({
  selector: 'admin-categories-list',
  templateUrl: './categories-list.component.html',
  styleUrls: ['./categories-list.component.scss']
})
export class CategoriesListComponent  {
  categories : Category[] = [];
  constructor(private cs: CategoriesService) { }

  ngOnInit(): void {
    this.cs.getCategories().subscribe(response => {
      this.categories = response;
    });
  }

}
