import { DatePipe } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Surgery } from 'src/app/models/surgery';
import { SurgeryService } from 'src/app/services/surgery.service';

@Component({
  selector: 'app-view-todays-surgery',
  templateUrl: './view-todays-surgery.component.html',
  styleUrls: ['./view-todays-surgery.component.scss']
})

export class ViewTodaysSurgeryComponent implements OnInit {

  surgeryList: Surgery[] | null = [];
  errorMsg: any = null;

  
  constructor(private surgeryService:SurgeryService, private router: Router, private datePipe : DatePipe){
  }
  ngOnInit(): void {
    this.getTodaySurgery()
  }
  getTodaySurgery() : void {
    this.surgeryService.getSurgeriesForToday().subscribe(value => {
      this.surgeryList = value;
      if(this.surgeryList.length == 0)
      {
        this.surgeryList = null;
        this.errorMsg = "No Surgery Scheduled For Today";
      }
    },
    error => {
      console.log("Some Error Occured while Fetching Today's Surgery List", error)
      this.surgeryList = null;
      this.errorMsg = error;
    },
    () => {
      console.log("Today's Surgery Fetched Successfully");
    }
    );
  }

  editSurgery(surgeryId : number) : void {
    this.router.navigate(['/surgery/update-surgery/',surgeryId]);
  }

  getCurrentDate(): string | null {
    return this.datePipe.transform(new Date(),"yyyy-MM-dd"); // A method to get today's date
  }
  getSurgeryDate(surgeryDate : Date) : string | null{
    return this.datePipe.transform(surgeryDate,"yyyy-MM-dd");
  }

}
