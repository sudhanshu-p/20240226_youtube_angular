import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';


/* Using Rxjs, we can create a shared Data's service. 
This makes it easier to fetch this data in any of the routes that are required.
Considering the scope of the project, this was the better option vs RouteData.
*/
@Injectable({
    providedIn: 'root'
})
export class DataService {

    private dataSubject = new BehaviorSubject<any>(null);
    videoData$ = this.dataSubject.asObservable();

    setData(videoData: any) {
        this.dataSubject.next(videoData);
    }
}
