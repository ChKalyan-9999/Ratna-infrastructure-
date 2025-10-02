import { Component, Inject } from '@angular/core';
import { MAT_DIALOG_DATA, MatDialogRef } from '@angular/material/dialog';

@Component({
  selector: 'app-contact-details',
  templateUrl: './contact-details.component.html',
  styleUrls: ['./contact-details.component.scss']
})
export class ContactDetailsComponent {
  constructor(
    @Inject(MAT_DIALOG_DATA) public data: any,
    public dialogRef: MatDialogRef<ContactDetailsComponent>
  ) { }

  /** Returns WhatsApp link for the given number */
  getWhatsAppLink(phone: string): string {
    const numericPhone = phone.replace(/[^0-9]/g, '');
    return `https://wa.me/${numericPhone}`;
  }

  /** Returns tel: link for the given number */
  getCallLink(phone: string): string {
    const numericPhone = phone.replace(/[^0-9]/g, '');
    return `tel:${numericPhone}`;
  }
}
