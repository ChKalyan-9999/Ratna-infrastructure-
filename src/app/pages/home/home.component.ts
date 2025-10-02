import { Component } from '@angular/core';
import { PdfDialogComponent } from './pdf-dialog/pdf-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent {

  slides = [
    {
      image: 'assets/homeImg/orient.png',
      caption: 'Orient Electrics – World-Class Design with 100% client satisfaction'
    },
    {
      image: 'assets/homeImg/HCCB.png',
      caption: 'Hindustan Coca-Cola Beverages – World-Class Beverage Plant Construction'
    },
    {
      image: 'assets/homeImg/astralSiteProgress2.png',
      caption: 'Astral Site – Engineering Excellence in Every Detail'
    },
    // { 
    //   image: 'assets/homeImg/ATCtires.png', 
    //   caption: 'ATC Tires – Powering Mobility with Precision Infrastructure' 
    // },
    {
      image: 'assets/homeImg/pidilite.png',
      caption: 'Pidilite Project – Building Trusted Industrial Spaces'
    },
    {
      image: 'assets/homeImg/staffAminities.png',
      caption: 'Employee Amenities – Creating Spaces that Inspire Productivity'
    },
    {
      image: 'assets/homeImg/saftyMandatory.png',
      caption: 'Safety First – Committed to Zero-Accident Work Culture'
    },
    {
      image: 'assets/homeImg/good practice.png',
      caption: 'Good Construction Practices – Delivering Quality Beyond Expectations'
    }
  ];


  currentIndex = 0;
  intervalId: any;

  ngOnInit() {
    this.startAutoSlide();
  }

  startAutoSlide() {
    this.intervalId = setInterval(() => {
      this.nextSlide();
    }, 3000);
  }

  nextSlide() {
    this.currentIndex = (this.currentIndex + 1) % this.slides.length;
  }

  prevSlide() {
    this.currentIndex = (this.currentIndex - 1 + this.slides.length) % this.slides.length;
  }
  goToSlide(index: number) {
    this.currentIndex = index;
  }


  states = [
    { name: 'Andhra Pradesh GST Certificate', pdf1: 'assets/pdfHome/Andhra Pradesh  GST   Certificate.pdf' },
    { name: 'Gujurat GST Certificate', pdf1: 'assets/pdfHome/GUJARAT GST Certificate.pdf' },
    { name: 'Karnataka GST Certificate', pdf1: 'assets/pdfHome/KARNATAKA  GST Certificate' },
    { name: 'Maharashtra GST Certificate', pdf1: 'assets/pdfHome/Maharashtra GST Certificate.pdf' },
    { name: 'Odisha GST Certificate', pdf1: 'assets/pdfHome/ODISHA GST Certificate.pdf' },
    { name: 'Ratna Filling GST Certificate', pdf1: 'assets/pdfHome/RATNA FILLING GST.pdf' },
    { name: 'Ratna Promoters And Developers GST Certificate', pdf1: 'assets/pdfHome/Ratna Promoters And Developers GST Certificate.pdf' },
    { name: 'Tamilnadu GST Certificate', pdf1: 'assets/pdfHome/Tamilnadu GST Certificate.pdf' },
    { name: 'Telengana GST Certificate', pdf1: 'assets/pdfHome/TELANGANA GST Certificate.pdf' },
    { name: 'Varma filling station  GST  Certification', pdf1: 'assets/pdfHome/Varma filling station  GST  Certification.pdf' },
    { name: 'West Bengal  GST Certificate', pdf1: 'assets/pdfHome/West Bengal  GST Certificate.pdf' },
  ];

  constructor(private dialog: MatDialog) { }
  openPdfDialog(pdfUrl: string): void {
    this.dialog.open(PdfDialogComponent, {
      width: '70vw',
      height: '80vh',
      data: { pdfUrl }
    });
  }

  // downloadPdf(pdfPath: string) {
  //   const link = document.createElement('a');
  //   link.href = pdfPath;
  //   link.download = pdfPath.split('/').pop() || 'document.pdf';
  //   link.click();
  // }
}
