rm hodor.zip
zip hodor.zip -r *
aws lambda update-function-code --function-name Hodor --zip-file fileb://hodor.zip --profile personal
rm hodor.zip