import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  Disco = {
    img: "../assets/imgs/the wall.jpg",
    titulo: "The Wall",
    artista: "Pink Floyd ",
    estrellas: "★★★★✩",
    play: "►",
    anio: "1979"
  }

  constructor(public navCtrl: NavController) {

  }

}
