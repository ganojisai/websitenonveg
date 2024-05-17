import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class OrderdetailsService {

  constructor() { }

  meals= [
    {
        "id":"1",
        "strMeal": "Baked & tomatoes",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/1548772327.jpg",
        "idMeal": "500",
        "buy":"buy"
    },
    {
        "id":"2",
        "strMeal": "Cajun spiced fish tacos",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/uvuyxu1503067369.jpg",
        "idMeal": "250",
        "buy":"buy"
    },
    {
       "id":"3",
        "strMeal": "Escovitch Fish",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/1520084413.jpg",
        "idMeal": "299",
        "buy":"buy"
    },
    {

        "id":"4",
        "strMeal": "Fish fofos",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/a15wsa1614349126.jpg",
        "idMeal": "399",
        "buy":"buy"
    },
    {
        "id":"5",
        "strMeal": "Fish pie",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/ysxwuq1487323065.jpg",
        "idMeal": "240",
        "buy":"buy"
    },
    {
        "id":"6",
        "strMeal": "Fish Soup (Ukha)",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/7n8su21699013057.jpg",
        "idMeal": "360",
        "buy":"buy"
    },
    {
        "id":"7",
        "strMeal": "Fish Stew with Rouille",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/vptqpw1511798500.jpg",
        "idMeal": "270",
        "buy":"buy"
    },
    {
        "id":"8",
        "strMeal": "Garides Saganaki",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/wuvryu1468232995.jpg",
        "idMeal": "540",
        "buy":"buy"
    },
    {
        "id":"9",
        "strMeal": "Grilled Portuguese sardines",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/lpd4wy1614347943.jpg",
        "idMeal": "420",
        "buy":"buy"
    },
    {
        "id":"10",
        "strMeal": "Honey Teriyaki Salmon",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/xxyupu1468262513.jpg",
        "idMeal": "325",
        "buy":"buy"
    },
    {
        "id":"11",
        "strMeal": "Kedgeree",
        "strMealThumb": "https://www.themealdb.com/images/media/meals/utxqpt1511639216.jpg",
        "idMeal": "385",
        "buy":"buy"
    }
  ]

}
