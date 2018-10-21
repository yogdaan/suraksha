import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-explore',
  templateUrl: './explore.page.html',
  styleUrls: ['./explore.page.scss'],
})
export class ExplorePage implements OnInit {

  selected="Earthquake";

  constructor() { }

  onChange(value){
    this.selected = value;
    console.log(this.selected)
  }

  ngOnInit() {

  }

}
