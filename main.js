Math.random = () => 0;
{
  let o = Object;
  o.freeze = a => a;
  o.isFrozen =
  o.hasOwnProperty =
  MediaSource.isTypeSupported = () => 1;

  let fet = fetch;
  fetch = (a, b) => a[2] != "d" && fet(a, b);
}