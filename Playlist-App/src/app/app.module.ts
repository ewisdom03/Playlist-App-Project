import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PlaylistComponent } from './playlist/playlist.component';
import { SongListComponent } from './playlist/song-list/song-list.component';
import { SongDetailsComponent } from './playlist/song-details/song-details.component';
import { SpotifyLibraryComponent } from './spotify-library/spotify-library.component';
import { SongSearchComponent } from './spotify-library/song-search/song-search.component';
import { SongResultsComponent } from './spotify-library/song-results/song-results.component';
import { NavigationComponent } from './shared/navigation/navigation.component';
import { SongComponent } from './shared/song/song.component';

@NgModule({
  declarations: [
    AppComponent,
    PlaylistComponent,
    SongListComponent,
    SongDetailsComponent,
    SpotifyLibraryComponent,
    SongSearchComponent,
    SongResultsComponent,
    NavigationComponent,
    SongComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
