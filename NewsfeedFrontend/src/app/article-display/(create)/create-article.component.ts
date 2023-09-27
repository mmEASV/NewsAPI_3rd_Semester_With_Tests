import { Component } from '@angular/core';
import { ArticleService } from "../../ArticleService";
import { CreateArticleRequestDto } from "../../Interfaces";

@Component({
  selector: 'create-article',
  templateUrl: './create-article.component.html',
  styleUrls: ['./create-article.component.css']
})
export class CreateArticleComponent {
  article: CreateArticleRequestDto = {headline: null, articleImgUrl: null, body: null, author: null};

  constructor(public articleService: ArticleService) { }

  async onCreateArticle() {
    try {
      const createdArticle = await this.articleService.createArticle(this.article);
      this.articleService.articles.push(createdArticle);
      console.log(createdArticle);
    } catch (error) {
      console.error(error);
    }
  }

}
