import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { PageFooterComponent } from "./pagefooter/pagefooter.component";
import { AppComponent } from "./app.component";
import { BoxComponent } from "./box/box.component";
import { DashboardComponent } from "./dashboard/dashboard.component";
import { ContactComponent } from "./contact/contact.component";
import { PageHeadingComponent } from "./pageheading/pageheading.component";
import { NavigationComponent } from "./navigation/navigation.component";
import { NewsComponent } from "./news/news.component";
import { NotificationsBoxComponent } from "./notificationsbox/notificationsbox.component";
import { NotificationService } from "./services/notification.service";
import { WeakauraService } from "./services/weakaura.service";
import { NewsService } from "./services/news.service";
import { WeakauraViewComponent } from "./weakauraview/weakauraview.component";
import { ClickablePanelComponent } from "./clickablepanel/clickablepanel.component";
import { TitlebarComponent } from "./weakauraview/titlebar/titlebar.component";
import { ProfilepictureComponent } from "./profilepicture/profilepicture.component";
import { WeakauraBoxComponent } from "./weakaurabox/weakaurabox.component";
import { RoutingModule } from "./routing.module";
import { StringsComponent } from "./weakauraview/strings/strings.component";
import { StringComponent } from "./weakauraview/string/string.component";
import { CommentsComponent } from "./weakauraview/comments/comments.component";
import { CommentService } from "./services/comment.service";
import { UserViewComponent } from "./userview/userview.component";
import { UserService } from "./services/user.service";
import { SearchViewComponent } from "./searchview/searchview.component";
import { CategoriesComponent } from "./categories/categories.component";
import { CategoryComponent } from "./categories/category/category.component";
import { RegisterViewComponent } from "./registerview/registerview.component";
import { LoginViewComponent } from "./loginview/loginview.component";
import { ErrorComponent } from "./error/error.component";
import { Time } from "./util/time";
import { ImagePreviewComponent } from "./imagepreview/imagepreview.component";
import { NewsViewComponent } from "./newsview/newsview.component";
import { HttpModule } from "@angular/http";
import { HttpService } from "./services/http.service";
import { StatusMessageComponent } from "./statusmessage/statusmessage.component";
import { UserPanelComponent } from "./userpanel/userpanel.component";
import { UploadWeakauraViewComponent } from "./uploadweakauraview/uploadweakauraview.component";
import { CategoryService } from "./services/category.service";
import { CategoriesDisplayComponent } from "./categoriesdisplay/categoriesdisplay.component";
import { ImageUploadComponent } from "./imageupload/imageupload.component";
import { ImageUploadService } from "./services/imageupload.service";
import { ErrorMessageComponent } from "./errormessageview/errormessage.component";
import { CommentComponent } from "./weakauraview/comments/comment/comment.component";
import { CommentInputComponent } from "./weakauraview/comments/commentInput/commentinput.component";
import { NewLinePipe } from "./util/NewLinePipe";

@NgModule({
  declarations: [
    AppComponent,
    BoxComponent,
    DashboardComponent,
    ContactComponent,
    PageHeadingComponent,
    PageFooterComponent,
    NavigationComponent,
    WeakauraBoxComponent,
    NewsComponent,
    NotificationsBoxComponent,
    WeakauraViewComponent,
    ClickablePanelComponent,
    TitlebarComponent,
    ProfilepictureComponent,
    StringsComponent,
    StringComponent,
    CommentsComponent,
    UserViewComponent,
    SearchViewComponent,
    CategoriesComponent,
    CategoryComponent,
    RegisterViewComponent,
    LoginViewComponent,
    ErrorComponent,
    ImagePreviewComponent,
    NewsViewComponent,
    StatusMessageComponent,
    UserPanelComponent,
    UploadWeakauraViewComponent,
    CategoriesDisplayComponent,
    ImageUploadComponent,
    ErrorMessageComponent,
    CommentComponent,
    CommentInputComponent,
    NewLinePipe,
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    HttpModule,
  ],
  providers: [
    HttpService,
    WeakauraService,
    NewsService,
    NotificationService,
    CommentService,
    UserService,
    CategoryService,
    ImageUploadService,
    Time,
  ],
  bootstrap: [AppComponent],
})
export class AppModule { }
