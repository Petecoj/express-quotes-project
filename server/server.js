const express = require('express');

const app = express();

const port = process.env.PORT || 5000;

let quotes = [{
        quote: "Don't cry because it's over, smile because it happened.",
        author: "Dr. Suess"
    },
    {
        quote: "Be yourself; everyone else is already taken.",
        author: "Oscar Wilde"

    },
    {
        quote: "So many books, so little time.",
        author: "Frank Zappa"
    },
    {
        quote: "you only live once, but if you do it right, once is enough.",
        author: "Mae West"
    },
    {
        quote: "Be the change that you wish to see in the world.",
        author: "Mahatma Gandhi"
    }
]
app.use(express.static('server/public'));
app.get('/famousquotes', function (req, res) {
    res.send(quotes);
})

app.listen(port, function () {
    console.log('listening on port', port);
});