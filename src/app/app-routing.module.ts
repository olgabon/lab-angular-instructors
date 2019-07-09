import { FormsModule } from '@angular/forms';
import { BrowserModule }  from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from "./home/home.component";
import { ProfileComponent } from "./profile/profile.component";
import { OfferComponent } from "./offer/offer.component";

const routes: Routes = [
  { path: '', component: HomeComponent},
  { path: 'profile/:id', component: ProfileComponent},
  { path: 'offer', component: OfferComponent}
];

@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes), FormsModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
