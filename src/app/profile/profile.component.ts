import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { ApiService } from '../api.service';
import { Instructor } from '../instructor.model'
import {Observable,of, from } from 'rxjs';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {
  instructor: Observable<Instructor>
constructor(private route: ActivatedRoute,
            private apiService: ApiService){}

  ngOnInit() {
    
     const id = +this.route.snapshot.paramMap.get('id')
     //debugger
     this.instructor = this.apiService.getInstructor(id)
     //debugger
}
}
