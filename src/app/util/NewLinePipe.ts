import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "nohtml" })
export class NewLinePipe implements PipeTransform {
    public transform(value: string, args: string[]): any {
        return value.replace(/<(?!br\s*\/?)[^>]+>/g, "");
    }
}