var http = require('http');
var formidable = require('formidable');
var fs = require('fs');

http.createServer(function (req, res) {
    if (req.url == '/fileupload') {
        var form = new formidable.IncomingForm();
        form.parse(req, function (err, fields, files) {
            var oldpath = files.filetoupload.filepath;
            var newpath = '/home/ron/Workspace/cardform/media/' + files.filetoupload.originalFilename;
            // I can't cut files across partitions (/ and /home)
            // so I have to copy it over and remove the old one
            fs.copyFile(oldpath, newpath, function (err) {
              if (err) throw err;
              res.write('File uploaded and copied over!');
              res.end();
            });
            // remove the old one 
            fs.unlink(oldpath, function(err){
                if(err) throw err;
                res.write('Temp file deleted!');
            });
       });
    } 
    else {
    // make the web form 
    res.writeHead(200, {'Content-Type': 'text/html'});
    res.write('<form action="fileupload" method="post" enctype="multipart/form-data">');
    res.write('<input type="file" name="filetoupload"><br>');
    res.write('<input type="submit">');
    res.write('</form>');
    return res.end();
  
  }
}).listen(3000); 