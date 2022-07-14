/**
 * Created by rockyl on 2022/7/14.
 */

import {entityDefs as pixi} from 'qunity-pixi'

export default {
	type: 0,
	name: 'main',
	factory: function (h) {
		return <pixi.Node name="Scenes">
			<pixi.Node name="MainScene" active>
				<pixi.Node name="Box" x={375} y={300} scripts={[
					{
						script: '/scripts/Hello',
						label: 'entity://text-hello',
						sprite: 'entity://sprite-logo',
						text: 'Hello Qunity'
					},
				]}>
					<pixi.Sprite name="logo" uuid="sprite-logo" texture="texture://69410bc3-8df2-49a3-9959-f86e56d2aaf4"
					             anchor={{x: 0.5, y: 0.5,}}/>
					<pixi.Text name="text" uuid="text-hello" y={200} text="hello" style={{fill: 'white', fontSize: 40}}
					           anchor={{x: 0.5,}}/>
				</pixi.Node>
			</pixi.Node>
		</pixi.Node>
	},
	assets: [
		{
			uuid: "69410bc3-8df2-49a3-9959-f86e56d2aaf4",
			url: "assets/images/logo.svg",
		},
	]
}