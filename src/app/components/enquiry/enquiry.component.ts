import { Component, OnInit, Inject, inject } from '@angular/core';
import { MAT_BOTTOM_SHEET_DATA, MatBottomSheetRef } from '@angular/material';

@Component({
  selector: 'qls-enquiry',
  templateUrl: './enquiry.component.html',
  styleUrls: ['./enquiry.component.scss']
})
export class EnquiryComponent implements OnInit {

  constructor(private bottomSheetRef: MatBottomSheetRef<EnquiryComponent>, @Inject(MAT_BOTTOM_SHEET_DATA) public data: any) { }

  openLink(event: MouseEvent): void {
    // this.bottomSheetRef.dismiss();
    event.preventDefault();
  }

  ngOnInit() {
    console.log(this.data);
  }

}
