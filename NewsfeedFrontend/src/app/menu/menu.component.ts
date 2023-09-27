import { Component } from '@angular/core';
import {ArticleService} from "../ArticleService";

@Component({
  selector: 'app-menu',
  templateUrl: `./menu.component.html`,
  styleUrls: ['./menu.component.css']
})
export class MenuComponent {
  constructor(public articleService: ArticleService) {
    articleService.getArticles().then(r => console.log(r));
  }
}
