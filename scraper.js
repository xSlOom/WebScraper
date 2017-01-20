var request     = require('request');
var cheerio     = require('cheerio');
var keywords    = "";
var desc        = "";
var copyright   = "";
var img         = [];
var lnk         = [];
var lnkalt      = [];
var lnknoalt    = [];

function init(url) {
    console.log("Please wait until we have fetched everything...");
    request({
        url: url, //URL to hit
        method: 'GET'
    }, function(error, response, body){
        if(error) {
            console.log("Failed to get informations from this website!");
        } else {
            $               = cheerio.load(body);
            var title       = $('title').text();
            var charset     = $('meta').attr('charset');
            $('meta').each(function() {
                var name = $(this).attr('name');
                switch(name) {
                    case "description":
                        desc = $(this).attr('content');
                    break;
                    case "keywords":
                        keywords = $(this).attr('content');
                    break;
                    case "copyright":
                        copyright = $(this).attr('content');
                    break;
                }
            });
            $('img').each(function() { // get all images of the site
                var image   = $(this).attr('src');
                if ((image !== undefined)) {
                    img.push(image);
                }
            });
            $('a').each(function() { // get all links from the site
                var link   = $(this).attr('href');
                if ((link !== undefined) && (link.substr(0, 2) == "//" || link.substr(0, 4) == "http")) {
                    lnk.push(link);
                    if ($(this).attr('alt') !== undefined) {
                        lnkalt.push(link);
                    } else {
                        lnknoalt.push(link);
                    }
                }
            });
            // show everything c: !
            console.log("Charset: " + (charset == undefined ? "NULL" : charset));
            console.log("Title: " + (title == undefined ? "NULL" : title));
            console.log("Description: " + (desc == "" ? "NULL" : desc));
            console.log("Keywords: " + (keywords == "" ? "NULL" : keywords));
            console.log("Copyright: " + (copyright == "" ? "NULL" : copyright));
            console.log("Images: " + (img.length > 0 ? img.join(' | ') : "NULL"));
            console.log("Images count : " + img.length);
            console.log("Links: " + (lnk.length > 0 ? lnk.join(' | ') : "NULL"));
            console.log("Links count : " + lnk.length);
            console.log("Links without 'alt' attribut : " + lnknoalt.length);
            console.log("Links with 'alt' attribut : " + lnkalt.length);
        }
    });
};

init('http://illuxat.com');