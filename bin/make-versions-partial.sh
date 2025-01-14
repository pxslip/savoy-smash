COCKTAILS=$(ls content/cocktails)
echo $COCKTAILS

for dir in $COCKTAILS;
do
    mv content/cocktails/$dir/versions content/cocktails/$dir/_versions
done;