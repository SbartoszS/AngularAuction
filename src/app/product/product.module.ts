import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { RouterModule } from '@angular/router';
import { ProductComponent } from './product.component';

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FlexLayoutModule,
    RouterModule.forChild([{ path: '', component: ProductComponent }]),
  ],
})
export class ProductModule {}
