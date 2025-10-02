import { Component, TemplateRef, ViewChild } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ContactDetailsComponent } from './contact-details/contact-details.component';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.scss']
})
export class ContactComponent {
  constructor(private dialog: MatDialog) { }

  locations = [
    {
      name: 'Head Office - Andhra Pradesh',
      data: {
        company: 'RATNA INFRASTRUCTURES',
        partners: [
          {
            name: 'B. Prasada Raju',
            phone: '+91 9849343707',
            email: 'prasadaraju@ratnagroup.in'
          },
          {
            name: 'Ch. Kalyan Raju',
            phone: '+91 9555699999',
            email: 'kalyanraju@ratnagroup.in'
          },
          {
            name: 'M. Ravi Raju',
            phone: '+91 9949774428',
            email: 'raviraju@ratnagroup.in'
          },
          {
            name: 'Vuyyuru Office',
            phone: '+91 8676237444',
            email: '' // if there is no email, keep empty or null
          },
        ],
        address: `H.O. # 1-328, Prasad’s Plaza, 1st Floor, Beside ICICI Bank, Bundar Road, 
                Vuyyuru – 521 165, Krishna Dt, Andhra Pradesh.`
      }
    },
    {
      name: 'Regional Office - Visakhapatnam',
      data: {
        company: 'RATNA INFRASTRUCTURES',
        partners: [
          {
            name: 'B. Prasada Raju',
            phone: '+91 9849343707',
            email: 'prasadaraju@ratnagroup.in'
          },
          // {
          //   name: 'Ch. Kaylan Raju',
          //   phone: '+91 9555699999',
          //   email: 'kalyanraju@ratnagroup.in'
          // },
          {
            name: 'M. Ravi Raju',
            phone: '+91 9949774428',
            email: 'raviraju@ratnagroup.in'
          },
        ],
        address: `D.No. 4-666, Survey No. 358-19, 359 & 359A, Nagavaram(V), Munagapaka(Md), Atchuthapuram to parawada main road - 531003`
      }
    },
    {
      name: 'Regional Office - Telengana', data: {
        company: 'RATNA INFRASTRUCTURES',
        partners: [
          {
            name: 'B. Prasada Raju',
            phone: '+91 9849343707',
            email: 'prasadaraju@ratnagroup.in'
          },
          {
            name: 'Ch. Kalyan Raju',
            phone: '+91 9555699999',
            email: 'kalyanraju@ratnagroup.in'
          },
        ],
        address: ` Survey no: 75, GOLDEN ENCLAVE,Bagh Mankal Village, Maheswaram mandal, Tukkuguda Municipality,
        Ranga Reddy Dist., Pincode: 501359 (NOTE*: 15min drive from Rajiv Gandi International Airport)`
      }
    },
    // {
    //   name: 'Gujurat Office', data: {
    //     company: 'RATNA INFRASTRUCTURES',
    //     partners: [
    //       {
    //         name: 'B. Prasada Raju',
    //         phone: '+91 9849343707',
    //         email: 'prasadaraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'Ch. Kaylan Raju',
    //         phone: '+91 9555699999',
    //         email: 'kalyanraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'M. Ravi Raju',
    //         phone: '+91 9949774428',
    //         email: 'raviraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'Vuyyuru Office',
    //         phone: '+91 8676237444',
    //         email: '' // if there is no email, keep empty or null
    //       },
    //     ],
    //     address: `H.O. # 1-328, Prasad’s Plaza, 1st Floor, Beside ICICI Bank, Bundar Road, 
    //             Vuyyuru – 521 165, Krishna Dt, Andhra Pradesh.`
    //   }
    // },
    // {
    //   name: 'Maharastra Office', data: {
    //     company: 'RATNA INFRASTRUCTURES',
    //     partners: [
    //       {
    //         name: 'B. Prasada Raju',
    //         phone: '+91 9849343707',
    //         email: 'prasadaraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'Ch. Kaylan Raju',
    //         phone: '+91 9555699999',
    //         email: 'kalyanraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'M. Ravi Raju',
    //         phone: '+91 9949774428',
    //         email: 'raviraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'Vuyyuru Office',
    //         phone: '+91 8676237444',
    //         email: '' // if there is no email, keep empty or null
    //       },
    //     ],
    //     address: `H.O. # 1-328, Prasad’s Plaza, 1st Floor, Beside ICICI Bank, Bundar Road, 
    //             Vuyyuru – 521 165, Krishna Dt, Andhra Pradesh.`
    //   }
    // },
    // {
    //   name: 'Karnataka Office', data: {
    //     company: 'RATNA INFRASTRUCTURES',
    //     partners: [
    //       {
    //         name: 'B. Prasada Raju',
    //         phone: '+91 9849343707',
    //         email: 'prasadaraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'Ch. Kaylan Raju',
    //         phone: '+91 9555699999',
    //         email: 'kalyanraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'M. Ravi Raju',
    //         phone: '+91 9949774428',
    //         email: 'raviraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'Vuyyuru Office',
    //         phone: '+91 8676237444',
    //         email: '' // if there is no email, keep empty or null
    //       },
    //     ],
    //     address: `H.O. # 1-328, Prasad’s Plaza, 1st Floor, Beside ICICI Bank, Bundar Road, 
    //             Vuyyuru – 521 165, Krishna Dt, Andhra Pradesh.`
    //   }
    // },
    {
      name: 'Regional Office - Orissa', data: {
        company: 'RATNA INFRASTRUCTURES',
        partners: [
          {
            name: 'B. Prasada Raju',
            phone: '+91 9849343707',
            email: 'prasadaraju@ratnagroup.in'
          },
          // {
          //   name: 'Ch. Kaylan Raju',
          //   phone: '+91 9555699999',
          //   email: 'kalyanraju@ratnagroup.in'
          // },
          // {
          //   name: 'M. Ravi Raju',
          //   phone: '+91 9949774428',
          //   email: 'raviraju@ratnagroup.in'
          // },
          // {
          //   name: 'Vuyyuru Office',
          //   phone: '+91 8676237444',
          //   email: '' // if there is no email, keep empty or null
          // },
        ],
        address: ` The Trust Town 
M/s. Ranta Infrastructures
Plot -131, The Trust town near NISER REASEARCH INSTITUTE 
Metro 100 acres , Jatni road, Khurda
Pin-752050`
      }
    },
    // {
    //   name: 'West Bangal Office', data: {
    //     company: 'RATNA INFRASTRUCTURES',
    //     partners: [
    //       {
    //         name: 'B. Prasada Raju',
    //         phone: '+91 9849343707',
    //         email: 'prasadaraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'Ch. Kaylan Raju',
    //         phone: '+91 9555699999',
    //         email: 'kalyanraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'M. Ravi Raju',
    //         phone: '+91 9949774428',
    //         email: 'raviraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'Vuyyuru Office',
    //         phone: '+91 8676237444',
    //         email: '' // if there is no email, keep empty or null
    //       },
    //     ],
    //     address: `H.O. # 1-328, Prasad’s Plaza, 1st Floor, Beside ICICI Bank, Bundar Road, 
    //             Vuyyuru – 521 165, Krishna Dt, Andhra Pradesh.`
    //   }
    // },
    // {
    //   name: 'Chennai Office', data: {
    //     company: 'RATNA INFRASTRUCTURES',
    //     partners: [
    //       {
    //         name: 'B. Prasada Raju',
    //         phone: '+91 9849343707',
    //         email: 'prasadaraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'Ch. Kaylan Raju',
    //         phone: '+91 9555699999',
    //         email: 'kalyanraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'M. Ravi Raju',
    //         phone: '+91 9949774428',
    //         email: 'raviraju@ratnagroup.in'
    //       },
    //       {
    //         name: 'Vuyyuru Office',
    //         phone: '+91 8676237444',
    //         email: '' // if there is no email, keep empty or null
    //       },
    //     ],
    //     address: `H.O. # 1-328, Prasad’s Plaza, 1st Floor, Beside ICICI Bank, Bundar Road, 
    //             Vuyyuru – 521 165, Krishna Dt, Andhra Pradesh.`
    //   }
    // },
  ];


  openContactDetails(location: any) {
    this.dialog.open(ContactDetailsComponent, {
      width: '500px',
      data: location
    });
  }
}
