
const fs = require("fs");
const fse = require("fs-extra");
fse.mkdirp('./testfolder');
fse.createFile('./testfolder/newfile.txt');
fse.mkdirp('./testfolder_2');
fse.moveSync( './testfolder/newfile.txt', './testfolder_2/newfile.txt'); 
fse.mkdirp('./testfolder_3');
fse.copySync("./testfolder_2/newfile.txt", './testfolder_3/newfile.txt');
fse.removeSync("./testfolder_2/newfile.txt");
fse.removeSync('./testfolder_3/newfile.txt');
fse.removeSync("./testfolder");
fse.removeSync("./testfolder_2");
fse.removeSync("./testfolder_3");
