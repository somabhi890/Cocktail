import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CommonService } from './services/common.service';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';



@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FontAwesomeModule,
  ],
  providers:[CommonService],
  exports:[FontAwesomeModule]
})
export class SharedModule { }
