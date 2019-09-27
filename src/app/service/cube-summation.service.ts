import { Injectable } from '@angular/core';
import { HttpResponse, HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { TestCase } from '../model/test-case.model';

type responseType = HttpResponse<number[]>;

@Injectable({
    providedIn: 'root'
})
export class CubeSummationService {

    private readonly pathService = environment.urlApi + '/solucionar';

    constructor(private httpClient: HttpClient) {}

    public resolver(testsCases: TestCase[]): Observable<responseType> {
        return this.httpClient.post<number[]>(this.pathService, testsCases, {observe: 'response'});
    }
}
