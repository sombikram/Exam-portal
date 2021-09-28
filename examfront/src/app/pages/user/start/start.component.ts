import { Component, OnInit } from '@angular/core';
import { LocationStrategy } from '@angular/common';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';
import { QuizService } from 'src/app/services/quiz.service';
import {MatRadioModule} from '@angular/material/radio';

@Component({
  selector: 'app-start',
  templateUrl: './start.component.html',
  styleUrls: ['./start.component.css']
})

export class StartComponent implements OnInit
 {


  qid:any;
 quiz:any;
  questions:any;

  marksGot = 0;
  correctAnswers = 0;
  attemptedQuestions = 0;
  isSubmit = false;

  timer:any;

    constructor(private _route:ActivatedRoute, private locationSt: LocationStrategy, private questService: QuestionService, private _quiz: QuizService) { }

  ngOnInit(): void  
  {
    this.preventBackButton();
    this.qid = this._route.snapshot.params.id;
    console.log(this.qid);
    this.loadQuestions();
    this.getQuizTitle(this.qid);
  
  }

  loadQuestions() {
    this.questService.getQuestionsofQuiz(this.qid).subscribe((data:any)=>{
      console.log(data);
      this.questions = data;

      this.timer = this.questions.length*1*60;

      this.questions.forEach((q:any) => {
        q['givenAnswer']= '';
      });
      this.startTimer();
    },(error)=>{
      console.log(error);
      Swal.fire('Error', "Error in loading questions of Quiz",'error');
    })
  }


  getQuizTitle(qid:any){
    this._quiz.getQuiz(qid).subscribe((data:any)=>{
      this.quiz = data;
      console.log(this.quiz);
    },(error)=>{
      console.log(error);
    })
  }

    //prevents you from going back
    preventBackButton()
    {
      history.pushState(null,'', location.href);
      this.locationSt.onPopState(()=>{
        history.pushState(null,'', location.href);
      });
    }

    submitQuiz(){
      
      Swal.fire({
        title: 'Do you want to Submit the Quiz?',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: 'grey',
        confirmButtonText: 'Submit',
        icon:'info',
      
      }).then((e)=>{
        if(e.isConfirmed){
         
          this.evalQuiz();

        }
      })

    }


    startTimer(){
     
     let t =  window.setInterval(()=>{

        //code
        if(this.timer <=0){
          this.evalQuiz();
          clearInterval(t);
        } else{
          this.timer--;
        }
      },1000);
    }



    getFormattedTime(){

      let mm = Math.floor(this.timer/60);
      let ss = this.timer - mm*60;
      return `${mm} min : ${ss} sec `;
    }


    evalQuiz(){

       //calculation
       this.isSubmit= true;
       console.log(this.questions);
       this.questions.forEach((q:any)=>{
         if(q.givenAnswer == q.answer){

          console.log("***********************YESSSSS")
           this.correctAnswers++;
          let marksSingle =  this.quiz.maxMarks/this.questions.length;
          this.marksGot += parseFloat(Number(marksSingle).toFixed(2));
         }
         
         if(q.givenAnswer.trim() != ''){

           this.attemptedQuestions++;
         }
        
       })
       console.log("Attempted Questions:  "+this.attemptedQuestions);
       console.log("correct Answers: "+this.correctAnswers);
       console.log("Marks Got:  "+this.marksGot);


         // //call to server to check questions
        // this.questService.evalQuiz(this.questions).subscribe((data:any)=>{

        //   console.log(data);
        // },(error)=>{
        //   console.log(error);
        // })

    }



    printPage(){
      window.print();
    }



  }
  



