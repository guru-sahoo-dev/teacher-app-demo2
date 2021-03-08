import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {
  public categories = [];
  public featuredProducts = [];
  public bestSellProducts = [];

  constructor() {}

  ngOnInit() {
    // this.categories = this.data.getCategories();
    // this.featuredProducts = this.data.getFeaturedProducts();
    // this.bestSellProducts = this.data.getBestSellProducts();
  }
}
