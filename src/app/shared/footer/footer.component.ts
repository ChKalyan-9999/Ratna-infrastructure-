import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent {
  showLocation = false;

  @ViewChild('pdfDialog') pdfDialog!: TemplateRef<any>;

  constructor(private dialog: MatDialog) { }

  openPdf() {
    this.dialog.open(this.pdfDialog, {
      width: '45vw',
      maxHeight: '90vh',
      panelClass: 'custom-dialog-container'
    });
  }
}
