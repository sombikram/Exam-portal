import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';

@Component({
  selector: 'app-load-quiz',
  templateUrl: './load-quiz.component.html',
  styleUrls: ['./load-quiz.component.css']
})
export class LoadQuizComponent implements OnInit {


  catId: any;
  quizzes = [
    {
      quizId: '',
      title: "",
      description: '',
      maxMarks: '',
      numberOfQuestions: '',
      active: '',
    }
  ]

  constructor(private _route: ActivatedRoute, private _quiz: QuizService, private _cat: CategoryService) { }

  ngOnInit(): void {

    this.catId = this._route.snapshot.params.catId;
     console.log(this.catId);

      this._route.params.subscribe((params:any)=>{

        this.catId = params.catId;
        console.log(this.catId);
        if(this.catId==0){
          console.log("load all quiz");
          this._quiz.getActiveQuizzes().subscribe(
            (data:any)=>{
              this.quizzes = data;
              console.log(this.quizzes);
            },
            (error)=>{
              console.log(error);
              
            }
          )
    
        }
        else{
          console.log("Load specific Quiz");

          this._quiz.getActiveQuizzesOfCategory(this.catId).subscribe(
            (data:any)=>{
              this.quizzes = data;
            },(error)=>{
              alert("error in loading quiz data");
            }
          )
        }
      })

   

  }
 

}
