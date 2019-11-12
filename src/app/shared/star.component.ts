import { Component, OnChanges, Input } from '@angular/core';

@Component({
  selector : 'pm-star',
  templateUrl: './star.component.html',
  styleUrls: ['./star.component.css']
  })
export class StartComponent implements OnChanges {


  @Input() rating ;
  starWidth: number;

  ngOnChanges(): void {
      this.starWidth = this.rating * 75 / 5;
  }

}
