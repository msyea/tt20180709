# Technical Task

Please see my submission of the technical test. To run the output please excute the following commands:

    npm install
    npm test
    npm start

I had assumed that fairly trivial implementation was appropriate. Processing the full text in memory isn't the 
most efficient approach. Breaking the `concordance` function down futher, streaming the text, working with
chunks and reducing the results would have been better.