import { OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { JsonSchemaFormService } from '../../../node_modules/angular4-json-schema-form/src/json-schema-form.service';
export declare class QInputComponent implements OnInit {
    private jsf;
    formControl: AbstractControl;
    controlName: string;
    controlValue: string;
    controlDisabled: boolean;
    boundControl: boolean;
    options: any;
    autoCompleteList: string[];
    layoutNode: any;
    layoutIndex: number[];
    dataIndex: number[];
    constructor(jsf: JsonSchemaFormService);
    ngOnInit(): void;
    updateValue(event: any): void;
}
