import { Component, OnInit } from '@angular/core';
import { SettingService } from 'src/app/services/setting.service';

@Component({
  selector: 'app-account-settings',
  templateUrl: './account-settings.component.html',
  styles: [
  ]
})
export class AccountSettingsComponent implements OnInit {
  public link = document.querySelector('#theme');
  
  constructor(private settingService: SettingService) {}
  
  ngOnInit(): void {
    this.settingService.checkAccountTheme();
  }
  
  changeTheme(theme: string)
  {
    this.settingService.changeTheme(theme);
  }

}
