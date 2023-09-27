import {NgModule} from "@angular/core";
import {HttpClient, HttpClientModule} from "@angular/common/http";
import { FormsModule } from '@angular/forms';
import {CreateArticleComponent} from "./(create)/create-article.component"; // Import FormsModule here


@NgModule({
  imports: [
    HttpClientModule,
    FormsModule
  ],
  declarations: [
    CreateArticleComponent
  ],
  providers: [],
  exports: [
    CreateArticleComponent
  ],
  bootstrap: []
})
export class ArticleDisplayModule {

}
