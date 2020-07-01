import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { ServerService } from 'src/app/server.service';
import {DataService} from './../../data.service'

@Component({
  selector: 'app-user-details-list',
  templateUrl: './user-details-list.component.html',
  styleUrls: ['./user-details-list.component.css']
})
export class UserDetailsListComponent implements OnInit {

  constructor(private http: HttpClient, public router: Router,private serverService: ServerService,private dataService:DataService) {
  }
  lstDetails=[]

  ngOnInit(): void {
    this.serverService.sendGetRequest().subscribe((res: any[])=>{
      this.lstDetails=res['data']
    }) 
  }

  viewDetails(item){
    console.log(item,"item");
    
    this.dataService.onGetData(item)
    localStorage.setItem('details',JSON.stringify(item))
    this.router.navigate(['/user-detail/user-detail-view'])
  }
 
}
