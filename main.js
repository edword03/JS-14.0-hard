document.addEventListener('DOMContentLoaded', function() {
  'use strict';
  const DomElement = function() {
    this.position = 'absolute';
    this.height = 100;
    this.width = 100;
    this.bg = '#000080';
  };

DomElement.prototype.createElement = function () {
  const divEl = document.createElement('div');
      divEl.style.width = this.width + 'px';
      divEl.style.height = this.height + 'px';
      divEl.style.background = this.bg;
      divEl.style.position = this.position;
      return divEl;
};

DomElement.prototype.moveBlock = function(event, el) {
  //left
  if (event.keyCode === 37){
    moveLeft -= 10;
    el.style.left = `${moveLeft}px`;
  }
  //up
  if (event.keyCode === 38) {
    moveUp -= 10;
    el.style.top = `${moveUp}px`;
  }
  //right
  if (event.keyCode === 39){
    moveLeft += 10;
    el.style.left = `${moveLeft}px`;
  }
  //down
  if (event.keyCode === 40) {
    moveUp += 10;
    el.style.top = `${moveUp}px`;
  }
};

  const domElem = new DomElement();
  const el = domElem.createElement();
  document.body.append(el);

  let moveLeft = 0,
  moveUp = 0;
  document.addEventListener('keydown', () => {
    domElem.moveBlock(event, el);
  });
});