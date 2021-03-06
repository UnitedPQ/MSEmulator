
import { Vec2, Rectangle } from './math.js';
import { IGraph, IRenderer } from './IRenderer.js';

import { engine, Graph } from './Engine.js';

import { CharacterRenderer } from './Renderer/CharacterRenderer.js';
import { Animation } from './Animation.js';

window.m_is_run = true;

window.$engine = engine;

window.chara = new CharacterRenderer();

var screen_size = engine.screen_size;

chara.load();
chara._setup_test();

chara.x = screen_size.x / 2;
chara.y = screen_size.y / 2;

ajax_get("/assets/Skill/MobSkill.img/238/level/4").then(async function (_data) {
	let _raw = JSON.parse(_data);
	window.anima = new Animation(_raw["ball0"], "Skill/MobSkill.img/238/level/4/ball0");
	anima.is_loop = true;
	anima.load();
}).then(() => {
	if (!animationRequestID){
		render(0);
	}
});
window.$angle = 0;
window.$rota = 0;
window.$flip = false;

var animationRequestID = null;
var time0 = 0;
function render(time) {
	let stamp = time - time0;
	time0 = time;
	if (window.m_is_run) {
		animationRequestID = requestAnimationFrame(render);
	}
	
	engine.ctx.setTransform(1, 0, 0, 1, 0, 0);
	engine.clearDrawScreen();
	engine.beginScene();
	
	if (window.mouse_dl) {
		chara.speed = 1;
		chara.x = window.mouse_x;
		chara.y = window.mouse_y;
	}
	if (window.mouse_dr) {
		chara.speed = 0;
	}
	
	chara.update(stamp);
	
	engine.loadIdentity();
	engine.scale(1, (screen_size.y + 1) / screen_size.y);
	
	chara.render(engine);
	
	if (anima) {
		anima.update(stamp);
		anima.draw(engine, screen_size.x / 2, screen_size.y / 2, window.$angle || 0, window.$flip != undefined ? window.$flip : false);
		
		// const sc_size = engine.screen_size;
		// const ctx = engine.ctx;
	
		// const graph = anima.textures[anima.frame];
		// const cx = graph.width * 0.5;
		// const cy = graph.height * 0.5;
		
		// ctx.setTransform(1, 0, 0, 1, sc_size.x * 0.5, sc_size.y * 0.5);
		
		// ctx.rotate(window.$angle);
		
		// ctx.scale(window.$flip ? -1 : 1, 1);
		
		// ctx.translate(-graph.x, -graph.y);
		
		// //ctx.translate(cx, cy);
		// //ctx.translate(-cx, -cy);
		
		// {
			// ctx.beginPath();
			// ctx.moveTo(0, 0);
			// ctx.lineTo(0 + 32, 0);
			// ctx.strokeStyle = "red";
			// ctx.stroke();
			
			// ctx.beginPath();
			// ctx.moveTo(0, 0);
			// ctx.lineTo(0, 0 + 32);
			// ctx.strokeStyle = "#0f0";
			// ctx.stroke();
		// }
		
		// engine.drawGraph(graph);
		
		window.$angle += window.$rota;
	}
	
	{
		const ctx = engine.ctx;
		const sc_size = engine.screen_size;
		ctx.setTransform(1, 0, 0, 1, sc_size.x * 0.5, sc_size.y * 0.5);
		
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(0 + 32, 0);
		ctx.strokeStyle = "darkred";
		ctx.stroke();
		
		ctx.beginPath();
		ctx.moveTo(0, 0);
		ctx.lineTo(0, 0 + 32);
		ctx.strokeStyle = "darkgreen";
		ctx.stroke();
	}
	engine.ctx.setTransform(1, 0, 0, 1, 0, 0);
	
	//x
	engine.color = [1, 0, 0, 0.5];
	engine.drawRect(0, 0, 800, 1);
	
	//y
	engine.color = [0, 1, 0, 0.5];
	engine.drawRect(0, 0, 1, 600);
	
	//x
	engine.color = [1, 0, 0, 0.5];
	engine.drawRect(screen_size.x - 800, screen_size.y - 2, screen_size.x, 1);
	
	//y
	engine.color = [0, 1, 0, 0.5];
	engine.drawRect(screen_size.x - 1, screen_size.y - 600, 1, screen_size.y);

	//engine.drawRect(0, -1000, 1000, 1000, [1, 0, 0, 0.5]);
	//engine.drawRect(0, 0, 32, 32, [1, 0, 1, 0.5]);//chip-size
	
	engine.endScene();
}

document.getElementById("m_is_run").onchange = function (e) {
	window.m_is_run = e.target.checked ? true : false;
	if (window.m_is_run) {
		animationRequestID = requestAnimationFrame(render);
	}
};

window.mouse_move = 0;
window.mouse_x = 0;
window.mouse_y = 0;
window.mouse_dl = 0;
window.mouse_ul = 0;
window.mouse_dm = 0;
window.mouse_um = 0;
window.mouse_dr = 0;
window.mouse_ur = 0;
window.mouse_wheel = 0;

/**
 * @param {MouseEvent} e
 */
window.onmousedown = function (e) {
	if (e.which == 1) {
		window.mouse_dl = 1;
		window.mouse_ul = 0;
	}
	else if (e.which == 2) {
		window.mouse_dm = 1;
		window.mouse_um = 0;
	}
	else if (e.which == 3) {
		window.mouse_dr = 1;
		window.mouse_ur = 0;
	}
	window.mouse_x = e.pageX;
	window.mouse_y = e.pageY;
}

/**
 * @param {MouseEvent} e
 */
window.onmouseup = function (e) {
	if (e.which == 1) {
		window.mouse_dl = 0;
		window.mouse_ul = 1;
	}
	else if (e.which == 2) {
		window.mouse_dm = 0;
		window.mouse_um = 1;
	}
	else if (e.which == 3) {
		window.mouse_dr = 0;
		window.mouse_ur = 1;
	}
	window.mouse_x = e.pageX;
	window.mouse_y = e.pageY;
}

/**
 * @param {MouseEvent} e
 */
window.onmousemove = function (e) {
	window.mouse_x = e.pageX;
	window.mouse_y = e.pageY;
	window.mouse_move = 1;
}

window.onwheel = function (event) {
	if (event.deltaY < 0) {
		window.mouse_wheel = 1;
	}
	else if (event.deltaY > 0) {
		window.mouse_wheel = -1;
	}
}

if (module.hot) {
	module.hot.accept(function() {
		window.location.reload();
	});
}
