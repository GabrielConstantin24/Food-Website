import { Injectable } from '@angular/core';
import {food} from '../../shared/models/food';
import { Tag } from '../../shared/models/Tag';

@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAllTags():Tag[]{
    return [
      {name: "All", count: 10 },
      {name: "FastFood", count: 5 },
      {name: "Pizza", count: 3 },
      {name: "Lunch", count: 5},
      {name: "SlowFood", count: 4 },
      {name: "Hamburger", count: 1 },
      {name: "Fry", count: 2 },
      {name: "Soup", count: 3 },
    ];
  }

  getFoodById(id: number): food {
    return this.getAll().find(food => food.id == id)!;
  }

  getAllFoodsBySearchTerm(searchTerm: string): food[] {
    return this.getAll().filter(food => food.name.toLowerCase().includes(searchTerm.toLowerCase()));
  }

  getAllFoodByTag(tag: string): food[] {

    return tag == "All" ?
    this.getAll() :
    this.getAll().filter(food => food.tags?.includes(tag));
  }

  getAll(): food[] {
    return [
      {
        id: 1,
        name: 'Pizza Pepperoni',
        cookTime: '10-20',
        price: 10,
        favorite: false,
        origins: ['Italy'],
        imageUrl: '/assets/images/foods/food-1.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 2,
        name: 'Meatball',
        price: 20,
        cookTime: '20-30',
        favorite: true,
        origins: ['Persia', 'Middle East', 'China'],
        imageUrl: '/assets/images/foods/food-2.jpg',
        tags: ['SlowFood', 'Lunch'],
      },
      {
        id: 3,
        name: 'Hamburger',
        price: 5,
        cookTime: '10-15',
        favorite: false,
        origins: ['Germany', 'US'],
        imageUrl: '/assets/images/foods/food-3.jpg',
        tags: ['FastFood', 'Hamburger'],
      },
      {
        id: 4,
        name: 'Fried Potatoes',
        price: 2,
        cookTime: '15-20',
        favorite: true,
        origins: ['Belgium', 'France'],
        imageUrl: '/assets/images/foods/food-4.jpg',
        tags: ['FastFood', 'Fry'],
      },
      {
        id: 5,
        name: 'Chicken Soup',
        price: 11,
        cookTime: '40-50',
        favorite: false,
        origins: ['India', 'Asia'],
        imageUrl: '/assets/images/foods/food-5.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 6,
        name: 'Vegetables Pizza',
        price: 9,
        cookTime: '20-25',
        favorite: false,
        origins: ['Italy'],
        imageUrl: '/assets/images/foods/food-6.jpg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 7,
        name: 'Capricciosa Pizza',
        price: 9,
        cookTime: '15-20',
        favorite: false,
        origins: ['Italy'],
        imageUrl: '/assets/images/foods/food-7.jpeg',
        tags: ['FastFood', 'Pizza', 'Lunch'],
      },
      {
        id: 8,
        name: 'Tripe Soup',
        price: 13,
        cookTime: '40-50',
        favorite: false,
        origins: ['Turcia', 'Romania'],
        imageUrl: '/assets/images/foods/food-8.jpg',
        tags: ['SlowFood', 'Soup'],
      },
      {
        id: 9,
        name: 'Viennese Schnitzel',
        price: 19,
        cookTime: '15-20',
        favorite: true,
        origins: ['Austria', 'Italy', 'Romania'],
        imageUrl: '/assets/images/foods/food-9.jpg',
        tags: ['Fry', 'Lunch'],
      },
      {
        id: 10,
        name: 'Meatball Soup',
        price: 12,
        cookTime: '20-25',
        favorite: false,
        origins: ['Turcia', 'Romania'],
        imageUrl: '/assets/images/foods/food-10.webp',
        tags: ['SlowFood', 'Soup'],
      },
    ];
  }
}
