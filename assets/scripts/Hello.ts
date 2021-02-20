/**
 * Created by rockyl on 2020-05-10.
 *
 * hello脚本
 */

import {Component, PixiEntity} from 'qunity-pixi';

export default class Hello extends Component {
	sprite: PixiEntity;
	label: PixiEntity;
	text = 'Hello';

	t = 0;

	awake(): void {

	}

	start() {
		this.label.text = this.text;
	}

	update(delta) {
		this.t += delta;
		this.sprite.alpha = Math.abs(Math.sin(this.t / 500)) + 0.2;

		this.label.text = this.text + (Math.sin(this.t / 100) > 0 ? '_' : '  ');
	}
}
