import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-add-category',
  templateUrl: './add-category.component.html',
  styleUrls: ['./add-category.component.css']
})
export class AddCategoryComponent implements OnInit {


 categories =  {
           title: '',
          description: ""
    };
  
  constructor(private _category: CategoryService, private snack: MatSnackBar) { }

  ngOnInit(): void { }


  formSubmit(){

    if(this.categories.title.trim()=="" || this.categories.title==null)
    {
      this.snack.open("Title Required !!!", '', {
        duration: 3000,
      });
      return;
    }

    //all done
    this._category.addCategory(this.categories).subscribe((data: any) =>{

      
      Swal.fire('Success !!', "Category is added successfully", 'success');
      //blank title and description
      this.categories.title='';
      this.categories.description='';
    },
    (error)=>{

      console.log(error);
      Swal.fire("Error!!", "Server error!", 'error');
    }

    
    );


  }

}
