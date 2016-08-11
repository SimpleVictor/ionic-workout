import {Injectable} from "@angular/core";
import 'rxjs/Rx';
import {Http} from "@angular/http";

@Injectable()
export class WorkoutService{

  apiKey:string = 'IuPhLtwFSBieR_yo1NkicZuksWoaluId';
  workoutsUrl:string = 'https://api.mlab.com/api/1/databases';

  constructor(private _http: Http){
    console.log('Service connected...');

  }

  getWorkouts(){
    console.log(this._http);
  }

}
