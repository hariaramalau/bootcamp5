import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-shopping-cart',
  templateUrl: './shopping-cart.component.html',
  styleUrls: ['./shopping-cart.component.css']
})

//Metode collection baru di database
export class ShoppingCartComponent implements OnInit {

  file: File;
  cartList = [];
  jsonCart = [];

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {

    this.http.get("http://localhost:3000/api/cart", {})
      .subscribe(
      result => { },
      error => {
        console.log("init error")
      }
      )
    this.loadcartList();
  }

  loadcartList() {

    this.http.get("http://localhost:3000/api/cart")
      .subscribe(
      result => {
        console.log("works");
        this.cartList = result.json();
        console.log(this.cartList);
      },
      error => {
        console.log("error");
      }
      );
  }
}



//***metode LocalStorage ***
// export class ShoppingCartComponent implements OnInit {

//   cartList = [];

//   constructor(private http: Http, private router: Router) { }

//   ngOnInit() {
//     var cartList = JSON.parse(localStorage.getItem('jsonCart'));
//     console.log(cartList);
//   }

//   loadcartList() {

//     var cartJ = localStorage.getItem('jsonCart');
//     var cartT = JSON.parse(cartJ)
//     console.log(cartT);
//   }


// }