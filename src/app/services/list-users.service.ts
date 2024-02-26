import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Users } from '../interfaces/users.interface';

@Injectable({
  providedIn: 'root'
})
export class ListUsersService {

  public urlListUsers: string;
  public urlUserById: string;

  constructor(private http: HttpClient) {
    this.urlListUsers = 'https://jsonplaceholder.typicode.com/users';
    this.urlUserById = 'https://jsonplaceholder.typicode.com/todos/'
   }

   getListUsers(): Observable<Users> {
    return this.http.get<Users>(this.urlListUsers);
   }

   getUserById(id: number): Observable<any> {
    return this.http.get<any>(`${this.urlUserById}${id}`);
   }
}
