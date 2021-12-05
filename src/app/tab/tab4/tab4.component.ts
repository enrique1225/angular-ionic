import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-tab4',
  templateUrl: './tab4.component.html',
  styleUrls: ['./tab4.component.scss'],
})
export class Tab4Component implements OnInit {

  hideBalance = true;
  hideIndicate = false;

  constructor(private router: Router) { }

  ngOnInit() {}

  segmentButtonClicked(ev: any) {
    console.log('Segment button clicked', ev);
  }
  segmentChanged(ev: any) {
    console.log(ev.detail.value);
    if(ev.detail.value == "indicate"){
      this.hideIndicate = false,
      this.hideBalance = true
    }else{
      this.hideBalance = false,
      this.hideIndicate = true
    }
  }

  tab5(){
    this.router.navigateByUrl("/tab/tab5")
  }
}
