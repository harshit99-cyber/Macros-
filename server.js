const express = require('express')
const app = express()
const pynode = require('@fridgerator/pynode');
pynode.startInterpreter();
pynode.appendSysPath('G:\Macros');
pynode.appendSysPath('C:\Users\Harshit\anaconda3\Lib\site-packages');
pynode.openFile('Automate')
app.listen(4000)

data={Java:{0:"void setup()\n{\nsize(400,400);\n\n}\n\n\nvoid draw()\n{\nbackground(0);\n\n}",
            1:"import java.io.IOException;\nimport java.net.URI;\n import java.net.*;\nvoid doGet(String s)\n{\ntry{\nString url = \"http://192.168.43.188:7000/data?c=\"+s;\n HttpURLConnection httpClient =\n(HttpURLConnection) new URL(url).openConnection();\nhttpClient.setRequestMethod(\"GET\");\nhttpClient.setConnectTimeout(100);\nhttpClient.getResponseCode();\n}\ncatch(Exception e)\n{\nprintln(e);\n } \n}",
            2:"class name\n{\n\n\n name()\n{\n\n}\n\nvoid show()\n{\n\n}\n\n}",
            3:"for(int i=0;i<;i++)\n{\n\n\n\n}",
            4:"for(int i=0;i<;i++)\n{\nfor(int j=0;j<;j++)\n{\n\n\n}\n}"
},
            Python:{0:"from keras.layers import Conv2D,Dense,Flatten,MaxPooling2D \nfrom keras.models import Sequential",
                1:"model=Sequential()\nmodel.add(Conv2D(32,kernel_size=(3,3),strides=1,padding='valid',input_shape=(200,200,3),activation='relu'))\nmodel.add(MaxPooling2D(pool_size=2))\nmodel.add(Conv2D(16,kernel_size=(3,3),strides=1,padding='valid',activation='relu'))\nmodel.add(MaxPooling2D(pool_size=2))\nmodel.add(Conv2D(16,kernel_size=(3,3),strides=1,padding='valid',activation='relu'))\nmodel.add(Flatten())\nmodel.add(Dense(2,activation='sigmoid'))\nmodel.compile(optimizer='adam', loss='mse')"},
        NodeJs:{0:"const express = require('express')\nconst app = express()\napp.listen()",
                1:"const app = require('express')();\nconst port = \nconst server = app.listen(port,()=>console.log(\"server is stared at port : \"+port))\nvar io = require('socket.io')(server)\n\napp.get('/', (req, res) => {\n    res.send();\n});\n\nio.on('connection', (socket) => {\nconsole.log('a user connected');\n});\n\n",
                2:"npm start\n",
                3:"app.use(express.static('./public'))"
                
            },
        JavaScript:{
            0:"(err,data)=>{\nif(err) return \nconsole.log(data)}",
            1:"message=>{console.log(message)}",
            2:"<html>\n<head>\n<title>example</title>\n<body>\n\n\n</body>\n</html>",
            3:"function setup()\n{\n\ncreateCanvas(400,400)\n\n\n\n}\n\nfunction draw()\n{\n\nbackground(0)\n\n\n\n}\n"
        }
}


app.get('/keyStroke',function(req,res){
    console.log(req.query.language,req.query.Signature);
    pynode.call('handeller',data[req.query.language][req.query.Signature],function(){

    })
    res.send("fine dude")
})


app.get('/openProcessing',function(req,res){

    res.send("opening processing");
    pynode.call("openProcessing",function(message){console.log(message)})

})


app.get('/openVScode',function(req,res){

    res.send("opening VScode");
    pynode.call("openVScode",function(message){console.log(message)})

})


app.get('/openPowershell',function(req,res){

    res.send("opening Powershell");
    pynode.call("openPowershell",function(message){console.log(message)})

})

app.get('/openChrome',function(req,res){
    res.send("opening chrome");
    pynode.call('openChrome',function(message){
        console.log(message)
    })
})

app.get('/openCmd',function(req,res){
    res.send("opening cmd")
    pynode.call('openCmd',function(){

    })
})

app.get('/openNotepad',function(req,res){
    res.send("opening cmd")
    pynode.call('openNotepad',function(){
        
    })
})