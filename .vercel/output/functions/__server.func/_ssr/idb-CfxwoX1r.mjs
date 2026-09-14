import { n as __exportAll } from "../_runtime.mjs";
import { t as __exportAll$1 } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as Dexie } from "../_libs/dexie.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/idb-CfxwoX1r.js
var idb_CfxwoX1r_exports = /* @__PURE__ */ __exportAll({
	A: () => migrateGrokId,
	C: () => SENSITIVE_PREFIX,
	D: () => defaultPureParams,
	E: () => defaultImageParams,
	M: () => shortModelLabel,
	O: () => emptyCharacter,
	S: () => SAMPLERS,
	T: () => UNCENSORED_TAG,
	_: () => GROK_MODELS,
	a: () => idb_exports,
	b: () => PLACEHOLDERS,
	c: () => putImage,
	d: () => DEFAULT_GROK,
	f: () => DEFAULT_LLM_PARAMS,
	g: () => FURRY_TAG,
	h: () => FULLBODY_TAG,
	i: () => deleteImage,
	j: () => normalizePureParams,
	k: () => joinPromptParts,
	l: () => rememberUrl,
	m: () => DEFAULT_STATUS_BAR,
	n: () => db,
	o: () => imageUrl,
	p: () => DEFAULT_NAI_BASE,
	r: () => defaultSettings,
	s: () => loadAll,
	t: () => cachedUrl,
	u: () => COOLDOWN_MS,
	v: () => NAI_MODELS,
	w: () => UC,
	x: () => RESOLUTIONS,
	y: () => NOISE_SCHEDULES
});
var GROK_MODELS = [
	{
		id: "grok-4.6-medium",
		label: "4.6 均衡",
		short: "4.6 均衡",
		model: "grok-4.6",
		effort: "medium"
	},
	{
		id: "grok-4.6-high",
		label: "4.6 专家",
		short: "4.6 专家",
		model: "grok-4.6",
		effort: "high"
	},
	{
		id: "grok-4.6-low",
		label: "4.6 快速",
		short: "4.6 快速",
		model: "grok-4.6",
		effort: "low"
	},
	{
		id: "grok-4.5-medium",
		label: "4.5 均衡",
		short: "4.5 均衡",
		model: "grok-4.5",
		effort: "medium"
	},
	{
		id: "grok-4.5-high",
		label: "4.5 专家",
		short: "4.5 专家",
		model: "grok-4.5",
		effort: "high"
	},
	{
		id: "grok-4.5-low",
		label: "4.5 快速",
		short: "4.5 快速",
		model: "grok-4.5",
		effort: "low"
	}
];
var DEFAULT_GROK = "grok-4.6-medium";
function migrateGrokId(id) {
	if (id && GROK_MODELS.some((m) => m.id === id)) return id;
	if (id === "grok-4.6" || id === "grok-4-6") return "grok-4.6-medium";
	if (id === "grok-4.5") return "grok-4.5-medium";
	if (id === "grok-4.5-fast" || id === "grok-4.3" || id === "grok-4.3-low") return "grok-4.5-low";
	if (id === "grok-4.6-fast") return "grok-4.6-low";
	return DEFAULT_GROK;
}
var DEFAULT_LLM_PARAMS = {
	temperature: .9,
	topP: 1,
	frequencyPenalty: 0,
	presencePenalty: .4,
	maxTokens: 4096,
	contextTurns: 16
};
function mergeLlmParams(p) {
	return {
		...DEFAULT_LLM_PARAMS,
		...p ?? {}
	};
}
function shortModelLabel(id) {
	if (!id) return "未选模型";
	const i = id.lastIndexOf("/");
	return i >= 0 ? id.slice(i + 1) : id;
}
var NAI_MODELS = [
	{
		id: "nai-diffusion-4-5-full",
		label: "NAI V4.5 Full",
		family: "v4.5"
	},
	{
		id: "nai-diffusion-4-5-furry",
		label: "NAI V4.5 Furry",
		family: "v4.5",
		wire: "nai-diffusion-4-5-full",
		furry: true
	},
	{
		id: "nai-diffusion-4-full",
		label: "NAI V4 Full",
		family: "v4"
	},
	{
		id: "nai-diffusion-4-furry",
		label: "NAI V4 Furry",
		family: "v4",
		wire: "nai-diffusion-4-full",
		furry: true
	},
	{
		id: "nai-diffusion-4-curated",
		label: "NAI V4 Curated",
		family: "v4",
		wire: "nai-diffusion-4-curated-preview"
	},
	{
		id: "nai-diffusion-3",
		label: "NAI V3",
		family: "v3"
	},
	{
		id: "nai-diffusion-furry-3",
		label: "NAI Furry V3",
		family: "v3",
		furry: true
	},
	{
		id: "nai-diffusion-5-full",
		label: "NAI V5 Full",
		family: "v5"
	},
	{
		id: "nai-diffusion-5-curated",
		label: "NAI V5 Curated",
		family: "v5"
	},
	{
		id: "nai-diffusion-4-5-curated",
		label: "NAI V4.5 Curated",
		family: "v4.5"
	}
];
var SAMPLERS = [
	{
		id: "k_euler_ancestral",
		label: "Euler Ancestral"
	},
	{
		id: "k_euler",
		label: "Euler"
	},
	{
		id: "k_dpmpp_2s_ancestral",
		label: "DPM++ 2S Ancestral"
	},
	{
		id: "k_dpmpp_2m",
		label: "DPM++ 2M"
	},
	{
		id: "k_dpmpp_sde",
		label: "DPM++ SDE"
	},
	{
		id: "k_dpmpp_2m_sde",
		label: "DPM++ 2M SDE"
	},
	{
		id: "ddim_v3",
		label: "DDIM"
	}
];
var NOISE_SCHEDULES = [
	{
		id: "karras",
		label: "Karras"
	},
	{
		id: "native",
		label: "Native"
	},
	{
		id: "exponential",
		label: "Exponential"
	},
	{
		id: "polyexponential",
		label: "Polyexponential"
	}
];
var RESOLUTIONS = [
	{
		label: "竖图 · 长",
		group: "竖图",
		w: 704,
		h: 1472
	},
	{
		label: "竖图 · 中",
		group: "竖图",
		w: 832,
		h: 1216
	},
	{
		label: "竖图 · 大",
		group: "竖图",
		w: 1024,
		h: 1536
	},
	{
		label: "横图 · 小",
		group: "横图",
		w: 768,
		h: 512
	},
	{
		label: "横图 · 中",
		group: "横图",
		w: 1216,
		h: 832
	},
	{
		label: "横图 · 大",
		group: "横图",
		w: 1536,
		h: 1024
	},
	{
		label: "方图 · 小",
		group: "方图",
		w: 640,
		h: 640
	},
	{
		label: "方图 · 中",
		group: "方图",
		w: 1024,
		h: 1024
	},
	{
		label: "方图 · 大",
		group: "方图",
		w: 1472,
		h: 1472
	}
];
var UC = {
	heavy: "lowres, artistic error, film grain, scan, worst quality, bad quality, jpeg artifacts, very displeasing, chromatic aberration, dithering, halftone, screentone, multiple views, logo, too many watermarks, negativeXL, negative, negative_hand-neg, extra digits, fewer digits, bad anatomy, bad hands",
	light: "lowres, artistic error, scan, worst quality, bad quality, jpeg artifacts, very displeasing, logo, too many watermarks, negativeXL, negative, bad anatomy, bad hands",
	human: "lowres, artistic error, scan, worst quality, bad quality, jpeg artifacts, very displeasing, overly naturalistic, logo, too many watermarks, negativeXL, negative, extra digits, bad anatomy"
};
var DEFAULT_NAI_BASE = "https://api.idlecloud.cc";
var SENSITIVE_PREFIX = "rating: sensitive, nsfw, uncensored,";
var UNCENSORED_TAG = "uncensored,";
var FULLBODY_TAG = "1.5::full body,foot::,";
var FURRY_TAG = "fur dataset,";
var DEFAULT_STATUS_BAR = `状态栏:
👤{name}
🧣头发:
👙里衣:
🧦鞋袜:
🔮身体改造:无
🧪身体道具:无
🍐肛门:粉嫩紧闭，从未被进入，微微收缩着
🎟嘴巴:小巧粉唇微微张开
🌸小穴:粉嫩紧致的处女穴
🎀其他部位:
💪🏻体力:精神充沛
❤️健康状态:正常`;
function joinPromptParts(...parts) {
	return parts.map((s) => s.trim()).filter(Boolean).join(", ");
}
function defaultImageParams() {
	return {
		promptFront: "1.7::artist:mamezou::, 0.5::kawakami_rokkaku::, 0.8::artist:kojima_saya::, year 2024, year 2025, 0.5::satou kibi::, 0.3::quasarcake::",
		promptMid: "",
		promptBack: "rating:sensitive, nsfw, uncensored, masterpiece, highres, absurdres, newest, 4k, extremely detailed, 8k wallpaper, ultra-detailed, cinematic, anime",
		merged: false,
		sensitive: false,
		uncensored: false,
		fullBody: false,
		tagSuggest: true,
		negative: UC.heavy,
		ucPreset: "heavy",
		model: "nai-diffusion-4-5-full",
		width: 832,
		height: 1216,
		sampler: "k_euler_ancestral",
		noiseSchedule: "karras",
		steps: 28,
		scale: 5,
		cfgRescale: 0,
		seed: null,
		seedLocked: false,
		stepsLocked: false,
		scaleLocked: false,
		cfgRescaleLocked: false,
		varietyPlus: false,
		decrisper: false,
		useCoords: false,
		characters: []
	};
}
function defaultPureParams() {
	const p = defaultImageParams();
	return {
		...p,
		merged: true,
		promptMid: joinPromptParts(p.promptFront, p.promptMid, p.promptBack)
	};
}
function normalizePureParams(p) {
	if (p.merged && !p.promptMid.trim() && (p.promptFront.trim() || p.promptBack.trim())) return {
		...p,
		promptMid: joinPromptParts(p.promptFront, p.promptMid, p.promptBack)
	};
	return p;
}
function emptyCharacter(index = 1) {
	return {
		id: `c${index}_${Math.random().toString(36).slice(2, 7)}`,
		name: "",
		persona: "",
		speech: "",
		appearance: "",
		extras: [],
		imageEnabled: true,
		prompt: "",
		uc: "",
		x: .5,
		y: .5
	};
}
var PLACEHOLDERS = {
	name: "例如 青叶",
	overview: "回复尽量详尽生动，不要简略。",
	persona: "她是谁：性格、职业或身份、口头禅、和我的关系……外貌请写在下面那栏。",
	speech: "语气、口癖、人称、句子长短。例如：软软的、会把「……」拖长。",
	appearance: "1girl, long hair, brown hair, brown eyes, slim, school uniform…",
	opening: "傍晚的便利店门口，刚下过雨。"
};
var COOLDOWN_MS = 2e4;
var idb_exports = /* @__PURE__ */ __exportAll$1({
	cachedUrl: () => cachedUrl,
	db: () => db,
	defaultSettings: () => defaultSettings,
	deleteImage: () => deleteImage,
	getImage: () => getImage,
	imageUrl: () => imageUrl,
	loadAll: () => loadAll,
	putImage: () => putImage,
	rememberUrl: () => rememberUrl
});
var defaultSettings = () => ({
	grokModelId: DEFAULT_GROK,
	chatSource: "grok",
	llmBase: "",
	llmKey: "",
	llmConnected: false,
	llmModel: "",
	llmModels: [],
	llmStarred: [],
	llmParams: { ...DEFAULT_LLM_PARAMS },
	naiKey: "",
	naiBase: DEFAULT_NAI_BASE,
	naiConnected: false,
	cooldownUntil: 0,
	theme: "light"
});
var HuiyuDB = class extends Dexie {
	chats;
	folders;
	cards;
	appearances;
	favorites;
	history;
	images;
	kv;
	constructor() {
		super("huiyu");
		this.version(1).stores({
			chats: "id, folderId, order, updatedAt",
			folders: "id, order",
			cards: "id, order",
			appearances: "id, order",
			favorites: "id, createdAt",
			history: "id, createdAt",
			images: "id",
			kv: "key"
		});
	}
};
var db = new HuiyuDB();
async function loadAll() {
	const [chats, folders, cards, appearances, favorites, history, settingsRow] = await Promise.all([
		db.chats.toArray(),
		db.folders.toArray(),
		db.cards.toArray(),
		db.appearances.toArray(),
		db.favorites.toArray(),
		db.history.toArray(),
		db.kv.get("settings")
	]);
	const raw = settingsRow?.value ?? void 0;
	return {
		chats,
		folders,
		cards,
		appearances,
		favorites,
		history,
		settings: {
			...defaultSettings(),
			...raw ?? {},
			grokModelId: migrateGrokId(raw?.grokModelId),
			llmParams: mergeLlmParams(raw?.llmParams),
			llmModels: raw?.llmModels ?? [],
			llmStarred: raw?.llmStarred ?? [],
			chatSource: raw?.chatSource === "api" && raw?.llmConnected ? "api" : "grok"
		}
	};
}
async function putImage(id, blob) {
	await db.images.put({
		id,
		blob
	});
}
async function getImage(id) {
	return (await db.images.get(id))?.blob ?? null;
}
async function deleteImage(id) {
	await db.images.delete(id);
}
var urlCache = /* @__PURE__ */ new Map();
async function imageUrl(id) {
	if (!id) return null;
	const cached = urlCache.get(id);
	if (cached) return cached;
	const blob = await getImage(id);
	if (!blob) return null;
	const url = URL.createObjectURL(blob);
	urlCache.set(id, url);
	return url;
}
function rememberUrl(id, blob) {
	const prev = urlCache.get(id);
	if (prev) URL.revokeObjectURL(prev);
	const url = URL.createObjectURL(blob);
	urlCache.set(id, url);
	return url;
}
function cachedUrl(id) {
	return id ? urlCache.get(id) ?? null : null;
}
//#endregion
export { putImage as A, emptyCharacter as C, loadAll as D, joinPromptParts as E, shortModelLabel as M, migrateGrokId as O, deleteImage as S, imageUrl as T, cachedUrl as _, DEFAULT_STATUS_BAR as a, defaultPureParams as b, GROK_MODELS as c, PLACEHOLDERS as d, RESOLUTIONS as f, UNCENSORED_TAG as g, UC as h, DEFAULT_NAI_BASE as i, rememberUrl as j, normalizePureParams as k, NAI_MODELS as l, SENSITIVE_PREFIX as m, DEFAULT_GROK as n, FULLBODY_TAG as o, SAMPLERS as p, DEFAULT_LLM_PARAMS as r, FURRY_TAG as s, COOLDOWN_MS as t, NOISE_SCHEDULES as u, db as v, idb_CfxwoX1r_exports as w, defaultSettings as x, defaultImageParams as y };
