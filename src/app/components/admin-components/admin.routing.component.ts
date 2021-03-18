import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './components/not-found/not-found.component';
import { AppAdminComponent } from './app-admin.component';
import { HeaderComponent } from './components/header/header.component';
import { RightSideBarComponent } from './components/right-side-bar/right-side-bar.component';
import { ShowUsersComponent } from './components/show-users/show-users.component';
import { AuthGuard } from 'src/app/guard/auth.guard';
import { AddHotelsComponent } from './components/hotels/add-hotels/add-hotels.component';
import { EditHotelsComponent } from './components/hotels/edit-hotels/edit-hotels.component';
import { ViewExploreArticlesComponent } from './components/view-explore-articles/view-explore-articles.component';
import { AddTrainsComponent } from './components/trains/add-trains/add-trains.component';
import { EditTrainsComponent } from './components/trains/edit-trains/edit-trains.component';
import { ShowTrainsComponent } from './components/trains/show-trains/show-trains.component';
import { AddExploreArticlesComponent } from './components/add-explore-articles/add-explore-articles.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule } from '@angular/common/http';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { ShowHotelsComponent } from './components/hotels/show-hotels/show-hotels.component';
import { AddEventsComponent } from './components/Events/add-events/add-events.component';
import { AllEventsComponent } from './components/Events/all-events/all-events.component';
import { AddArticleComponent } from './components/add-article/add-article.component';
import { ActivitiesArticlesComponent } from './components/activities-articles/activities-articles.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
const routes: Routes = [

  {
    path: '',
    component: AppAdminComponent,
    children: [
      {
        path: 'dashboard', component: DashboardComponent, canActivate: [AuthGuard]
      },

      {
        path: 'allusers', component: ShowUsersComponent, canActivate: [AuthGuard]
      },

      { path: 'hotels/add', component: AddHotelsComponent , canActivate: [AuthGuard]},
      { path: 'hotels/all', component: ShowHotelsComponent , canActivate: [AuthGuard]},
      { path: 'hotels/edit/:id', component: EditHotelsComponent , canActivate: [AuthGuard]},
      { path: 'trains/all', component: ShowTrainsComponent , canActivate: [AuthGuard]},
      { path: 'trains/add', component: AddTrainsComponent , canActivate: [AuthGuard]},
      { path: 'trains/edit/:id', component: EditTrainsComponent , canActivate: [AuthGuard]},
      { path: 'addExploreArticle', component: AddExploreArticlesComponent , canActivate: [AuthGuard]},
      { path: 'viewExploreArticles', component: ViewExploreArticlesComponent , canActivate: [AuthGuard]},
      { path: 'addActivitiesArticle', component: AddArticleComponent , canActivate: [AuthGuard]},
      { path: 'addActivitiesArticle/:id', component: AddArticleComponent , canActivate: [AuthGuard]},
      { path: 'activitiesArticles', component: ActivitiesArticlesComponent , canActivate: [AuthGuard]},
      { path: 'allevents', component: AllEventsComponent , canActivate: [AuthGuard]},
      { path: 'addevent', component: AddEventsComponent , canActivate: [AuthGuard]},
      {
        path: '', redirectTo: 'dashboard', pathMatch: 'full'
      },
      {
        path: '**', component: NotFoundComponent
      }


    ]
  }
];
@NgModule({
    imports: [
        RouterModule.forRoot(routes),
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        ToastrModule.forRoot({
          positionClass: 'toast-bottom-right',
          iconClasses: {
            error: 'toast-error',
            info: 'toast-info',
            success: 'toast-success',
            warning: 'toast-warning',
          }
        }),
        HttpClientModule,
        FontAwesomeModule
    ],
    exports: [RouterModule],
    declarations:[
        AppAdminComponent,
        HeaderComponent,
        RightSideBarComponent,
        DashboardComponent,
        NotFoundComponent,
        AddHotelsComponent,
        EditHotelsComponent,
        ViewExploreArticlesComponent,
        AddTrainsComponent,
        EditTrainsComponent,
        ShowTrainsComponent,
        AddExploreArticlesComponent,
        ShowUsersComponent,
        AddEventsComponent,
        AllEventsComponent,
        ActivitiesArticlesComponent,
        AddArticleComponent
      
    ]
  })
export class AdminRoutingModule { }
