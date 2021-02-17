import { Component, OnInit } from '@angular/core';
import { TodoService } from 'src/app/service/todo.service';
@Component({
  selector: 'app-regComplete',
  templateUrl: './regComplete.component.html',
  styleUrls: ['./regComplete.component.css']
})


export class regCompleteComponent implements OnInit {
 

  constructor(private todoServcie:TodoService, ) { 
    
  }
  public todoContactText:ContactgText[];
  public line_id:any;
  public image_name:any;
  public image_type:any;
  ngOnInit() {
    //call service
    this.todoServcie.getSetting(2).subscribe((response)=>{
      if(response.success==true){
        this.line_id = response.data.website_text;
      }else{
        this.line_id = '';
      }
    });

    this.todoServcie.getSetting(4).subscribe((response)=>{
      if(response.success==true){
        this.image_name = response.data.pupn_image_filename;
        this.image_type = response.data.pupn_image_type;
      }else{
        this.image_name = '';
        this.image_type = '';
      }
    });
    
    this.todoServcie.getTextContext().subscribe((response)=>{
        //this.sanitizedURL = this.sanitizer.bypassSecurityTrustResourceUrl(response.data.contact_text_detail)['changingThisBreaksApplicationSecurity']; 
        //console.log(response.data.contact_text_detail);
        this.todoContactText = response.data.contact_text_detail;
    });
  }

}

interface ContactgText {
  contact_text_id :string;
  contact_text_title :string;
  contact_text_detail :string;
  contact_text_sort :string;
  contact_text_hide :string;
  contact_text_delete :string;
  contact_text_create_by :string;
  contact_text_update_by :string;
  contact_text_create_date :string;
  contact_text_update_date :string;
}