import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { CounterComponent } from './counter/counter.component';
import { ValidationComponent } from './validation/validation.component';
import { CountryComponent } from './country/country.component';
import { FormsModule } from '@angular/forms';
import { FilterPipe } from './filter/filter.pipe';
import { ComboComponent } from './combo/combo.component';
import { CountryworkerComponent } from './countryworker/countryworker.component';
import { ColorComponent } from './color/color.component';
import { CountryOperations, abstractCountryOperations } from './models';
import { TestComponent } from './test/test.component';
import { ProductComponent } from './product/product.component';
import { PhotoComponent } from './photo/photo.component';
import { AddphotoComponent } from './addphoto/addphoto.component';
import {HttpClientModule} from '@angular/common/http';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    CounterComponent,
    ValidationComponent,
    CountryComponent,
    FilterPipe,
    ComboComponent,
    CountryworkerComponent,
    ColorComponent,
    TestComponent,
    ProductComponent,
    PhotoComponent,
    AddphotoComponent
  ],
  imports: [
    BrowserModule,FormsModule,HttpClientModule,
    AppRoutingModule
  ],
  providers: [{provide:abstractCountryOperations,useClass:CountryOperations}],
  bootstrap: [AppComponent]
})
export class AppModule { }
