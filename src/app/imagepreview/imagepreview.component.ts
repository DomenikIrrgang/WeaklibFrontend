import { Component, Input } from "@angular/core";

@Component({
    selector: "imagepreview",
    templateUrl: "imagepreview.component.html",
    styleUrls: ["imagepreview.component.css"],
})

export class ImagePreviewComponent {
    @Input()
    public images: any;
    public currentImage: number = 0;
    public isVisible: boolean = false;

    public open(): void {
        this.isVisible = true;
    }

    public close(): void {
        this.isVisible = false;
    }

    public nextImage(): void {
        this.currentImage++;
        if (this.currentImage > this.images.length - 1) {
            this.currentImage = 0;
        }
    }

    public previousImage() {
        if (this.currentImage <= 0) {
            this.currentImage = this.images.length - 1;
        } else {
            this.currentImage--;
        }
    }
}