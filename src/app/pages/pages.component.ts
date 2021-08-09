import { Component, OnInit } from '@angular/core';
import { SettingService } from '../services/setting.service';

declare function initCustomFunctions(): any;

@Component({
  selector: 'app-pages',
  templateUrl: './pages.component.html',
  styles: [
  ]
})
export class PagesComponent implements OnInit {
  
  
  constructor(private settingService: SettingService) { }

  ngOnInit(): void {
    initCustomFunctions();
  }

}
