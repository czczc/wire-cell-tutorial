# Simulate Tracks

[[toc]]

## Line charge simulation
To start with an easy example, let's simulate an ideal-line charge in the protoDUNE-SP TPC.
```bash
wire-cell -c pgrapher/experiment/pdsp/wct-sim-check.jsonnet
```

The configuration is available [here](https://github.com/WireCell/wire-cell-cfg/blob/master/pgrapher/experiment/pdsp/wct-sim-check.jsonnet). It is also possible to simulate multiple line charges. As an example, two line charges are simulated in the following example. The charge deposition is set to 2500 electrons per step, and the step length is set to 0.5mm. Therefore, it mimics two MIP tracks with charge deposition of \~5000 e/mm.
```javascript
local cathpier = {
  tail: wc.point(-113, 585, 409, wc.cm),
  head: wc.point( 118,  24, 269, wc.cm),
};

local parallel = {
  tail: wc.point(-1.000, 3.0, 1.000, wc.m),
  head: wc.point(-1.000, 3.0, 2.000, wc.m),
};

local tracklist = [

  {
    time: 0 * wc.us, // 250-us pretrig window
    charge: -2500, // 5000 e/mm
    ray: cathpier,
  },
  {
    time: 0 * wc.us, // 250-us pretrig window
    charge: -2500, // 5000 e/mm
    ray: parallel,
  },
]

local depos = sim.tracks(tracklist, step=0.5 * wc.mm);
```

As a result, an **Magnify** file is generated.

## Realistic Geant4 particle simulation