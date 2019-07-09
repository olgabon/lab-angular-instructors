import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-offer',
  templateUrl: './offer.component.html',
  styleUrls: ['./offer.component.scss']
})
export class OfferComponent implements OnInit {
  newPost = "No Content";
  enteredValue = "";
  commentsValue = "";
  emailValue = "";
  travelValue = "";
  rateValue = ""

  constructor() { }

  ngOnInit() {
  }

  onAddPost(postInput: HTMLTextAreaElement){
    this.newPost = this.enteredValue
    this.newPost = this.commentsValue
    this.newPost = this.emailValue
    this.newPost = this.travelValue
    this.newPost = this.rateValue
  }
}
