import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuestionService {
 
  constructor(private http: HttpClient) { }


  //used by admin
  public getQuestionsofQuiz(qid: any){
    return this.http.get(`${baseUrl}/question/quiz/all/${qid}`);
  }


  //used by user
  public getQuestionsofQuizForTest(qid: any){
    return this.http.get(`${baseUrl}/question/quiz/${qid}`);
  }


  public addQuestion(question:any){
    return this.http.post(`${baseUrl}/question/`,question);
  }


  //delete question
  public deleteQuestion(questionId: any){
    return this.http.delete(`${baseUrl}/question/${questionId}`);
  }

  // //eval quiz
  // public evalQuiz(questions:any){
  //   return this.http.post(`${baseUrl}/question/eval-quiz`, questions);
  // }

}
