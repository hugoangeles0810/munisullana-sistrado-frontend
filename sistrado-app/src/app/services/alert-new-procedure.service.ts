import { Injectable } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AlertNewProcedureComponent } from '../alert-new-procedure/alert-new-procedure.component';

@Injectable({
  providedIn: 'root'
})
export class AlertNewProcedureService {

  constructor(private dialog: MatDialog) { }


  showAlertNew(title: string, message: string, callback?: () => void) {
    const dialogRef = this.dialog.open(AlertNewProcedureComponent, {
      data: {title: title, message: message}
    });
    
    dialogRef.afterClosed().subscribe(result => {
      if (callback) {
        callback();
      }
    });
  }
}
