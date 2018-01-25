import { Component, OnInit } from '@angular/core';
import { IActivity } from '../shared/activity.model';
import {  ActivityService } from '../services/activity.service';
import { SelectItem, FileUpload } from 'primeng/primeng';
@Component({
  selector: 'app-activity-list',
  templateUrl: './activity-list.component.html',
  styleUrls: ['./activity-list.component.css']
})
export class ActivityListComponent implements OnInit {

  activities: IActivity[];
  totalActivities: number;
  totalDistance: number;
  firstDate: Date;
  display = false;
  file: File;
  label = '';
  isEdit: boolean;
  constructor(private _activityService: ActivityService) { }

  ngOnInit() {
    this.activities = this._activityService.getActivities();
    this.totalActivities = this._activityService.getTotalActivities(this.activities);
    this.totalDistance = this._activityService.getTotalDistance(this.activities);
    this.firstDate = this._activityService.getFirstDate(this.activities);
  }


// for PopUp Box

showDialog() {
    this.display = true;
    console.log('hey u got logged');
}

hideDialog() {
  this.display = false;
}


onSelect(event: any, element: any) {
  if (element.msgs && element.msgs.length > 0) { // msgs are the messages of errors/validations
      element.clear();

      return; // return if you wanna break
  }

  if (event.files && event.files.length) {
      this.file = event.files[0];
      this.label = this.file.name;
  }
}

onEdit() {
  this.isEdit = true;
}

}
