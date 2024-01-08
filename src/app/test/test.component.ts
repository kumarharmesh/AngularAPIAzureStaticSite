import { Component } from '@angular/core';

@Component({
  selector: 'app-test',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css']
})
export class TestComponent {
  show=true;
  styleObj={fontSize:'20px',fontFamily:'arial'};
  
  getStyle(){
    return {fontSize:'26px',fontFamily:'courier new'};
  }
  
  onclick(){
    this.styleObj=this.getStyle();
  }
}
