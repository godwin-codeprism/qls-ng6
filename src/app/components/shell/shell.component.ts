import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { MatBottomSheet, MatBottomSheetRef } from '@angular/material';
import { ActivatedRoute, Params } from '@angular/router';

import { EnquiryComponent } from '../enquiry/enquiry.component';

@Component({
  selector: 'qls-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent implements OnInit {
  private coursesList: string[];
  
  constructor(private bottomSheet: MatBottomSheet, private route: ActivatedRoute) {
    this.coursesList = this.route.snapshot.data.coursesList;
  }
  ngOnInit() {
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
