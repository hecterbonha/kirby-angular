import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-counter',
  templateUrl: './counter.component.html',
  styleUrls: ['./counter.component.css']
})
export class CounterComponent implements OnInit {

  number: number;
  isJumping: boolean;
  isDisabled: boolean;
  @Input() messageText: string;
  
  constructor() {}

  ngOnInit(): void {
    this.isJumping = false;
    this.isDisabled = false;
    this.number = 0;
  }

  kirbyJump(): void {
    this.isJumping = true;
    this.isDisabled = true;
    setTimeout(() => {
      this.number ++;
    }, 500);
    setTimeout(() => {
      this.isJumping = false;
      this.isDisabled = false;
    }, 1000);
  }

}
