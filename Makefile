all: public/js/bundle.js

public/js/bundle.js: public/client-bundle.js
	$(info "Building bundle.js")
	browserify $< -o $@
