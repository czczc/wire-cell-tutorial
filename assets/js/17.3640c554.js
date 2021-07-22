(window.webpackJsonp=window.webpackJsonp||[]).push([[17],{376:function(s,t,e){"use strict";e.r(t);var a=e(44),n=Object(a.a)({},(function(){var s=this,t=s.$createElement,e=s._self._c||t;return e("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[e("h1",{attrs:{id:"install-wire-cell-toolkit"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-wire-cell-toolkit"}},[s._v("#")]),s._v(" Install Wire-Cell Toolkit")]),s._v(" "),e("p",[s._v("There are several ways to install Wire-Cell Toolkit on your local computer (see, e.g. "),e("a",{attrs:{href:"https://wirecell.github.io/manual.html#outline-container-orga7919bf",target:"_blank",rel:"noopener noreferrer"}},[s._v("here"),e("OutboundLink")],1),s._v("). To avoid choice overloading and get you started as quickly as possible, we describe an "),e("strong",[s._v("officially recommended")]),s._v(" way of installation: using the "),e("a",{attrs:{href:"https://cernvm.cern.ch/",target:"_blank",rel:"noopener noreferrer"}},[s._v("cvmfs"),e("OutboundLink")],1),s._v(" network file system and the "),e("a",{attrs:{href:"https://singularity.lbl.gov/",target:"_blank",rel:"noopener noreferrer"}},[s._v("singularity"),e("OutboundLink")],1),s._v(" container. This way allows you to both develop Wire-Cell by itself and integrate it with other software frameworks such as LArSoft.")]),s._v(" "),e("h2",{attrs:{id:"install-cvmfs"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-cvmfs"}},[s._v("#")]),s._v(" Install CVMFS")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://cernvm.cern.ch/",target:"_blank",rel:"noopener noreferrer"}},[s._v("CVMFS"),e("OutboundLink")],1),s._v(" (CernVM File System) is a utility that mounts remote directories over HTTP. CVMFS provides a simple way to distribute software binaries. Follow "),e("a",{attrs:{href:"https://github.com/WireCell/wire-cell-singularity/blob/master/cvmfs.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("Brett's instruction"),e("OutboundLink")],1),s._v(" for details of installation. For the lazy ubuntu'ers:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" lsb-release\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://ecsft.cern.ch/dist/cvmfs/cvmfs-release/cvmfs-release-latest_all.deb\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" dpkg -i cvmfs-release-latest_all.deb\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" cvmfs cvmfs-config-default\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" cvmfs_config setup\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("p",[s._v("Create a configuration file at "),e("code",[s._v("/etc/cvmfs/default.local")]),s._v(" as follows:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# required, add more if needed.")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CVMFS_REPOSITORIES")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("larsoft.opensciencegrid.org,uboone.opensciencegrid.org,dune.opensciencegrid.org,icarus.opensciencegrid.org\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# requires, replace with actual proxy, or just "DIRECT" if none')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CVMFS_HTTP_PROXY")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"DIRECT"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# BNL Physics department users may use")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v('# CVMFS_HTTP_PROXY="http://batch3.phy.bnl.gov:3128;DIRECT"')]),s._v("\n\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CVMFS_QUOTA_LIMIT")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),e("span",{pre:!0,attrs:{class:"token number"}},[s._v("25000")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token assign-left variable"}},[s._v("CVMFS_CACHE_BASE")]),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("/mnt/ssd/cvmfs\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("Now test with")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("cvmfs_config probe\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v(", and you should see "),e("strong",[s._v("three")]),s._v(" "),e("code",[s._v("Probing ... OK")]),s._v(" messages.")]),s._v(" "),e("p",[s._v("("),e("strong",[s._v("Optional")]),s._v(") If you also want access to the data in "),e("code",[s._v("dune.osgstorage.org")]),s._v(", for example, the photon library in the protoDUNE-SP simulation as will be introduced shortly, it is required to append "),e("code",[s._v("dune.osgstorage.org")]),s._v(" to "),e("code",[s._v("CVMFS_REPOSITORIES")]),s._v(" in "),e("code",[s._v("/etc/cvmfs/default.local")]),s._v(". Check that the other repositories work:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cvmfs_config chksetup\ncvmfs_config probe\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br")])]),e("p",[s._v("The second command may fail on dune.osgstorage.org, we fix that next.")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("cp /cvmfs/config-osg.opensciencegrid.org/etc/cvmfs/domain.d/osgstorage.org.conf /etc/cvmfs/domain.d/\ncvmfs_config chksetup\ncvmfs_config probe\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br")])]),e("p",[s._v("Now, "),e("code",[s._v("dune.osgstorage.org")]),s._v(' should be "OK" and the directory should be accessible: '),e("code",[s._v("/cvmfs/dune.osgstorage.org/")])]),s._v(" "),e("h2",{attrs:{id:"install-singularity"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#install-singularity"}},[s._v("#")]),s._v(" Install Singularity")]),s._v(" "),e("p",[e("a",{attrs:{href:"https://singularity.lbl.gov/",target:"_blank",rel:"noopener noreferrer"}},[s._v("Singularity"),e("OutboundLink")],1),s._v(" is a lightweight container that provides an operating-system level virtualization. It is popular in the world of scientific high-performance computing (HPC). For Wire-Cell development, we use singularity to provide a virtual "),e("a",{attrs:{href:"https://www.scientificlinux.org/",target:"_blank",rel:"noopener noreferrer"}},[s._v("scientific linux"),e("OutboundLink")],1),s._v(" environment. Follow "),e("a",{attrs:{href:"https://sylabs.io/guides/3.0/user-guide/installation.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("here"),e("OutboundLink")],1),s._v(" for detailed installation instructions. For the lazy ubuntu'ers, first, install the "),e("code",[s._v("go")]),s._v(" language:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" update "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("apt-get")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v(" -y "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  build-essential libssl-dev uuid-dev "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  libgpgme11-dev squashfs-tools libseccomp-dev pkg-config\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("wget")]),s._v(" https://dl.google.com/go/go1.11.5.linux-amd64.tar.gz "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or other versions")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("tar")]),s._v(" -C /usr/local -xf go1.11.5.linux-amd64.tar.gz\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export GOPATH=${HOME}/go'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bashrc "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("echo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v("'export PATH=/usr/local/go/bin:${PATH}:${GOPATH}/bin'")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">>")]),s._v(" ~/.bashrc "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n    "),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("source")]),s._v(" ~/.bashrc\ngo get -u github.com/golang/dep/cmd/dep\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br"),e("span",{staticClass:"line-number"},[s._v("7")]),e("br"),e("span",{staticClass:"line-number"},[s._v("8")]),e("br"),e("span",{staticClass:"line-number"},[s._v("9")]),e("br")])]),e("p",[s._v("Then, install "),e("code",[s._v("singularity")]),s._v(" from source")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("go get -d github.com/sylabs/singularity\n"),e("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$GOPATH")]),s._v("/src/github.com/sylabs/singularity\n"),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("git")]),s._v(" checkout -b v3.0.3  v3.0.3 "),e("span",{pre:!0,attrs:{class:"token comment"}},[s._v("# or other tags")]),s._v("\n./mconfig "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -C ./builddir "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("&&")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("\\")]),s._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("sudo")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("make")]),s._v(" -C ./builddir "),e("span",{pre:!0,attrs:{class:"token function"}},[s._v("install")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br"),e("span",{staticClass:"line-number"},[s._v("5")]),e("br"),e("span",{staticClass:"line-number"},[s._v("6")]),e("br")])]),e("h3",{attrs:{id:"troubleshooting"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#troubleshooting"}},[s._v("#")]),s._v(" Troubleshooting")]),s._v(" "),e("p",[s._v("Depending on the filesystem, "),e("code",[s._v("singularity")]),s._v(" might not be able to mount certain drives and will abort with an error message similar to:")]),s._v(" "),e("div",{staticClass:"language- line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-text"}},[e("code",[s._v("error: can't mount image /proc/self/fd/3: failed to mount squashfs filesystem: invalid argument\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("This has been patched from "),e("code",[s._v("v3.5.3")]),s._v(" onwards, but to force it to work on "),e("code",[s._v("v3.0.3")]),s._v(", one can modify the source code by opening:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("$EDITOR")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token variable"}},[s._v("${GOPATH}")]),s._v("/src/github.com/sylabs/singularity/internal/pkg/util/fs/mount/mount.go\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("and replacing the codeblock:")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("options "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fmt.Sprintf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"loop,offset=%d,sizelimit=%d,errors=remount-ro"')]),s._v(", offset, sizelimit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br")])]),e("p",[s._v("with")]),s._v(" "),e("div",{staticClass:"language-bash line-numbers-mode"},[e("pre",{pre:!0,attrs:{class:"language-bash"}},[e("code",[s._v("options "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" fmt.Sprintf"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"loop,offset=%d,sizelimit=%d"')]),s._v(", offset, sizelimit"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("if")]),s._v(" fstype "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("==")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('"ext3"')]),s._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("{")]),s._v("\n        options "),e("span",{pre:!0,attrs:{class:"token operator"}},[s._v("+=")]),s._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[s._v('",errors=remount-ro"')]),s._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("}")]),s._v("\n")])]),s._v(" "),e("div",{staticClass:"line-numbers-wrapper"},[e("span",{staticClass:"line-number"},[s._v("1")]),e("br"),e("span",{staticClass:"line-number"},[s._v("2")]),e("br"),e("span",{staticClass:"line-number"},[s._v("3")]),e("br"),e("span",{staticClass:"line-number"},[s._v("4")]),e("br")])]),e("p",[s._v("and rebuilding with the "),e("code",[s._v("mconfig")]),s._v(" command as before. This is because "),e("code",[s._v("remount-ro")]),s._v(" is an invalid argument to provide while mounting squashfs drives, as squashfs doesn't recognize it. More context is given "),e("a",{attrs:{href:"https://stackoverflow.com/questions/63061424/squashfs-error-when-running-singularity-after-ubuntu-upgrade",target:"_blank",rel:"noopener noreferrer"}},[s._v("here"),e("OutboundLink")],1)]),s._v(" "),e("h2",{attrs:{id:"use-wcdo"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#use-wcdo"}},[s._v("#")]),s._v(" Use wcdo")]),s._v(" "),e("p",[e("code",[s._v("wcdo")]),s._v(" is a command line tool that provides convenient methods to do stuff with Wire-Cell in a Singularity container. Follow "),e("a",{attrs:{href:"https://github.com/WireCell/wire-cell-singularity/blob/master/wcdo.org",target:"_blank",rel:"noopener noreferrer"}},[s._v("Brett's instruction"),e("OutboundLink")],1),s._v(" to get started, or see the "),e("a",{attrs:{href:"workflow"}},[s._v("next section")]),s._v(" for example workflows.")])])}),[],!1,null,null,null);t.default=n.exports}}]);