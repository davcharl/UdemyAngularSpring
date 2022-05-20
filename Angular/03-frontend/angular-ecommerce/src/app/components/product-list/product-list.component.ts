import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/services/product.service';
import { Product } from 'src/app/common/product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list-grid.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[];
  currentCategoryId: number;
  currentCategoryName: string;
  searchMode: boolean;

  constructor(private productService: ProductService,
              private route: ActivatedRoute) {
                this.products = [];
                this.currentCategoryId = 0;
                this.currentCategoryName = "";
                this.searchMode = false;
              }

  ngOnInit(): void {
    this.route.paramMap.subscribe(
      () => {this.listProducts();} );
  }
  listProducts(){
    this.searchMode = this.route.snapshot.paramMap.has('keyword');
    if(this.searchMode){
      this.handleSearchProducts();
    }
    else {
      this.handleListProducts();
    }
  }


  handleSearchProducts(){
    // Get the value of the keyword
    const theKeyword :string|null = this.route.snapshot.paramMap.get('keyword');
    // Search using the keyword
    this.productService.searchProduct(theKeyword!).subscribe(
      data => {this.products = data;}
    );
  }

  handleListProducts(){
    // Check if the "id" param is available
    const hasCategoryId: boolean = (this.route.snapshot.paramMap.has('id') ) ;

    if (hasCategoryId){

      let valueType: String|null|undefined = this.route.snapshot.paramMap.get('id');
      if (typeof(valueType) != (null || undefined)){
        // get the "id" param string. convert string to a number using the "+" symbol
        this.currentCategoryId = +(this.route.snapshot.paramMap.get('id')!);
        // get "name" param string
        this.currentCategoryName = (this.route.snapshot.paramMap.get('name')!);
      } else{
        // if a null or undefined type is return, assign 1 to currentCategoryId
        this.currentCategoryId = 1;
      }

    } else {
      // no category available then default to 1
      this.currentCategoryId = 1;
      this.currentCategoryName = 'Books';
    }

    // now get the products for the given category id
    this.productService.getProductList(this.currentCategoryId).subscribe(
      data => {
        this.products = data;
      }
    );



  }


}
