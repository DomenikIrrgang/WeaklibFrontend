import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";

import { DashboardComponent } from "./dashboard/dashboard.component";
import { ContactComponent } from "./contact/contact.component";
import { WeakauraViewComponent } from "./weakauraview/weakauraview.component";
import { UserViewComponent } from "./userview/userview.component";
import { SearchViewComponent } from "./searchview/searchview.component";
import { RegisterViewComponent } from "./registerview/registerview.component";
import { LoginViewComponent } from "./loginview/loginview.component";
import { NewsViewComponent } from "./newsview/newsview.component";
import {UploadWeakauraViewComponent} from "./uploadweakauraview/uploadweakauraview.component";
import { HomeViewComponent } from "./homeview/homeview.component";

const routes: Routes = [
    { path: "", redirectTo: "/home", pathMatch: "full" },
    { path: "dashboard", component: DashboardComponent },
    { path: "home", component: HomeViewComponent },
    { path: "contact", component: ContactComponent },
    { path: "weakaura/:hash", component: WeakauraViewComponent },
    { path: "user/:username", component: UserViewComponent },
    { path: "search", component: SearchViewComponent },
    { path: "register", component: RegisterViewComponent },
    { path: "login", component: LoginViewComponent },
    { path: "news/:hash", component: NewsViewComponent },
    { path: "uploadweakaura", component: UploadWeakauraViewComponent},
];

@NgModule({
    imports: [RouterModule.forRoot(routes, { useHash: true})],
    exports: [RouterModule],
})
export class RoutingModule {

}