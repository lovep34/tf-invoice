import { Component, OnInit } from '@angular/core';
import { InvoicelistService } from '../invoicelist.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit {
  users$: Object;
  constructor(private data: InvoicelistService) { }

  ngOnInit() {
    this.data.getUsers().subscribe(
      data => this.users$ = data 
    );
  }

}
