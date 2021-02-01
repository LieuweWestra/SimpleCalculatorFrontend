import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.css']
})
export class CalculatorComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

  }

  put(nr:number){
    console.log("adding " + nr);
  }
  previous(){
    
  }
  next(){
    
  }
  add(){
    
  }
  subtract(){
    
  }
  multiply(){
    
  }
  devide(){
    
  }
  calculate(){
    
  }

}
