# Explore Real Data

[[toc]]

## Get data
Let's use **ProtoDUNE-SP** as an example. To look at raw data, you need to [setup WCT with LArSoft](/workflow.html#setup-wct-with-larsoft) first. Then, you can copy a data file using `ifdh cp -D gsiftp://url/to/raw_data .` to your local directory. Note that this requires you have set up the FNAL Kerberos authentication already. Otherwise, you can `wget` an example (\~7GB) raw data file [here](https://www.phy.bnl.gov/~wgu/wire-cell-tutorial/data/np04_raw_run005145_0022_dl10.root) ([gsiftp link](gsiftp://fndca1.fnal.gov:2811/pnfs/fnal.gov/usr/dune/tape_backed/dunepro/protodune/np04/beam/detector/None/raw/06/61/29/25/np04_raw_run005145_0022_dl10.root) of the same file).

The raw data file has a special root format that contains larsoft objects. You can check the data structure of an event through the useful `eventdump.fcl` command:
```bash
$ lar -n1 --nskip 0 -c eventdump.fcl /path/to/raw_data.root
```

## Run signal processing
The following command performs the signal processing on the raw data using a fhicl configuration `raw-to-sig.fcl`:
```bash
lar -n1 -c pgrapher/experiment/pdsp/Quickstart/raw-to-sig.fcl /path/to/raw_data.root
```

There are two output files:

- `output.root`: A small file that only stores the deconvoluted signals in LArSoft objects. *Eventdump* shows its data structure:

```bash
$ lar -n1 --nskip 0 -c eventdump.fcl output.root
PROCESS NAME | MODULE LABEL. | PRODUCT INSTANCE NAME | DATA PRODUCT TYPE............ | .SIZE
DAQ......... | daq.......... | ContainerFELIX....... | std::vector<artdaq::Fragment> | ....?
DAQ......... | daq.......... | ContainerTPC......... | std::vector<artdaq::Fragment> | ....?
wclsraw2sig. | raw2sig...... | wiener............... | std::vector<recob::Wire>..... | 15360
wclsraw2sig. | tpcrawdecoder | daq.................. | std::vector<raw::RawDigit>... | ....?
wclsraw2sig. | raw2sig...... | gauss................ | std::vector<recob::Wire>..... | 15360
```

- `protodune-data-check.root`: A large file that records both the waveforms after noise filtering (*hx_raw*) and after deconvolution (*hx_gauss*) in TH2F. They can be looked at using simple ROOT scripts, or using the [Magnify](https://github.com/BNLIF/Magnify-protodune) waveform display tool.

## 3D imaging (Experimental)
It is easy to perform 3D imaging on the deconvolved charge from the event above.

```bash
lar -n1 -c pgrapher/experiment/pdsp/wcls-sig-to-img.fcl output.root
```
The thus obtained 3D blobs are saved in a json format: **clusters-apa?-0000.json**. One can later convert this format to fit the *bee* display with an indepedent python package **wire-cell-python**. One should note that this package runs in a [virtual environment](https://docs.python.org/3/library/venv.html).
```bash
git clone https://github.com/WireCell/wire-cell-python.git
python3 -m venv wire-cell-python
source wire-cell-python/bin/activate
cd wire-cell-python
python setup.py develop # first time deployment, can ignore next time
```
If some packages are complained to be not installed, try `pip install`, e.g., `pip install numpy`.

Now you can merge the json files into a Bee format.

```bash
rm -rf data
mkdir -p data/0
wirecell-img bee-blobs -s center --rse 5145 0 26918 -o data/0/0-junk.json clusters-apa?-0000.json
rm tmp.zip
zip -r tmp data
```
Use "-s uniform -d 10" to randomly sample each blob with 10 points per cm^3 instead of just a single blob-center point.  You can also manually tell Bee the run/subrun/event numbers by adding "--rse 1 2 3".

Finally, you can upload the Bee format file through the Bee display [portal webpage](https://www.phy.bnl.gov/twister/bee). For example, [here](https://www.phy.bnl.gov/twister/bee/set/f3ee077a-756d-4aa8-bb29-cb5bdfb4cedf/event/0/) is the 3D imaging result for the event above.

## Common issues and solutions

### I cannot get data using `ifdh`.
Make sure your Kerberos ticket didn't expire. Run `kinit your-email@FNAL.GOV` first.

### The fhicl or jsonnet file cannot be found.
The file may not be in your `$FHICL_FILE_PATH` or `$WIRECELL_PATH`. In particular, some of those files may only be in the `/wcdo/src/wct/cfg` directory when people develop. Adding the following two lines to your `wcdo-local-myproj.rc` file will help.
```bash
export WIRECELL_PATH=/wcdo/src/wct/cfg:$WIRECELL_PATH
export FHICL_FILE_PATH=$WIRECELL_PATH:$FHICL_FILE_PATH
```
::: tip
**TIP**: A bash function `find-fhicl` is useful to locate a fhicl file. For example, `find-fhicl raw-to-sig.fcl`. You can copy this to your **wcdo-local-myproj.rc**.
:::
```bash
find-fhicl(){
  fhicl_file=$1
  for path in `echo $FHICL_FILE_PATH  | sed -e 's/:/\n/g'`;do find $path -name "$fhicl_file"  2>/dev/null;done
}
```


<!--
For a comparison, this is the reconstruction from pandora
https://www.phy.bnl.gov/twister/bee/set/protodune-gallery/event/0/
-->


<!-- ## how to write some new code in dfp (for example:  print out detector geometry)?
## how to simulate a simple track?
## how to simulate a real event with input from g4? -->