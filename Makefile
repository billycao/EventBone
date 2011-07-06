# Concatenate js files
SRC_DIR = js/

JS_MODULES =	${SRC_DIR}script.js\
		${SRC_DIR}plugins.js\
            	${SRC_DIR}libs/dd_belatedpng.js\
              ${SRC_DIR}libs/jquery-1.5.1.min.js\
              ${SRC_DIR}libs/modernizr-1.7.min.js\
              ${SRC_DIR}gcalendar.js

application.js: ${JS_MODULES}
	cat > $@ $^
