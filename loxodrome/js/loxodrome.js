d3.geo.loxodrome = function(p0, p1) {
  var ε = 1e-6,
      abs = Math.abs,
      x0 = p0[0],
      y0 = p0[1],
      x1 = p1[0],
      y1 = p1[1];

  function loxodrome() {
    return { type: "LineString", coordinates: coordinates() };
  }

  function coordinates() {
    if (abs(x0 - x1) < ε) {
      return [p0, p1];
    } else if (x1 < x0) {
      x1 += 360;
    }

    var m = (y1 - y0) / (x1 - x0);
    return d3.range(x0, x1, .1).concat(x1).map(function (x) { return [x, m * (x - x1) + y1]; });
  }

  return loxodrome;
}