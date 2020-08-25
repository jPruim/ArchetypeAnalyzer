import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { QuestionPageRoutingModule } from './question-routing.module';

import { QuestionPage } from './question.page';
import { QAndADisplayComponent } from 'src/app/components/q-and-a-display/q-and-a-display.component';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    QuestionPageRoutingModule
  ],
  declarations: [QuestionPage],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class QuestionPageModule {}
