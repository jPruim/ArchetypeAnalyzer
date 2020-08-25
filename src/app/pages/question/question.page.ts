import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  private qnum:number;
  constructor() { }

  ngOnInit() {
    this.qnum = Math.floor(Math.random()*100);
  }
  nextQuestion(clicked_id){
    console.log("Response: ",clicked_id);
    this.qnum = Math.floor(Math.random()*100);
  }
}
