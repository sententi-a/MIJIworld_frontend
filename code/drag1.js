  let drag_button = drag_back1.querySelector('.drag_button');

  drag_button.onmousedown = function(event) {
    event.preventDefault(); // prevent selection start (browser action)

    let shiftX = event.clientX - drag_button.getBoundingClientRect().left;
    // shiftY not needed, the drag_button moves only horizontally

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      let newLeft = event.clientX - shiftX - drag_back1.getBoundingClientRect().left;

      // the pointer is out of drag_back1 => lock the drag_button within the bounaries
      if (newLeft < 27) {
        newLeft = 27;
      }
      let rightEdge = drag_back1.offsetWidth - drag_button.offsetWidth;
      if (newLeft > rightEdge-27) {
        newLeft = rightEdge-27;
      }

      drag_button.style.left = newLeft + 'px';
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }

  };

  drag_button.ondragstart = function() {
    return false;
  };
