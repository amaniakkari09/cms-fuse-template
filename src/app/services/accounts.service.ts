import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Account } from "app/accounts/accounts/Account";
import { Observable } from "rxjs";

@Injectable({providedIn: "root"} )
export class AccountsService {
    
    constructor(private http: HttpClient){}

    findAll(): Observable<Account[]>{
        return this.http.get<Account[]>("http://localhost:3000/api");
    }

}