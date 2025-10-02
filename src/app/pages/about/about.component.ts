import { Component } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.scss']
})
export class AboutComponent {

  spokenNames: Set<string> = new Set();

  speakOnce(text: string) {
    // Speak only if this name hasn't been spoken yet
    // if (!this.spokenNames.has(text)) {
    this.spokenNames.add(text);

    window.speechSynthesis.cancel();
    const speech = new SpeechSynthesisUtterance(text);
    speech.lang = 'en-IN'; // Indian English accent
    speech.pitch = 1;
    speech.rate = 1;
    window.speechSynthesis.speak(speech);
    // }
  }

  // 👇 put this OUTSIDE speakOnce, at the same level
  stopSpeaking() {
    if ('speechSynthesis' in window) {
      window.speechSynthesis.cancel();
    }
  }

  founder = [
    {
      name: 'MR. CHINDA VENKATESWARA RAJU',
      image: 'assets/ourGroup/chinda.jpg',
      about: `Mr. Chinda Venkateswara Raju
after serving in APSRTC and APHMIEL, he went on to establish himself as a successful entrepreneur. He is now the Chairman of Ratna Group, a leading construction company renowned for building industrial manufacturing plants. With over 40+ years of experience, he has transformed Ratna Group from modest beginnings into a trusted name in executing large-scale, complex projects across industries, recognized for vision, leadership, and excellence in construction.`
    },
    {
      name: 'MRS. RATNA KUMARI',
      image: 'assets/ourGroup/ratna.jpg',
      about: `MRS. RATNA KUMARI
 is the Founder and Chairman of Ratna Group. Though she does not hold formal educational qualifications, her vision, determination, and natural leadership have been the guiding pillars behind the company’s growth. As Chairman, she continues to inspire and uphold the values of trust, integrity, and commitment that define the foundation of Ratna Group.`
    },
  ]

  managingpartner = [
    {
      name: 'MR. B. PRASADA RAJU',
      image: 'assets/images/prasadraju.jpg',
      about: `Sri B. Prasada Raju,

a mechanical engineer is a seasoned professional with over 35+ years of rich experience in the construction industry. A qualified Mechanical Engineer, he began his career with various construction companies, where he worked extensively on the erection of thermal boilers across multiple thermal power stations and cement plants.

Throughout his career, he has successfully executed a wide spectrum of projects including:

Civil works such as boiler footings and industrial building construction

Fabrication & erection of steam lines and equipment

Water management systems including Wastewater Treatment Plants, Water Treatment Plants & Reverse Osmosis Plants

Rotary equipment alignments and precision installation

Electrical & instrumentation cabling works

In addition to his technical expertise, he has substantial experience in tender estimation and project cost management, ensuring competitive and efficient execution of projects.

As Managing Partner of M/s RATNA INFRASTRUCTURES, Sri B. Prasada Raju combines his strong technical foundation, hands-on field experience, and leadership acumen to steer the company’s growth. His commitment to quality, operational excellence, and innovation has been instrumental in delivering complex infrastructure projects on time and to the highest standards.`
    },
  ]

  partners = [

    {
      name: 'SMT. B. SYAMALA DEVI',
      image: 'assets/images/syamaladevi.jpg',
      about: `Smt. Borukati Syamala Devi,

a graduate is a key partner at M/s RATNA INFRASTRUCTURES, bringing over 25+ years of experience in finance and internal auditing. A qualified graduate, she plays a pivotal role in overseeing the Finance and Internal Audit departments, ensuring transparency, compliance, and smooth financial operations across the organization.

Her responsibilities include streamlining accounting processes, maintaining regulatory compliance, and driving efficiency in financial reporting. Her meticulous approach and focus on detail have contributed significantly to the firm’s robust financial management and operational stability.`
    },

    {
      name: 'MR. CH. KALYAN RAJU',
      image: 'assets/images/kalyanraju.jpg',
      about: `Sri Chinda Kalyan Raju,

a B.E. in Electronics & Communication (2006, Andhra University) is a dynamic professional with a strong foundation in engineering and over 23+ years of diverse industry experience. A graduate in Electronics & Communication Engineering from Andhra University (2006), he has been actively associated with M/s RATNA CONSTRUCTIONS since the very beginning of his career.

Over the years, he has developed comprehensive expertise across civil, mechanical, electrical, and instrumentation works, giving him a holistic understanding of project execution and multidisciplinary coordination. With 7+ years of on-site field experience, he brings a deep practical perspective to every project, ensuring quality, efficiency, and adherence to timelines.

Currently, he plays a key role in overseeing finance operations, where his technical background and field knowledge enable him to make informed decisions that balance financial prudence with operational excellence. His ability to bridge technical and financial aspects of the business makes him an invaluable asset to the organization’s growth and success.

Known for his hands-on approach, problem-solving mindset, and dedication, Sri Kalyan Raju continues to contribute to building innovative and sustainable infrastructure solutions.`
    },
    {
      name: 'MR. RAVIRAJU MAHALI',
      image: 'assets/images/raviraju.jpg',
      about: `Sri Mahali Ravi Raju,

did Diploma in Civil Engineering has been an integral part of M/s RATNA CONSTRUCTIONS since 1999, contributing over 25+ years of expertise in the construction industry. A Diploma holder in Civil Engineering, he brings hands-on experience in Civil Buildings, Boiler Footings, Steam Line Fabrication, Water Treatment Systems, and Erection Works.

His deep technical knowledge and commitment to quality execution have played a key role in the successful delivery of numerous projects. With his extensive field experience, he ensures adherence to project timelines, safety standards, and engineering excellence.`
    },
    {
      name: 'MS. DHATHRIKA VARMA BORUKATI',
      image: 'assets/ourGroup/DHATHRIKA.jpg',
      about: `MS. DHATHRIKA VARMA BORUKATI,

is a Master’s graduate in Civil and Environmental Engineering (Structural Engineering specialization) from the University of Illinois Urbana-Champaign, USA, and a silver medalist from SRM University, AP, India. She gained international experience as a Project Engineer at Integrity Structural Corp., Houston, working on multifamily residential projects, foundation systems, and innovative soil improvement methods.

Currently, she serves as a Structural Designer at Ratna Infrastructures, also overseeing material procurement and office administration. Proficient in tools such as ETABS, STAAD Pro, RISA-2D, AutoCAD, Revit, Abaqus CAE, and Ansys, with programming knowledge in Python, Matlab, and Mathematica, she has applied her expertise to projects in seismic performance, heritage structure preservation, and roadway redesign.

Beyond technical work, she has shown strong leadership, notably as Vice President of the ASCE Student Chapter at SRM University, and has actively participated in international workshops, research, and collaborative design initiatives.`
    },

  ];

}
