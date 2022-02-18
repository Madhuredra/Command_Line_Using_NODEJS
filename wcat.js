#!/usr/bin/env/node
const fs = require('fs')
let inputArr = process.argv.slice(2);

let optionArr = [];
let filesArr = [];


//1
for (let i = 0; i < inputArr.length; i++) {
  if(inputArr[i].charAt(0)==='-'){
    optionArr.push(inputArr[i])
  }
  else{
    filesArr.push(inputArr[i])
  }
}
//errorHandling
let isBoth = optionArr.includes("-n") && optionArr.includes("-b");
if(isBoth){
  console.log("enter either -n or -b");
  return;
}


//filehandling
for (let i = 0; i < filesArr.length; i++){
  if(fs.existsSync(filesArr[i])==false){
    console.log(`file ${filesArr[i]} is not present`);
    return;
  }
}

//2

if(optionArr.includes("-show")){
  let  contentOfFile = "";
  for (let i = 0; i < filesArr.length; i++) {
    contentOfFile += fs.readFileSync(filesArr[i]).toString()+"\n";
  }
  console.log(contentOfFile);
}



//3
const showContentWithoutSpace = () => {
  let content = "";
  for (let i = 0; i < filesArr.length; i++) {
    content += fs.readFileSync(filesArr[i]).toString()+"\r\n";
  }
  let outputContent = content.split("\r\n");
  let contentAns = "";
  for (let i = 0; i < outputContent.length; i++) {
    if(outputContent[i]!==''){
      // contentAns += ;
      console.log(outputContent[i]+"\n");
    }
    
  }
  // console.log(contentAns);
}


//4
//-s
for (let i = 0; i < optionArr.length; i++) {
  if(optionArr[i]=="-s"){
    showContentWithoutSpace();
  }
  
}

//5
//-n
const showContentWittNumbering = () => {
  let content = "";
  for (let i = 0; i < filesArr.length; i++) {
    content += fs.readFileSync(filesArr[i]).toString()+"\r\n";
  }
  let outputContent = content.split("\r\n");

  let contentAns = "";
  let k =0;
  for (let i = 0; i < outputContent.length; i++) {
    if(outputContent[i]!==''){
      k++;
      console.log(k + " " + outputContent[i]+"\n");
    }
    
  }
  
}
for (let i = 0; i < optionArr.length; i++) {
  if(optionArr[i]=="-n"){
    showContentWittNumbering();
  }
  
}


//5