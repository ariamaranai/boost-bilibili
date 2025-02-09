Object.freeze = a => a;
Object.isFrozen =
MediaSource.isTypeSupported = () => 1;
Math.random = ()=> 0;
{
  let fet = fetch;
  fetch = (a, b) => a[2] != "d" && fet(a, b);
}