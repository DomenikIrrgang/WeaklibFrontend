import { Pipe, PipeTransform } from "@angular/core";
/*
 * Converts newlines into html breaks
*/
@Pipe({ name: "nohtml" })
export class NewLinePipe implements PipeTransform {
    public transform(value: string, args: string[]): any {
        return value.replace(/<(?!br\s*\/?)[^>]+>/g, "");
    }
}