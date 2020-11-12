import { Injectable } from '@angular/core';
import { Survey } from './survey.model';
import { StaticDataSource } from './static.datasource';
import { RestDataSource } from './rest.datasource';
import { Observable } from 'rxjs';

@Injectable()
export class SurveyRepository
{
    private surveys: Survey[] = [];
    private titles: string[] = [];

    constructor(private datasource: RestDataSource)
    {
        datasource.getSurveys().subscribe(data => {
            this.surveys = data;
            this.titles= data.map(s => s.title)
                .filter((n, index, array) => array.indexOf(n) === index).sort();
        });
    }
    editSurvey(id:number, survey)
    deleteSurvey(id:number)
    {  
        this.datasource.deleteSurvey(id);
    }
    saveSurvey(survey: Survey): Observable<Survey>
    {
        return this.datasource.addSurvey(survey);
    }
    getSurveys(title: string = null): Survey[]
    {
        return this.surveys
            .filter(s => title == null || title === s.title);
    }
    getSurvey(id: number): Survey
    {
        return this.surveys.find(s => s._id === id);
    }

    getTitles(): string[]
    {
        return this.titles;
    }
}