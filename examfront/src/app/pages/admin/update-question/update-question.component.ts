import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import * as ClassicEditor from '@ckeditor/ckeditor5-build-classic';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-question',
  templateUrl: './update-question.component.html',
  styleUrls: ['./update-question.component.css']
})
export class UpdateQuestionComponent implements OnInit {

 
   public Editor = ClassicEditor;

  qId: any;
  qTitle: any;
  question = {
    quiz: {
      quizId: ''
    },
    content: '',
    option1: '',
    option2: '',
    option3: '',
    option4: '',
    answer: '',
  }


  constructor(private _route: ActivatedRoute, private _question: QuestionService, private snack: MatSnackBar) { }

  ngOnInit(): void {

    this.qId = this._route.snapshot.params.paramQId;
   
    console.log(this.qId);

    this.question.quiz['quizId'] = this.qId;

    this._question.getQuestionsofQuiz(this.qId).subscribe(
      (data: any)=>{
        this.question = data;
        console.log(this.question );
      },(error:any)=>{
        console.log(error);
        
      }
    )

  }


  formSubmit(){


    if(this.question.content.trim()=='' || this.question.content==null){

      this.snack.open("Question Content is Required !!","", {
        duration: 3000,
      });
      return;
    }

    if(this.question.option1.trim()=='' || this.question.option1==null){

      this.snack.open("Option 1 is Required !!","", {
        duration: 3000,
      });
      return;
    }

    if(this.question.option2.trim()=='' || this.question.option2==null){

      this.snack.open("Option 2 is Required !!","", {
        duration: 3000,
      });
      return;
    }
   
    if(this.question.answer.trim()=='' || this.question.answer==null){

      this.snack.open("Answer is Required !!","", {
        duration: 3000,
      });
      return;
    }
   

    //call server
    this._question.addQuestion(this.question).subscribe((data:any)=>{

      Swal.fire("Success ","Question is added successfully!", 'success');

      //resetting 
      this.question = {
        quiz: {
          quizId: ''
        },
        content: '',
        option1: '',
        option2: '',
        option3: '',
        option4: '',
        answer: '',
      }

    },
    
    (error:any)=>{
      console.log(error);
      Swal.fire("Error!! ","Error while adding question !", "error");
    })


  }
}
