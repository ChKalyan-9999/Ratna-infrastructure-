import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-vermafilling',
  templateUrl: './vermafilling.component.html',
  styleUrls: ['./vermafilling.component.scss']
})
export class VermafillingComponent implements AfterViewInit {

  @ViewChild('stationVideo') stationVideo!: ElementRef<HTMLVideoElement>;

  ngAfterViewInit() {
    if (this.stationVideo && this.stationVideo.nativeElement) {
      this.stationVideo.nativeElement.playbackRate = 1;
    }
  }

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

  managingpartner = [
    {
      name: 'MR. CH. KALYAN RAJU',
      image: 'assets/images/kalyanraju.jpg',
      about: `Sri Chinda Kalyan Raju,

a B.E. in Electronics & Communication (2006, Andhra University) is a dynamic professional with a strong foundation in engineering and over 23+ years of diverse industry experience. A graduate in Electronics & Communication Engineering from Andhra University (2006), he has been actively associated with M/s RATNA CONSTRUCTIONS since the very beginning of his career.

Over the years, he has developed comprehensive expertise across civil, mechanical, electrical, and instrumentation works, giving him a holistic understanding of project execution and multidisciplinary coordination. With 9+ years of on-site field experience, he brings a deep practical perspective to every project, ensuring quality, efficiency, and adherence to timelines.

Currently, he plays a key role in overseeing finance operations, where his technical background and field knowledge enable him to make informed decisions that balance financial prudence with operational excellence. His ability to bridge technical and financial aspects of the business makes him an invaluable asset to the organization’s growth and success.

Known for his hands-on approach, problem-solving mindset, and dedication, Sri Kalyan Raju continues to contribute to building innovative and sustainable infrastructure solutions.`
    },

    {
      name: 'MRS. SRAVANI CHINDA',
      image: 'assets/ourGroup/Shravani.jpg',
      about: `MRS. SRAVANI CHINDA,

holds a B.Tech in Computer Science and is the Managing Partner of Verma Filling Station. With her strong academic background and leadership skills, she plays a key role in overseeing daily operations, ensuring efficiency, and driving growth. Her dedication and management expertise have contributed to the station’s smooth functioning and reputation for reliability.`
    },
  ]

}
