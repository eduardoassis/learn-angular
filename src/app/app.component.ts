import { Component } from '@angular/core';
import { FavoriteChangedEventArgs } from './components/favorite/favorite.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Angluar Application';

  post = {
    title: "Title",
    isFavorite: true
  }

  onFavoriteChange(eventArgs: FavoriteChangedEventArgs) {
   console.log("Favorite changes: ", eventArgs.newValue);
  }
}
