import {
  Component,
  OnInit,
  ViewEncapsulation,
  Input,
  Output,
  EventEmitter,
  OnChanges,
} from '@angular/core';

@Component({
  selector: 'app-dialog',
  template: `
    <div>
      <div class="blocker" *ngIf="showDialog">
        <div
          class="dialog-container"
          [style.width.%]="percentageWidth"
          [style.height.%]="percentageHeight"
          [style.maxHeight.%]="maxHeight"
          [style.maxWidth.%]="maxWidth"
          [style.width.px]="pixelWidth"
          [style.height.px]="pixelHeight"
        >
          <div class="header-container" *ngIf="title">
            <span class="header-title">{{ title }}</span>
          </div>
          <div class="content-container">
            {{ dynamicContent }}
          </div>
          <div class="footer-container">
            <button
              id="okButon"
              class="save"
              (click)="handleSaveClicked($event)"
            >
              Save
            </button>
            <!-- <button
            id="cancelButton"
            class="warn"
            (click)="handleCancelClicked($event)"
          >
            Cancel
          </button> -->
          </div>
        </div>
      </div>
    </div>
  `,
  styles: [
    `
      .dialog-container {
        min-width: 20rem;
        display: flex;
        flex-direction: column;
        min-width: 10rem;
        margin-right: 0.5rem;
      }

      .header-container {
        background-color: rgb(16, 108, 200);
        color: rgba(255, 255, 255, 0.87);
        min-height: 1rem;
        padding-top: 0.5rem;
        padding-bottom: 0.5rem;
        font-size: 1rem;
        line-height: 1.5;
        user-select: none;
      }

      .header-title {
        padding: 1rem;
      }
      .content-container {
        background-color: rgb(255, 255, 255);
        min-height: 2rem;
        text-align: justify;
        border: 1px solid rgb(16, 108, 200);
        overflow: auto;
        padding-left: .5rem;
        padding-right: .5rem;
        padding-bottom: .5rem;
      }

      .footer-container {
        display: flex;
        flex
        justify-content: center;
        background-color: orange;
        min-height: 2rem;
        text-align: center;
        flex-wrap: nowrap;
      }

      .footer-container button {
        border: 1px solid transparent;
        user-select: none;
        padding: 0.375rem 0.75rem;
        font-size: 1rem;
        line-height: 1.5;
        border-radius: 0.25rem;
        transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
          border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
          flex-grow: 1;
      }

      .save {
        color: #fff;
        background-color: #007bff;
        border-color: #007bff;
        outline-color: #007bff;
      }

      .warn {
        color: #fff;
        background-color: #f44336;
        border-color: #f44336;
        outline-color: #f44336;
      }

      .blocker {
        width: 100%;
        height: 100%;
        z-index: 9999;
        background: rgba(0, 0, 0, 0.6);
        position: fixed;
        top: 0px;
        left: 0px;
        display: flex;
        justify-content: center;
        align-items: center;
      }
    `,
  ],
  // encapsulation: ViewEncapsulation.Native, // Need to change it to Native once done
  encapsulation: ViewEncapsulation.ShadowDom, // Need to change it to Native once done
})
export class DialogComponent implements OnInit, OnChanges {
  /**
   * @public
   * @description Contains true if dialog is visible else false
   */
  @Input() showDialog = false;

  /**
   * @public
   * @description Contains title of dialog box, if title is undefined title bar will disappear
   */
  @Input() title: string;

  /**
   * @public
   * @description Contains true if action bar is required else false, if false action button will disappear
   */
  @Input() isActionBarRequired: boolean;

  /**
   * @public
   * @description Contains width of dialog box in percentage.
   */
  @Input() percentageWidth: number;

  /**
   * @public
   * @description Contains width of dialog box in pixels.
   */
  @Input() pixelWidth: number;

  /**
   * @public
   * @description Contains width of dialog box in pixels.
   */
  @Input() pixelHeight: number;

  /**
   * @public
   * @description Contains height of dialog box in percentage
   */
  @Input() percentageHeight: number;

  /**
   * @public
   * @description Contains max height of dialog box
   */
  @Input() maxHeight: number;

  /**
   * @public
   * @description Contains max width of dialog box
   */
  @Input() maxWidth: number;

  /**
   * @public
   * @description Contains dynamic text content
   */
  @Input() dynamicContent;

  /**
   * @public
   * @description Notitify when user clicks on save button.
   */
  @Output() saveClicked: EventEmitter<any> = new EventEmitter();

  /**
   * @public
   * @description Notitify when user clicks on cancel button.
   */
  @Output() cancelClicked: EventEmitter<any> = new EventEmitter();

  constructor() {}

  /**
   * @description
   */
  ngOnInit(): void {
    this.percentageHeight = this.percentageHeight ? this.percentageHeight : 30;
    this.percentageWidth = this.percentageWidth ? this.percentageWidth : 30;
    this.isActionBarRequired = false;
    // this.title = 'Testing Notification';
    // this.percentageWidth = 50;
    // // this.percentageHeight = 50;
    // this.maxHeight = 40;
  }

  ngOnChanges(): void {}

  /**
   * @description This method is invoked when user clicks on save button, it is responsible
   * for dispatching same event to parent.
   * @param event Contains reference of event.
   */
  handleSaveClicked(event): void {
    this.saveClicked.emit(event);
  }

  /**
   * @description This method is invoked when user clicks on cancel button, it is responsible
   * for dispatching same event to parent.
   * @param event Contains reference of event.
   */
  handleCancelClicked(event): void {
    this.cancelClicked.emit(event);
  }
}
