import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import { UploadService } from '../upload.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  fileToUpload: File = null;

  constructor(private authService: AuthService,
              private router: Router,
              private uploadService: UploadService) { }

  ngOnInit(): void {
  }

  handleFileInput(files: FileList) {
    this.fileToUpload = files.item(0);
    this.uploadFileToActivity();
  }

  uploadFileToActivity() {
    this.uploadService.postFile(this.fileToUpload).subscribe(data => {
      // do something, if upload success
        console.log(data);
      }, error => {
        console.log(error);
      });
  }

  logout() {
    this.authService.logout();
    this.router.navigate(['/login']);
  }
}
