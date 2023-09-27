import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { firstValueFrom } from "rxjs";
import { CreateArticleRequestDto, UpdateArticleRequestDto, NewsFeedItem, Article, SearchArticleItem } from "./Interfaces";

@Injectable({
  providedIn: 'root'
})
export class ArticleService {
  articles: NewsFeedItem[] = [];
  private apiUrl = 'http://localhost:5000/api';

  constructor(private http: HttpClient) {
    this.getArticles().then(r => console.log(r));
  }

  async getArticles() {
    const call = this.http.get<NewsFeedItem[]>(`${this.apiUrl}/feed`);
    this.articles = await firstValueFrom<NewsFeedItem[]>(call);
  }

  getArticleById(id: number) {
    return firstValueFrom(this.http.get<Article>(`${this.apiUrl}/articles/${id}`));
  }

  createArticle(articleDto: CreateArticleRequestDto) {
    return firstValueFrom(this.http.post<Article>(`${this.apiUrl}/articles`, articleDto));
  }

  updateArticle(id: number, articleDto: UpdateArticleRequestDto) {
    return firstValueFrom(this.http.put<Article>(`${this.apiUrl}/articles/${id}`, articleDto));
  }

  deleteArticle(id: number) {
    return firstValueFrom(this.http.delete<void>(`${this.apiUrl}/articles/${id}`));
  }

  searchArticles(query: string, pageSize: number = 10) {
    return firstValueFrom(
      this.http.get<SearchArticleItem[]>(`${this.apiUrl}/articles`, {
        params: {
          searchTerm: query,
          pageSize: pageSize.toString(),
        }
      })
    );
  }

}
