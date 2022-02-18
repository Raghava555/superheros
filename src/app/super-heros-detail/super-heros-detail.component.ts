import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-heros-detail',
  templateUrl: './super-heros-detail.component.html',
  styleUrls: ['./super-heros-detail.component.css']
})
export class SuperHerosDetailComponent implements OnInit {
public details: any;
public id: any;
public detailData: any;

public url = "https://akabab.github.io/superhero-api/api/id";
  constructor(private router: Router,
    private http: HttpClient,) { 
    this.details = this.router.getCurrentNavigation()?.extras.state;
  }

  // `${this.usersDataUrl}/${month}/${year}`);
  ngOnInit(): void {
    this.id = this.details.val.id;
    this.http.get(`${this.url}/${this.id}.json`).subscribe(val => {
      this.detailData = val;
    });
  }

}
