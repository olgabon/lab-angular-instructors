import { Component, OnInit } from '@angular/core';
import { Instructor } from '../instructor.model'
import { ApiService } from '../api.service';
import { Router } from '@angular/router'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  instructors$: Instructor[];

  constructor(private apiService: ApiService, 
              private router: Router){

  }

  ngOnInit() {
    this.apiService.getData().subscribe(data => this.instructors$ = data)
    //console.log(data)

  }
  onClick(instructorId){
    this.router.navigate(['/profile', instructorId])
  }
}
