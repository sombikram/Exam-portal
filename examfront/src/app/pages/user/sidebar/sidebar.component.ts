import { Component, OnInit } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { CategoryService } from 'src/app/services/category.service';

@Component({
  selector: 'app-sidebar-user',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  categories = [ {
    cid: '',
    title: '',
    description:""
  }]
  constructor(private _cat: CategoryService, private snack: MatSnackBar) { }

  ngOnInit(): void {

    this._cat.categories().subscribe((data:any)=>{

      this.categories = data;
      console.log(this.categories);
    },
    (error)=>{
      console.log(error);
      this.snack.open("Error in Loading data from server", '', {duration:3000})
    });

  }

}
