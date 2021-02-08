import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-results',
  templateUrl: './results.page.html',
  styleUrls: ['./results.page.scss'],
})
export class ResultsPage implements OnInit {
  private results:number;
  constructor(private uService:UserService) {
    this.uService.results$.subscribe(val => this.results=val)
   }
  ngOnInit() {
  }

}
