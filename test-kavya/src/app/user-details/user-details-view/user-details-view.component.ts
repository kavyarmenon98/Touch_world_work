import { Component, OnInit, ChangeDetectorRef, ChangeDetectionStrategy } from '@angular/core';
import { DataService } from 'src/app/data.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-user-details-view',
  templateUrl: './user-details-view.component.html',
  styleUrls: ['./user-details-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class UserDetailsViewComponent implements OnInit {

  constructor(private dataService :DataService,
    private changeDetector: ChangeDetectorRef) { }
    subscription: Subscription
  dctDetails={}
  name
  data={}

  ngOnInit(): void {
   
    this.data=JSON.parse( localStorage.getItem('details'))
    console.log(this.data,"dat");
    
      this.getData()
      
  }
  getData(){
    this.dataService.userDetails$.subscribe(
      (data)=>{
        this.dctDetails=data
        this.name=data['id']
        this.changeDetector.detectChanges();
        console.log(this.name,this.dctDetails,"fdf");
        
      }
    )
  }
  ngOnDestroy() {
    // unsubscribe to ensure no memory leaks
    // this.subscription.unsubscribe();
}
}
