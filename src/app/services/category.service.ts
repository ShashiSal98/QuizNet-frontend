import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import baseUrl from './helper';
@Injectable({
  providedIn: 'root'
})
export class CategoryService {

  constructor(private http: HttpClient) { }

  public categories(requestHeader: any) {

    return this.http.get(`${baseUrl}/category/`, requestHeader)
  }

  // Add new category

  public addCategory(category: any, requestHeader: any) {
    return this.http.post(`${baseUrl}/category/`, category, requestHeader)
  }
}
