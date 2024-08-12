import { Component, Input } from '@angular/core';
import { ThemePalette } from '@angular/material/core';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  @Input() mode: ThemePalette;
  @Input() toggleColorMode: () => void=()=>{
   
  };
  
  open = false;

  toggleDrawer(newOpen: boolean) {
    this.open = newOpen;
  }
  title = 'GCSE-App';
  logoStyle = {
    width: '140px',
    height: 'auto',
    cursor: 'pointer',
  };

  logout() {
    
}
links   
= [
   { label: 'Docs', url: '/docs' },
   { label: 'Community', url: '/community' },
   { label: 'Blog', url: '/blog' }
 ];
}
