# Install Wire-Cell Toolkit

<!---
[[toc]]
--->

There are several different ways to install Wire-Cell Toolkit on your local computer (see, e.g. [here](https://wirecell.github.io/manual.html#outline-container-orga7919bf)). To avoid the burden of choice overloading and get you started as quickly as possible, we describe an **officially recommended** way of installation: using the [cvmfs](https://cernvm.cern.ch/) network file system and the [singularity](https://singularity.lbl.gov/) container. This way allows you to both develop Wire-Cell by itself and integrate it with other software frameworks such as LArSoft.

## CVMFS
[CVMFS](https://cernvm.cern.ch/) (CernVM File System) is a utility that mounts remote directories over HTTP. CVMFS provides a simple way to distribute software binaries. Follow [Brett's instruction](https://github.com/WireCell/wire-cell-singularity/blob/master/cvmfs.org) for details of installation. For the lazy ubuntu'ers:

```bash
sudo apt-get install lsb-release
wget https://ecsft.cern.ch/dist/cvmfs/cvmfs-release/cvmfs-release-latest_all.deb
sudo dpkg -i cvmfs-release-latest_all.deb
sudo apt-get update
sudo apt-get install cvmfs cvmfs-config-default
sudo cvmfs_config setup
```

Create a configuration file at `/etc/cvmfs/default.local` as follows:
```bash
# required, add more if needed.
CVMFS_REPOSITORIES=larsoft.opensciencegrid.org,uboone.opensciencegrid.org,dune.opensciencegrid.org
# requires, replace with actual proxy, or just "DIRECT" if none
CVMFS_HTTP_PROXY="DIRECT"
# BNL Physics department users may use
# CVMFS_HTTP_PROXY="http://batch3.phy.bnl.gov:3128;DIRECT"

CVMFS_QUOTA_LIMIT=25000
CVMFS_CACHE_BASE=/mnt/ssd/cvmfs
```

Now test with
```bash
cvmfs_config probe
```
, and you should see **three** `Probing ... OK` messages.

## Singularity

[Singularity](https://singularity.lbl.gov/) is a lightweight container that provides an operating-system level virtualization. It is popular in the world of scientific high-performance computing (HPC). For Wire-Cell development, we use singularity to provide a virtual [scientific linux](https://www.scientificlinux.org/) environment. Follow [here](https://sylabs.io/guides/3.0/user-guide/installation.html) for detailed installation instructions. For the lazy ubuntu'ers, first, install the `go` language:
```bash
sudo apt-get update && sudo apt-get install -y \
  build-essential libssl-dev uuid-dev \
  libgpgme11-dev squashfs-tools libseccomp-dev pkg-config
sudo wget https://dl.google.com/go/go1.11.5.linux-amd64.tar.gz # or other versions
sudo tar -C /usr/local -xf go1.11.5.linux-amd64.tar.gz
echo 'export GOPATH=${HOME}/go' >> ~/.bashrc && \
    echo 'export PATH=/usr/local/go/bin:${PATH}:${GOPATH}/bin' >> ~/.bashrc && \
    source ~/.bashrc
go get -u github.com/golang/dep/cmd/dep
```
Then, install `singularity` from source
```bash
go get -d github.com/sylabs/singularity
cd $GOPATH/src/github.com/sylabs/singularity
git checkout -b v3.0.3  v3.0.3 # or other tags
./mconfig && \
  make -C ./builddir && \
  sudo make -C ./builddir install
```

## wcdo
`wcdo` is a command line tool that provides convenient methods to do stuff with Wire-Cell in a Singularity container. Follow [Brett's instruction](https://github.com/WireCell/wire-cell-singularity/blob/master/singularity.org) to get started.

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

-->
