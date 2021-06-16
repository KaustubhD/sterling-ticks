import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpEventType } from '@angular/common/http';
import { FileUploadService } from 'src/app/services/file-upload.service';
 
@Component({
  selector: 'file-upload',
  templateUrl: './file-upload.component.html',
  styleUrls: ['./file-upload.component.css']
})
 
export class FileUploadComponent implements OnInit {
 
  fileData: File;
  previewUrl:any = null;
  fileUploadProgress: string;
  uploadedFilePath: string;
  alert: boolean;
  constructor(private service: FileUploadService) { }
   
  ngOnInit() {
  }
   
  fileProgress(fileInput: any) {
      this.fileData = <File>fileInput.target.files[0];
      this.preview();
  }
 
  preview() {
    var mimeType = this.fileData.type;
    if (mimeType.match(/image\/*/) == null) {
      return;
    }
 
    var reader = new FileReader();      
    reader.readAsDataURL(this.fileData); 
    reader.onload = (_event) => { 
      this.previewUrl = reader.result; 
    }
  }
   
  async onSubmit() {
      const uploadData = new FormData();
      uploadData.append('file', this.fileData);
      console.log(uploadData);
      this.fileUploadProgress = '0%';
      (await this.service.submit(uploadData)).subscribe(events => {
        if(events.type === HttpEventType.UploadProgress) {
          const total: number = events.total as number;
          this.fileUploadProgress = Math.round(events.loaded / total) + '%';
        } else if(events.type === HttpEventType.Response) {
          this.fileUploadProgress = '';
          alert('Upload Sucess !!');
        }
           
      }) 
  }
}