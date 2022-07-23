import { Component, OnInit } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { ChitList } from 'src/app/models/chit-list.model';
import { AddEditChitComponent } from 'src/app/shared/components/add-edit-chit/add-edit-chit.component';
import { StorageService } from 'src/app/shared/services/storage.service';
@Component({
  selector: 'app-chitty-list',
  templateUrl: './chitty-list.component.html',
  styleUrls: ['./chitty-list.component.scss']
})
export class ChittyListComponent implements OnInit {
  todayDate: Date = new Date(); 
  chitList:ChitList[] = [];
  constructor(private dialog: MatDialog, private storageService: StorageService) { }

  ngOnInit(): void {
    this.getChitList();
  }

  getChitList(){
    this.chitList = this.storageService.getChitDetails() || [];
  }

  openDialog(data?:ChitList): void {
   this.dialog.open(AddEditChitComponent, {
      width: '410px',
      data,
      // disableClose: true
    }).afterClosed().subscribe(result => {
          this.getChitList();
    });
  }
}

