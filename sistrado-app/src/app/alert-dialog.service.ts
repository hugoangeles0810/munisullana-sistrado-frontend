import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertDialogComponent } from './alert-dialog/alert-dialog.component';

@Injectable({
  providedIn: 'root'
})
export class AlertDialogService {

  constructor(private dialog: MatDialog) { }


  showAlert(title: string, message: string, callback?: () => void) {
    const dialogRef = this.dialog.open(AlertDialogComponent, {
      data: {title: title, message: message}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (callback) {
        callback();
      }
    });
  }
}
