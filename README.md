Thanks for your interest in comparethemarket.com.  The following test has been compiled to look at how you would structure a project, and the approach you would take to solve the problem. It is recommended that you complete the test in JavaScript, either in a browser or in Node, depending on your strengths.
 
We ask that you can keep the details of this test confidential and if you have any questions please get in touch. When you have completed the test please send it back for review. 
 
Technical Test
 
The test is as follows:

Given a book in a text file (http://www.loyalbooks.com/download/text/Railway-Children-by-E-Nesbit.txt for example)

1.  Write an application that outputs the individual words that appear in the book, and how many times that word appears in the text file.
2.  The second part is to also output whether the number of times each word appears is a prime number.
 
The following assumptions can be made:
•  Ignore punctuation and capitalisation
•  TDD is expected
  

# Technical Task

Please see included my submission of the technical test. To run the output please excute the following commands:

    npm install
    npm test
    npm start

I had assumed that fairly trivial implementation was appropriate. Processing the full text in memory isn't the 
most efficient approach. Breaking the `concordance` function down futher, streaming the text, working with
chunks and reducing the results would have been better.