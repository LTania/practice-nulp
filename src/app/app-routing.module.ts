import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import {MenuComponent} from './menu/menu.component';
import {BookingComponent} from './booking/booking.component';
import {EventsComponent} from './events/events.component';
import {GalleryComponent} from './gallery/gallery.component';
import {ContactsComponent} from './contacts/contacts.component';
import {AdminPageComponent} from './admin-page/admin-page.component';


const routes: Routes = [
  {path: '', component: MainPageComponent},
  {path: 'menu', component: MenuComponent},
  {path: 'booking', component: BookingComponent},
  {path: 'events', component: EventsComponent},
  {path: 'gallery', component: GalleryComponent},
  {path: 'contacts', component: ContactsComponent},
  {path: 'main-page', component: MainPageComponent},
  {path: 'admin', component: AdminPageComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
