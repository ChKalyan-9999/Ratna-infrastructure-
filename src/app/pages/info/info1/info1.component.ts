import { Component, ElementRef, ViewChild } from '@angular/core';
import { ClientDialogComponent } from './client-dialog/client-dialog.component';
import { MatDialog } from '@angular/material/dialog';

@Component({
  selector: 'app-info1',
  templateUrl: './info1.component.html',
  styleUrls: ['./info1.component.scss']
})
export class Info1Component {
  @ViewChild('mediaGrid') mediaGrid!: ElementRef;
  searchText: string = '';

  ngAfterViewInit() {
    // Trigger animation AFTER Angular finishes rendering
    setTimeout(() => {
      this.mediaGrid.nativeElement.classList.add('animate');
    }, 50);
  }

  clients = [
    {
      name: 'Hindustan Coca-Cola Beverages', image: 'assets/clientImages/HCCB.jpg',
      photos: [
        // 'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        // 'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        'assets/clientCertImag/HCCB/HCCB.png',
      ]
    },
    {
      name: 'United Breweries', image: 'assets/clientImages/UB.png',
      photos: [
        // 'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        // 'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Orient Electric', image: 'assets/clientImages/orient.png',
      photos: [
        // 'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        // 'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        'assets/clientCertImag/orient/orient.png',
      ]
    },
    {
      name: 'Refra Technik', image: 'assets/clientImages/refra.png',
      photos: [
        '/assets/Gallery/refra1.png',
        '/assets/Gallery/refra.png',
        '/assets/Gallery/refra3.png',
        '/assets/Gallery/refra4.png',
        '/assets/Gallery/refra5.png',
      ],
      videos: [
        { type: 'youtube', id: 'b8gzm5JZ3Es' },
      ],
      certificates: [
        'assets/clientCertImag/refra/refra.png',
      ]
    },
    {
      name: 'Vesuvius', image: 'assets/clientImages/vesuvius.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Yokohama', image: 'assets/clientImages/yokohama.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Pidilite', image: 'assets/clientImages/Pidilite.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Delvkot', image: 'assets/clientImages/Delvkot.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Cygni', image: 'assets/clientImages/Cygni.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Sri Sarvaraya Sugars', image: 'assets/clientImages/sri.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'hfcl', image: 'assets/clientImages/hfcl.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'assets/clientVid/HFCL/HFCL.mp4',
      ],
      certificates: [
        'assets/clientCertImag/HFCL/HFCL.png',
      ]
    },
    {
      name: 'Hindustan Unilever', image: 'assets/clientImages/Hindustan Unilever.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Britannia', image: 'assets/clientImages/Britannia.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Astral Pipes', image: 'assets/clientImages/AstralPipes.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'SMS Group', image: 'assets/clientImages/smsGroup.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Carlsberg', image: 'assets/clientImages/Carlsberg.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'CPF', image: 'assets/clientImages/CPF.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        'assets/clientCertImag/CPF/CPF.png',
        'assets/clientCertImag/CPF/CPF1.png',
      ]
    },
    {
      name: 'Indo NISSIN Foods', image: 'assets/clientImages/NISSIN.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    { name: 'IRCTC', image: 'assets/clientImages/IRCTC.png' },
    {
      name: 'SAB Miller', image: 'assets/clientImages/SAB.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'ORICLEAN', image: 'assets/clientImages/ORICLEAN.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Bambino', image: 'assets/clientImages/Bambino.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Ashok Layland', image: 'assets/clientImages/Ashok Layland.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Wheels India Limited', image: 'assets/clientImages/WIL.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Aqua Matrix', image: 'assets/clientImages/Aqua Matrix.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Parle Agro', image: 'assets/clientImages/Parle Agro.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'NCC Crowns', image: 'assets/clientImages/NCC Crowns.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Hindustan Foods', image: 'assets/clientImages/Hindustan Foods.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'United Spirits', image: 'assets/clientImages/United Spirits.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'HiL', image: 'assets/clientImages/HiL.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'VIJAY AQUA', image: 'assets/clientImages/VIJAY AQUA.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'ILIOS Brewery', image: 'assets/clientImages/ILIOS.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        'assets/clientCertImag/ILIOS/ILIOS.png',
      ]
    },
    {
      name: 'Godrej Jersey', image: 'assets/clientImages/Jersey.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'BLUR STAR', image: 'assets/clientImages/BLUR STAR.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'SAHYADRI', image: 'assets/clientImages/SAHYADRI.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'TOSHIBA', image: 'assets/clientImages/TOSHIBA.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Premier Energies', image: 'assets/clientImages/Premier Energies.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'SG', image: 'assets/clientImages/sg.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: '4EST', image: 'assets/clientImages/4EST.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'SNF WATER SCIENCE', image: 'assets/clientImages/SNF.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'MARIS STELLA COLLEGE', image: 'assets/clientImages/MARIS.png',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'growel', image: 'assets/clientImages/growel.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Ori Foods', image: 'assets/clientImages/oriFoods.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    {
      name: 'Ori Bake', image: 'assets/clientImages/oriBake.jpg',
      photos: [
        'assets/clientPhotos/hccb1.jpg',
      ],
      videos: [
        'https://www.youtube.com/embed/abcd1234',
      ],
      certificates: [
        // 'assets/clientCertImag/sabMiller/SMcert1.png',
      ]
    },
    // { name: 'hfcl', image: 'assets/clientImages/hfcl.png' },
    // { name: 'hfcl', image: 'assets/clientImages/hfcl.png' },
    // { name: 'hfcl', image: 'assets/clientImages/hfcl.png' },
    // { name: 'hfcl', image: 'assets/clientImages/hfcl.png' },
    // { name: 'hfcl', image: 'assets/clientImages/hfcl.png' },
    // { name: 'hfcl', image: 'assets/clientImages/hfcl.png' },
    // { name: 'hfcl', image: 'assets/clientImages/hfcl.png' },

  ];

  constructor(private dialog: MatDialog) { }

  openDialog(client: any, type: 'photos' | 'videos' | 'certificates') {
    this.dialog.open(ClientDialogComponent, {
      width: '700px',
      height: '600px',
      data: { client, type },
      panelClass: 'custom-dialog-container'
    });
  }
}
