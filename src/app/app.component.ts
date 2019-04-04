import { Component } from '@angular/core';

interface Actor {
  name: string;
  age: number;
}

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  moneyInAccount = 0;
  isGreen = false
  value = 1
  showSomethingElseDIV = (this.value !== 1 && this.value !== 2) ? true : false;
  title = 'directives';
  divEnabled = false;
  actors:Array<Actor> = [
    {
      name: 'Sean Connery',
      age: 81
    },
    {
      name: 'Clint Eastwood',
      age: 91
    },
    {
      name: 'Scarlett Johanson',
      age: 37
    }
  ];

  enableDiv() {
    this.divEnabled = !this.divEnabled;
  }

  addActor() {
    const newActor: Actor = {
      name: 'Brad Pitt',
      age: 55
    };

    this.actors.push(newActor);
  }

  onChange(e) {
    this.isGreen = (e >= 10000) ? true : false;
  }
}
