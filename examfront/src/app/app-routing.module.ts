import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { SignupComponent } from './pages/signup/signup.component';
import { AdminGuard } from './services/admin.guard';
import { UserGuard } from './services/user.guard';
import { UserComponent } from './pages/user/user.component';
import { AdminComponent } from './pages/admin/admin.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { WelcomeComponent } from './pages/admin/welcome/welcome.component';
import { ViewCategoriesComponent } from './pages/admin/view-categories/view-categories.component';
import { AddCategoryComponent } from './pages/admin/add-category/add-category.component';
import { ViewQuizzesComponent } from './pages/admin/view-quizzes/view-quizzes.component';
import { AddQuizComponent } from './pages/admin/add-quiz/add-quiz.component';
import { UpdateQuizComponent } from './pages/admin/update-quiz/update-quiz.component';
import { ViewQuizQuestionsComponent } from './pages/admin/view-quiz-questions/view-quiz-questions.component';
import { AddQuestionComponent } from './pages/admin/add-question/add-question.component';
import { LoadQuizComponent } from './pages/user/load-quiz/load-quiz.component';
import { InstructionsComponent } from './pages/user/instructions/instructions.component';
import { StartComponent } from './pages/user/start/start.component';
import { UpdateQuestionComponent } from './pages/admin/update-question/update-question.component';


const routes: Routes = [

//adding routing here ************
{
  path:'',
  component: HomeComponent,
  pathMatch:'full',
},

{
  path: 'signup',
  component: SignupComponent,
  pathMatch: 'full',
}, 
{
  path:"login",
  component: LoginComponent,
  pathMatch: 'full',
}, 
{
  path:"admin",
  component: AdminComponent,
  canActivate: [AdminGuard],
  children: [
      {
        path: '',
        component:WelcomeComponent,
      },

    {
      path:"profile",
      component: ProfileComponent,
      
    },

    {
      path:"categories",
      component: ViewCategoriesComponent,
      
    },

    {
      path:"add-category",
      component: AddCategoryComponent,
      
    },

    {
      path:"quizzes",
      component: ViewQuizzesComponent,
      
    },
    {
      path:"add-quiz",
      component: AddQuizComponent,
      
    },
    
    {
      path:"quiz/:qid",
      component: UpdateQuizComponent,
      
    },
    {
      path:"view-questions/:id/:title",
      component: ViewQuizQuestionsComponent,
      
    },
    {
      path:"add-question/:id/:title",
      component: AddQuestionComponent,
      
    },
    {
      path:"update-question/:paramQId/:title",
      component: UpdateQuestionComponent,
      
    },


  ]

}, 

{
  path:"user",
  component: UserComponent,
  canActivate: [UserGuard],
  children: [

    {
      path: ':catId',
      component: LoadQuizComponent
    },
    {
      path: 'instructions/:qidRoute',
      component: InstructionsComponent
    },
    {
      path: "start/:id",
      component: StartComponent
    }
  ]
},


{
  path: "start/:id",
  component: StartComponent,
  canActivate: [UserGuard]
}


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
