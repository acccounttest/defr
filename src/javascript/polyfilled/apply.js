    	var me					= this;
    	
    	// If it's a stylesheet and we are in Internet Explorer
    	if (!me.arm(localStorageSupport).j && (createStyleSheet in doc)) {
    		if (localStorageSupport) {
    			var stylesheet		= doc[createStyleSheet]();
    			stylesheet.cssText	= me.e.innerText || me.e.text;
    		} else {
    			doc[createStyleSheet](me.e[getAttribute]('href'));
    		}
    		
    	// Else
    	} else {
    		headElement[appendChild](me.e);
    	}
    	
    	// Call the onload handler
    	me.e[onloadHandlerName]();