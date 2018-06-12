//*********************************************************************************
//
//  Copyright(c) 2008,2018 Kevin Willows. All Rights Reserved
//
//	License: Proprietary
//
//  THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
//  IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
//  FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
//  AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
//  LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
//  OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN
//  THE SOFTWARE.
//
//*********************************************************************************
'use strict';
const fs = require('fs');
const path = require('path');
const source = "./DOMDocument.xml";
const chars = "0123456789ABCDEF";
function genGUID() {
    let GUID = "";
    for (let i1 = 0; i1 < 32; i1++) {
        GUID += chars.charAt(Math.floor(Math.random() * chars.length));
    }
    return GUID;
}
function sampleFolderProcessor() {
    process.argv.forEach(function (val, index, array) {
        console.log(index + ': ' + val);
    });
    console.log("Executable = " + __filename);
}
const testFolder = "./Library"; // __dirname;
function listTree(fpath, indent) {
    console.log(("\n" + indent + path.basename(fpath) + "\t :" + path.dirname(fpath)).toUpperCase());
    try {
        let files = fs.readdirSync(fpath);
        files.forEach(file => {
            let _path = fpath + "/" + file;
            try {
                let stats = fs.statSync(_path);
                if (stats.isDirectory()) {
                    listTree(_path, indent + "|\t");
                }
                else {
                    if (file.startsWith("TC_")) {
                        console.log(indent + ">    " + file + "   [LINKAGE UDPATE]");
                        updateLinkage(_path);
                    }
                    else {
                        console.log(indent + ">    " + file);
                    }
                }
            }
            catch (error) {
                console.log("Error = " + error);
            }
        });
    }
    catch (error) {
        console.log("Error = " + error);
    }
}
listTree("./Library", "");
/**
 *
 *
 */
function updateLinkage(source) {
    var DOMParser = require('xmldom').DOMParser;
    var XMLSerializer = require('xmldom').XMLSerializer;
    let parser = new DOMParser();
    let serializer = new XMLSerializer();
    // Read the DOMDocument file and parse it into XML
    // 
    let _document = fs.readFileSync(source, "utf8");
    let doc = parser.parseFromString(_document, 'text/xml');
    //  Set the guid on the document itself
    let classPath = doc.documentElement.getAttribute('name');
    let className = path.basename(classPath);
    doc.documentElement.setAttribute('linkageClassName', className);
    // Generate the new DOMDocument from the XML
    let update = serializer.serializeToString(doc.documentElement);
    // console.info(update);
    try {
        fs.writeFileSync(source, update, 'utf8');
    }
    catch (err) {
        if (err) {
            console.error('ERROR:', err);
            return;
        }
    }
}
//# sourceMappingURL=linkage.js.map