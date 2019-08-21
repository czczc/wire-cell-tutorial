# External Software
[[toc]]

## Singularity

[Singularity](https://singularity.lbl.gov/) is a lightweight container that provides an operating-system level virtualization. It is popular in the world of scientific high-performance computing (HPC). Wire-Cell use singularity to provide a virtual [scientific linux](https://www.scientificlinux.org/) environment to consistently build the package. During code development, it's important to be always clear if you are working inside your native OS or inside the singularity container.

#### Useful links
- [Official User Guide](https://sylabs.io/guides/3.3/user-guide/#)
- [Short YouTube Basics from Sylabs](https://www.youtube.com/playlist?list=PL052H4iYGzysewYEelldGPOgKRJkxd5zp)

<!-- -------------------------------------------------  -->
## Jsonnet

[Jsonnet](https://jsonnet.org/) is a data templating language, pronounced "jay sonnet", not "json net". It is perhaps popularized by the Kubernetes community. Wire-Cell used jsonnet extensively for configurations.

#### Useful links
- [Official tutorial](https://jsonnet.org/learning/tutorial.html)
- [20' YouTube tutorial by Implus](https://www.youtube.com/watch?v=i5PVp92tAmE)

<!-- -------------------------------------------------  -->
## Eigen

[Eigen](http://eigen.tuxfamily.org/index.php?title=Main_Page) is a C++ template library for linear algebra. In Wire-Cell, linear algebra is used everywhere and Eigen is the underling library to provide both data structures and efficient algorithmic operations.

#### Useful links
- [Official documentation](http://eigen.tuxfamily.org/dox/)