import { Injectable } from '@angular/core';

@Injectable()
export class UtilsService {

  constructor() { }


  /**
   * Return a boolean indicating if a DOM element has a given class name applied or not.
   *
   * @method hasClass
   * @param {HTML DOM Element} el The DOM element to test.
   * @param {string} className The class name to test for.
   * @return {boolean} Returns true if the class name is present and false if not.
   * @public
   */
  public hasClass(el, className): boolean {
    console.log('in function');
    if (el) {
      console.log('in el', el);
      if (el.classList) {
        console.log('in classList');
        return el.classList.contains(className);
      }
      return !!el.className.match(new RegExp('(\\s|^)' + className + '(\\s|$)'));
    }
    return false;
  }

  /**
   * Adds a given class name to a given DOM element.
   *
   * @method addClass
   * @param {HTML DOM Element} el The DOM element to update.
   * @param {string} className The class name to add.
   * @public
   */
  public addClass(el, className) {
    if (el) {
      if (el.classList) {
        el.classList.add(className);
      } else if (!this.hasClass(el, className)) {
        el.className += ' ' + className;
      }
    }
  }

  /**
   * Removes a given class name from a given DOM element.
   *
   * @method removeClass
   * @param {HTML DOM Element} el The DOM element to update.
   * @param {string} className The class name to remove.
   * @public
   */
  public removeClass(el, className) {
    if (el) {
      if (el.classList) {
        el.classList.remove(className);
      } else if (this.hasClass(el, className)) {
        const reg = new RegExp('(\\s|^)' + className + '(\\s|$)');
        el.className = el.className.replace(reg, ' ');
      }
    }
  }
}
