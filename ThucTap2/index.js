//Module
var express = require("express");
var path = require("path");
var app = express();
var bodyParser = require("body-parser");
var cookieParser = require("cookie-parser");
//Create Server
var server = require("http").createServer(app);
var io = require("socket.io")(server);
server.listen(process.env.PORT || 2019, () => {
    //console.log('Connected')
});

io.on('connection', function (socket) {
    console.log("Have connected to server with id:" + socket.id);
});

//Setting
app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");
app.use("/", express.static(path.join(__dirname, 'public')));
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//Include
var indexRoutes = require('./routes/index');
app.use('/', indexRoutes);

var lplmRoutes = require('./routes/lplm');
app.use('/lplm', lplmRoutes);

var qlnkltmRoutes = require('./routes/qlnkltm');
app.use('/qlnkltm', qlnkltmRoutes);


