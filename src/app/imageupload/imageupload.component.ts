import { Component, Input } from "@angular/core";

@Component({
    selector: "imageupload",
    templateUrl: "imageupload.component.html",
    styleUrls: ["imageupload.component.css"],
})

export class ImageUploadComponent {
    @Input()
    public multiple: boolean = false;
    public caption: string = "Upload";
    public files: any[] = [];
    public paths: any[] = [];

    public filesChanged(event: any) {
        if (this.multiple === true) {
            for (let file of event.target.files) {
                this.files.push(file);
                let reader = new FileReader();
                reader.onload = function(e) {
                    this.paths.push({
                        image: e.target.result,
                        file: reader["file"],
                    });
                }.bind(this);
                reader["file"] = file;
                reader.readAsDataURL(file);
            }
        } else {
            this.files = event.target.files;
            console.log("read");
            let reader = new FileReader();
            reader.onload = function(e) {
                this.paths = [ {
                    image: e.target.result,
                    file: reader["file"],
                } ];
            }.bind(this);
            reader["file"] = this.files[0];
            reader.readAsDataURL(event.target.files[0]);
        }
        console.log(this.files);
        console.log(this.paths);
        this.updateButtonCaption();
    }

    public updateButtonCaption(): void {
        if (this.files.length === 1) {
            this.caption = this.files[0].name;
        }
        if (this.files.length > 1) {
            this.caption = this.files.length + " files selected";
        }
        if (this.files.length === 0) {
            this.caption = "Upload";
        }
    }

    public removeImage(event: any) {
        if (this.multiple === true) {
            for (let i = 0; i < this.files.length; i++) {
                if (this.files[i].name === this.paths[+event.srcElement.id].file.name) {
                    this.files.splice(i, 1);
                    this.paths.splice(+event.srcElement.id, 1);
                    console.log(this.files);
                    break;
                }
            }
        } else {
            this.files = [];
            this.paths = [];
        }
        console.log(this.files);
        this.updateButtonCaption();
    }
}