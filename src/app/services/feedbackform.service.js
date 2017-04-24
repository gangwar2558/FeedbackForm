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
var http_1 = require("@angular/http");
require("rxjs/Rx");
require("rxjs/add/operator/map");
require("rxjs/add/operator/toPromise");
require("rxjs/add/operator/catch");
var FeedbackFormService = (function () {
    function FeedbackFormService(_http) {
        this._http = _http;
        this.scores = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this._jsonurl = "./../app/feedbackform/json/feedbackformdata.json";
    }
    FeedbackFormService.prototype.getFeedbackFormData = function () {
        return this._http.get(this._jsonurl)
            .map(function (data) { return data.json(); });
    };
    FeedbackFormService.prototype.AddScores = function (question_selected, option_selected) {
        this.scores.splice((question_selected - 1), 1, option_selected);
    };
    FeedbackFormService.prototype.Submit = function (remark) {
        this.remark = remark;
        this.index = this.scores.indexOf(0);
        if (this.index != -1) {
            alert("Please Answer All question");
        }
        else {
            alert("Thank you for your Feedback");
            console.log(JSON.stringify(this.scores));
            console.log(JSON.stringify(this.remark));
            this.Reset();
        }
    };
    FeedbackFormService.prototype.Reset = function () {
        this.scores = [0, 0, 0, 0, 0, 0, 0, 0, 0];
        this.remark = "";
    };
    return FeedbackFormService;
}());
FeedbackFormService = __decorate([
    core_1.Injectable(),
    __metadata("design:paramtypes", [http_1.Http])
], FeedbackFormService);
exports.FeedbackFormService = FeedbackFormService;
//# sourceMappingURL=feedbackform.service.js.map