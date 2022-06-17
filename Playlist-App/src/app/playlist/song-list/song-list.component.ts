import { Component, OnInit } from '@angular/core';
import { Song } from '../../shared/song/song.model'

@Component({
  selector: 'app-song-list',
  templateUrl: './song-list.component.html',
  styleUrls: ['./song-list.component.css']
})
export class SongListComponent implements OnInit {
  mySongs: Song[] = [
    new Song(
      'Happy Birthday',
      'Ethan Wisdom',
      'Traditonal Folk',
      'https://unsplash.com/photos/18N4okmWccM'

    )
  ];

  constructor() { }

  ngOnInit(): void {
  }

}
