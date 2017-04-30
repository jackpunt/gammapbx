# gammapbx
a few files to exercise a clonable git project.

protoc --js_out=import_style=commonjs:. src/gamma.proto
mv src/gamma_pb.js .
git add src/gamma.proto gamma_pb.js
git commit -m "..."
git tag 0.2.0
