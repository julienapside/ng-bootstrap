import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class WorkoutsApiService {

  private baseUrl = 'http://localhost/4000';

  constructor(private http: HttpClient) { }

  getWorkouts(){
    return this.http.get<any[]>(`${this.baseUrl}/workouts`);
  }

  getWorkout(id){
    return this.http.get<any>(`${this.baseUrl}/wourkouts/${id}`);
  }

  addWorkout(workout: any){
    return this.http.post(`${this.baseUrl}/workouts`, workout);
  }

  updateWorkout(workout: any){
    return this.http.put(`${this.baseUrl}/workouts/${workout.id}`, workout);
  }

  deleteWorkout(id) {
    return this.http.delete(`${this.baseUrl}/workouts/${id}`);
  }

  saveWorkout(workout: any){
    if(workout.id){
      return this.updateWorkout(workout);
    } else {
      return this.addWorkout(workout);
    }
  }
}
