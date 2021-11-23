const fs = require('fs')
const AWS = require('aws-sdk')
const s3 = new AWS.S3();

const redirectFile = JSON.parse(fs.readFileSync('./wordpress/config/redirects.json'))
redirectFile.redirects.forEach((redirect) => {
  console.log('Uploading ', redirect)
  s3.putObject({
    Body: '',
    Bucket: 'staging.cannabis.ca.gov',
    Key: (redirect.url.indexOf('/') === 0) ? redirect.url.substring(1) : redirect.url,
    WebsiteRedirectLocation: redirect.action_data.url
  }, (err, data) => {
    if (err) return console.log(err)
    console.log(data)
  })
})