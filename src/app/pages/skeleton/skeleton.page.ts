import { Component, OnInit, ViewChild } from '@angular/core';
import { IonSegment } from '@ionic/angular';
import { DataService } from '../../services/data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-skeleton',
  templateUrl: './skeleton.page.html',
  styleUrls: ['./skeleton.page.scss'],
})
export class SkeletonPage implements OnInit {

  @ViewChild(IonSegment, { static: false }) segment: IonSegment;
  superheros: Observable<any[]>;
  publisher = '';
  skeletonTextArray: Array<any> = Array(20);

  constructor(private dataService: DataService) { }

  ngOnInit() {
    this.superheros = this.dataService.getSuperheroes();
    console.log(this.superheros);
    this.superheros.forEach(element => {
      console.log(element);
    });
    // this.segment.value = 'todos';
    // console.log(this.segment.value);
  }

  segmentChanged(event) {
    const segmentValue = event.detail.value;
    if ( segmentValue === 'todos' ) {
      this.publisher = '';
      return;
    }

    this. publisher = segmentValue;
  }

}
