import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { MoviesService } from '../services/movies.service';

@Component({
  selector: 'app-movies',
  templateUrl: './movies.page.html',
  styleUrls: ['./movies.page.scss'],
})
export class MoviesPage implements OnInit {

  constructor(public activeroute:ActivatedRoute, public MoviesService: MoviesService, public alert:AlertController) { }

  ngOnInit() {
  }

  movieList() {
    this.MoviesService.getFirestoreData();
    
  }

  // addItem(): void {
  //   this.alert
  //     .create({
  //       header: "Add Movie",
  //       message: "Enter the name of the movie.",

  //       inputs: [
  //         {
  //           type: "text",
  //           name: "name",
  //         },
  //       ],
  //       buttons: [
  //         {
  //           text: "Cancel",
  //         },
  //         {
  //           text: "Save",
  //           handler: (data) => {
  //             this.MoviesService.addMovie(this.movieList.id, data);
  //           },
  //         },
  //       ],
  //     })
  //     .then((prompt) => {
  //       prompt.present();
  //     });
  // }

}
