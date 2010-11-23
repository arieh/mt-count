/*
---
description: A generic method to check the length of any type of variable.

license: MIT-style

authors:
- Arieh Glazer

requires:
- core/1.3 : [Core]

provides: [$count]

...
*/
/*!
Copyright (c) 2010 Arieh Glazer

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in
all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
THE SOFTWARE 
*/
function $count(obj){
  if (!obj) return 0;
	
	switch(typeOf(obj)){
      case 'number'  : return obj; 
        
      case 'function':
          return (obj+"").split('{')[1].test(/[\w]+/) ? 1 : 0;
            
      case 'object' : 
        if (obj['getLength']) return obj.getLength();
        
        var len = 0;
        for (var f in obj) if (obj.hasOwnProperty(f)) len++;
        return len;
        
      case 'window'  :
      case 'document':
      case 'element' : return obj.getChildren().length;
  }
	
  return ((obj.length) ?
      obj.length :
      (typeOf(+obj)) ? +obj : 1);
};
