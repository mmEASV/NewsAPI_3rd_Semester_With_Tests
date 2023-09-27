import {Component, OnInit} from '@angular/core';
import {ArticleService} from "../ArticleService";

@Component({
  selector: 'app-article-display',
  templateUrl: `./article-display.component.html`,
  styleUrls: ['./article-display.component.css']
})
export class ArticleDisplayComponent implements OnInit{
  articles: any;

  ngOnInit(){
    this.getArticles();
  }

  getArticles(){
    this.articleService.getArticles().then(r => {
      this.articles = r;

      console.log(this.articles);
    });
  }

  constructor(public articleService: ArticleService) { }

  protected readonly ArticleService = ArticleService;
}
