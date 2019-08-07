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

## Run WCT code

The WCT code is run through the main program `wire-cell` by giving it a configuration file, where all logics and configurations are set (details later).
```bash
wire-cell -c path/to/example.jsonnet
```

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


## Setup WCT with LArSoft

Assuming you are familiar with LArSoft, this is only slightly more complicated than the above. I suggest you make a new directory and follow the [instruction](workflow.html#initialize-a-project) to start a new project. Taking **DUNE** as an example, place the following lines in your `wcdo-local-myproj.rc` file before executing the container:

```bash
wcdo_mrb_project_name="larsoft"
wcdo_mrb_project_version="v08_27_00"
wcdo_mrb_project_quals="e17:prof"
larwirecell_version="v08_05_10"
dunetpc_version="v08_27_00"

# setup ups and mrb
source /cvmfs/dune.opensciencegrid.org/products/dune/setup_dune.sh
setup dunetpc $dunetpc_version -q $wcdo_mrb_project_quals

wcdo-ups-init
path-append $wcdo_ups_products PRODUCTS
wcdo-mrb-init
wcdo-mrb-add-source larwirecell test_wc $larwirecell_version

# build wct
wcdo-ups-declare wirecell DEVELMRB
setup wirecell DEVELMRB -q e17:prof
wcdo-ups-wct-configure-source
./wcb -p --notests install
setup wirecell DEVELMRB -q e17:prof
wcdo-wirecell-path default
```

Note that you need to define the several package versions at the top. You can find the current versions here: [larsoft](https://cdcvs.fnal.gov/redmine/projects/larsoft/repository/revisions/master/entry/ups/product_deps), [larwirecell](https://cdcvs.fnal.gov/redmine/projects/larwirecell/repository/revisions/master/entry/ups/product_deps), [dunetpc](https://cdcvs.fnal.gov/redmine/projects/dunetpc/repository/revisions/master/entry/ups/product_deps), and change accordingly.

Next you need to build `larwirecell` against the current wct on your local computer. First, edit the `/wcdo/src/mrb/srcs/larwirecell/ups/product_deps` file and change the line `wirecell vxx_xx_xx` to `wirecell DEVELMRB`. Then run the following commands:
```bash
mrbsetenv
mrb i # only for first time build
mrbslp
```
If everything compiles fine, you now have a working environment to develop and test **WCT, larwirecell and LArSoft** code. Note that next time you start up the container, you only need to run `mrbsetenv` and `mrbslp` to setup the environment.

::: tip
**TIP**: You can use the `ninja` compiler instead of the default `make` to speed up the compiling. To do so, first set up ninja using `setup ninja v1_8_2`. Then, replace `mrb i` with `mrb i --generator ninja`.
:::