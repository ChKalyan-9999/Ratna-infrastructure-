import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HomeComponent } from './pages/home/home.component';
import { AboutComponent } from './pages/about/about.component';
import { ProjectsComponent } from './pages/projects/projects.component';
import { PhotosComponent } from './pages/photos/photos.component';
import { ContactComponent } from './pages/contact/contact.component';
import { WhyUsComponent } from './pages/why-us/why-us.component';
import { Info1Component } from './pages/info/info1/info1.component';
import { Info2Component } from './pages/info/info2/info2.component';

// Angular Material modules
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatButtonModule } from '@angular/material/button';
import { MatMenuModule } from '@angular/material/menu';
import { LayoutModule } from '@angular/cdk/layout';
import { MatCardModule } from '@angular/material/card';
import { ClientDialogComponent } from './pages/info/info1/client-dialog/client-dialog.component';
import { MatDialogModule } from '@angular/material/dialog';
import { FormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { FilterPipe } from './pipes/filter.pipe';
import { FooterComponent } from './shared/footer/footer.component';
import { WorkWithUsComponent } from './pages/work-with-us/work-with-us.component';
import { WorkGalleryComponent } from './pages/work-gallery/work-gallery.component';
import { PdfDialogComponent } from './pages/home/pdf-dialog/pdf-dialog.component';
import { PromotersComponent } from './pages/group/promoters/promoters.component';
import { InternationalComponent } from './pages/group/international/international.component';
import { ContactDetailsComponent } from './pages/contact/contact-details/contact-details.component';
import { VermafillingComponent } from './pages/group/vermafilling/vermafilling.component';
import { RatnafillingComponent } from './pages/group/ratnafilling/ratnafilling.component';
import { SafeUrlPipe } from './pipes/safe-url.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutComponent,
    ProjectsComponent,
    PhotosComponent,
    ContactComponent,
    WhyUsComponent,
    Info1Component,
    Info2Component,
    ClientDialogComponent,
    FilterPipe,
    FooterComponent,
    WorkWithUsComponent,
    WorkGalleryComponent,
    PdfDialogComponent,
    PromotersComponent,
    InternationalComponent,
    ContactDetailsComponent,
    VermafillingComponent,
    RatnafillingComponent,
    SafeUrlPipe,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatButtonModule,
    MatMenuModule,
    LayoutModule,
    MatCardModule,
    MatDialogModule,
    FormsModule,
    MatFormFieldModule,
    MatInputModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
