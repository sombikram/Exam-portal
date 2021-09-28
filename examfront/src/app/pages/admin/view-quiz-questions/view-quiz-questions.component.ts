import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { QuestionService } from 'src/app/services/question.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-view-quiz-questions',
  templateUrl: './view-quiz-questions.component.html',
  styleUrls: ['./view-quiz-questions.component.css']
})
export class ViewQuizQuestionsComponent implements OnInit {

qId: any;
qTitle: any;
questions =  [
  {
    questId:'',
    content: "",
    image: "",
    option1: "",
    option2: "",
    option3: "", 
    option4: "",
    answer: "",  
    quiz: {
        quizId: ''
    }
}];

  constructor(

    private _route: ActivatedRoute,
    private _question: QuestionService
  ) { }

  ngOnInit(): void {

    this.qId = this._route.snapshot.params.id;
    this.qTitle = this._route.snapshot.params.title;

    this._question.getQuestionsofQuiz(this.qId).subscribe((data: any) => {
      console.log(data);
      this.questions = data;
    }, (error)=>{
      console.log(error);
    })

    console.log(this.qId);
    console.log(this.qTitle);
  }

  //delete question
  deleteQuestion(qid:any){


    Swal.fire({
      icon: 'info',
      title: 'Are you sure?',
      confirmButtonText: 'Delete',
      showCancelButton: true

    }).then((result) => 
    {

      if (result.isConfirmed) 
      {

        //delete
           this._question.deleteQuestion(qid).subscribe((data) => {
             //success
              this.questions = this.questions.filter((q) => q.questId != qid);

              Swal.fire('Success', "Question deleted successfully!", 'success');
            },
             (error) => {

                Swal.fire('Error', "Error in deleting Question", 'error');
             }

        )

      }
    })
  }

}
