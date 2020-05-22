import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface UnsplashResponse {
  urls: {
    regular: string;
  }
}

@Injectable({
  providedIn: 'root'
})
export class PhotoFetchService {

  constructor(private http: HttpClient) { }


  getFoto() {
    return this.http.get<UnsplashResponse>('https://api.unsplash.com/photos/random', {
      headers: {
        Authorization: 'Client-ID 1Dxe7nfiOjkFbxz6D9kIbt4j51j0PIfGwbFJAs-f0yI'
      }
    });
  }
}
