import { Injectable } from '@angular/core';
import { HttpClient} from  '@angular/common/http';

@Injectable()
export class ApiService {
  API_URL  =  'https://api.devrant.thusitha.site';
  constructor(private  httpClient:  HttpClient) {}
  getContacts(){
      return  this.httpClient.get(`${this.API_URL}/contacts`);
  }
}
