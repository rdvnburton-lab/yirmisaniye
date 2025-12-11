import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class AdminService {
    private apiUrl = '/api/admin';

    constructor(private http: HttpClient) { }

    getQuestions(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/questions`);
    }

    addQuestion(question: any): Observable<any> {
        return this.http.post(`${this.apiUrl}/questions`, question);
    }

    updateQuestion(id: number, question: any): Observable<any> {
        return this.http.put(`${this.apiUrl}/questions/${id}`, question);
    }

    deleteQuestion(id: number): Observable<any> {
        return this.http.delete(`${this.apiUrl}/questions/${id}`);
    }

    getSubjectsAndTopics(): Observable<any[]> {
        return this.http.get<any[]>(`${this.apiUrl}/subjects-topics`);
    }
}
