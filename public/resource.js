﻿
if (!module || !module.exports) {
	var module = {};
	module.exports = {};
}

window.character_emotion_list = ["blink", "hit", "smile", "troubled", "cry", "angry", "bewildered", "stunned",
	"vomit", "oops", "cheers", "chu", "wink", "pain", "glitter", "despair", "love", "shine", "blaze", "hum",
	"bowing", "hot", "dam", "qBlue"];

window.character_action_list = ["walk1", "walk2", "stand1", "stand2", "alert", "swingO1", "swingO2", "swingO3", "swingOF", "swingT1",
	"swingT2", "swingT3", "swingTF", "swingP1", "swingP2", "swingPF", "stabO1", "stabO2", "stabOF", "stabT1",
	"stabT2", "stabTF", "shoot1", "shoot2", "shootF", "proneStab", "prone", "heal", "fly", "jump", "sit", "ladder",
	"rope"/*, "dead", "ghostwalk", "ghoststand", "ghostjump", "ghostproneStab", "ghostladder", "ghostrope", "ghostfly",
		"ghostsit"*/];

class ItemCategoryInfo {
	/**
	 * @param {string} path
	 * @param {boolean} isOnFace
	 * @param {string} slot - property name
	 * @param {string} categoryName
	 */
	constructor(imgDir, listPath, slot, categoryName) {
		this.path = imgDir;
		this.listPath = listPath;
		this.slot = slot;
		this.categoryName = categoryName;
		this.fragmentType = null;
	}
	/**
	 * @param {string} id - 4+ digit string
	 * @returns {ItemCategoryInfo}
	 */
	static get(id) {
		let info;

		if (id == null || id == "") {
			return null;
		}

		if (id.length == 4) {
			return ItemCategoryInfo._info[id];
		}
		//
		info = ItemCategoryInfo._info[id.slice(0, 4)];
		if (info) {
			return info;
		}

		if (id.length == 6) {
			return ItemCategoryInfo._info[id];
		}
		//
		info = ItemCategoryInfo._info[id.slice(0, 6)];
		if (info) {
			return info;
		}
	}

	/**
	 * @param {string} id - 4+ digit string
	 * @returns {boolean}
	 */
	static isEquip(id) {
		let cate;

		if (id == null || id == "") {
			return null;
		}

		cate = Number(id.length == 4 ? id : id.slice(0, 4));

		return (cate >= "0100" && cate < "0180");
	}

	///**
	// * @param {string} id - 4+ digit string
	// * @returns {boolean}
	// */
	//static isShowEquipTip(id) {
	//	let cate;
	//
	//	if (id == null || id == "") {
	//		return null;
	//	}
	//
	//	cate = Number(id.length == 4 ? id : id.slice(0, 4));
	//
	//	return (cate >= "0100" && cate < "0170");
	//}
}
module.exports.ItemCategoryInfo = ItemCategoryInfo;
ItemCategoryInfo._info = {
	'0000': new ItemCategoryInfo("", "body", "body", ""),
	'0001': new ItemCategoryInfo("", "head", "head", ""),

	'0002': new ItemCategoryInfo("Face", "Face", "face", "臉型"),
	'0003': new ItemCategoryInfo("Hair", "Hair", "hair", "髮型"),
	'0004': new ItemCategoryInfo("Hair", "Hair", "hair", "髮型"),

	'0100': new ItemCategoryInfo("Cap", "Cap", "cap", "帽子"),
	'0101': new ItemCategoryInfo("Accessory", "accessoryFace", "accessoryFace", "臉飾"),
	'0102': new ItemCategoryInfo("Accessory", "accessoryEyes", "accessoryEyes", "眼飾"),
	'0103': new ItemCategoryInfo("Accessory", "accessoryEars", "accessoryEars", "耳環"),
	'0104': new ItemCategoryInfo("Coat", "Coat", "coat", "上衣"),
	'0105': new ItemCategoryInfo("Longcoat", "Longcoat", "longcoat", "套服"),
	'0106': new ItemCategoryInfo("Pants", "Pants", "pants", "褲子"),
	'0107': new ItemCategoryInfo("Shoes", "Shoes", "shoes", "鞋子"),
	'0108': new ItemCategoryInfo("Glove", "Glove", "glove", "手套"),
	'0109': new ItemCategoryInfo("Shield", "Shield", "shield", "盾牌"),
	'0110': new ItemCategoryInfo("Cape", "Cape", "cape", "披風"),

	"0121": new ItemCategoryInfo("Weapon", "閃亮克魯", "weapon", "閃亮克魯"),
	"0122": new ItemCategoryInfo("Weapon", "靈魂射手", "weapon", "靈魂射手"),
	"0123": new ItemCategoryInfo("Weapon", "魔劍", "weapon", "魔劍"),
	"0124": new ItemCategoryInfo("Weapon", "能量劍", "weapon", "能量劍"),
	"0125": new ItemCategoryInfo("Weapon", "幻獸棒", "weapon", "幻獸棒"),
	"0126": new ItemCategoryInfo("Weapon", "ESP限制器", "weapon", "ESP限制器"),
	"0127": new ItemCategoryInfo("Weapon", "鎖鏈", "weapon", "鎖鏈"),
	"0128": new ItemCategoryInfo("Weapon", "魔法護腕", "weapon", "魔法護腕"),

	"0130": new ItemCategoryInfo("Weapon", "單手劍", "weapon", "單手劍"),
	"0131": new ItemCategoryInfo("Weapon", "單手斧", "weapon", "單手斧"),
	"0132": new ItemCategoryInfo("Weapon", "單手錘", "weapon", "單手錘"),
	"0133": new ItemCategoryInfo("Weapon", "短劍", "weapon", "短劍"),
	"0134": new ItemCategoryInfo("Weapon", "雙刀", "weapon", "雙刀"),
	"013526": new ItemCategoryInfo("Weapon", "靈魂之環", "weapon", "靈魂之環"),
	"013530": new ItemCategoryInfo("Weapon", "控制器", "weapon", "控制器"),
	"0136": new ItemCategoryInfo("Weapon", "手杖", "weapon", "手杖"),
	"0137": new ItemCategoryInfo("Weapon", "短杖", "weapon", "短杖"),
	"0138": new ItemCategoryInfo("Weapon", "長杖", "weapon", "長杖"),
	
	"0140": new ItemCategoryInfo("Weapon", "雙手劍", "weapon", "雙手劍"),
	"0141": new ItemCategoryInfo("Weapon", "雙手斧", "weapon", "雙手斧"),
	"0142": new ItemCategoryInfo("Weapon", "雙手棍", "weapon", "雙手棍"),
	"0143": new ItemCategoryInfo("Weapon", "槍", "weapon", "槍"),
	"0144": new ItemCategoryInfo("Weapon", "矛", "weapon", "矛"),
	"0145": new ItemCategoryInfo("Weapon", "弓", "weapon", "弓"),
	"0146": new ItemCategoryInfo("Weapon", "弩", "weapon", "弩"),
	"0147": new ItemCategoryInfo("Weapon", "拳套", "weapon", "拳套"),
	"0148": new ItemCategoryInfo("Weapon", "指虎", "weapon", "指虎"),
	"0149": new ItemCategoryInfo("Weapon", "火槍", "weapon", "火槍"),
	"0150": new ItemCategoryInfo("Weapon", "鏟", "weapon", "鏟"),
	"0151": new ItemCategoryInfo("Weapon", "鎬", "weapon", "鎬"),
	"0152": new ItemCategoryInfo("Weapon", "雙弩槍", "weapon", "雙弩槍"),
	"0153": new ItemCategoryInfo("Weapon", "加農砲", "weapon", "加農砲"),
	"0154": new ItemCategoryInfo("Weapon", "太刀", "weapon", "太刀"),
	"0155": new ItemCategoryInfo("Weapon", "扇子", "weapon", "扇子"),
	"0156": new ItemCategoryInfo("Weapon", "琉", "weapon", "琉"),
	"0157": new ItemCategoryInfo("Weapon", "璃", "weapon", "璃"),
	"0158": new ItemCategoryInfo("Weapon", "重拳槍", "weapon", "重拳槍"),
	"0170": new ItemCategoryInfo("Weapon", "0170", "weapon", "點裝武器"),
};
ItemCategoryInfo._categoryList = (function (info_map) {
	let list = [];
	let set = new Set();
	for (let i in info_map) {
		let cat = info_map[i];
		let key = cat.categoryName || cat.listPath;

		if (!set.has(key)) {
			set.add(key);

			list.push({
				key: key,
				value: i,
			});
		}
	}
	return list;
})(ItemCategoryInfo._info);


class ResourceManager {
	static isEquipExist(id, cateInfo) {
		const dp = cateInfo.listPath;
		const es = ResourceManager.equip_map[dp];
		//if (dp == "Face") {
		//	id = CharacterRenderConfig.getColorFaceID(id, 0);//style-only(black) id
		//}
		//else if (dp == "Hair") {
		//	id = CharacterRenderConfig.getColorHairID(id, 0);//style-only(black) id
		//}
		return !es || es.has(id);
	}

	///**
	// * @param {any} id
	// * @returns {string}
	// */
	//static getItemPath(id) {
	//	var d = ResourceManager.item_file_map[id[0]];
	//	var f = ItemCategoryInfo.get(id).path;
	//	return d + "/" + f + "/" + id + ".img";
	//}

	///**
	// * @param {any} id
	// * @returns {string}
	// */
	//static getPath(id) {
	//	alert("ResourceManager#getItemPath");
	//	return ResourceManager.getItemPath(id);
	//}

	//static getData(url) {
	//	alert("ResourceManager#get");
	//	return ResourceManager.get(url);
	//}

	///**
	// * cache name/desc string
	// * @param {string} id
	// * @returns {{name:string,desc:string}}
	// */
	//static async _getEquipString(id) {
	//	//String/Eqp.img/Eqp/ArcaneForce/1712000/name
	//	var f = ItemCategoryInfo.get(id).path;
	//	return JSON.parse(await ResourceManager.get(`/assets/String/Eqp.img/Eqp/${f}/${Number(id)}`));
	//}
	///**
	// * get name from cache
	// * @param {string} id
	// * @returns {string} item name
	// */
	//static async getEquipName(id) {
	//	return (await ResourceManager._getEquipString(id)).name;
	//}
	///**
	// * get desc from cache
	// * @param {string} id
	// * @returns {string} item description
	// */
	//static async getEquipDescription(id) {
	//	return (await ResourceManager._getEquipString(id)).desc;
	//}

	/**
	 * @param {string} url
	 */
	static get(url) {
		if (url == "/assets/Map/Back/.img/") {
			debugger;
		}
		//if (ResourceManager.failed_urls.indexOf(url) >= 0) {
		//	return null;
		//}
		return new Promise(function (resolve, reject) {
			let xhr = new XMLHttpRequest();
			xhr.open("GET", url, true);

			xhr.timeout = 60000;//20000;

			xhr.onload = function () {
				if (this.status == 404 || this.status == 500) {
					ResourceManager.failed_urls.push(url);
					resolve(null);
					//reject("404/500: " + url);
				}
				else if (this.status == 200) {
					resolve(this.responseText);
				}
				else if (this.status == 304) {
					debugger
				}
			};

			xhr.ontimeout = function (e) {
				// XMLHttpRequest 超时。在此做某事。
				resolve(null);
			};

			xhr.send();
		});
	}
}
ResourceManager.failed_urls = [];
ResourceManager.item_file_map = {
	'0': "Character",
}
ResourceManager.equip_path_map = {
	'0000': "",//body
	'0001': "",//head
	'0002': "Face",
	'0003': "Hair",
	'0004': "Hair",
	'0100': "Cap",
	'0101': "Accessory",//accessory-face
	'0102': "Accessory",//accessory-eyes
	'0103': "Accessory",//accessory-ear
	'0104': "Coat",
	'0105': "Longcoat",
	'0106': "Pants",
	'0107': "Shoes",
	'0108': "Glove",
	'0109': "Shield",
	'0110': "Cape",
}
module.exports.ResourceManager = ResourceManager;

//var resourceManager = new ResourceManager();


/**
 * @param {string} url
 * @returns {Promise<any>}
 */
window.ajax_get = url => ResourceManager.get(url);


class ItemAttrNormalize {
	static head(item) {
		item.gender = 2;
	}
	static body(item) {
		item.gender = 2;
	}
	static Face(item) {
		const g = Math.trunc((item.id % 10000) / 1000);
		item.gender = g == 1 || g == 4 ? 1 : 0;
	}
	static Hair(item) {
		const g = Math.trunc((item.id % 10000) / 1000);
		item.gender = g == 1 || g == 2 || g == 4 || g == 7 ? 1 : 0;
	}
	static Cap(item) {
		ItemAttrNormalize._equip(item);
	}
	static accessoryFace(item) {
		ItemAttrNormalize._equip(item);
	}
	static accessoryEyes(item) {
		ItemAttrNormalize._equip(item);
	}
	static accessoryEars(item) {
		ItemAttrNormalize._equip(item);
	}
	static Coat(item) {
		ItemAttrNormalize._equip(item);
	}
	static Longcoat(item) {
		ItemAttrNormalize._equip(item);
	}
	static Pants(item) {
		ItemAttrNormalize._equip(item);
	}
	static Shoes(item) {
		ItemAttrNormalize._equip(item);
	}
	static Glove(item) {
		ItemAttrNormalize._equip(item);
	}
	static Shield(item) {
		ItemAttrNormalize._equip(item);
	}
	static Cape(item) {
		ItemAttrNormalize._equip(item);
	}
	static _equip(item) {
		//reqJob
		//item.gender = Math.trunc(Number(item.id) / 1000);
		//item.gender = item.gender <= 1 ? item.gender : 2;
		const g = Math.trunc((item.id % 10000) / 1000);
		item.gender = g == 0 ? 0 : (g == 1 ? 1 : 2);
	}
}
module.exports.ItemAttrNormalize = ItemAttrNormalize;


const regexp_getHairStyleID = /(\d{4,7})\d$/;
const regexp_getFaceStyleID = /(\d{2,5})\d(\d{2})$/;

const regexp_getHairColor = /\d{4,7}(\d)$/;
const regexp_getFaceColor = /\d{2,5}(\d)\d{2}$/;

class CharacterRenderConfig {
	/**
	 * @param {string} style id
	 * @returns {string[]}
	 */
	static * enumHairColor(style) {
		let m = style.match(regexp_getHairStyleID);
		for (let i = 0; i < 10; ++i) {
			let id = m[1] + i;
			yield id;
		}
	}

	/**
	 * @param {string} style id
	 * @returns {string[]}
	 */
	static * enumFaceColor(style) {
		let m = style.match(regexp_getFaceStyleID);
		for (let i = 0; i < 10; ++i) {
			let id = m[1] + i + m[2];
			yield id;
		}
	}

	/**
	 * @param {string} style
	 * @param {number} color
	 * @returns {string}
	 */
	static getColorHairID(style, color) {
		let m = style.match(regexp_getHairStyleID);
		let id = m[1] + (color % 10);
		return id;
	}
	/**
	 * @param {string} style
	 * @param {number} color
	 * @returns {string}
	 */
	static getColorFaceID(style, color) {
		let m = style.match(regexp_getFaceStyleID);
		let id = m[1] + (color % 10) + m[2];
		return id;
	}

	/**
	 * @param {string} id
	 * @returns {string}
	 */
	static getHairColor(id) {
		if (id) {
			id = String(id);
			let m = id.match(regexp_getHairColor);
			if (m) {
				return m[1];
			}
		}
	}

	/**
	 * @param {string} id
	 * @returns {string}
	 */
	static getFaceColor(id) {
		if (id) {
			id = String(id);
			let m = id.match(regexp_getFaceColor);
			if (m) {
				return m[1];
			}
		}
	}
}
module.exports.CharacterRenderConfig = CharacterRenderConfig;


var _external_data = {
	"RequiredJobs": [
		"Beginner"
	],
	"RequiredLevel": 0,
	"IsCash": true,
	"Name": "Blue Beanie",
	"Desc": null,
	"Id": 1000000,
	"RequiredGender": 0,
	"TypeInfo": {
		"OverallCategory": "Equip",
		"Category": "Armor",
		"SubCategory": "Hat"
	}
};

var ItemTypeInfo = {
	"Equip": {
		"Hat": "Cap",
		"Cape": "Cape",
		"Top": "Coat",
		"Overall": "Longcoat",
		"Glove": "Glove",
		"Bottom": "Pants",

		"Shield": "Shield",
		"Shoes": "Shoes",
		"Eye Decoration": "accessoryEyes",
		"Earrings": "accessoryEars",
		//"Ring": "",

		//"Pendant": "",
		"Face Accessory": "accessoryFace",
		//"Belt": "",
		//"Medal": "",
		//"Shoulder Accessory": "",
		//"Badge": "",

		//"Dragon Equipment": "",
		//"Mechanic Equipment": "",
		//"Pet Equipment": "",
		//"Android": "",
		//"Mechanical Heart": "",
		//"Bits": "",

		"Face": "Face",
		"Hair": "Hair",
	},
};

ResourceManager.external = {
	equip: {
	},
};

ResourceManager.equip_map = {
};

for (let i in ItemTypeInfo.Equip) {
	let cate = ItemTypeInfo.Equip[i];

	ResourceManager.external.equip[cate] = [];
	ResourceManager.equip_map[cate] = null;
}
for (let i = 0; i < 9; ++i) {
	let cate = "Face" + i;
	ResourceManager.external.equip[cate] = [];
	ResourceManager.equip_map[cate] = null;
}
for (let i = 0; i < 8; ++i) {
	let cate = "Hair" + i;
	ResourceManager.external.equip[cate] = [];
	ResourceManager.equip_map[cate] = null;
}

async function load_external_resource(url) {
	url = url || "/items.json";
	let raw;

	try {
		raw = ResourceManager._external_raw = JSON.parse(await ajax_get("/data/equip"));
		if (!raw) {
			debugger;
			return;
		}
	}
	catch (ex) {
		raw = ResourceManager._external_raw = JSON.parse(await ajax_get("https://labs.maplestory.io/api/gms/latest/item/category/equip"));
		if (!raw) {
			debugger;
			return;
		}
	}

	//let faceStyleSet = new Set();
	//let hairStyleSet = new Set();
	
	for (let i = 0; i < raw.length; ++i) {
		let item = raw[i];
		let id = String(item.Id);
		while (id.length < 8) id = "0" + id;

		if (!ItemTypeInfo[item.TypeInfo.OverallCategory]) {
			continue;
		}

		let clz = item.TypeInfo.OverallCategory.toLowerCase();//equip=>Character-
		let cate = ItemTypeInfo[item.TypeInfo.OverallCategory][item.TypeInfo.SubCategory];
		if (!cate) {
			continue;
		}
		else if (cate == "Face") {
			cate += CharacterRenderConfig.getFaceColor(id);
			//let style = _GetFaceStyle(id);
			//if (faceStyleSet.has(style)) {
			//	continue;
			//}
			//faceStyleSet.add(style);
		}
		else if (cate == "Hair") {
			cate += CharacterRenderConfig.getHairColor(id);
			//let style = _GetHairStyle(id);
			//if (hairStyleSet.has(style)) {
			//	continue;
			//}
			//hairStyleSet.add(style);
		}

		let it = {
			id: id,
			name: item.Name,
			desc: item.Desc,
			cash: item.IsCash ? 1 : 0,
			icon: {
				"": `//labs.maplestory.io/api/gms/latest/item/${item.Id}/icon`,
			},
		};

		//ItemAttrNormalize[cate](it);//when load list

		ResourceManager.external[clz][cate].push(it);
	}
}

function update_external_equip_list() {
	const url = "https://labs.maplestory.io/api/gms/latest/item/category/equip";
	load_external_resource(url).then(() => {
		_concat_external_resource(category, origin_data);
		concat_external_resource = _concat_external_resource;
		console.log("done: update_external_equip_list");
	});
}

let external_resource_promise = load_external_resource();

window.concat_external_resource = _concat_external_resource_p;

window.trigger_update_external_equip_list = function () {
	external_resource_promise = load_external_resource();
	window.concat_external_resource = _concat_external_resource_p;
}

async function _concat_external_resource_p(category, origin_data) {
	await external_resource_promise;
	_concat_external_resource(category, origin_data);
	concat_external_resource = _concat_external_resource;
}

function _concat_external_resource(category, origin_data) {
	try {
		const list = ResourceManager.external.equip[category];
		if (!list) {
			return;
		}
		let id_map = ResourceManager.equip_map[category];

		if (!id_map) {
			id_map = new Map();

			//if (category == "Face") {
			//	origin_data.forEach(item => {
			//		const style = CharacterRenderConfig.getColorFaceID(item.id, color);
			//		id_map.add(style);
			//	});
			//}
			//else if (category == "Hair") {
			//	origin_data.forEach(item => {
			//		const style = CharacterRenderConfig.getColorHairID(item.id, color);
			//		id_map.add(style);
			//	});
			//}
			//else {
				origin_data.forEach(item => {
					//while (id.length < 8) id = "0" + id;
					id_map.set(item.id, item);
				});
			//}

			ResourceManager.equip_map[category] = id_map;
		}

		list.forEach((item) => {
			let id = item.id;
			if (!id_map.has(id)) {
				item.$foreign = true;
				origin_data.push(item);
			}
			else {
				let ori_item = id_map.get(id);
				ori_item._name = item.name || "";
				ori_item._desc = item.desc || "";
			}
		});
	}
	catch (ex) {
		console.error(ex);
		debugger;
	}
}

///**
// * @param {string} id
// * @returns {string}
// */
//function _GetHairStyle(id) {
//	let a = id.match(/(0{0,3})(3|4)(\d\d\d)\d/);
//	return a ? (a[1] + a[2] + a[3] + "0") : null;

//	return id.slice(0, 7) + "0";
//}
///**
// * @param {string} id
// * @returns {string}
// */
//function _GetFaceStyle(id) {
//	let a = id.match(/(0{0,3})2(\d)\d(\d\d)/);
//	return a ? (a[1] + "2" + a[2] + "0" + a[3]) : null;

//	return id.slice(0, 5) + "0" + id.slice(6, 8);
//}

var aaa = {
	"frameBooks": {
		"walk1": {
			"frames": [
				{
					"effects": {
						"mail": {
							"delay": 0,
							"image": "iVBORw0KGgoAAAANSUhEUgAAACQAAAAcCAYAAAAJKR1YAAAACXBIWXMAAA7EAAAOxAGVKw4bAAADUElEQVR4nLVX4XmrMAyU35cF6Ah0BBiBjgAjJCOEEcgIYQQyQhkhjFBGiEfw0wnbOEAITdv7Y4zBOk6yJHb0xzhSYqb3TtSpR8/vfsnu1KhyRKrkSJREfqGsy9WNXiE0++KGckoooo40FXSRZ/Z8J04yKrsT8YKg2ldPN39JoS/aU8TGAN21Mr5TreyaYZfALUyko9q6RxTr9J8QUmzEwNg0Fm5JY9664mF89Jb8rxJqkr3Jr2e5TtKDKbraE9CjQXEr3OaA65rmHzHF6iLHhumjISBLXSuQ6ViZylwJ8pfpByXJaBRrDnAZXBvO6ydkVgmBTG4aa2kw7ojoQ0vRORtOz2SNep4XhRAIFdpCBpi5rIr2JtaahMylp744+QAWtENgCqmcDR7jYZ7K6RKiVdPQqXjfTCLEvykZuIaPrmIQxZE34o1aAkImi+iSHkSJ6JoPMcQKufdewR0hkAmmSqVvcgGjIbETcguIscsQN8g/vTrI+FNskdRwDqHq+imxAlRVQ2VZyLUkwIazcT4o5+JINme3bbTh8e/5I3ZDViMMUpd149tZ4szDlQl221cm6WGW2X9KaA6OHYqtIi5cwiyMGGKV4ir/9tZPCSHlw10I6PhawUFeBbmGfXYZTp1HUEy/q9I2hZyBZOH0QBkXP2FMv6jSZpdFnzkng4LyaqzYuPYnkNddME/Jm+ZLhh8Tcu4aLNqbfT+OWaDYUuqxKlEWbya1SuhE3d28o56Tnx7KRxjEj9oKEPomqTVCxlxvy1nXlg+MWZJ7t83ITV8FqZtxpBaJLREyngzioO39glTsviV9GZTDiDmUEzg1QrgPCu6D1CO1dtObnsj0ay+DUSkv/fgO5r4bDN9z1z72tHed3GOiIMXZ/M6+8oHLG6AexeY8bhpsIMV2pQzIPkELIso4UpyjtMRdOyszWtZayXGonTvp4NIPg5ZByIQvc1lYPD2P4JSxakiLgvk+kTHinwH5aDYuz9WdFOyIMrKFXI0NOAOkPHvbC8kXsUrqbV0hhnHNv2tlneFSpf4hqAhSeA4ti1tzre2dgfCnTuS3pAC0W88I3cWfBQyGfXQYItO1VQM+JgAmZtvSVULHoBtwWHrHffjS2mqvEir27G/ht/Af7gvKcWEKm7MAAAAASUVORK5CYII=",
							"origin": {
								"x": 14.0,
								"y": 12.0
							},
							"mapOffset": {
								"navel": {
									"x": 0.0,
									"y": 0.0
								}
							},
							"position": "mailChestOverPants"
						},
					}
				}
			]
		}
	},
	"metaInfo": {
		"only": false,
		"equip": {
			"reqJob": 0,
			"reqLevel": 0,
			"islot": "MaPn",
			"vslot": "MaPn",
			"vslots": [
				"Ma",
				"Pn"
			],
			"islots": [
				"Ma",
				"Pn"
			]
		},
		"cash": {
			"cash": true
		},
		"icon": {
			"iconRaw": "data:image/png;base64,"
		}
	},
	"typeInfo": {
		"highItemId": 1060000,
		"lowItemId": 1050000,
		"overallCategory": "Equip",
		"category": "Armor",
		"subCategory": "Overall"
	}
};

window.load_extern_item_data = async function (id) {
	let _raw = JSON.parse(await ajax_get(`//labs.maplestory.io/api/gms/latest/item/${id}`));
	let raw = {};

	let default_ = _raw.frameBooks.default ? _raw.frameBooks.default.frames[0]:null;

	for (let i in _raw.frameBooks) {
		let _act = _raw.frameBooks[i];
		let act = [];

		for (let j = 0; j < _act.frames.length; ++j) {
			let frame = _act.frames[j] || default_;
			if (!frame || !frame.effects) {
				continue;
			}
			let _frags = frame.effects;
			let frags = {};
			for (let k in _frags) {
				let _frag = _frags[k];
				if (_frag.image) {
					frags[k] = {
						"": "data:image/png;base64," + _frag.image,
						"origin": _frag.originOrZero || _frag.origin || _frag.center,
						"map": _frag.mapOffset,
						"z": _frag.position
					};
				}
			}

			act[j] = frags;
		}

		raw[i] = act;
	}

	raw.info = {
		islot: _raw.metaInfo.equip.islot,
		vslot: _raw.metaInfo.equip.vslot,
		icon: _raw.metaInfo.icon ? ("data:image/png;base64," + _raw.metaInfo.icon.iconRaw) : "",
		cash: (_raw.metaInfo.cash && _raw.metaInfo.cash.cash) ? 1 : 0,
	};

	return raw;
}

export {
	ItemCategoryInfo,
	ResourceManager,
	ItemAttrNormalize,
	CharacterRenderConfig,
};
