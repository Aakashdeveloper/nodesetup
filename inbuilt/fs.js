let fs = require('fs');
let os = require('os');
let opt = os.platform()
let core = (os.cpus()).length+ " core"
let arch = os.arch()

//let out = "You are using "+opt+" os of "+arch+" bit with "+core+" system."
let out = `You are using ${opt} os of ${arch} bit with ${core} system.`

// fs.writeFile('mytext.txt','This is Node fs package',function(){
//     console.log('File Created')
// })

// fs.appendFile('mycode.txt',out,function(){
//     console.log('File Appended')
// })

// fs.readFile('db.json','utf-8',function(err,data){
//     if(err) throw err;
//     console.log(data)
// })

// fs.unlink('mytext.txt',function(err){
//     if(err) throw err
//     console.log('file deleted')
// })

fs.rename('mycode.txt','myfile.txt',function(err){
    if(err) throw err;
    console.log('file Rename')
})
