# Example Workflows

Depending on your purpose, there are different workflows that you can follow. For details, see [Brett's instruction](https://github.com/WireCell/wire-cell-singularity/blob/master/wcdo.org).

## Initialize a project

Pick a new directory for your project:
```bash
wcdo.sh init
wcdo.sh wct
wcdo.sh get-image sl7krb
wcdo.sh make-project myproj sl7krb
$ ./wcdo-myproj.sh
```


## Setup standalone WCT

The previous step will put you inside the downloaded `sl7krb` singularity container.
We then use the Fermilab [UPS](https://cdcvs.fnal.gov/redmine/projects/ups/wiki/Getting_Started_Using_UPS) tool to configure software dependencies:
```bash
source /cvmfs/larsoft.opensciencegrid.org/products/setup
wcdo-ups-init
path-append $wcdo_ups_products PRODUCTS
setup wirecell v0_12_3 -q e17:prof
wcdo-ups-declare wirecell DEVEL
setup wirecell DEVEL -q e17:prof
wcdo-ups-wct-configure-source
./wcb -p --notests install
setup wirecell DEVEL -q e17:prof
wcdo-wirecell-path default
```
The last two lines are necessary to re-setup the wirecell UPS product to have the correct `LD_LIBRARY_PATH` and to reset the `WIRECELL_PATH`. Now test with:
```bash
./wcb -p --alltests
```
If tests run, congratulations, you are ready to start real wire-cell development.

::: tip
**TIP**: Place some of the command lines in your `wcdo-local-myproj.rc` file to execute them automatically when you start the singularity container.
:::

## Recompile WCT

If you change any core code, you need to recompile WCT using
```bash
./wcb
./wcb install
```
. You can find out where these WCT libraries are installed through:
```bash
echo $LD_LIBRARY_PATH | tr : '\n' | grep wirecell
```
If you followed the above setup instruction, this path should be somewhere under `/wcdo/lib/ups/wirecell/DEVEL/`

## Write and run tests

The `test/` directory under each WCT package is the place to put your test code in. Any `.cxx` files starting with `test_` will be automatically compiled. After you modify existing test code or write a new test, you can compile it through
```bash
./wcb
```
Afterwards, you can find the compiled binary test programs under the `/wcdo/src/wct/build/` directory, and run them individually.


## Integrate with LArSoft

`larwirecell` instruction to be added.