import { Component } from '@angular/core';

@Component({
  selector: 'app-work-with-us',
  templateUrl: './work-with-us.component.html',
  styleUrls: ['./work-with-us.component.scss']
})
export class WorkWithUsComponent {
  sendMail() {
    const email = 'lingababu@ratnagroup.in';
    const subject = encodeURIComponent('Why We Should Hire You(Change subject)')
    const body = encodeURIComponent(
      `Hello Sir/Mam,\nPlease write minimum 500 words here:\n\n-----------------------------------------\nDon't forget to attach your latest resume`
    );

    window.location.href = `mailto:${email}?subject=${subject}&body=${body}`;
  }
}
