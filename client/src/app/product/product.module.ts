import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductSuggestionComponent } from './product-suggestion/product-suggestion.component';

@NgModule({
  declarations: [
    ProductComponent,
    ProductDetailComponent,
    ProductSuggestionComponent,
  ],
  imports: [
    CommonModule,
    FlexLayoutModule,
    MatButtonModule,
    MatGridListModule,
    RouterModule.forChild([{ path: '', component: ProductComponent }]),
  ],
})
export class ProductModule {}
