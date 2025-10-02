import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WhyUsComponent } from './pages/why-us/why-us.component';
import { Info1Component } from './pages/info/info1/info1.component';
import { Info2Component } from './pages/info/info2/info2.component';
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us.component';
import { WorkGalleryComponent } from './pages/work-gallery/work-gallery.component';
import { InternationalComponent } from './pages/group/international/international.component';
import { PromotersComponent } from './pages/group/promoters/promoters.component';
import { VermafillingComponent } from './pages/group/vermafilling/vermafilling.component';
import { RatnafillingComponent } from './pages/group/ratnafilling/ratnafilling.component';

const routes: Routes = [
  { path: '', component: HomeComponent }, // Default home
  { path: 'about', component: AboutComponent },
  { path: 'projects', component: ProjectsComponent },
  { path: 'photos', component: PhotosComponent },
  { path: 'contact', component: ContactComponent },
  { path: 'why-us', component: WhyUsComponent },
  { path: 'info/info1', component: Info1Component },
  { path: 'info/info2', component: Info2Component },
  { path: 'group/international', component: InternationalComponent },
  { path: 'group/vermafilling', component: VermafillingComponent },
  { path: 'group/ratnafilling', component: RatnafillingComponent },
  { path: 'group/promoters', component: PromotersComponent },
  { path: 'work', component: WorkWithUsComponent },
  { path: 'gallery', component: WorkGalleryComponent },
  { path: '**', redirectTo: '' } // Wildcard goes to Home
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
