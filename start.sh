echo "Starting the Next.js app..."
echo "Connecting to MongoDB at: $MONGODB_URI"

if [ -z "$MONGODB_URI"]; then
    echo "MongoDB URI is not set!"
    exit 1
fi

npm start
