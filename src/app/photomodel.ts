import { HttpClient, HttpHeaders, HttpResponse } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

export class Category{
    constructor(public id:number,public title:string){}
}

export class Photo{
    constructor(public id:number,public name:string,public categoryId:number,public path:string){}
}
export class PhotoModel
{
    constructor(public photo:Photo, public photoFile:any){}
}
@Injectable({providedIn:'root'})
export class HttpCommunication
{
    baseUrl:string;
    constructor(private client:HttpClient){
       // this.baseUrl='http://localhost:5046';
       this.baseUrl="https://apiangularaz.azurewebsites.net";
    }
    getPhotos(id:number):Observable<Photo[]>{
        let path=`${this.baseUrl}/photos/${id}`;
        let result=this.client.get<Photo[]>(path);
        return result;
    }

    addPhoto(model:PhotoModel):Observable<Object>{
        let path=`${this.baseUrl}/add`;
        let frm=new FormData();
        frm.append("name",model.photo.name);
        frm.append("categoryId",model.photo.categoryId.toString());
        frm.append('file',model.photoFile.files[0]);
        let result=this.client.post(path,frm,{observe:'response'});
        return result;
    }
}