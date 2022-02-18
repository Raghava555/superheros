import { Component, OnInit, ViewChild } from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import { HttpClient} from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-super-heros-list',
  templateUrl: './super-heros-list.component.html',
  styleUrls: ['./super-heros-list.component.css']
})
export class SuperHerosListComponent implements OnInit {

  displayedColumns: string[] = ['name', 'aliase', 'birthplace', 'gender','occupation'];
  public dataSource = new MatTableDataSource<Object>([]);
  
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(private http: HttpClient,
    private router: Router) { }

  ngOnInit(): void {
    this.http.get("https://akabab.github.io/superhero-api/api/all.json").subscribe(val=>{
      this.dataSource = new MatTableDataSource(val as {}[]);
      this.dataSource.paginator = this.paginator;
    })
    
  }

  public getRecord(row: any){
this.router.navigate(['/detail'], {
  state: { val: row }
});
  }

}

export interface PeriodicElement {
  name: string;
  aliase: number;
  birthplace: number;
  occupation: string;
}

const ELEMENT_DATA: PeriodicElement[] = [];
