import {Component, Input,Output,EventEmitter, OnInit} from '@angular/core';
import {Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'search-bar',
  templateUrl: './search-bar.component.html',
  styleUrls: ['./search-bar.component.css']
})
export class SearchBarComponent implements OnInit {
  @Input() filterText: string = '';
  private $event: any;
  @Output() name = new EventEmitter<string>();

  constructor(private router: Router, private route: ActivatedRoute){ }

  sendFilter($event: string) {
    console.log($event)
    this.router.navigate(['/'], {queryParams: {name: this.filterText}});
    this.name.emit(this.filterText);
  }
  ngOnInit(): void {
    this.route.queryParams.subscribe(params => {
      this.filterText = params['name'];
      this.sendFilter(this.$event);
    });
  }



}
