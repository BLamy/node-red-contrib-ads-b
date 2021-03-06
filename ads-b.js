/**
 * Copyright 2016 Neil Kolban.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 **/

module.exports = function(RED) {
  var sbs1 = require("sbs1");
  function ADSBNode(config) {
    
    var thisNode = this;
    
    this.on("input", function(msg) {
      msg.payload = sbs1.parseSbs1Message(msg.payload);
      thisNode.send(msg);
    });
    RED.nodes.createNode(thisNode, config);
  } // End of ADSBNode definition

  RED.nodes.registerType("ads-b", ADSBNode);
} // End of module.exports
// End of file
