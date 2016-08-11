import {Component} from "@angular/core";
import {WorkoutService} from "../../services/workout.service";

@Component({
  templateUrl: 'build/pages/workouts/workouts.html',
  providers: [WorkoutService]
})

export class WorkoutComponent{

  constructor(private _workoutService: WorkoutService){

  }

}
