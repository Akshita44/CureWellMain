import { Injectable } from "@angular/core";
<<<<<<< HEAD
import { Surgery } from "../models/surgery";
import { Observable } from "rxjs";
import { HttpClient } from '@angular/common/http';


@Injectable({
    providedIn: 'root'
  })
  
export class SurgeryService {
    private baseUrl = "https://localhost:44352/api/home";

    constructor(private http : HttpClient){}

    updateSurgery(surgery : Surgery) : Observable<boolean>{
        return this.http.put<boolean>(`${this.baseUrl}/UpdateSurgery`, surgery);
    }

    getSurgeriesForToday() : Observable<Surgery[]>{
        return this.http.get<Surgery[]>(`${this.baseUrl}/allSurgeries`);
    }

    getSurgeryById(surgeryId: number) : Observable<Surgery>{
        return this.http.get<Surgery>(`${this.baseUrl}/GetSurgeryById/${surgeryId}`);
    }

}
=======

import { Surgery } from "../models/surgery";

import { Observable } from "rxjs";

import { HttpClient } from '@angular/common/http';

 

 

@Injectable({

    providedIn: 'root'

  })

 

export class SurgeryService {

    private baseUrl = "http://localhost:44352/api/home";

 

    constructor(private http : HttpClient){}

 

    getSurgeriesForToday() : Observable<Surgery[]>{

        return this.http.get<Surgery[]>(`${this.baseUrl}/allSurgeries`);

    }

 

    getSurgeryById(surgeryId: number) : Observable<Surgery>{

        return this.http.get<Surgery>(`${this.baseUrl}/GetSurgeryById/${surgeryId}`);

    }

    updateSurgery(surgery : Surgery) : Observable<boolean>{

        return this.http.put<boolean>(`${this.baseUrl}/UpdateSurgery`, surgery);

    }

 

}
>>>>>>> 33e55a6c1d59838dd8adae203104cbfd0b8893e6
