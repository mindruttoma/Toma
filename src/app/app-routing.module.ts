import { NgModule } from '@angular/core';
import {HeaderComponent} from './shared/header/header.component';
import {FooterComponent} from './shared/footer/footer.component';
import {AboutusComponent} from './shared/aboutus/aboutus.component';
import { CommonModule } from '@angular/common';
import { RouterModule ,Routes} from '@angular/router';
import {SettingsComponent} from './settings/settings.component';
import { AdmintabComponent } from './admin/admintab/admintab.component';
import { ProductComponent } from './user/product/product.component';



const routes: Routes = [
  {path: '',redirectTo: '/aboutus',pathMatch:'full'},
  {path:'aboutus',component:AboutusComponent},
  {path: 'admin', component :AdmintabComponent },
  {path: 'product', component :ProductComponent },
  {path:'settings',component:SettingsComponent},
  {path: '**',redirectTo:'/aboutus',pathMatch:'full'},
]

@NgModule({
  imports: [
  CommonModule,  
  RouterModule.forRoot(routes)
],
  exports: [RouterModule],
  declarations: []
})
export class AppRoutingModule { }
