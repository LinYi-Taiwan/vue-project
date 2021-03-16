var speed = 60;
var timer = null;
var scroll_begin = document.getElementById('scroll_begin');
var scroll_end = document.getElementById('scroll_end');
var scroll_div = document.getElementById('scroll_div');

// if (scroll_begin.offsetWidth > scroll_div.offsetWidth)
//內容長度不夠只顯示一條且不滾動，若想滾動把內容多複製幾條讓內容超過滾動窗長度即可
scroll_end.innerHTML = scroll_begin.innerHTML;

function Marquee() {
  if (scroll_end.offsetWidth - scroll_div.scrollLeft <= 0)
    scroll_div.scrollLeft -= scroll_begin.offsetWidth;
  else scroll_div.scrollLeft++;

  //   console.log(scroll_end.innerHTML);
}
timer = setInterval(Marquee, speed);
scroll_div.onmouseover = function () {
  clearInterval(timer);
};
scroll_div.onmouseout = function () {
  timer = setInterval(Marquee, speed);
};
