import { Component, OnInit, SimpleChange } from '@angular/core';
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
@Component({
  selector: 'qls-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  public coursesList: string[] = [
    "Select a course",
    "ITIL Foundation",
    "ITIL Service Strategy",
    "ITIL Service Design",
    "ITIL Service Transition",
    "ITIL Service Operation",
    "ITIL Continual Service Improvement",
    "ITIL Service, Offering and Agreement (SOA)",
    "ITIL Planning, Protection and Optimization (PPO)",
    "ITIL Release, Control and Validation (RCV)",
    "ITIL Operational, Support and Analysis (OSA)",
    "ITIL®  Managing Across The Lifecycle",
    "SIAM Foundation",
    "CAPM",
    "PMP",
    "ACP",
    "Prince2 Foundation",
    "Prince2 Practitioner",
    "Prince2 Agile",
    "Scrum Master",
    "Certified Scrum Product Owner (CSPO)",
    "Managing Successful Programs",
    "SAFe 4.5 (SAFe Agilist)",
    "DevOps Master",
    "Six Sigma Green Belt",
    "Six Sigma Black Belt",
    "COBIT 5 Foundation",
    "TOGAF 9.1 Level  1 & Level 2"
  ]
  public events: any[];
  public courses: any[];
  private courses_orginal:any[];
  public coursesQuery: string;
  private events_url: string = '../../assets/data/events.json';
  private courses_url: string = '../../assets/data/courses.json';
  constructor(private http: HttpClient) { }
  testVar: string = "Vinny Carole Godwin";
  ngOnInit() {
    this.getEventsData().subscribe(data => {
      this.events = data;
      this.injectSliderData(this.events);
    })
    this.getCoursesData().subscribe(data => {
      this.courses_orginal = data;
      this.courses = [...this.courses_orginal];
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
