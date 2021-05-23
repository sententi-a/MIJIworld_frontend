  let drag_button2 = drag_back2.querySelector('.drag_button2');

  drag_button2.onmousedown = function(event) {
    event.preventDefault(); // prevent selection start (browser action)

    let shiftX = event.clientX - drag_button2.getBoundingClientRect().left;
    // shiftY not needed, the drag_button2 moves only horizontally

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);

    function onMouseMove(event) {
      let newLeft = event.clientX - shiftX - drag_back2.getBoundingClientRect().left;

      // the pointer is out of drag_back2 => lock the drag_button2 within the bounaries
      if (newLeft < 27) {
        newLeft = 27;
      }
      let rightEdge = drag_back2.offsetWidth - drag_button2.offsetWidth;
      if (newLeft > rightEdge - 27) {
        newLeft = rightEdge - 27;
      }

      drag_button2.style.left = newLeft + 'px';
    }

    function onMouseUp() {
      document.removeEventListener('mouseup', onMouseUp);
      document.removeEventListener('mousemove', onMouseMove);
    }

  };

  drag_button2.ondragstart = function() {
    return false;
  };
