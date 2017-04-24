import { feedbackformdata ,questiondata } from './../feedbackform/feedback.data';
import { Injectable } from '@angular/core';
import { Http, Response, Jsonp, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/catch';

@Injectable()
export class FeedbackFormService {

    scores: number[] = [0,0,0,0,0,0,0,0,0];
    remark: string;
    index: number;
    public _jsonurl = "./../app/feedbackform/json/feedbackformdata.json";

    constructor(private _http: Http) {}

    getFeedbackFormData(): Observable<feedbackformdata>{
         return this._http.get(this._jsonurl)
                         .map((data) => data.json())
    }

    AddScores(question_selected: number , option_selected: number)
    {
      this.scores.splice((question_selected - 1), 1, option_selected);
    }

    Submit(remark: string)
    {
        this.remark = remark;
        this.index = this.scores.indexOf(0);
         if(this.index != -1)
         {
             alert("Please Answer All question");
         } else {
             alert("Thank you for your Feedback");
             console.log(JSON.stringify(this.scores));
             console.log(JSON.stringify(this.remark));
             this.Reset();
         }
    }
    Reset()
    {
       this.scores = [0,0,0,0,0,0,0,0,0];
       this.remark = "";
    }


}