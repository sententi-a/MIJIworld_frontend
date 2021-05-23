  let drag_button3 = drag_back3.querySelector('.drag_button3');

  drag_button3.onmousedown = function(event) {
    event.preventDefault(); // prevent selection start (browser action)

    let shiftX = event.clientX - drag_button3.getBoundingClientRect().left;
    // shiftY not needed, the drag_button3 moves only horizontally

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      let newLeft = event.clientX - shiftX - drag_back3.getBoundingClientRect().left;

      // the pointer is out of drag_back3 => lock the drag_button3 within the bounaries
      if (newLeft < 27) {
        newLeft = 27;
      }
      let rightEdge = drag_back3.offsetWidth - drag_button3.offsetWidth;
      if (newLeft > rightEdge - 27) {
        newLeft = rightEdge - 27;
      }

      drag_button3.style.left = newLeft + 'px';
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }

  };

  drag_button3.ondragstart = function() {
    return false;
  };
