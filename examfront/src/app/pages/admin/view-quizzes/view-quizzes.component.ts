import { Component, OnInit } from '@angular/core';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-view-quizzes',
  templateUrl: './view-quizzes.component.html',
  styleUrls: ['./view-quizzes.component.css']
})
export class ViewQuizzesComponent implements OnInit {


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



  constructor(private quizService: QuizService) { }

  ngOnInit(): void {

    this.quizService.allQuizzes().subscribe((data: any) => {
      this.quizzes = data;
      console.log(this.quizzes);
    },
      (error) => {

        console.log(error);
        Swal.fire('Error!', "Error in loading data !", "error");
      }
    )
  }


  deleteQuiz(qId: any) {

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
           this.quizService.deleteQuiz(qId).subscribe((data) => {
             //success
              this.quizzes = this.quizzes.filter((quiz) => quiz.quizId != qId);

              Swal.fire('Success', "Quiz deleted successfully!", 'success');
            },
             (error) => {

                Swal.fire('Error', "Error in deleting Quiz", 'error');
             }

        )


      }
    })
  }
  
 

}
