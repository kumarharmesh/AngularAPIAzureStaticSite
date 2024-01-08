import { Component } from '@angular/core';
import { HttpCommunication, Photo } from '../photomodel';

@Component({
  selector: 'app-photo',
  templateUrl: './photo.component.html',
  styleUrls: ['./photo.component.css']
})
export class PhotoComponent {
  photos!:Photo[];
  errorMsg!:string;
  constructor(private service:HttpCommunication){}
  ngOnInit(){}

  getPhotos(id:string):void{
     this.service.getPhotos(parseInt(id)).subscribe({
      next:(resp)=>this.photos=resp,
      error:err=>this.errorMsg=err.message
     });
  }
}
