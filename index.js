const fs = require('fs');
const { join } = require('path');

const traverse = dir => {
  /* 
    Get a content item of the dir and check if it's a directory'.
    If it is, read already its content.
  */
  const subdirs = fs
    .statSync(dir)
    .isDirectory()
    && fs.readdirSync(dir);

  if (subdirs) {
    console.log('.. Traversing', dir);

    subdirs.forEach(subdir => {
      const fullPath = join(dir, subdir);

      traverse(fullPath);
    });
  }
};
