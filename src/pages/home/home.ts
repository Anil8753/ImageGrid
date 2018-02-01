import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

interface FileObject {
  thumbnail: string;
}

const _grid_columns_count: number = 3; // Number of columns in image grid

@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {

  private columns: Array<number>;
  private rows: Array<number>;
  private fileObjects: FileObject[];


  constructor(public navCtrl: NavController) {
    // Create column array for number of columns you want
    this.columns = new Array(_grid_columns_count);

    // This array will hold the number of rows
    this.rows = new Array<number>();

    // This array will hold all the items in the grid.
    // Add a item by appending or inserting
    // Remove a item by delete your item from the array
    this.fileObjects = new Array<FileObject>();
  }

  // Add item
  addItem(obj: FileObject) {
    this.fileObjects.push(obj);

    // true of if condition indicates that we need a new row.
    if ((this.rows.length * _grid_columns_count) < this.fileObjects.length) {
      this.rows.push(this.rows.length);
    }
  }

  // Get an item by row and column
  getItemThumbnail(row: number, col: number) {
    let i = row * _grid_columns_count + col;

    if (i < this.fileObjects.length) {
      return this.fileObjects[i].thumbnail;
    }
    else {
      return "no found";
    }
  }

  isValid(row: number, col: number): boolean {
    let i = row * _grid_columns_count + col;
    return (i < this.fileObjects.length);
  }

  onTapImage(row, col) {
    let i = row * _grid_columns_count + col;

    if (i < this.fileObjects.length) {
      alert(this.fileObjects[i].thumbnail);
    }
  }

  getTileHeight(): string {
    return "100px;"
  }

  /*
  This is a method just to simulate how we can items
  change the image path as per your wish
*/
  addImages() {
    for (let i = 0; i < 8; ++i) {
      let obj: FileObject = {
        thumbnail: 'url("../assets/icon/image.jpg")'
      }

      this.addItem(obj);
    }
  }
}
