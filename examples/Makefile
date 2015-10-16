.PHONY: all clean

all: docs/minimal.html docs/game.html

docs/%.html: src/%.json docco languages.json unitag-engine.js
	./docco $<

docco: node_modules

node_modules:
	npm install

clean:
	rm -rf docs
