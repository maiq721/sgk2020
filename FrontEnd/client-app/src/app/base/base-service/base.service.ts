import { Injectable } from '@angular/core';

import { HttpHeaders, HttpClient } from '@angular/common/http';
import { ConfigService } from './app-config.service';
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

export class BaseService {

    protected hostApi: string = ConfigService.settings.apiServer;

    getApiURL(subURL: string) {
        return this.hostApi + subURL;
    }
    encodeBase64(input) {
        return btoa(encodeURIComponent(input));
    }

}