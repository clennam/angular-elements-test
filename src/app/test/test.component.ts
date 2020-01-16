import { Component, OnInit, ViewEncapsulation, Input } from '@angular/core';
import * as config from "../../assets/config/property.json";

@Component({
  selector: 'app-test-component',
  templateUrl: './test.component.html',
  styleUrls: ['./test.component.css'],
  encapsulation: ViewEncapsulation.ShadowDom
})
export class TestComponent implements OnInit {
  @Input() base: string = undefined;
  @Input() test: string;
  config = config;

  constructor() { }

  ngOnInit() {
  }

}
