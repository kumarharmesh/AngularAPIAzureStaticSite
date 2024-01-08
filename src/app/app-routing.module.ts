import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { CounterComponent } from './counter/counter.component';
import { ValidationComponent } from './validation/validation.component';
import { CountryComponent } from './country/country.component';
import { ComboComponent } from './combo/combo.component';
import { CountryworkerComponent } from './countryworker/countryworker.component';
import { TestComponent } from './test/test.component';
import { PhotoComponent } from './photo/photo.component';
import { AddphotoComponent } from './addphoto/addphoto.component';

const routes: Routes = [
{path:'valid',component:ValidationComponent},
{path:'counter',component:CounterComponent},
{path:'combo',component:ComboComponent},
{path:'country',component:CountryComponent},
{path:'styl',component:TestComponent},
{path:'photo',component:PhotoComponent},
{path:'addphoto',component:AddphotoComponent},
{path:'worker',component:CountryworkerComponent}]
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
