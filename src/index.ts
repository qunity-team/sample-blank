/**
 * Created by rockyl on 2020-03-08.
 */

import {createApp, } from 'qunity-pixi';
import registerScripts from "register-scripts";
import registerSceneDocs from "register-sceneDocs";
import "./need-compile";

let app = createApp();

registerScripts(app);
registerSceneDocs(app);

export function launch(){
	console.log('launch');

	app.launch(null, function(loaded, total){
		console.log('loading:', loaded / total);
	}, function(){
		console.log('launch complete');
	});
}
