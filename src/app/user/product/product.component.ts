import { Component, OnInit } from '@angular/core';
import {BackendService} from './../../services/backend.service';
import { Observable } from 'rxjs';



@Component({
  selector: 'product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  
  toggle: boolean = true;
  savedChanges = false;
  error: boolean = false;
  errorMessage: String = "";
  dataLoading: boolean = false;
  private querySubscription;
  members: Observable<any>;
 


  profileUrl: String;
  //profileUrl: Observable<string | null>;
  myDocId;
  counter = 0;
  myDocData;

  constructor(private _backendservice: BackendService) { }

  ngOnInit(){
    this.getData();
    
  }

  getFilterData(filters) {
    this.dataLoading = true;
    this.querySubscription = this._backendservice.getFilterProducts('product', filters)
        .subscribe(members => {
            this.members = members;
            this.dataLoading=false;
        },
    
         (error) =>
  
         {
           this.error=true;
           this.errorMessage=error.message;
           this.dataLoading=false;
         },
         ()=>{this.error=false; this.dataLoading= false;});
  }

  getData() {
    this.dataLoading = true;
    this.querySubscription = this._backendservice.getProducts('product')
        .subscribe(members => {
            this.members = members;
            this.dataLoading=false;
        },
    
         (error) =>
  
         {
           this.error=true;
           this.errorMessage=error.message;
           this.dataLoading=false;
         },
         ()=>{this.error=false; this.dataLoading= false;});
  }
getPic(picId){
  this.profileUrl = "";
}

showDetails(item) {
  this.counter = 0;
  this.myDocData = item;
  this.getPic(item.path);
  // capture user interest event, user has looked into product details
  this.dataLoading = true;
  let data = item;
  
  this.querySubscription = this._backendservice.updateShoppingInterest('interests', data)
      .subscribe(members => {
          this.members = members;
          this.dataLoading=false;
      },
  
       (error) =>

       {
         this.error=true;
         this.errorMessage=error.message;
         this.dataLoading=false;
       },
       ()=>{this.error=false; this.dataLoading= false;});
      
      
}
countProd(filter) {
  if (filter == "add") {
      this.counter = this.counter + 1;
  } else {
      if (this.counter > 0) {
          this.counter = this.counter - 1;
      }
  }
}

addToCart(item, counter){
  this.dataLoading = true;
  let data = item;
  data.qty=counter;
  
   this.querySubscription = this._backendservice.updateShoppingCart('cart',data)
        .subscribe(members => {
          this.dataLoading = false;
          this.counter=0;
          this.savedChanges=true;
        },
    
         (error) =>
  
         {
           this.error=true;
           this.errorMessage=error.message;
           this.dataLoading=false;
         },
         ()=>{this.error=false; this.dataLoading= false;});
        }

}
