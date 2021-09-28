import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root'
})
export class QuizService {

  constructor(private http: HttpClient) { }

  public allQuizzes(){
    return this.http.get(`${baseUrl}/quiz/`);
  }


  //add quiz
  public addQuiz(quiz: any){

    return this.http.post(`${baseUrl}/quiz/`,quiz);
  }


  //delete quiz
  public deleteQuiz(qid: any)
  {
    return this.http.delete(`${baseUrl}/quiz/${qid}`);
  }


  //get the single quiz
  public getQuiz(qid: any){
    return this.http.get(`${baseUrl}/quiz/${qid}`);
  }

  //Update Quiz
  public updateQuiz(quiz: any){
    return this.http.put(`${baseUrl}/quiz/`,quiz);
  }

  //get quizes of category
  public getQuizzesOfCategory(cid:any){
    return this.http.get(`${baseUrl}/quiz/category/${cid}`);
  }


 //get active quizzes
 public getActiveQuizzes(){
   return this.http.get(`${baseUrl}/quiz/active`);
 }


 //get active quizzes of Category
 public getActiveQuizzesOfCategory(cid:any){
   return this.http.get(`${baseUrl}/quiz/category/active/${cid}`);
 }
}
