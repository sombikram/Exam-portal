import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { ActivatedRoute } from '@angular/router';
import { CategoryService } from 'src/app/services/category.service';
import { QuizService } from 'src/app/services/quiz.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-quiz',
  templateUrl: './update-quiz.component.html',
  styleUrls: ['./update-quiz.component.css']
})
export class UpdateQuizComponent implements OnInit {

  constructor(private _route: ActivatedRoute, private quizService: QuizService, private snack : MatSnackBar, private catService: CategoryService) { }

  
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
  qId= 0;
 
  ngOnInit(): void {

   this.qId= this._route.snapshot.params.qid;
   
  //  alert(this.quizId);
  this.quizService.getQuiz(this.qId).subscribe(
    (data: any)=>{
      this.quizData = data;
      console.log(this.quizData );
    },(error)=>{
      console.log(error);
      
    }
  )


  this.catService.categories().subscribe(
    (data: any)=>{
      this.categories = data;
    }, (error)=>{
      alert("error in loading categories");
    }
  );

  }



//update form Submit
public updateData(){
 
  //validation....
  if(this.quizData.title.trim()=='' || this.quizData.title==null){
    this.snack.open("Title is Required !!","", {
      duration: 3000,
    })
  }

  //call server
  this.quizService.updateQuiz(this.quizData).subscribe((data:any)=>{
    Swal.fire("Success ","Quiz is updated successfully!", 'success');
  },
  
  (error)=>{
    console.log(error);
    Swal.fire("Error!! ","Error while adding quiz !", "error");
  })


}

}
