# coding style guide

To ensure maintainability and ease collaborative development,
we use `clang-format` to guarantee code merged in `wire-cell-toolkit` following certain conventions.
A `.clang-format` file is provided in the `wire-cell-toolkit` repository.


## clang-format

### install clang-format

Ubuntu:
```bash
sudo apt install clang-format
```

Mac OS:
http://macappstore.org/clang-format/

### using clang-format

Format file(s) in current path, wildcard expansion is supported.
Following command format all files with `.cxx` extension
in current path using `.clang-format` file (`-style=file`)
**in place** (`-i` overwrite original files)
```bash
clang-format -style=file -i *.cxx
```

Currently, `clang-format` itself doesn't support recursive execution in subfolders.
But we could use other tools like `find` to realize this.
Following command `find` all files in current and subfolders with extensions of
`.cxx`, `.h` or `.cu` and use `clang-format -style=file -i` to format them.

```bash
find . -regex '.*\.\(cxx\|h\|cu\)' -exec clang-format -style=file -i {} \;
```

There are many tutorials on using `clang-format`, e.g.:
[this one](https://leimao.github.io/blog/Clang-Format-Quick-Tutorial/)




## example editor setup

### Atom

### emacs

### Sublime

### VS Code
Using [this extention](https://marketplace.visualstudio.com/items?itemName=xaver.clang-format) from the "marketplace"

### vim
