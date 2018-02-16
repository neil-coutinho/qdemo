import { ChangeDetectorRef, OnChanges, OnInit } from '@angular/core';
import { JsonSchemaFormService } from 'angular4-json-schema-form/src/json-schema-form.service';
export declare class QFrameworkComponent implements OnInit, OnChanges {
    changeDetector: ChangeDetectorRef;
    jsf: JsonSchemaFormService;
    frameworkInitialized: boolean;
    widgetOptions: any;
    widgetLayoutNode: any;
    options: any;
    formControl: any;
    debugOutput: any;
    debug: any;
    parentArray: any;
    isOrderable: boolean;
    layoutNode: any;
    layoutIndex: number[];
    dataIndex: number[];
    constructor(changeDetector: ChangeDetectorRef, jsf: JsonSchemaFormService);
    readonly showRemoveButton: boolean;
    ngOnInit(): void;
    ngOnChanges(): void;
    initializeFramework(): void;
    updateHelpBlock(status: any): void;
    setTitle(): string;
    removeItem(): void;
}
