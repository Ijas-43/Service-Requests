import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PagesRoutingModule } from './pages-routing.module';
import { PagesComponent } from './pages.component';
import { ResidentialServiceComponent } from './residential-service/residential-service.component';
import { CommercialServiceComponent } from './commercial-service/commercial-service.component';
import { AutomotiveServiceComponent } from './automotive-service/automotive-service.component';
import { StoreDetailsComponent } from './store-details/store-details.component';
import { StoreListComponent } from './store-list/store-list.component';


@NgModule({
  declarations: [
    PagesComponent,
    ResidentialServiceComponent,
    CommercialServiceComponent,
    AutomotiveServiceComponent,
    StoreDetailsComponent,
    StoreListComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule
  ]
})
export class PagesModule { }
