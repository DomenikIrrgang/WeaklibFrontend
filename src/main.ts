import { enableProdMode } from "@angular/core";
import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";

import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";

if (environment.production) {
  enableProdMode();
}

platformBrowserDynamic().bootstrapModule(AppModule);/*

db.weakauracomment.aggregate([{ $graphLookup: {from: "weakauracomment", startWith:"$_id",connectFromField:"_id",connectToField:"_root",as: "comments",}}])
,{ $project:{"connections who play golf": "$comments.hash"}}
db.weakauracomment.aggregate([{"$graphLookup":{"from": "weakauracomment","startWith": "$root", "connectFromField": "root", "connectToField": "_id","as": "ancestors"}}])

db.weakauracomment.aggregate([{ "$graphLookup": {"from": "weakauracomment", "startWith": "$_id", "connectFromField": "_id", "connectToField": "root", "as": "comments"}}, { "$addFields": { "comments": { "$reverseArray": { "$map": { "input": "$comments", "as": "t", "in": { "_id": "$$t._id", "root": "$$t.root" }}}}}}]).pretty()
*/