{
  let o = Object;
  o.freeze = a => a;
  o.isFrozen =
  o.hasOwnProperty =
  MediaSource.isTypeSupported = () => 1;

  let n = 0;
  Math.random = () => n += .0000000000000001;
  
  let fet = fetch;
  fetch = (a, b) => a[2] != "d" && fet(a, b);
}