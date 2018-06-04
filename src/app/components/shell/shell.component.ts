import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';

import { EnquiryComponent } from '../enquiry/enquiry.component';
import QLSPaths from '../../config/paths';

@Component({
  selector: 'qls-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  private coursesList: string[];
  public url: Object = Object.keys(QLSPaths).reduce((paths, path): Object => { paths[path] = "/" + QLSPaths[path].url; return paths; }, {});
  constructor(private bottomSheet: MatBottomSheet, private route: ActivatedRoute) {
    this.coursesList = this.route.snapshot.data.coursesList;
  }
  ngOnInit() {
    console.log(this.url);
  }
  openBottomSheet(): void {
    this.bottomSheet.open(EnquiryComponent, {
      ariaLabel: "Enquiry Form",
      data: {
        courses: this.coursesList
      }
    });
  }

}
