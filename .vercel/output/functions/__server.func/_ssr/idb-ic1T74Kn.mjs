import { n as __exportAll } from "../_runtime.mjs";
import { t as __exportAll$1 } from "./rolldown-runtime-D7D4PA-g.mjs";
import { t as Dexie } from "../_libs/dexie.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/idb-ic1T74Kn.js
var idb_ic1T74Kn_exports = /* @__PURE__ */ __exportAll({
	$: () => emptyCharacter,
	A: () => moveId,
	B: () => FULLBODY_TAG,
	C: () => restoreSampler,
	D: () => cn,
	E: () => autoScrollNearEdge,
	F: () => COOLDOWN_MS,
	G: () => PLACEHOLDERS,
	H: () => GROK_MODELS,
	I: () => DEFAULT_GROK,
	J: () => SENSITIVE_PREFIX,
	K: () => RESOLUTIONS,
	L: () => DEFAULT_LLM_PARAMS,
	M: () => randomSeed,
	N: () => uid,
	O: () => downloadBlob,
	P: () => uniqueNumberedName,
	Q: () => defaultPureParams,
	R: () => DEFAULT_NAI_BASE,
	S: () => presetStyle,
	T: () => uniquePresetName,
	U: () => NAI_MODELS,
	V: () => FURRY_TAG,
	W: () => NOISE_SCHEDULES,
	X: () => UNCENSORED_TAG,
	Y: () => UC,
	Z: () => defaultImageParams,
	_: () => chatPickerModels,
	a: () => idb_exports,
	b: () => activePreset,
	c: () => putImage,
	d: () => applyImageAiPick,
	et: () => joinPromptParts,
	f: () => imageAiLabel,
	g: () => applyLlmPick,
	h: () => resolveImageWrite,
	i: () => deleteImage,
	j: () => nearestScroller,
	k: () => indexFromY,
	l: () => rememberUrl,
	m: () => llmIdentity,
	n: () => db,
	nt: () => normalizePureParams,
	o: () => imageUrl,
	p: () => imagePickerModels,
	q: () => SAMPLERS,
	r: () => defaultSettings,
	rt: () => shortModelLabel,
	s: () => loadAll,
	t: () => cachedUrl,
	tt: () => migrateGrokId,
	u: () => FOLLOW_IMAGE_AI,
	v: () => pruneStarred,
	w: () => samplerPatch,
	x: () => parseChatCompletionPreset,
	y: () => snapshotLlmAccount,
	z: () => DEFAULT_STATUS_BAR
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
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid(prefix = "") {
	return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
}
function uniqueNumberedName(desired, taken) {
	const base = desired.trim();
	const set = new Set(taken);
	if (!set.has(base)) return base;
	let n = 2;
	while (set.has(`${base}${n}`)) n++;
	return `${base}${n}`;
}
function downloadBlob(blob, filename) {
	const url = URL.createObjectURL(blob);
	const a = document.createElement("a");
	a.href = url;
	a.download = filename;
	document.body.appendChild(a);
	a.click();
	a.remove();
	setTimeout(() => URL.revokeObjectURL(url), 1500);
}
function randomSeed() {
	return Math.floor(Math.random() * 2 ** 32);
}
function moveId(ids, id, to) {
	const from = ids.indexOf(id);
	if (from < 0) return ids;
	const next = ids.slice();
	next.splice(from, 1);
	next.splice(Math.max(0, Math.min(next.length, to)), 0, id);
	return next;
}
function indexFromY(rows, y) {
	if (!rows.length) return 0;
	for (let i = 0; i < rows.length; i++) {
		const box = rows[i].getBoundingClientRect();
		if (y < box.top + box.height / 2) return i;
	}
	return rows.length - 1;
}
function nearestScroller(el) {
	let n = el;
	while (n && n !== document.body) {
		const oy = getComputedStyle(n).overflowY;
		if (oy === "auto" || oy === "scroll" || oy === "overlay") return n;
		n = n.parentElement;
	}
	return null;
}
function autoScrollNearEdge(scroller, clientY, edge = 52) {
	const box = scroller.getBoundingClientRect();
	const max = Math.max(0, scroller.scrollHeight - scroller.clientHeight);
	if (max <= 0) return 0;
	let dy = 0;
	if (clientY < box.top + edge) dy = -Math.min(28, Math.max(3, (box.top + edge - clientY) * .4));
	else if (clientY > box.bottom - edge) dy = Math.min(28, Math.max(3, (clientY - (box.bottom - edge)) * .4));
	if (!dy) return 0;
	const next = Math.max(0, Math.min(max, scroller.scrollTop + dy));
	const applied = next - scroller.scrollTop;
	scroller.scrollTop = next;
	return applied;
}
var PLACEHOLDER_IDS = /* @__PURE__ */ new Set([
	"worldInfoBefore",
	"worldInfoAfter",
	"charDescription",
	"charPersonality",
	"scenario",
	"personaDescription",
	"dialogueExamples",
	"chatHistory",
	"charDepthPrompt",
	"personalityFormat",
	"scenarioFormat"
]);
function rec(v) {
	return v && typeof v === "object" && !Array.isArray(v) ? v : null;
}
function num(v) {
	if (typeof v === "number" && Number.isFinite(v)) return v;
	if (typeof v === "string" && v.trim() !== "") {
		const n = Number(v);
		if (Number.isFinite(n)) return n;
	}
}
function str(v) {
	return typeof v === "string" ? v : "";
}
function parseStPresets(raw) {
	if (!Array.isArray(raw)) return [];
	const out = [];
	for (const row of raw) {
		const o = rec(row);
		if (!o) continue;
		if (typeof o.id !== "string" || typeof o.name !== "string") continue;
		out.push({
			id: o.id,
			name: o.name,
			systemPrompt: str(o.systemPrompt),
			postHistory: str(o.postHistory),
			params: {
				temperature: num(o.params && rec(o.params)?.temperature),
				topP: num(o.params && rec(o.params)?.topP),
				frequencyPenalty: num(o.params && rec(o.params)?.frequencyPenalty),
				presencePenalty: num(o.params && rec(o.params)?.presencePenalty),
				maxTokens: num(o.params && rec(o.params)?.maxTokens)
			}
		});
	}
	return out;
}
function isTextCompletion(raw) {
	return typeof raw.input_sequence === "string" || typeof raw.output_sequence === "string" || typeof raw.system_prompt === "string" || Array.isArray(raw.seq);
}
function isCharacterCard(raw) {
	return str(raw.spec).startsWith("chara_card") || Boolean(rec(raw.data)?.character_book) || Boolean(raw.first_mes);
}
function readPrompt(v) {
	const o = rec(v);
	if (!o) return null;
	const identifier = str(o.identifier) || str(o.name) || uid("p_");
	const content = str(o.content) || str(o.prompt);
	return {
		identifier,
		name: str(o.name) || identifier,
		content,
		marker: o.marker === true,
		role: str(o.role).toLowerCase() || "system",
		injectionPosition: num(o.injection_position) ?? 0
	};
}
function enabledOrder(raw, prompts) {
	const byId = new Map(prompts.map((p) => [p.identifier, p]));
	const orders = Array.isArray(raw.prompt_order) ? raw.prompt_order : [];
	let order = [];
	for (const entry of orders) {
		const o = rec(entry);
		if (!o || !Array.isArray(o.order)) continue;
		if (o.character_id === 1e5 || o.character_id === "100000" || !order.length) order = o.order;
		if (o.character_id === 1e5 || o.character_id === "100000") break;
	}
	if (!order.length) return prompts;
	const out = [];
	const seen = /* @__PURE__ */ new Set();
	for (const row of order) {
		const o = rec(row);
		if (!o) continue;
		if (o.enabled === false) continue;
		const id = str(o.identifier);
		const p = byId.get(id);
		if (!p || seen.has(id)) continue;
		seen.add(id);
		out.push(p);
	}
	return out;
}
function isPostHistory(p) {
	const id = p.identifier.toLowerCase();
	const name = p.name.toLowerCase();
	return id === "jailbreak" || name.includes("post-history") || name.includes("post history") || p.injectionPosition === 1;
}
function isPlaceholder(p) {
	if (p.marker) return true;
	if (PLACEHOLDER_IDS.has(p.identifier)) return true;
	return false;
}
function parseChatCompletionPreset(raw, fileName) {
	const o = rec(raw);
	if (!o) throw new Error("这不是对话补全预设");
	if (isCharacterCard(o)) throw new Error("这是角色卡，不是对话补全预设");
	if (!Array.isArray(o.prompts)) {
		if (isTextCompletion(o)) throw new Error("这不是对话补全预设");
		throw new Error("这不是对话补全预设");
	}
	const enabled = enabledOrder(o, o.prompts.map(readPrompt).filter((p) => Boolean(p))).filter((p) => !isPlaceholder(p) && p.content.trim());
	const systemParts = [];
	const postParts = [];
	for (const p of enabled) if (isPostHistory(p)) postParts.push(p.content.trim());
	else systemParts.push(p.content.trim());
	if (!systemParts.length && !postParts.length) throw new Error("这份预设没有可导入的提示词");
	const stem = fileName.replace(/\.json$/i, "").trim() || "未命名预设";
	return {
		id: uid("st_"),
		name: stem,
		systemPrompt: systemParts.join("\n\n"),
		postHistory: postParts.join("\n\n"),
		params: {
			temperature: num(o.temperature),
			topP: num(o.top_p) ?? num(o.topP),
			frequencyPenalty: num(o.frequency_penalty) ?? num(o.frequencyPenalty),
			presencePenalty: num(o.presence_penalty) ?? num(o.presencePenalty),
			maxTokens: num(o.openai_max_tokens) ?? num(o.max_tokens) ?? num(o.maxTokens)
		}
	};
}
function uniquePresetName(desired, existing) {
	return uniqueNumberedName(desired, existing);
}
function macroContext(chat) {
	const chars = chat?.characters ?? [];
	const names = chars.map((c) => c.name.trim()).filter(Boolean);
	const personas = chars.map((c) => c.persona.trim()).filter(Boolean);
	return {
		char: names.join("、"),
		isMulti: Boolean(chat?.isMulti && chars.length > 1),
		scenario: chat?.opening?.trim() ?? "",
		personality: personas.join("\n\n")
	};
}
function substituteMacros(text, ctx) {
	if (!text) return "";
	return text.replace(/\{\{\s*([^}]+?)\s*\}\}/g, (_full, rawKey) => {
		const key = rawKey.trim().toLowerCase().split(":")[0]?.trim() ?? "";
		if (key === "user" || key === "username") return "你";
		if (key === "char" || key === "bot" || key === "character") return ctx.char;
		if (key === "charifnotgroup") return ctx.isMulti ? "" : ctx.char;
		if (key === "scenario") return ctx.scenario;
		if (key === "personality") return ctx.personality;
		return "";
	});
}
function activePreset(settings) {
	const id = settings.stActiveId;
	if (!id) return null;
	return (settings.stPresets ?? []).find((p) => p.id === id) ?? null;
}
function samplerPatch(params, current) {
	return {
		...current,
		temperature: params.temperature ?? current.temperature,
		topP: params.topP ?? current.topP,
		frequencyPenalty: params.frequencyPenalty ?? current.frequencyPenalty,
		presencePenalty: params.presencePenalty ?? current.presencePenalty,
		maxTokens: params.maxTokens ?? current.maxTokens
	};
}
function restoreSampler(snapshot, current) {
	if (!snapshot) return current;
	return {
		...current,
		temperature: snapshot.temperature,
		topP: snapshot.topP,
		frequencyPenalty: snapshot.frequencyPenalty,
		presencePenalty: snapshot.presencePenalty,
		maxTokens: snapshot.maxTokens
	};
}
function presetStyle(settings, task, chat) {
	if (task === "image" || task === "memory" || task === "rewrite") return {};
	const preset = activePreset(settings);
	if (!preset) return {};
	const ctx = macroContext(chat);
	const sys = substituteMacros(preset.systemPrompt, ctx).trim();
	const post = substituteMacros(preset.postHistory, ctx).trim();
	if (task === "chat") return {
		styleExtra: sys || void 0,
		postHistory: post || void 0
	};
	return { styleExtra: [sys, post].filter(Boolean).join("\n\n") || void 0 };
}
/** Chat top-bar: current pick, then starred models that are still listed. */
function chatPickerModels(starred, available, current) {
	const avail = new Set(available);
	const ids = [];
	if (current) ids.push(current);
	for (const id of starred) if (avail.has(id) && !ids.includes(id)) ids.push(id);
	return ids;
}
/** Drop stars that left the catalog. Keep `current` if it is still the active pick. */
function pruneStarred(starred, available, current) {
	const avail = new Set(available);
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (const id of starred) {
		if (!id || seen.has(id)) continue;
		if (avail.has(id) || id === current) {
			seen.add(id);
			out.push(id);
		}
	}
	return out;
}
function snapshotLlmAccount(accounts, base, key, starred, model) {
	const b = base.trim();
	if (!b && !key) return accounts;
	return accounts.map((a) => a.base.trim() === b && a.key === key ? {
		...a,
		starred: [...starred],
		model
	} : a);
}
function applyLlmPick(s, id) {
	const keep = s.llmModels.includes(id) ? void 0 : id;
	const llmStarred = pruneStarred(s.llmStarred, s.llmModels, keep);
	return {
		llmModel: id,
		llmStarred,
		chatSource: "api",
		llmAccounts: snapshotLlmAccount(s.llmAccounts ?? [], s.llmBase, s.llmKey, llmStarred, id)
	};
}
var FOLLOW_IMAGE_AI = "__follow__";
function llmIdentity(base, key) {
	return `${base.trim()}\n${key}`;
}
function isGrokModelId(id) {
	return GROK_MODELS.some((m) => m.id === id);
}
function imageAiLabel(id) {
	if (!id || id === "__follow__") return "与聊天一致";
	const g = GROK_MODELS.find((m) => m.id === id);
	if (g) return g.short;
	return shortModelLabel(id);
}
function imagePickerModels(input) {
	const ids = [FOLLOW_IMAGE_AI];
	const main = input.chatSource === "api" ? chatPickerModels(input.llmStarred, input.llmModels, input.llmModel) : GROK_MODELS.map((m) => m.id);
	for (const id of main) if (id && !ids.includes(id)) ids.push(id);
	for (const id of [input.imageModelId, input.imageModelPin]) if (id && !ids.includes(id)) ids.push(id);
	return ids;
}
function applyImageAiPick(current, pick) {
	const pin = current.imageModelPin || null;
	if (!pick || pick === "__follow__") return {
		imageModelId: null,
		imageModelPin: pin
	};
	return {
		imageModelId: pick,
		imageModelPin: isGrokModelId(pick) ? pin : pick
	};
}
function resolveImageWrite(imageModelId) {
	if (!imageModelId) return { split: false };
	if (isGrokModelId(imageModelId)) return {
		split: true,
		via: "grok",
		grokModelId: imageModelId
	};
	return {
		split: true,
		via: "api",
		model: imageModelId
	};
}
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
	llmAccounts: [],
	llmParams: { ...DEFAULT_LLM_PARAMS },
	llmIdentity: "",
	stPresets: [],
	stActiveId: null,
	stParamSnapshot: null,
	naiKey: "",
	naiBase: DEFAULT_NAI_BASE,
	naiConnected: false,
	cooldownUntil: 0,
	chatImage: true,
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
function parseLlmAccounts(raw) {
	if (!Array.isArray(raw)) return [];
	const out = [];
	for (const row of raw) {
		if (!row || typeof row !== "object") continue;
		const a = row;
		if (typeof a.id !== "string" || typeof a.name !== "string") continue;
		out.push({
			id: a.id,
			name: a.name,
			base: typeof a.base === "string" ? a.base : "",
			key: typeof a.key === "string" ? a.key : "",
			starred: Array.isArray(a.starred) ? a.starred.filter((id) => typeof id === "string") : void 0,
			model: typeof a.model === "string" ? a.model : void 0
		});
	}
	return out;
}
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
	const stPresets = parseStPresets(raw?.stPresets);
	const stActiveId = typeof raw?.stActiveId === "string" && stPresets.some((p) => p.id === raw.stActiveId) ? raw.stActiveId : null;
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
			llmAccounts: parseLlmAccounts(raw?.llmAccounts),
			stPresets,
			stActiveId,
			stParamSnapshot: stActiveId && raw?.stParamSnapshot ? mergeLlmParams(raw.stParamSnapshot) : null,
			chatSource: raw?.chatSource === "api" && raw?.llmConnected ? "api" : "grok",
			chatImage: raw?.chatImage !== false,
			llmIdentity: typeof raw?.llmIdentity === "string" && raw.llmIdentity ? raw.llmIdentity : raw?.llmConnected && raw?.llmBase && raw?.llmKey ? llmIdentity(String(raw.llmBase), String(raw.llmKey)) : ""
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
export { shortModelLabel as $, downloadBlob as A, migrateGrokId as B, chatPickerModels as C, defaultPureParams as D, defaultImageParams as E, imageUrl as F, presetStyle as G, nearestScroller as H, indexFromY as I, randomSeed as J, pruneStarred as K, joinPromptParts as L, idb_ic1T74Kn_exports as M, imageAiLabel as N, defaultSettings as O, imagePickerModels as P, samplerPatch as Q, llmIdentity as R, cachedUrl as S, db as T, normalizePureParams as U, moveId as V, parseChatCompletionPreset as W, resolveImageWrite as X, rememberUrl as Y, restoreSampler as Z, UNCENSORED_TAG as _, DEFAULT_STATUS_BAR as a, applyLlmPick as b, FURRY_TAG as c, NOISE_SCHEDULES as d, snapshotLlmAccount as et, PLACEHOLDERS as f, UC as g, SENSITIVE_PREFIX as h, DEFAULT_NAI_BASE as i, emptyCharacter as j, deleteImage as k, GROK_MODELS as l, SAMPLERS as m, DEFAULT_GROK as n, uniqueNumberedName as nt, FOLLOW_IMAGE_AI as o, RESOLUTIONS as p, putImage as q, DEFAULT_LLM_PARAMS as r, uniquePresetName as rt, FULLBODY_TAG as s, COOLDOWN_MS as t, uid as tt, NAI_MODELS as u, activePreset as v, cn as w, autoScrollNearEdge as x, applyImageAiPick as y, loadAll as z };
