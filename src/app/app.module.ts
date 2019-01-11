import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { FooterComponent } from './footer/footer.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';
import { CreateInvoiceComponent } from './create-invoice/create-invoice.component';
import { UsersComponent } from './users/users.component';
import { MatTableModule } from '@angular/material/table';
import { ChartsModule } from 'ng2-charts';
import { DashComponent } from './dash/dash.component';
import { PreviewComponent } from './create-invoice/preview/preview.component';

const appRoutes: Routes = [
  { path: 'dash', component: DashComponent },
  { path: '',   redirectTo: '/dash', pathMatch: 'full' },
  { path: 'user-posts', component: DashboardComponent },
  { path: 'create-invoice', component: CreateInvoiceComponent },
  { path: '**', component: PagenotfoundComponent },
  { path: 'details', component: UsersComponent }
];

@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    FooterComponent,
    DashboardComponent,
    PagenotfoundComponent,
    CreateInvoiceComponent,
    UsersComponent,
    DashComponent,
    PreviewComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: true } // <-- debugging purposes only
    ),
    BrowserAnimationsModule,
    HttpClientModule,
    MatTableModule,
    ChartsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
