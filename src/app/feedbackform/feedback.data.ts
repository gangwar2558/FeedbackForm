export const Question: string[] =[
                                  ' 1. How did your Cource meet your learning objectives.',
                                  ' 2. How would you rate the duration of the course.',
                                  ' 3. How would you rate the application of the knowledge gained to work/project.  ',
                                  ' 4. How would you rate the value added to the knowledge gained.',
                                  ' 1. How would you rate the tariner on the knowledge of the subject?',
                                  ' 2. How would you rate the Presentation and communication of the trainer?',
                                  ' 3.  How would you rate the trainers ability to answer the queries of the audience?',
                                  ' 4.  How would you rate the quality of learning material and examples used by tariner?',
                                  ' 5.  How would you rate the trainers ability to help with practicle lab exercise?'
]
export const Image: number[] = [1,2,3,4,5];

export class feedbackformdata
{
    public feedback_Id: number;
    public questionAndRating: Array<questiondata>
    public remark: string;
    public attendeeId: number;
    public sessionId:number;
    public feedbackDate:string;
}
export class questiondata{
    public questions_Id: number;
    public question: string;
    public rating: number;
    public learningObjectiveAndFacilitator:number;
}