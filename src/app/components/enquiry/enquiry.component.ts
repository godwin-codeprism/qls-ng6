import { Component, OnInit, Inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'qls-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss'],
})
export class EnquiryComponent implements OnInit {
  public courses: string[];
  constructor(private bottomSheetRef: MatBottomSheetRef<EnquiryComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { 
    this.courses = this.data.courses;
  }
  ngOnInit() {
  }

}
