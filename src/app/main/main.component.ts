import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  constructor(private router: Router) { }

  ngOnInit() {}

  home(){
    this.router.navigateByUrl("/")
  }

  onChangePrice1(event){
    document.getElementById("price1").innerHTML = event.target.value;
  }
  onChangePrice2(event){
    document.getElementById("price2").innerHTML = event.target.value;
  }
  onChangePrice3(event){
    document.getElementById("price3").innerHTML = event.target.value;
  }
  onChangePrice4(event){
    document.getElementById("price4").innerHTML = event.target.value;
  }
  onChangePrice5(event){
    document.getElementById("price5").innerHTML = event.target.value;
  }

  tab2(){
    this.router.navigateByUrl("/tab/tab4")
  }

  tab5(){
    this.router.navigateByUrl("/tab/tab5")
  }
}
