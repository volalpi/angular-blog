import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'angular-blog';

  posts = [
    {
      title: 'Mon premier post',
      content: 'On sait depuis longtemps que travailler avec du texte lisible et contenant du sens est source de distractions, et empêche de se concentrer sur la mise en page elle-même.',
      loveIts: 3,
      created_at: new Date()
    },
    {
      title: 'Mon deuxième post',
      content: 'De nombreuses suites logicielles de mise en page ou éditeurs de sites Web ont fait du Lorem Ipsum leur faux texte par défaut',
      loveIts: 0,
      created_at: new Date()
    },
    {
      title: 'Encore un post',
      content: 'Plusieurs versions sont apparues avec le temps, parfois par accident',
      loveIts: 2,
      created_at: new Date()
    }
  ];
}
