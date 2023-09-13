import { Component, OnInit } from '@angular/core';
import { Decision } from '../entities/decision';
import { DecisionDto } from '../entities/decision.dto';
import { AlternativeDto } from '../entities/alternative.dto';
import { CriteriaDto } from '../entities/criteria.dto';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-calculator',
  templateUrl: './calculator.component.html',
  styleUrls: ['./calculator.component.scss']
})
export class CalculatorComponent implements OnInit{

  decision:DecisionDto = new DecisionDto("","");
  alternativeNumber:number = 0;
  criterionNumber:number = 0;
  alternatives:AlternativeDto[] = [];
  criteria:CriteriaDto[] = [];

  altcritFormGroup!:FormGroup;
  valuesFormGroup!:FormGroup;
  resultsFormGroup!:FormGroup;

  constructor(  private _formBuilder: FormBuilder,) {

   }

  ngOnInit() {
    this.altcritFormGroup =this._formBuilder.group({
      name: ['',Validators.required],
      description: ['',Validators.required],
      alternativeNumber: ['',Validators.required],
      criteriaNumber: ['',Validators.required],
     
    });
    this.valuesFormGroup = this._formBuilder.group({
      alternativeNames: this._formBuilder.array([]),
      criterionNames: this._formBuilder.array([]),
      criteriaWeights: this._formBuilder.array([]),
      alternativeGrades: this._formBuilder.array([]),
    });
    this.resultsFormGroup = this._formBuilder.group({
      results: this._formBuilder.array([]),
    });
      
  }

  saveDecision() {
    console.log('saveDecision');
  }

}
