import { Component, OnInit } from '@angular/core';
import { Question } from 'src/app/interfaces/question';
import { BehaviorSubject } from 'rxjs';
import { QuestionService } from 'src/app/services/question.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-question',
  templateUrl: './question.page.html',
  styleUrls: ['./question.page.scss'],
})
export class QuestionPage implements OnInit {
  private qnum:number;
  private question:Question;
  private answers:any;
  constructor(private qService:QuestionService,private uService:UserService) { 
    this.qService.question$.subscribe(value => this.question=value);
    this.uService.answers$.subscribe(val =>this.answers= val);
  }

  ngOnInit() {
 
  }
  nextQuestion(clicked_id){
    console.log("Response: ",clicked_id);
    this.answers[this.question.id] = clicked_id;
    this.uService.answers$.next(this.answers);
    this.qService.nextQuestion();
  }
}
