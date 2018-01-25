import { Component, OnInit, AfterViewChecked } from '@angular/core';
import { Http, RequestOptions, Headers } from "@angular/http";
import { NgForm } from "@angular/forms";
import { Router } from "@angular/router";
import { Observable } from "rxjs/Observable";

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.css']
})

//Metode collection baru di database
export class MainComponent implements OnInit {

  file: File;
  clothingList = [];
  jsonCart = [];

  constructor(private http: Http, private router: Router) { }

  ngOnInit() {

    this.http.get("http://localhost:3000/api/clothing", {})
      .subscribe(
      result => { },
      error => {
        console.log("init error")
      }
      )
    this.loadclothingList();

  }

  loadclothingList() {

    this.http.get("http://localhost:3000/api/clothing")
      .subscribe(
      result => {
        console.log("works");
        this.clothingList = result.json();
        console.log(this.clothingList);
      },
      error => {
        console.log("error");
      }
      );
  }

  AddProduct(obj) {

    this.http.post("http://localhost:3000/bootcamp4/cart/new", obj)
      .subscribe(
      result => {
        console.log("Add Product success");
        this.router.navigate(['/cart']);
      },
      error => {
        console.log("Adding Failed");
      }
      );

  }

  //
}

//***metode LocalStorage***
  // export class MainComponent implements OnInit {

  //   file: File;
  //   clothingList = [];
  //   jsonCart = [];

  //   constructor(private http: Http, private router: Router) { }

  //   ngOnInit() {

  //     this.http.get("http://localhost:3000/api/clothing", {})
  //       .subscribe(
  //       result => { },
  //       error => {
  //         console.log("init error")
  //       }
  //       )
  //     this.loadclothingList();

  //   }


  //   loadclothingList() {

  //     this.http.get("http://localhost:3000/api/clothing")
  //       .subscribe(
  //       result => {
  //         console.log("works");
  //         this.clothingList = result.json();
  //         console.log(this.clothingList);
  //       },
  //       error => {
  //         console.log("error");
  //       }
  //       );
  //   }

  //   AddProduct(obj) {
  //     var jsonCart = [];
  //     localStorage.setItem('jsonCart', JSON.stringify(obj))
  //     console.log(localStorage.getItem('jsonCart'));
  //     this.router.navigate(['/cart']);


  //   }