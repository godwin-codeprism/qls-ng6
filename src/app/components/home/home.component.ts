import { Component, OnInit, SimpleChange, Input } from '@angular/core';
import {ActivatedRoute, Params} from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { NgModel } from '@angular/forms';

interface IEvents {
  training: string;
  date: string;
  location: string;
  slider?: string;                              
}
interface ICourses {
  image: string,
  title: string,
  text: string,
  url: string
}
interface ITestimonials{
  name: string,
  message: string,
  image:string         
}
interface IClients{
  name:string,
  logo:string
}

@Component({
  selector: 'qls-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
  inputs:[`coursesList`]
})

export class HomeComponent implements OnInit {
  public events: any[];
  public courses: any[];
  public coursesQuery: string;
  public testimonials: any[];
  public clients: any[];

  private courses_orginal:any[];
  private events_url: string = '../../assets/data/events.json';
  private courses_url: string = '../../assets/data/courses.json';
  private testimonials_url: string = '../../assets/data/testimonials/testimonials.json';
  private clients_url:string = '../../assets/data/clients/clients.json';

  constructor(private http: HttpClient, private route:ActivatedRoute) { }
  ngOnInit() {
    console.log(this.route.snapshot.data.coursesList);
    this.getEventsData().subscribe(data => {
      this.events = data;
      this.injectSliderData(this.events);
    })
    this.getCoursesData().subscribe(data => {
      this.courses_orginal = data;
      this.courses = [...this.courses_orginal];
    })
    this.getTestimonials().subscribe(data => {
      this.testimonials = data;
    })
    this.getClients().subscribe(data => {
      this.clients = data;
    })
  }
  filterCourseCards(e: any) {
    this.courses = [...this.courses_orginal];
    this.courses = this.courses.filter(val => val['title'].toLowerCase().indexOf(e.toLowerCase()) > -1);
  }
  getEventsData(): Observable<IEvents[]> {
    return this.http.get<IEvents[]>(this.events_url);
  }
  getCoursesData(): Observable<ICourses[]> {
    return this.http.get<ICourses[]>(this.courses_url);
  }
  getTestimonials(): Observable<ITestimonials[]>{
    return this.http.get<ITestimonials[]>(this.testimonials_url);
  }
  getClients():Observable<IClients[]>{
    return this.http.get<IClients[]>(this.clients_url);
  }
  injectSliderData(arr: any[]) {
    arr.forEach((obj, inx) => {
      let tr: string = obj.training.toLowerCase();
      if (tr.match(/itil/) && tr.match(/foundation/)) {
        this.events[inx]["slider"] = "slider_itil_foundation";
      } else if (tr.match(/itil/) && tr.match(/intermediate/)) {
        this.events[inx]["slider"] = "slider_itil_intermediate";
      } else if (tr.match(/itil/) && tr.match(/expert/)) {
        this.events[inx]["slider"] = "slider_itil_expert";
      } else if (tr.match(/itil/) && tr.match(/service/)) {
        this.events[inx]["slider"] = "slider_itil_service";
      } else if (tr.toUpperCase().match(/PMP/)) {
        this.events[inx]["slider"] = "slider_pmp";
      } else if (tr.toUpperCase().match(/PMI/)) {
        this.events[inx]["slider"] = "slider_pmi";
      } else if (tr.match(/prince2/)) {
        this.events[inx]["slider"] = "slider_prince2f_p";
      } else if (tr.match(/scrum/)) {
        this.events[inx]["slider"] = "slider_scrum";
      } else if (tr.match(/green/) && tr.match(/belt/)) {
        this.events[inx]["slider"] = "slider_green_belt";
      } else if (tr.match(/black/) && tr.match(/belt/)) {
        this.events[inx]["slider"] = "slider_black_belt";
      } else if (tr.match(/cobit/)) {
        this.events[inx]["slider"] = "slider_cobit";
      } else if (tr.match(/safe/)) {
        this.events[inx]["slider"] = "slider_safe";
      } else if (tr.match(/devops/)) {
        this.events[inx]["slider"] = "slider_devops";
      } else if (tr.toUpperCase().match(/CSPO/) || (tr.toUpperCase().match(/scrum product/))) {
        this.events[inx]["slider"] = "slider_cspo";
      } else {
        this.events[inx]["slider"] = "slider_" + inx;
      }
    });
  }

}
