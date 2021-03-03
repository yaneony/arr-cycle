class Cycle {
  constructor(list) {
    this._list = list || [];
    this._index = undefined;
  }

  count() {
    return this._list.length;
  }

  curr() {
    return this._list[this._index];
  }

  prev() {
    if (this._list[this._index] == undefined) {
      this._index = this._list.length - 1;
    }
    this._item = this._list[this._index];
    this._index--;
    return this._item;
  }

  next() {
    if (this._list[this._index] == undefined) {
      this._index = 0;
    }
    this._item = this._list[this._index];
    this._index++;
    return this._item;
  }
}

module.exports = Cycle;
