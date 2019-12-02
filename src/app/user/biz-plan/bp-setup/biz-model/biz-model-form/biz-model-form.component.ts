import { Component, OnInit, ElementRef } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { BizModelService } from '../biz-model.service';
import { Company } from 'src/app/user/user-config/interface/company';
import { ProfileService } from 'src/app/user/services/profile-service/profile-service.service';
import { User } from 'src/app/user/user-config/interface/user';
import { MatSnackBar } from '@angular/material';

export interface IconState { id: String, name: String, color: String };
export interface Category { name: String, descriptions: String[] };

@Component({
  selector: 'app-biz-model-form',
  templateUrl: './biz-model-form.component.html',
  styleUrls: ['./biz-model-form.component.scss']
})
export class BizModelFormComponent implements OnInit {
   process: string = '';
   icon: string = 'cloud';
   colorOptions: string = 'primary';
   company: Company = { name: 'Azrin Company' };
   comForm = new FormGroup({
      nameCom           : new FormControl(`${this.company.name || ''}`, Validators.required),
      ssmCom            : new FormControl('', Validators.required),
      categoryCom       : new FormControl('', Validators.required)
   });   
   categories = [
         {  name: 'Information Technology', 
            descriptions: ['Develop computer applications', 'Develop website applications', 'Develop mobile applications']
         },
         {  name: 'Engineeering', 
            descriptions: ['Provides electrical engineering services', 'Provides electronic engineering services' ,'Provides mechanical engineering services']
         },
         {  name: 'Construction',
            descriptions: ['Provides high rise building services', 'Provides house building services' ]
         }
   ];
   profile: User;
   panelOpen: boolean;
   selected;

  constructor(
     private profileService: ProfileService,
     private bizService: BizModelService,
     private snackBar: MatSnackBar
  ) { }

  ngOnInit() { 
     this.profileService.profile.subscribe(
        (response: User) => {
            this.profile = response;
        }
     );

     this.bizService.compProfile.subscribe(
        (response: any) => {
           if(response && response._id) this.company = response;
           else this.company = null;
        }
     );
   }    

   get nameCom (){
      return this.comForm.get('nameCom');
   }

   get ssmCom(){
      return this.comForm.get('ssmCom');
   }

   get categoryCom(){
      return this.comForm.get('categoryCom');
   }

  saveInput(elem){    

      let elementId = elem._elementRef.nativeElement.id;
      let element = document.getElementById(elementId);      
      element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_upload');

      let input = element.getElementsByTagName('input')[0];
      let value = input.value;
      let name = input.name;
      let id: Company['id'] = this.company.id || '';
      let company = { name, value, id };

      this.bizService.edit({ company }).subscribe(
        (response: Company) => {
           if(response && response._id){

               element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_done');
               let msg = `${name} is sucessfully saved.`.toUpperCase();
               this.snackBar.open(msg, 'X', { duration: 5000, panelClass: 'lm__panel-primary' });
            }
            else{
               element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_off');
               this.snackBar.open('Save operation fail, please try again', 'X', { duration: 5000, panelClass: 'lm__panel-accent' });
            }
        },
        (error => {
               element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_off');
               this.snackBar.open('Save operation error, please try again', 'X', { duration: 5000, panelClass: 'lm__panel-warn' });
        })
     )

  }

  activeElem(elem){
     let elementId = elem._elementRef.nativeElement.id;
     let element = document.getElementById(elementId);
     element.getElementsByTagName('mat-icon')[0].firstChild.replaceWith('cloud_queue');
  }

  saveSelected(events){  
   //   console.log(events);
      let values: any[] = events.value;
      var k = [];
      let categories = values.reduce(( acc, value) => {
         let desc = value.split('-');
         let category = { name: desc[0], descriptions: desc[1] };
         k.push(category);
         acc = k;
         return acc;
      }, []);

      this.selected = categories;
      console.log(categories);



  }
}
