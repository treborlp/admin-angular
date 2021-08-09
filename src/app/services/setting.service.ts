import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SettingService {

  private link = document.querySelector('#theme');

  constructor() 
  {
    const urlTheme = localStorage.getItem('theme') || './assets/css/colors/purple-dark.css' // las dos barras indican el condicional en caso el local 
    this.link?.setAttribute('href', urlTheme);
  }
  
  changeTheme(theme: string)
  {
    const url = `./assets/css/colors/${theme}.css`;
    this.link?.setAttribute('href', url );
    localStorage.setItem('theme', url);
    
    this.checkAccountTheme();
  }
  
  checkAccountTheme(){
    const links = document.querySelectorAll('.selector'); 
    
    links.forEach(elem => 
      {
        elem.classList.remove('working'); //Removemos la clase "check"
        const theme = elem.getAttribute('data-theme');
        const btnTheme =  `./assets/css/colors/${theme}.css`;
        const currentTheme = this.link?.getAttribute('href');

        if( btnTheme === currentTheme ) //Si el tema del boton es igual al tema del index
          elem.classList.add('working')

      })
  }

}
