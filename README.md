# gammapbx
a few files to exercise a clonable git project.

edit package.json "version"
protoc --plugin=protoc-gen-ts=./node_modules/.bin/protoc-gen-ts \
  --js_out=import_style=commonjs,binary:. --ts_out=service=false:. \
  -I ./src src/gamma.proto
git add src/gamma.proto gamma_pb.js gamma_pb.d.ts package.json // README.md
git commit -m "..."
git tag 0.2.0
git push origin master --tags
npm publish


# generate gamma/player/util/GammaProto.java
protoc -I ./src --java_out=. ./src/gamma.proto

