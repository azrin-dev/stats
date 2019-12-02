import { Component, OnInit } from '@angular/core';
import { CdkDragDrop, moveItemInArray, transferArrayItem } from '@angular/cdk/drag-drop';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-biz-model',
  templateUrl: './biz-model.component.html',
  styleUrls: ['./biz-model.component.scss'],
})
export class BizModelComponent implements OnInit {
   
   isLinear = false;
   todo = [
      '${company.name} is ${company.type} business speciaizing in ${company.specialization} which was established on ${company.est-date}.',
      '${company.name} is currently ${company.selling-activities} to ${company.market}.',
      '${company.name} is fully owned by ${company.shareholders}.',
      'Our last year total revenue was ${company.year.revenue} which generated ${company.year.pbt}.',
      'We are planning to expand our company in ${expansion.timeline} to cover ${expansion.area} to bolster/upgrade our sales and service activities in that area which could generate ${expansion.sales-forecast} in additional revenue for the company with projected ROI of ${expansion.roi}.',
      'We are planning to develop a new product ${npd} by ${npd.timeline} which will use ${npd.model} New Product Development Model and commercialized around ${npd.launch}.'
   ];
  done = [
   '${company.name} is ${company.type} business speciaizing in ${company.specialization} which was established on ${company.est-date}.'
   ];  
  title: string = 'About the Company & Business Model';
  text;
   //   Stepper and FormGroup
   firstFormGroup: FormGroup;

  constructor( private fb: FormBuilder ) {    

       

  };

  ngOnInit(){ 

      this.firstFormGroup = this.fb.group({
         firstCtrl: ['']
      });

  }

  drop(event: CdkDragDrop<string[]>) {       
   
      if (event.previousContainer === event.container) {
         moveItemInArray(event.container.data, event.previousIndex, event.currentIndex);
      } else {
         transferArrayItem(event.previousContainer.data,
            event.container.data,
            event.previousIndex,
            event.currentIndex);

            let datas = event.container.data;
            let k;
            let text = datas.map((data) => {
               if(k = '') k = `<p>${data}</p>`;
               else k = k + `<p>${data}</p>`;
               return k;
            });
            this.text = `${text}`;
      }
   }
}
