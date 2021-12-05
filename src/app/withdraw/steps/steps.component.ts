import { Component, Input, OnInit, ViewChild } from '@angular/core';
import { IonSlides } from '@ionic/angular';
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-steps',
  templateUrl: './steps.component.html',
  styleUrls: ['./steps.component.scss'],
})
export class StepsComponent implements OnInit {

  @Input() width: number;
  @Input() slidesPerView = 1;
  @Input() slideWidth: number = 0;
  @Input() slidesOffsetBefore: number = 0;
  @Input() sliderClassName: string = '';
  @Input() pager: boolean = true;
  
  @ViewChild('mySlider', { static: true }) slider: IonSlides;
  isBeginning$: Observable<boolean>;
  isEnd$: Observable<boolean>;

  slideOptions: { [key: string]: any } = {};
  ionSlides: any;
  disablePrevBtn: boolean;
  disableNextBtn: boolean;

  constructor(private router: Router) { }

  ngOnInit() {
    this.slideOptions = {
      slidesPerView: this.slidesPerView,
      initialSlide: 0,
      slidesOffsetBefore: this.slidesOffsetBefore,
      preloadImages: true,
      cssMode: true,
      width: this.slideWidth * this.slidesPerView
    };
  }

  trackItemsById(index, item) {
    return item.id;
  }

  next_slide() {
    if (this.slider) {
      this.slider.slideNext();
      if(this.disableNextBtn == true){
        this.router.navigateByUrl("/withdraw/verify")
      }
    }
  }

  prev_slide() {
    if (this.slider) {
      this.slider.slidePrev();
      if(this.disablePrevBtn == true){
        this.router.navigateByUrl("/withdraw/intro")
      }
    }
  }

  updateSliderIconState() {
    let prom1 = this.slider.isBeginning();
    let prom2 = this.slider.isEnd();

    Promise.all([prom1, prom2]).then((data) => {
      data[0] ? this.disablePrevBtn = true : this.disablePrevBtn = false;
      data[1] ? this.disableNextBtn = true : this.disableNextBtn = false;
    });
  }
}
