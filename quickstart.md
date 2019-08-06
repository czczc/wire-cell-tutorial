# Quick starts

## Explore real data from protoDUNE-SP
First, copy a raw data file to your working directory.
```bash
$ wget https://www.phy.bnl.gov/~wgu/wire-cell-tutorial/data/np04_raw_run005145_0022_dl10.root
```
Alternatively, if you have properly installed the `cvmfs` and the `kx509` environment, you can also get through gsiftp.
```bash
$ ifdh cp -D gsiftp://fndca1.fnal.gov:2811/pnfs/fnal.gov/usr/dune/tape_backed/dunepro/protodune/np04/beam/detector/None/raw/06/61/29/25/np04_raw_run005145_0022_dl10.root .
```

### Check data structure
The data file has a special root format, one can check the data structure for an event through a larsoft fhicl `eventdump`.
```bash
$ lar -n1 --nskip 0 -c eventdump.fcl np04_raw_run005145_0022_dl10.root
```

### Signal processing
To perform the signal processing and 3D imaging, one calls the wire-cell configuration through larsoft fhicl configuration `wcls-raw-to-sig` and `wcls-sig-to-img` , respectively.
```bash
lar -n1 -c pgrapher/experiment/pdsp/Quickstart/raw-to-sig.fcl np04_raw_run005145_0022_dl10.root
```

One can have two output files: **protodune-data-check.root** and **output.root**. The former records the raw waveform (**raw**, after noise filtering)and the deconvolved waveform (**gauss**) in ROOT TH2F, while the latter keeps the signal processing result in a LArSoft format. You can check the data structure via `eventdump` as followed.

```bash
PROCESS NAME | MODULE LABEL. | PRODUCT INSTANCE NAME | DATA PRODUCT TYPE............ | .SIZE
DAQ......... | daq.......... | ContainerFELIX....... | std::vector<artdaq::Fragment> | ....?
DAQ......... | daq.......... | ContainerTPC......... | std::vector<artdaq::Fragment> | ....?
wclsraw2sig. | raw2sig...... | wiener............... | std::vector<recob::Wire>..... | 15360
wclsraw2sig. | tpcrawdecoder | daq.................. | std::vector<raw::RawDigit>... | ....?
wclsraw2sig. | raw2sig...... | gauss................ | std::vector<recob::Wire>..... | 15360
```

::: tip
**TIP**: A bash function `find-fhicl` is useful to locate a fhicl file. For example, `find-fhicl wcls-raw-to-sig.fcl`. You can copy into your `wcdo-local-myproj.sh`.
:::
```bash
find-fhicl(){
  fhicl_file=$1
  for path in `echo $FHICL_FILE_PATH  | sed -e 's/:/\n/g'`;do find $path -name "$fhicl_file"  2>/dev/null;done
}
``` 

### 3D imaging and visulization

```bash
lar -n1 -c pgrapher/experiment/pdsp/wcls-sig-to-img.fcl output.root 
```
After the above execution, the resulting 3D blobs are saved in a json format: **clusters-apa?-0000.json**. 

To visulize the imaging blobs, one needs to use an indepedent python package **wire-cell-python**, which runs in an virtual environment.
```bash
git clone https://github.com/WireCell/wire-cell-python.git
python3 -m venv wire-cell-python
source wire-cell-python/bin/activate
python setup.py develop
```
If some packages are complained not installed, try `pip install` in the virtual environment. For example, `pip install numpy`.

```bash
rm -rf data
mkdir -p data/0
wirecell-img bee-blobs -s center --rse 5145 0 26918 -o data/0/0-junk.json clusters-apa?-0000.json
rm tmp.zip
zip -r tmp data
```
Use "-s uniform -d 10" to randomly sample each blob with 10 points per cm^3 instead of just a single blob-center point.  You can also manually tell Bee the run/subrun/event numbers by adding "--rse 1 2 3".

Afterward, you can upload and see your bee-formatted data (**tmp.zip**) via https://www.phy.bnl.gov/twister/bee. For example, [here](https://www.phy.bnl.gov/twister/bee/set/f3ee077a-756d-4aa8-bb29-cb5bdfb4cedf/event/0/) is the 3D imaging result for the event above.

<!--
For a comparison, this is the reconstruction from pandora
https://www.phy.bnl.gov/twister/bee/set/protodune-gallery/event/0/
-->


## how to write some new code in dfp (for example:  print out detector geometry)?
## how to simulate a simple track?
## how to simulate a real event with input from g4?