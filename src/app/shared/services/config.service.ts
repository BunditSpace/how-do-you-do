import { Injectable } from '@angular/core';
 
@Injectable()
export class ConfigService {
     
    private _apiURI : string;
 
    constructor() {
        this._apiURI = 'http://localhost:3000';
     }
 
     getApiURI() {
         return this._apiURI;
     }
}