"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var core_1 = require("@angular/core");
var feedbackform_service_1 = require("./../services/feedbackform.service");
var feedback_data_1 = require("./feedback.data");
var FeedbackFormComponent = (function () {
    function FeedbackFormComponent(_feedbackformservice) {
        this._feedbackformservice = _feedbackformservice;
    }
    FeedbackFormComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.images = feedback_data_1.Image;
        this.questions = feedback_data_1.Question;
        this._feedbackformservice.getFeedbackFormData()
            .subscribe(function (data) {
            _this.feedback_data = data;
            console.log("daata aa gya");
            _this.filldata();
        });
    };
    FeedbackFormComponent.prototype.filldata = function () {
        this.questions_data = this.feedback_data.questionAndRating;
        console.log("question ka data " + this.questions_data);
    };
    FeedbackFormComponent.prototype.optionselected = function (question_selected, option_selected) {
        this._feedbackformservice.AddScores(question_selected, option_selected);
    };
    FeedbackFormComponent.prototype.onSubmit = function (remark) {
        this._feedbackformservice.Submit(remark);
    };
    FeedbackFormComponent.prototype.onReset = function () {
        this._feedbackformservice.Reset();
    };
    return FeedbackFormComponent;
}());
FeedbackFormComponent = __decorate([
    core_1.Component({
        selector: 'feedback_form',
        templateUrl: './feedbackform.component.html',
        styleUrls: ['./css/feedback.styles.css'],
        providers: [feedbackform_service_1.FeedbackFormService],
        inputs: ['questions']
    }),
    __metadata("design:paramtypes", [feedbackform_service_1.FeedbackFormService])
], FeedbackFormComponent);
exports.FeedbackFormComponent = FeedbackFormComponent;
//# sourceMappingURL=feedbackform.component.js.map