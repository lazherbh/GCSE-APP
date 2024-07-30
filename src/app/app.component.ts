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


  scrollToSection(sectionId: string) {
    const sectionElement = document.getElementById(sectionId);
    const offset = 128;
    if (sectionElement) {
      const targetScroll = sectionElement.offsetTop - offset;
      window.scrollTo({
        top: targetScroll,
        behavior: 'smooth',
      });
      this.open = false;
    }
  }
}
