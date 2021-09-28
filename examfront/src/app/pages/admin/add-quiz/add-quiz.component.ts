import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-quiz',
  templateUrl: './add-quiz.component.html',
  styleUrls: ['./add-quiz.component.css']
})
export class AddQuizComponent implements OnInit {

  categories = [
    {
      cid: '',
       title: ""
  },

  {
    cid:'',
     title: ""
}
]

  quizData = {
    
    title:'',
    description: '',
    maxMarks: '',
    numberOfQuestions: '',
    active: true,
    category:{
      cid: '',
     
    }

  };

  constructor(private categoryService: CategoryService, private snack : MatSnackBar, private quizService: QuizService) { }

  ngOnInit(): void {

    this.categoryService.categories().subscribe((data:any)=>{

      //categories load
      this.categories=data;
      //console.log(this.categories);
    },
    (error)=>{
      console.log(error);
      Swal.fire("Error!! ","Error in loading data from server !", "error");
      
    }
  )

   }

   //add QUiz
   formSubmit(){
    
    if(this.quizData.title.trim()=='' || this.quizData.title==null){

      this.snack.open("Title is Required !!","", {
        duration: 3000,
      })
    }


    //validation....

    //call server
    this.quizService.addQuiz(this.quizData).subscribe((data:any)=>{

      Swal.fire("Success ","Quiz is added successfully!", 'success');

     //reset quiz form
     this.quizData = {
        title:'',
        description: '',
        maxMarks: '',
        numberOfQuestions: '',
        active: true,
        category: {
          cid: ''
        }
    
      };

    },
    
    (error)=>{
      console.log(error);
      Swal.fire("Error!! ","Error while adding quiz !", "error");
    })


   }
}
