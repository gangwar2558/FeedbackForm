import { Component , OnInit } from '@angular/core';
import { FeedbackFormService } from './../services/feedbackform.service';
import { Question , Image , feedbackformdata, questiondata} from './feedback.data';

@Component({
    selector: 'feedback_form',
    templateUrl: './feedbackform.component.html',
    styleUrls: ['./css/feedback.styles.css'],
    providers:[FeedbackFormService],
    inputs : ['questions']
})
export class FeedbackFormComponent implements OnInit {
 images: number[] ;
 questions : string[];
 feedback_data: feedbackformdata;
 questions_data: Array<questiondata>;

  constructor(private _feedbackformservice: FeedbackFormService){
  }
  
  ngOnInit() {
    this.images = Image;
    this.questions = Question;  
    this._feedbackformservice.getFeedbackFormData()
      .subscribe(data =>
                      {
                        this.feedback_data = data;
                        console.log("daata aa gya");
                        this.filldata();
                      }
                )
  }
  filldata()
  {
    this.questions_data = this.feedback_data.questionAndRating;
    console.log("question ka data "+this.questions_data);
  }

  optionselected(question_selected: number , option_selected: number) {
    this._feedbackformservice.AddScores(question_selected, option_selected);
  }
  onSubmit(remark: string) {
      this._feedbackformservice.Submit(remark);
  }
  onReset()
  {
    this._feedbackformservice.Reset();
  }
}