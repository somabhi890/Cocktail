import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeRoutingModule } from './home-routing.module';
import { HomeComponent } from './home/home.component';
import { CoctailsListComponent } from './coctails-list/coctails-list.component';
import { SharedModule } from '../shared/shared.module';
import { MatButtonModule, MatCardModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatToolbarModule } from '@angular/material';
import { FormControl, FormsModule } from '@angular/forms';


@NgModule({
  declarations: [HomeComponent, CoctailsListComponent],
  imports: [
    CommonModule,
    HomeRoutingModule,
    SharedModule,
    MatToolbarModule,
    MatSelectModule,
    MatCardModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatInputModule,
    MatButtonModule
  ]
})
export class HomeModule { }
