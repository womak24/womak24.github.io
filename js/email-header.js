                // Email obfuscator script 2.1 by Tim Williams, University of Arizona
                // Random encryption key feature by Andrew Moulden, Site Engineering Ltd
                // This code is freeware provided these four comment lines remain intact
                // A wizard to generate this code is at http://www.jottings.com/obfuscator/
                { coded = "WYHg@LgktBT6.oO"
                  key = "e1r7qZ629zvnJ3GOhfbPaUTQNRYmdKxSHVItipFw8CkoyMAsXlEW04L5uBgjcD"
                  shift=coded.length
                  link=""
                  for (i=0; i<coded.length; i++) {
                    if (key.indexOf(coded.charAt(i))==-1) {
                      ltr = coded.charAt(i)
                      link += (ltr)
                    }
                    else {     
                      ltr = (key.indexOf(coded.charAt(i))-shift+key.length) % key.length
                      link += (key.charAt(ltr))
                    }
                  }
                document.write("<a href='mailto:"+link+"' class='btn btn-info btn-sm navbar-btn'><i class='fa fa-envelope-o'></i> Email schreiben</a>")
                }
                