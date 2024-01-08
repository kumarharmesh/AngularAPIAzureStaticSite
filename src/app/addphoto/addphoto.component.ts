import { Component } from '@angular/core';
import { HttpCommunication, Photo, PhotoModel } from '../photomodel';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addphoto',
  templateUrl: './addphoto.component.html',
  styleUrls: ['./addphoto.component.css']
})
export class AddphotoComponent {
  file:any;
  errorMsg:string='';
  constructor(private service:HttpCommunication,private router:Router){}
  upload(f:any):void {
    this.file=f;
  }
  add(name:string,categoryId:string):void{
    let photo=new Photo(0,name,parseInt(categoryId),'');
    let model=new PhotoModel(photo,this.file);
    this.service.addPhoto(model).subscribe({
      next:(resp)=>{
        this.router.navigate(['photo']);
      },
      error:er=>this.errorMsg=er.message
    });
  }
}
