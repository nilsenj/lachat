import {Component, OnInit, EventEmitter, Output} from '@angular/core';
import {ImageUploadService} from '../../services/image-upload.service';
import {HttpErrorResponse} from '@angular/common/http';
import {ToastrService} from "../../services/toastr.service";
import {AuthenticationService} from "../../services/authentication.service";

class FileSnippet {
  static readonly IMAGE_SIZE = {width: 150, height: 250};

  pending = false;
  status = 'INIT';

  constructor(public src: string, public file: File) {
  }
}

@Component({
  selector: 'app-image-upload',
  templateUrl: './image-upload.component.html',
  styleUrls: ['./image-upload.component.scss']
})
export class ImageUploadComponent {

  @Output() imageUploaded = new EventEmitter();
  @Output() imageError = new EventEmitter();
  @Output() imageLoadedToContainer = new EventEmitter();
  @Output() croppingCanceled = new EventEmitter();

  selectedFile: FileSnippet;
  imageChangedEvent: any;

  constructor(private toastr: ToastrService,
              private authService: AuthenticationService,
              private imageService: ImageUploadService) {
  }

  private onSucces(imageUrl: string) {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'OK';
    this.imageChangedEvent = null;
    this.imageUploaded.emit(imageUrl);
    this.authService.userNeedsChange.emit(imageUrl);
  }

  private onFailure() {
    this.selectedFile.pending = false;
    this.selectedFile.status = 'FAIL';
    this.imageChangedEvent = null;
    this.imageError.emit('');
  }

  imageCropped(file: File): FileSnippet | File {
    if (this.selectedFile) {
      return this.selectedFile.file = file;
    }

    return this.selectedFile = new FileSnippet('', file);
  }

  imageLoaded() {
    this.imageLoadedToContainer.emit();
  }

  cancelCropping() {
    this.imageChangedEvent = null;
    this.croppingCanceled.emit();
  }

  processFile(event: any) {
    this.selectedFile = undefined;

    const URL = window.URL;
    let file, img;

    if ((file = event.target.files[0]) && (file.type === 'image/png' || file.type === 'image/jpeg')) {
      img = new Image();

      const self = this;
      img.onload = function () {

        if (this.width > FileSnippet.IMAGE_SIZE.width && this.height > FileSnippet.IMAGE_SIZE.height) {
          self.imageChangedEvent = event;
        } else {
          self.toastr.add('error', `Minimum width is ${FileSnippet.IMAGE_SIZE.width} and minimum heigth is ${FileSnippet.IMAGE_SIZE.height}`);
        }
      };

      img.src = URL.createObjectURL(file);
    } else {
      this.toastr.add('error', 'Unsupported File Type. Only jpeg and png is allowed!');
    }
  }

  uploadImage() {
    if (this.selectedFile) {
      const reader = new FileReader();

      reader.addEventListener('load', (event: any) => {
        this.selectedFile.src = event.target.result;

        this.selectedFile.pending = true;
        this.imageService.uploadImage(this.selectedFile.file).subscribe(
          (imageUrl: string) => {
            this.onSucces(imageUrl);
          },
          (errorResponse: HttpErrorResponse) => {
            this.toastr.add('error', errorResponse.error.errors[0].detail);
            this.onFailure();
          });
      });

      reader.readAsDataURL(this.selectedFile.file);
    }
  }
}
