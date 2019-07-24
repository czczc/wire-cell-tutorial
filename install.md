# Install Wire-Cell Toolkit

<!---
[[toc]]
--->

There are several different ways to install Wire-Cell Toolkit on your local computer (see, e.g. [here](https://wirecell.github.io/manual.html#outline-container-orga7919bf)). To avoid the burden of choice overloading and get you started as quickly as possible, we describe an **officially recommended** way of installation: using the [cvmfs](https://cernvm.cern.ch/) network file system and the [singularity](https://singularity.lbl.gov/) container. This way allows you to both develop Wire-Cell by itself and integrate it with other software frameworks such as LArSoft.

## CVMFS
CVMFS (CernVM File System) is a utility that mounts remote directories over HTTP. CVMFS provides a simple way to distribute software binaries. Follow [Brett's instruction](https://github.com/WireCell/wire-cell-singularity/blob/master/cvmfs.org) for details of installation. For the lazy ubuntu'ers:

```bash
sudo apt-get install lsb-release
wget https://ecsft.cern.ch/dist/cvmfs/cvmfs-release/cvmfs-release-latest_all.deb
sudo dpkg -i cvmfs-release-latest_all.deb
rm -f cvmfs-release-latest_all.deb
sudo apt-get update
sudo apt-get install cvmfs cvmfs-config-default
sudo cvmfs_config setup
```

Create a configuration file at `/etc/cvmfs/default.local` as follows:
```bash
# required, add more if needed.
CVMFS_REPOSITORIES=larsoft.opensciencegrid.org,uboone.opensciencegrid.org,dune.opensciencegrid.org
# requires, replace with actual proxy, or just "DIRECT" if none
CVMFS_HTTP_PROXY="http://my.local.proxy:1234;DIRECT"
# BNL Physics department users may use
# CVMFS_HTTP_PROXY="http://batch3.phy.bnl.gov:3128;DIRECT"

CVMFS_QUOTA_LIMIT=25000
CVMFS_CACHE_BASE=/mnt/ssd/cvmfs
```

Now testing with
```bash
cvmfs_config probe
```
, and you should see **three** `Probing ... OK` messages.

## Singularity



<!--
::: tip TIP
This is a tip
:::

::: warning WARNING
This is a warning
:::

::: danger STOP
This is a dangerous, don't do it
:::

```bash{2,4}
ls
source this.sh
wire-cell
echo
```
-->
