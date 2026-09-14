import { i as __toESM, n as __exportAll } from "../_runtime.mjs";
import { t as __exportAll$1 } from "./rolldown-runtime-D7D4PA-g.mjs";
import { A as putImage, C as emptyCharacter, D as loadAll, E as joinPromptParts, M as shortModelLabel, O as migrateGrokId, S as deleteImage, T as imageUrl, _ as cachedUrl, a as DEFAULT_STATUS_BAR, b as defaultPureParams, c as GROK_MODELS, d as PLACEHOLDERS, f as RESOLUTIONS, g as UNCENSORED_TAG, h as UC, i as DEFAULT_NAI_BASE, j as rememberUrl, k as normalizePureParams, l as NAI_MODELS, m as SENSITIVE_PREFIX, n as DEFAULT_GROK, o as FULLBODY_TAG, p as SAMPLERS, r as DEFAULT_LLM_PARAMS, s as FURRY_TAG, t as COOLDOWN_MS, u as NOISE_SCHEDULES, v as db, x as defaultSettings, y as defaultImageParams } from "./idb-CfxwoX1r.mjs";
import { R as require_react, l as require_react_dom, y as require_jsx_runtime } from "../_libs/@tanstack/react-router+[...].mjs";
import { i as zipSync, n as strToU8, r as unzipSync, t as strFromU8 } from "../_libs/fflate.mjs";
import { A as Check, C as Ellipsis, D as ChevronUp, E as Clock, M as ArrowUp, N as ArrowDown, O as ChevronLeft, P as AlignJustify, S as FolderInput, T as Copy, _ as Lock, a as Trash2, b as Folder, c as Sparkles, d as ScanSearch, f as RefreshCw, g as Menu, h as Moon, j as Bookmark, k as ChevronDown, l as SlidersHorizontal, m as Pencil, n as WandSparkles, o as Sun, p as Plus, r as Upload, s as Star, t as X, u as Settings, v as LoaderCircle, w as Download, x as FolderPlus, y as GitBranch } from "../_libs/lucide-react.mjs";
import { a as groupFormatHint, i as fieldPolishHint, n as FIELD_LABELS, o as roleSnapshot, r as chatContextBlock } from "./router-qNo355Hb.mjs";
import { t as create } from "../_libs/zustand.mjs";
import { t as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
//#region node_modules/.nitro/vite/services/ssr/assets/engine-B4_pXVwZ.js
function cn(...inputs) {
	return twMerge(clsx(inputs));
}
function uid(prefix = "") {
	return `${prefix}${Date.now().toString(36)}${Math.random().toString(36).slice(2, 8)}`;
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
function presetNameFrom(params) {
	const t = joinPromptParts(params.promptFront, params.promptMid, params.promptBack).replace(/\s+/g, " ").trim();
	if (!t) return "未命名";
	return t.length > 28 ? t.slice(0, 28) + "…" : t;
}
function migrateFavorite(raw) {
	if (!raw || typeof raw !== "object") return null;
	const f = raw;
	if (!f.id) return null;
	if (f.params && typeof f.name === "string") return {
		id: f.id,
		name: f.name || "未命名",
		params: f.params,
		blobId: f.blobId,
		createdAt: f.createdAt || Date.now()
	};
	return {
		id: f.id || uid("fav_"),
		name: String(f.prompt || "").slice(0, 28) || "未命名",
		params: {
			...defaultPureParams(),
			promptMid: f.prompt || "",
			seed: f.seed ?? null
		},
		blobId: f.blobId,
		createdAt: f.createdAt || Date.now()
	};
}
function promptPreview(p) {
	if (p.merged) return p.promptMid;
	return joinPromptParts(p.promptFront, p.promptMid, p.promptBack);
}
function baseSettings() {
	return {
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
	};
}
function rec(v) {
	return v && typeof v === "object" && !Array.isArray(v) ? v : null;
}
function str(v, fallback = "") {
	return typeof v === "string" ? v : fallback;
}
function num(v, fallback) {
	if (typeof v === "number" && Number.isFinite(v)) return v;
	if (typeof v === "string" && v.trim() !== "") {
		const n = Number(v);
		if (Number.isFinite(n)) return n;
	}
	return fallback;
}
function bool(v, fallback = false) {
	return typeof v === "boolean" ? v : fallback;
}
function isLegacyArchive(raw) {
	const o = rec(raw);
	if (!o) return false;
	if (o.kind === "huiyu-archive") return true;
	if (Array.isArray(o.roles) && !Array.isArray(o.chats)) return true;
	return false;
}
function pickArchiveJson(files) {
	const names = [
		"huiyu.json",
		"data.json",
		"archive.json"
	];
	const entries = Object.entries(files);
	for (const want of names) {
		const hit = entries.find(([k]) => {
			return k.replace(/\\/g, "/").replace(/^\.\//, "").split("/").pop() === want;
		});
		if (hit) return hit[1];
	}
}
function collectPngs(files) {
	const out = /* @__PURE__ */ new Map();
	for (const [path, data] of Object.entries(files)) {
		const base = path.replace(/\\/g, "/").split("/").pop() || "";
		const m = /^(.*)\.png$/i.exec(base);
		if (!m) continue;
		let id = m[1];
		try {
			id = decodeURIComponent(id);
		} catch {}
		if (id) out.set(id, data);
	}
	return out;
}
function blobFromBase64(raw) {
	try {
		let b64 = raw.includes("base64,") ? raw.split("base64,").pop() || "" : raw;
		b64 = b64.replace(/\s+/g, "");
		if (b64.length < 32) return null;
		const bin = atob(b64);
		const out = new Uint8Array(bin.length);
		for (let i = 0; i < bin.length; i++) out[i] = bin.charCodeAt(i);
		return new Blob([out], { type: "image/png" });
	} catch {
		return null;
	}
}
function collectEmbeddedImages(raw) {
	const out = /* @__PURE__ */ new Map();
	const images = rec(rec(raw)?.images);
	if (!images) return out;
	for (const [id, val] of Object.entries(images)) {
		if (typeof val !== "string") continue;
		const blob = blobFromBase64(val);
		if (blob) out.set(id, blob);
	}
	return out;
}
function migrateNaiModel(id) {
	const s = str(id);
	if (NAI_MODELS.some((m) => m.id === s)) return s;
	return "nai-diffusion-4-5-full";
}
function migrateSampler(id) {
	const s = str(id);
	if (SAMPLERS.some((m) => m.id === s)) return s;
	return "k_euler_ancestral";
}
function migrateNoise(id) {
	const s = str(id);
	if (NOISE_SCHEDULES.some((m) => m.id === s)) return s;
	return "karras";
}
function extrasFrom(raw) {
	if (!Array.isArray(raw)) return [];
	return raw.map((e, i) => {
		const o = rec(e) || {};
		const body = str(o.body) || str(o.text) || str(o.title);
		return {
			id: str(o.id, `ex_${i}`),
			body
		};
	});
}
function convertImageParams(raw) {
	const base = defaultImageParams();
	const o = rec(raw);
	if (!o) return base;
	const seedRaw = o.seed;
	let seed = null;
	if (typeof seedRaw === "number" && Number.isFinite(seedRaw)) seed = seedRaw;
	else if (typeof seedRaw === "string" && seedRaw.trim() !== "") {
		const n = Number(seedRaw);
		seed = Number.isFinite(n) ? n : null;
	}
	const characters = Array.isArray(o.characters) ? o.characters.map((c, i) => {
		const ch = rec(c) || {};
		return {
			id: str(ch.id, `char_${i}`),
			name: str(ch.name),
			enabled: ch.enabled !== false,
			prompt: str(ch.prompt),
			uc: str(ch.uc),
			x: num(ch.x, .5),
			y: num(ch.y, .5)
		};
	}) : [];
	return {
		...base,
		promptFront: str(o.promptFront, base.promptFront),
		promptMid: str(o.promptMid, base.promptMid),
		promptBack: str(o.promptBack, base.promptBack),
		merged: bool(o.merged, bool(o.unifiedPrompt)),
		sensitive: bool(o.sensitive),
		uncensored: bool(o.uncensored, bool(o.noCensor)),
		fullBody: bool(o.fullBody),
		tagSuggest: o.tagSuggest !== false,
		negative: str(o.negative, base.negative),
		ucPreset: [
			"heavy",
			"light",
			"human",
			"custom"
		].includes(str(o.ucPreset)) ? o.ucPreset : "heavy",
		model: migrateNaiModel(o.model),
		width: num(o.width, base.width),
		height: num(o.height, base.height),
		sampler: migrateSampler(o.sampler),
		noiseSchedule: migrateNoise(o.noiseSchedule),
		steps: num(o.steps, base.steps),
		scale: num(o.scale ?? o.cfg, base.scale),
		cfgRescale: num(o.cfgRescale, base.cfgRescale),
		seed,
		seedLocked: bool(o.seedLocked),
		stepsLocked: bool(o.stepsLocked),
		scaleLocked: bool(o.scaleLocked, bool(o.cfgLocked)),
		cfgRescaleLocked: bool(o.cfgRescaleLocked),
		varietyPlus: bool(o.varietyPlus),
		decrisper: bool(o.decrisper),
		useCoords: bool(o.useCoords),
		characters
	};
}
function charactersFromDraft(draft, imageParams) {
	const multi = bool(draft.multi);
	const cast = Array.isArray(draft.cast) ? draft.cast : [];
	const fromCast = (c, i) => {
		const o = rec(c) || {};
		const id = str(o.id, emptyCharacter(i + 1).id);
		const pc = imageParams.characters.find((x) => x.id === id || o.name && x.name === o.name);
		return {
			...emptyCharacter(i + 1),
			id,
			name: str(o.name),
			persona: str(o.persona),
			speech: str(o.speech),
			appearance: str(o.appearance),
			extras: extrasFrom(o.extras),
			imageEnabled: o.away === true ? false : o.imageEnabled !== false,
			prompt: str(o.prompt, pc?.prompt ?? ""),
			uc: str(o.uc, pc?.uc ?? ""),
			x: num(o.x ?? pc?.x, .5),
			y: num(o.y ?? pc?.y, .5)
		};
	};
	if (multi && cast.length) return cast.map(fromCast);
	const first = rec(cast[0]);
	const pc = imageParams.characters[0];
	const ch = emptyCharacter(1);
	return [{
		...ch,
		id: str(first?.id, pc?.id || ch.id),
		name: str(draft.name) || str(first?.name),
		persona: str(draft.persona) || str(first?.persona),
		speech: str(draft.speech) || str(first?.speech),
		appearance: str(draft.appearance) || str(first?.appearance),
		extras: extrasFrom(first?.extras),
		prompt: str(first?.prompt, pc?.prompt ?? ""),
		uc: str(first?.uc, pc?.uc ?? ""),
		x: num(first?.x ?? pc?.x, .5),
		y: num(first?.y ?? pc?.y, .5)
	}];
}
function alignImageChars(params, characters) {
	if (params.characters.length) return {
		...params,
		characters: params.characters.map((pc) => {
			const match = characters.find((c) => c.id === pc.id) || characters.find((c) => c.name && c.name === pc.name);
			return match ? {
				...pc,
				name: pc.name || match.name,
				id: match.id
			} : pc;
		})
	};
	return {
		...params,
		characters: characters.map((c) => ({
			id: c.id,
			name: c.name,
			enabled: c.imageEnabled,
			prompt: c.prompt || c.appearance,
			uc: c.uc,
			x: c.x,
			y: c.y
		}))
	};
}
function convertGenImage(img, createdAt) {
	const o = rec(img) || {};
	const id = str(o.id, uid("img_"));
	return {
		id,
		blobId: str(o.blobId, id),
		prompt: str(o.prompt),
		charTails: void 0,
		negative: str(o.negative),
		seed: num(o.seed, 0),
		model: migrateNaiModel(o.model),
		width: num(o.width, 832),
		height: num(o.height, 1216),
		steps: num(o.steps, 28),
		sampler: migrateSampler(o.sampler),
		status: "done",
		createdAt
	};
}
function convertMessage(m, characters) {
	const o = rec(m) || {};
	const createdAt = num(o.createdAt, Date.now());
	const imagesRaw = Array.isArray(o.images) && o.images.length ? o.images : o.image ? [o.image] : [];
	const speakerId = str(o.speakerId) || void 0;
	const speakerName = str(o.speakerName) || void 0;
	const match = speakerId ? characters.find((c) => c.id === speakerId) : speakerName ? characters.find((c) => c.name === speakerName) : void 0;
	const role = o.role === "user" ? "user" : o.role === "narrator" ? "narrator" : "assistant";
	return {
		id: str(o.id, uid("msg_")),
		role,
		characterId: match?.id ?? speakerId,
		characterName: match?.name || speakerName,
		content: str(o.content, str(o.text)),
		images: imagesRaw.map((img) => convertGenImage(img, createdAt)),
		createdAt
	};
}
function convertRole(role, grokModelId) {
	const o = rec(role) || {};
	const draft = rec(o.draft) || {};
	let imageParams = convertImageParams(o.imageParams);
	if (o.customTagSuggest === false) imageParams = {
		...imageParams,
		tagSuggest: false
	};
	const characters = charactersFromDraft(draft, imageParams);
	imageParams = alignImageChars(imageParams, characters);
	const memoryObj = rec(o.memory);
	const memory = typeof o.memory === "string" ? o.memory : str(memoryObj?.text);
	const memoryUntil = num(memoryObj?.covered ?? o.memoryUntil, 0);
	const statusBar = str(draft.statusText, str(draft.statusBar));
	return {
		id: str(o.id, uid("chat_")),
		folderId: typeof o.folderId === "string" ? o.folderId : null,
		name: str(o.name, str(draft.name, "未命名")),
		remark: str(o.note, str(o.remark)),
		starred: bool(o.starred),
		order: num(o.order, num(o.sort, 0)),
		createdAt: num(o.createdAt, Date.now()),
		updatedAt: num(o.updatedAt, Date.now()),
		isDraft: false,
		grokModelId,
		isMulti: bool(draft.multi),
		multiMode: draft.chatMode === "group" ? "group" : "together",
		promptMode: draft.promptPack === "split" ? "insert" : "legacy",
		adultBoost: bool(draft.adultPrompt, bool(draft.adultBoost)),
		canGen: o.canGen !== false,
		statusBarOn: bool(draft.statusOn, bool(draft.statusBarOn)),
		statusBar: statusBar || (bool(draft.statusOn) ? DEFAULT_STATUS_BAR : ""),
		overview: str(draft.overview),
		opening: str(draft.scene, str(draft.opening)),
		extras: extrasFrom(draft.extras),
		memory,
		memoryUntil,
		characters,
		imageParams,
		messages: Array.isArray(o.messages) ? o.messages.map((m) => convertMessage(m, characters)) : [],
		avatarBlobId: str(o.avatarImageId, str(o.avatarBlobId)) || void 0,
		scrollTop: 0
	};
}
function convertFolder(f, i) {
	const o = rec(f) || {};
	return {
		id: str(o.id, uid("folder_")),
		name: str(o.name, "未命名"),
		starred: bool(o.starred),
		collapsed: bool(o.collapsed),
		order: num(o.order, num(o.sort, i)),
		createdAt: num(o.createdAt, Date.now())
	};
}
function convertPersonaCard(c, i, grokModelId) {
	const o = rec(c) || {};
	const draft = rec(o.draft) || rec(c) || {};
	const characters = charactersFromDraft(draft, defaultImageParams());
	return {
		id: str(o.id, uid("card_")),
		name: str(o.name, str(draft.name, "未命名")),
		isMulti: bool(draft.multi),
		overview: str(draft.overview),
		opening: str(draft.scene, str(draft.opening)),
		extras: extrasFrom(draft.extras),
		statusBarOn: bool(draft.statusOn),
		statusBar: str(draft.statusText, str(draft.statusBar)),
		characters,
		grokModelId,
		createdAt: num(o.createdAt, Date.now()),
		order: i
	};
}
function convertAppearance(c, i) {
	const o = rec(c) || {};
	return {
		id: str(o.id, uid("ap_")),
		name: str(o.name, "未命名"),
		prompt: str(o.prompt),
		order: num(o.order, i),
		createdAt: num(o.createdAt, Date.now())
	};
}
function convertHistory(h) {
	const o = rec(h) || {};
	const params = convertImageParams(o.params);
	const id = str(o.id, uid("hist_"));
	return {
		id,
		blobId: str(o.blobId, str(o.imageId, id)) || void 0,
		prompt: str(o.prompt, params.promptMid),
		negative: str(o.negative, params.negative),
		seed: num(o.seed, params.seed ?? 0),
		model: migrateNaiModel(o.model ?? params.model),
		width: num(o.width, params.width),
		height: num(o.height, params.height),
		steps: num(o.steps, params.steps),
		sampler: migrateSampler(o.sampler ?? params.sampler),
		params,
		createdAt: num(o.createdAt, Date.now()),
		status: "done"
	};
}
function presetToAppearance(p, i) {
	const o = rec(p) || {};
	const params = convertImageParams(o.params);
	const prompt = str(o.prompt) || params.promptMid || [
		params.promptFront,
		params.promptMid,
		params.promptBack
	].filter(Boolean).join(", ");
	const name = str(o.name);
	if (!name && !prompt) return null;
	return {
		id: str(o.id, uid("preset_")),
		name: name || "未命名预设",
		prompt,
		order: 1e3 + i,
		createdAt: num(o.createdAt, Date.now())
	};
}
function convertLegacyArchive(raw) {
	const o = rec(raw);
	if (!o) throw new Error("无法识别的存档");
	const settingsIn = rec(o.settings);
	const grokModelId = migrateGrokId(str(settingsIn?.grokModel, str(settingsIn?.grokModelId, DEFAULT_GROK)));
	const settings = {
		...baseSettings(),
		grokModelId,
		theme: settingsIn?.theme === "dark" ? "dark" : "light"
	};
	const chats = Array.isArray(o.roles) ? o.roles.map((r) => convertRole(r, grokModelId)) : [];
	const folders = Array.isArray(o.folders) ? o.folders.map(convertFolder) : [];
	const cards = Array.isArray(o.personaCards) ? o.personaCards.map((c, i) => convertPersonaCard(c, i, grokModelId)) : [];
	const appearances = Array.isArray(o.appearanceCards) ? o.appearanceCards.map(convertAppearance) : [];
	const seen = new Set(appearances.map((a) => a.id));
	if (Array.isArray(o.purePresets)) o.purePresets.forEach((p, i) => {
		const a = presetToAppearance(p, i);
		if (a && !seen.has(a.id)) {
			appearances.push(a);
			seen.add(a.id);
		}
	});
	const history = Array.isArray(o.pureHistory) ? o.pureHistory.map(convertHistory) : [];
	const pureParams = o.pureParams ? convertImageParams(o.pureParams) : defaultPureParams();
	const currentId = typeof o.activeRoleId === "string" && chats.some((c) => c.id === o.activeRoleId) ? o.activeRoleId : [...chats].sort((a, b) => b.updatedAt - a.updatedAt)[0]?.id ?? null;
	return {
		dump: {
			version: 1,
			settings,
			folders,
			chats,
			cards,
			appearances,
			favorites: [],
			history,
			hasImages: o.imagesIncluded !== false
		},
		currentId,
		pureParams
	};
}
async function exportArchive(kind) {
	const [chats, folders, cards, appearances, favorites, history, settingsRow] = await Promise.all([
		db.chats.toArray(),
		db.folders.toArray(),
		db.cards.toArray(),
		db.appearances.toArray(),
		db.favorites.toArray(),
		db.history.toArray(),
		db.kv.get("settings")
	]);
	const dump = {
		version: 1,
		settings: settingsRow?.value ?? {
			grokModelId: "grok-4.6-medium",
			chatSource: "grok",
			llmBase: "",
			llmKey: "",
			llmConnected: false,
			llmModel: "",
			llmModels: [],
			llmStarred: [],
			llmParams: {
				temperature: .9,
				topP: 1,
				frequencyPenalty: 0,
				presencePenalty: .4,
				maxTokens: 4096,
				contextTurns: 16
			},
			naiKey: "",
			naiBase: "https://api.idlecloud.cc",
			naiConnected: false,
			cooldownUntil: 0,
			theme: "light"
		},
		folders,
		chats,
		cards,
		appearances,
		favorites,
		history,
		hasImages: kind === "full"
	};
	dump.settings = {
		...dump.settings,
		naiKey: "",
		llmKey: ""
	};
	if (kind === "lite") {
		dump.favorites = (dump.favorites ?? []).map((f) => ({
			...f,
			blobId: void 0
		}));
		dump.history = (dump.history ?? []).map((h) => ({
			...h,
			blobId: void 0
		}));
		downloadBlob(new Blob([JSON.stringify(dump)], { type: "application/json" }), `绘语-无配图-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.json`);
		return;
	}
	const files = { "huiyu.json": strToU8(JSON.stringify(dump)) };
	const images = await db.images.toArray();
	for (const img of images) {
		const buf = new Uint8Array(await img.blob.arrayBuffer());
		files[`images/${img.id}.png`] = buf;
	}
	const zipped = zipSync(files, { level: 1 });
	downloadBlob(new Blob([zipped], { type: "application/zip" }), `绘语-全部-${(/* @__PURE__ */ new Date()).toISOString().slice(0, 10)}.zip`);
}
async function importArchive(file) {
	const name = file.name.toLowerCase();
	let raw;
	const imageBlobs = /* @__PURE__ */ new Map();
	const head = new Uint8Array(await file.slice(0, 4).arrayBuffer());
	if (name.endsWith(".zip") || head[0] === 80 && head[1] === 75) {
		const buf = new Uint8Array(await file.arrayBuffer());
		let unzipped;
		try {
			unzipped = unzipSync(buf);
		} catch {
			throw new Error("无法识别的存档");
		}
		const jsonFile = pickArchiveJson(unzipped);
		if (!jsonFile) throw new Error("无法识别的存档");
		try {
			raw = JSON.parse(strFromU8(jsonFile));
		} catch {
			throw new Error("无法识别的存档");
		}
		for (const [id, data] of collectPngs(unzipped)) imageBlobs.set(id, new Blob([data], { type: "image/png" }));
	} else try {
		raw = JSON.parse(await file.text());
	} catch {
		throw new Error("无法识别的存档");
	}
	for (const [id, blob] of collectEmbeddedImages(raw)) if (!imageBlobs.has(id)) imageBlobs.set(id, blob);
	let dump;
	let currentId;
	let pureParams;
	if (isLegacyArchive(raw)) {
		const loaded = convertLegacyArchive(raw);
		dump = loaded.dump;
		currentId = loaded.currentId;
		pureParams = loaded.pureParams;
	} else {
		dump = raw;
		if (!dump || dump.version !== 1 || !Array.isArray(dump.chats)) throw new Error("无法识别的存档");
	}
	const tables = [
		db.chats,
		db.folders,
		db.cards,
		db.appearances,
		db.favorites,
		db.history,
		db.images,
		db.kv
	];
	await db.transaction("rw", tables, async () => {
		await db.chats.clear();
		await db.folders.clear();
		await db.cards.clear();
		await db.appearances.clear();
		await db.favorites.clear();
		await db.history.clear();
		await db.images.clear();
		await db.chats.bulkPut(dump.chats ?? []);
		await db.folders.bulkPut(dump.folders ?? []);
		await db.cards.bulkPut(dump.cards ?? []);
		await db.appearances.bulkPut(dump.appearances ?? []);
		await db.favorites.bulkPut((dump.favorites ?? []).map(migrateFavorite).filter(Boolean));
		await db.history.bulkPut(dump.history ?? []);
		const prev = await db.kv.get("settings");
		const merged = {
			...prev?.value ?? {},
			...dump.settings,
			naiKey: (prev?.value)?.naiKey || dump.settings?.naiKey || "",
			llmKey: (prev?.value)?.llmKey || dump.settings?.llmKey || ""
		};
		await db.kv.put({
			key: "settings",
			value: merged
		});
		if (currentId !== void 0) await db.kv.put({
			key: "currentId",
			value: currentId
		});
		if (pureParams) await db.kv.put({
			key: "pureParams",
			value: pureParams
		});
	});
	for (const [id, blob] of imageBlobs) await putImage(id, blob);
}
function cloneChat(chat, nameSuffix = "(副本)") {
	const id = uid("chat_");
	return {
		...structuredClone(chat),
		id,
		name: chat.name ? `${chat.name}${nameSuffix}` : "未命名" + nameSuffix,
		starred: false,
		createdAt: Date.now(),
		updatedAt: Date.now(),
		isDraft: false,
		messages: structuredClone(chat.messages)
	};
}
function naiMeta(model) {
	return NAI_MODELS.find((m) => m.id === model);
}
function naiFamily(model) {
	return naiMeta(model)?.family ?? "v4.5";
}
function naiWire(model) {
	return naiMeta(model)?.wire || model;
}
function joinPrompt(params, grokTail = "") {
	const furry = !!naiMeta(params.model)?.furry;
	if (params.merged) {
		let text = params.promptMid.trim();
		if (furry && !/fur dataset/i.test(text)) text = joinPromptParts(FURRY_TAG, text);
		if (params.uncensored && !/uncensored/i.test(text)) text = joinPromptParts(text, UNCENSORED_TAG);
		if (params.fullBody && !/full body/i.test(text)) text = joinPromptParts(text, FULLBODY_TAG);
		if (params.sensitive && !/rating:\s*sensitive/i.test(text)) text = joinPromptParts(SENSITIVE_PREFIX, text);
		return joinPromptParts(text, grokTail);
	}
	let front = params.promptFront.trim();
	if (furry && !/fur dataset/i.test(front) && !/fur dataset/i.test(params.promptMid)) front = joinPromptParts(FURRY_TAG, front);
	if (params.uncensored && !/uncensored/i.test(front)) front = joinPromptParts(front, UNCENSORED_TAG);
	if (params.fullBody && !/full body/i.test(front)) front = joinPromptParts(front, FULLBODY_TAG);
	const mid = joinPromptParts(params.promptMid, grokTail);
	let back = params.promptBack.trim();
	if (params.sensitive && !/rating:\s*sensitive/i.test(back)) back = joinPromptParts(SENSITIVE_PREFIX, back);
	return joinPromptParts(front, mid, back);
}
function varietySigma(w, h) {
	return Math.round(19 * Math.sqrt(w * h / 393216) * 100) / 100;
}
function buildNaiPayload(opts) {
	const { params, grokTail = "", charTails = {}, insertMode = "insert" } = opts;
	const seed = opts.seed ?? params.seed ?? randomSeed();
	const family = naiFamily(params.model);
	const v3 = family === "v3";
	const chars = params.characters.filter((c) => c.enabled);
	const charCaptions = chars.map((c) => ({
		char_caption: [c.prompt.trim(), charTails[c.id] ?? ""].filter(Boolean).join(", "),
		centers: [{
			x: c.x,
			y: c.y
		}]
	}));
	const charUc = chars.map((c) => ({
		char_caption: c.uc.trim(),
		centers: [{
			x: c.x,
			y: c.y
		}]
	}));
	let base = joinPrompt(params, grokTail);
	if (!v3 && insertMode === "legacy" && chars.length) {
		const extra = chars.map((c, i) => {
			const body = [c.prompt.trim(), charTails[c.id] ?? ""].filter(Boolean).join(", ");
			return `char${i + 1}: ${body}`;
		}).join(", ");
		base = [base, extra].filter(Boolean).join(", ");
	}
	const useCoords = params.useCoords;
	const characterPrompts = chars.map((c) => ({
		prompt: [c.prompt.trim(), charTails[c.id] ?? ""].filter(Boolean).join(", "),
		uc: c.uc.trim(),
		center: {
			x: c.x,
			y: c.y
		},
		enabled: true
	}));
	const parameters = {
		params_version: family === "v5" ? 4 : 3,
		width: params.width,
		height: params.height,
		scale: params.scale,
		sampler: params.sampler,
		steps: params.steps,
		n_samples: 1,
		ucPreset: 0,
		qualityToggle: false,
		autoSmea: false,
		dynamic_thresholding: params.decrisper,
		controlnet_strength: 1,
		legacy: false,
		add_original_image: true,
		cfg_rescale: params.cfgRescale,
		noise_schedule: params.noiseSchedule,
		legacy_v3_extend: false,
		skip_cfg_above_sigma: params.varietyPlus ? varietySigma(params.width, params.height) : null,
		use_coords: useCoords,
		legacy_uc: false,
		normalize_coords: true,
		prompt: base,
		negative_prompt: params.negative,
		seed,
		extra_noise_seed: seed,
		prefer_brownian: params.sampler.includes("ancestral") || params.sampler.includes("sde")
	};
	if (!v3 && insertMode === "insert") {
		parameters.characterPrompts = characterPrompts;
		parameters.v4_prompt = {
			caption: {
				base_caption: base,
				char_captions: charCaptions
			},
			use_coords: useCoords,
			use_order: true
		};
		parameters.v4_negative_prompt = {
			caption: {
				base_caption: params.negative,
				char_captions: charUc
			},
			legacy_uc: false
		};
	} else if (!v3) {
		parameters.v4_prompt = {
			caption: {
				base_caption: base,
				char_captions: []
			},
			use_coords: false,
			use_order: true
		};
		parameters.v4_negative_prompt = {
			caption: {
				base_caption: params.negative,
				char_captions: []
			},
			legacy_uc: false
		};
	}
	return {
		input: base,
		model: naiWire(params.model),
		action: "generate",
		parameters,
		seed,
		finalPrompt: base,
		characterPrompts
	};
}
function syncCharsFromRole(params, roles, isMulti) {
	if (!isMulti) return {
		...params,
		characters: []
	};
	const next = roles.map((r) => {
		const prev = params.characters.find((c) => c.id === r.id);
		return {
			id: r.id,
			name: r.name || prev?.name || "",
			enabled: r.imageEnabled,
			prompt: prev?.prompt || r.prompt || r.appearance || "",
			uc: prev?.uc || r.uc || "",
			x: prev?.x ?? r.x ?? .5,
			y: prev?.y ?? r.y ?? .5
		};
	});
	return {
		...params,
		characters: next
	};
}
function samplerLabel(id) {
	if (id === "k_euler_ancestral") return "Euler A";
	if (id === "k_euler") return "Euler";
	if (id === "k_dpmpp_2s_ancestral") return "DPM++ 2S A";
	if (id === "k_dpmpp_2m") return "DPM++ 2M";
	if (id === "k_dpmpp_sde") return "DPM++ SDE";
	if (id === "k_dpmpp_2m_sde") return "DPM++ 2M SDE";
	if (id === "ddim_v3") return "DDIM";
	return id;
}
function samplerShort(id) {
	if (id === "k_euler_ancestral") return "Euler A...";
	return samplerLabel(id);
}
function modelLabel(id) {
	return NAI_MODELS.find((m) => m.id === id)?.label ?? id;
}
function modelShort(id) {
	const m = naiMeta(id);
	if (!m) return id;
	if (m.family === "v3") return m.furry ? "F3" : "3";
	if (m.family === "v5") return id.includes("curated") ? "5C" : "5";
	if (m.family === "v4.5") return id.includes("curated") ? "4.5C" : "4.5";
	if (m.family === "v4") return id.includes("curated") ? "4C" : "4";
	return m.label.replace(/^NAI\s+/i, "").replace(/\s*Full$/i, "");
}
var ui0 = () => ({
	tab: "chat",
	sidebar: false,
	connection: false,
	selectMode: false,
	selected: [],
	sortMode: false,
	menuId: null,
	editingChatId: null,
	creating: false,
	previewParams: false,
	saveCardOpen: false,
	saveAppearOpen: false,
	appearTarget: null,
	customPrompt: null,
	confirm: null,
	rename: null,
	moveOpen: false,
	multiCreate: null,
	personalize: null,
	fieldEdit: null,
	polishJob: null,
	extraPromptOpen: false,
	autoPolish: false,
	paramsJump: null,
	llmSettings: false
});
function persistChat(c) {
	if (c.isDraft) return;
	db.chats.put(c);
}
var toastN = 1;
var useApp = create((set, get) => ({
	ready: true,
	settings: defaultSettings(),
	folders: [],
	chats: [],
	cards: [],
	appearances: [],
	favorites: [],
	history: [],
	pureParams: defaultPureParams(),
	currentId: null,
	editBackup: null,
	toasts: [],
	ui: ui0(),
	hydrate: async () => {
		const data = await loadAll();
		const [pureRow, currentRow] = await Promise.all([db.kv.get("pureParams"), db.kv.get("currentId")]);
		const live = data.chats.filter((c) => !c.isDraft).map((c) => ({
			...c,
			grokModelId: migrateGrokId(c.grokModelId)
		}));
		const settings = {
			...data.settings,
			grokModelId: migrateGrokId(data.settings.grokModelId),
			theme: data.settings.theme === "dark" ? "dark" : "light",
			llmParams: data.settings.llmParams,
			chatSource: data.settings.chatSource === "api" && data.settings.llmConnected ? "api" : "grok"
		};
		const savedId = currentRow?.value || null;
		const currentId = live.some((c) => c.id === savedId) ? savedId : live.sort((a, b) => b.updatedAt - a.updatedAt)[0]?.id ?? null;
		set({
			ready: true,
			...data,
			settings,
			chats: live,
			favorites: (data.favorites ?? []).map(migrateFavorite).filter(Boolean),
			pureParams: normalizePureParams(pureRow?.value ?? defaultPureParams()),
			currentId
		});
	},
	toast: (text) => {
		const id = toastN++;
		set((s) => ({ toasts: [...s.toasts, {
			id,
			text
		}] }));
		setTimeout(() => set((s) => ({ toasts: s.toasts.filter((t) => t.id !== id) })), 1100);
	},
	setUI: (p) => set((s) => ({ ui: {
		...s.ui,
		...p
	} })),
	setTab: (tab) => set((s) => ({ ui: {
		...s.ui,
		tab
	} })),
	setSettings: (p) => {
		const settings = {
			...get().settings,
			...p
		};
		set({ settings });
		db.kv.put({
			key: "settings",
			value: settings
		});
	},
	setGrok: (id) => {
		get().setSettings({ grokModelId: id });
		const cur = get().current();
		if (cur) get().patchChat(cur.id, { grokModelId: id });
	},
	current: () => get().chats.find((c) => c.id === get().currentId),
	patchChat: (id, p) => {
		set((s) => ({ chats: s.chats.map((c) => {
			if (c.id !== id) return c;
			const next = typeof p === "function" ? p(c) : {
				...c,
				...p,
				updatedAt: Date.now()
			};
			persistChat(next);
			return next;
		}) }));
	},
	patchParams: (id, p) => {
		if (id === "__pure__") {
			get().setPureParams(p);
			return;
		}
		get().patchChat(id, (c) => ({
			...c,
			imageParams: {
				...c.imageParams,
				...p
			},
			updatedAt: Date.now()
		}));
	},
	setPureParams: (p) => {
		const pureParams = {
			...get().pureParams,
			...p
		};
		set({ pureParams });
		db.kv.put({
			key: "pureParams",
			value: pureParams
		});
	},
	newDraft: () => {
		const id = uid("chat_");
		const grok = get().settings.grokModelId || "grok-4.6-medium";
		const draft = {
			id,
			folderId: null,
			name: "",
			remark: "",
			starred: false,
			order: Date.now(),
			createdAt: Date.now(),
			updatedAt: Date.now(),
			isDraft: true,
			grokModelId: grok,
			isMulti: false,
			multiMode: "together",
			promptMode: "insert",
			adultBoost: false,
			canGen: true,
			statusBarOn: false,
			statusBar: DEFAULT_STATUS_BAR,
			overview: "",
			opening: "",
			extras: [],
			memory: "",
			memoryUntil: 0,
			characters: [emptyCharacter(1)],
			imageParams: defaultImageParams(),
			messages: [],
			scrollTop: 0
		};
		set((s) => ({
			chats: [...s.chats, draft],
			currentId: id,
			ui: {
				...s.ui,
				creating: true,
				editingChatId: null,
				sidebar: false,
				tab: "chat",
				menuId: null
			}
		}));
	},
	cancelDraft: () => {
		set((s) => {
			const rest = s.chats.filter((c) => !c.isDraft);
			return {
				chats: rest,
				currentId: rest.sort((a, b) => b.updatedAt - a.updatedAt)[0]?.id ?? null,
				ui: {
					...s.ui,
					creating: false,
					editingChatId: null
				}
			};
		});
	},
	commitChat: (id) => {
		const c = get().chats.find((x) => x.id === id);
		if (!c) return;
		const name = c.characters.map((ch) => ch.name).filter(Boolean).join("、") || c.name || "未命名";
		const appearance = c.characters[0]?.appearance || "";
		const imageParams = syncCharsFromRole(c.imageParams, c.characters, c.isMulti);
		if (!c.isMulti && !imageParams.promptMid.trim() && appearance) imageParams.promptMid = appearance;
		const next = {
			...c,
			name,
			isDraft: false,
			imageParams,
			updatedAt: Date.now()
		};
		persistChat(next);
		db.kv.put({
			key: "currentId",
			value: id
		});
		set((s) => ({
			chats: s.chats.map((x) => x.id === id ? next : x),
			currentId: id,
			ui: {
				...s.ui,
				creating: false,
				editingChatId: null,
				tab: "chat"
			}
		}));
	},
	openChat: (id, opts) => {
		db.kv.put({
			key: "currentId",
			value: id
		});
		set((s) => ({
			currentId: id,
			ui: {
				...s.ui,
				sidebar: false,
				creating: false,
				editingChatId: opts?.edit ? id : null,
				tab: "chat",
				menuId: null
			}
		}));
	},
	beginEdit: (id) => {
		const c = get().chats.find((x) => x.id === id);
		set({
			editBackup: c ? structuredClone(c) : null,
			currentId: id,
			ui: {
				...get().ui,
				editingChatId: id,
				creating: false,
				sidebar: false,
				tab: "chat",
				menuId: null
			}
		});
	},
	cancelEdit: () => {
		const bak = get().editBackup;
		if (bak) {
			persistChat(bak);
			set((s) => ({
				chats: s.chats.map((c) => c.id === bak.id ? bak : c),
				editBackup: null,
				ui: {
					...s.ui,
					editingChatId: null
				}
			}));
		} else set((s) => ({
			ui: {
				...s.ui,
				editingChatId: null
			},
			editBackup: null
		}));
	},
	addFolder: () => {
		const f = {
			id: uid("fold_"),
			name: "新建文件夹",
			starred: false,
			collapsed: false,
			order: Date.now(),
			createdAt: Date.now()
		};
		db.folders.put(f);
		set((s) => ({ folders: [...s.folders, f] }));
		get().toast("已创建文件夹");
	},
	toggleFolder: (id) => {
		set((s) => {
			const folders = s.folders.map((f) => f.id === id ? {
				...f,
				collapsed: !f.collapsed
			} : f);
			const f = folders.find((x) => x.id === id);
			if (f) db.folders.put(f);
			return { folders };
		});
	},
	deleteSelected: () => {
		const ids = new Set(get().ui.selected);
		const chats = get().chats.filter((c) => !ids.has(c.id));
		const folders = get().folders.filter((f) => !ids.has(f.id));
		const moved = chats.map((c) => c.folderId && ids.has(c.folderId) ? {
			...c,
			folderId: null
		} : c);
		db.chats.bulkPut(moved.filter((c) => !c.isDraft));
		db.chats.bulkDelete([...ids]);
		db.folders.bulkDelete([...ids]);
		set((s) => ({
			chats: moved,
			folders,
			currentId: ids.has(s.currentId || "") ? moved[0]?.id ?? null : s.currentId,
			ui: {
				...s.ui,
				selectMode: false,
				selected: [],
				sortMode: false,
				menuId: null
			}
		}));
		get().toast("已删除");
	},
	starSelected: () => {
		const ids = new Set(get().ui.selected);
		const turningOn = get().chats.some((c) => ids.has(c.id) && !c.starred) || get().folders.some((f) => ids.has(f.id) && !f.starred);
		set((s) => {
			return {
				chats: s.chats.map((c) => {
					if (!ids.has(c.id)) return c;
					const next = {
						...c,
						starred: !c.starred,
						updatedAt: Date.now()
					};
					persistChat(next);
					return next;
				}),
				folders: s.folders.map((f) => {
					if (!ids.has(f.id)) return f;
					const next = {
						...f,
						starred: !f.starred
					};
					db.folders.put(next);
					return next;
				}),
				ui: {
					...s.ui,
					selectMode: false,
					selected: []
				}
			};
		});
		get().toast(turningOn ? "已星标并置顶" : "已取消星标");
	},
	moveSelected: (folderId) => {
		const ids = new Set(get().ui.selected);
		set((s) => {
			return {
				chats: s.chats.map((c) => {
					if (!ids.has(c.id)) return c;
					const next = {
						...c,
						folderId,
						updatedAt: Date.now()
					};
					persistChat(next);
					return next;
				}),
				ui: {
					...s.ui,
					selectMode: false,
					selected: [],
					moveOpen: false
				}
			};
		});
		get().toast("已移动");
	},
	copySelected: () => {
		const ids = get().ui.selected;
		const extras = [];
		for (const id of ids) {
			const c = get().chats.find((x) => x.id === id);
			if (!c) continue;
			const copy = cloneChat(c);
			extras.push(copy);
			persistChat(copy);
		}
		set((s) => ({
			chats: [...s.chats, ...extras],
			ui: {
				...s.ui,
				selectMode: false,
				selected: []
			}
		}));
		get().toast(extras.length === 1 ? `已复制「${extras[0].name}」` : "已复制");
	},
	renameItem: (id, name) => {
		set((s) => {
			return {
				chats: s.chats.map((c) => {
					if (c.id !== id) return c;
					const next = {
						...c,
						name,
						characters: c.isMulti ? c.characters : c.characters.map((ch, i) => i === 0 ? {
							...ch,
							name
						} : ch),
						updatedAt: Date.now()
					};
					persistChat(next);
					return next;
				}),
				folders: s.folders.map((f) => {
					if (f.id !== id) return f;
					const next = {
						...f,
						name
					};
					db.folders.put(next);
					return next;
				}),
				cards: s.cards.map((c) => {
					if (c.id !== id) return c;
					const next = {
						...c,
						name
					};
					db.cards.put(next);
					return next;
				}),
				ui: {
					...s.ui,
					rename: null,
					selectMode: false,
					selected: []
				}
			};
		});
		get().toast("已改名");
	},
	reorder: (ids) => {
		const order = new Map(ids.map((id, i) => [id, i]));
		set((s) => {
			return {
				chats: s.chats.map((c) => {
					if (!order.has(c.id)) return c;
					const next = {
						...c,
						order: order.get(c.id)
					};
					persistChat(next);
					return next;
				}),
				folders: s.folders.map((f) => {
					if (!order.has(f.id)) return f;
					const next = {
						...f,
						order: order.get(f.id)
					};
					db.folders.put(next);
					return next;
				}),
				ui: {
					...s.ui,
					sortMode: false,
					selectMode: false,
					selected: []
				}
			};
		});
	},
	saveCard: (chat, name) => {
		const card = {
			id: uid("card_"),
			name,
			isMulti: chat.isMulti,
			overview: chat.overview,
			opening: chat.opening,
			extras: chat.extras,
			statusBarOn: chat.statusBarOn,
			statusBar: chat.statusBar,
			characters: structuredClone(chat.characters),
			grokModelId: chat.grokModelId,
			createdAt: Date.now(),
			order: Date.now()
		};
		db.cards.put(card);
		set((s) => ({
			cards: [...s.cards, card],
			ui: {
				...s.ui,
				saveCardOpen: false
			}
		}));
		get().toast(`已保存角色卡「${name}」`);
	},
	applyCard: (chatId, card, charIndex) => {
		get().patchChat(chatId, (c) => {
			if (c.isMulti && !card.isMulti && charIndex != null) {
				const chars = c.characters.map((ch, i) => i === charIndex ? {
					...ch,
					...card.characters[0],
					id: ch.id,
					extras: card.characters[0]?.extras ?? ch.extras
				} : ch);
				return {
					...c,
					characters: chars
				};
			}
			return {
				...c,
				isMulti: card.isMulti,
				overview: card.overview,
				opening: card.opening,
				extras: card.extras,
				statusBarOn: card.statusBarOn,
				statusBar: card.statusBar,
				grokModelId: card.grokModelId,
				characters: structuredClone(card.characters).map((ch, i) => ({
					...ch,
					id: c.characters[i]?.id ?? ch.id
				})),
				name: card.isMulti ? card.characters.map((x) => x.name).filter(Boolean).join("、") : card.characters[0]?.name || card.name
			};
		});
		get().toast(`已应用「${card.name}」`);
	},
	deleteCard: (id) => {
		db.cards.delete(id);
		const name = get().cards.find((c) => c.id === id)?.name ?? "";
		set((s) => ({ cards: s.cards.filter((c) => c.id !== id) }));
		get().toast(`已删除${name}`);
	},
	reorderCards: (ids) => {
		const order = new Map(ids.map((id, i) => [id, i]));
		set((s) => {
			return { cards: s.cards.map((c) => {
				if (!order.has(c.id)) return c;
				const next = {
					...c,
					order: order.get(c.id)
				};
				db.cards.put(next);
				return next;
			}) };
		});
	},
	saveAppearance: (name, prompt) => {
		const a = {
			id: uid("ap_"),
			name,
			prompt,
			order: Date.now(),
			createdAt: Date.now()
		};
		db.appearances.put(a);
		set((s) => ({
			appearances: [...s.appearances, a],
			ui: {
				...s.ui,
				saveAppearOpen: false
			}
		}));
		get().toast(`已保存角色「${name}」`);
	},
	applyAppearance: (chatId, preset, target) => {
		if (chatId === "__pure__") {
			if (target === "mid") get().setPureParams({ promptMid: preset.prompt });
			else get().setPureParams({ characters: get().pureParams.characters.map((ch) => ch.id === target ? {
				...ch,
				prompt: preset.prompt
			} : ch) });
			return;
		}
		get().patchChat(chatId, (c) => {
			if (target === "mid") return {
				...c,
				imageParams: {
					...c.imageParams,
					promptMid: preset.prompt
				},
				characters: c.isMulti ? c.characters : c.characters.map((ch, i) => i === 0 ? {
					...ch,
					appearance: preset.prompt
				} : ch)
			};
			return {
				...c,
				imageParams: {
					...c.imageParams,
					characters: c.imageParams.characters.map((ch) => ch.id === target ? {
						...ch,
						prompt: preset.prompt
					} : ch)
				},
				characters: c.characters.map((ch) => ch.id === target ? {
					...ch,
					appearance: preset.prompt,
					prompt: preset.prompt
				} : ch)
			};
		});
	},
	deleteAppearance: (id) => {
		db.appearances.delete(id);
		set((s) => ({ appearances: s.appearances.filter((a) => a.id !== id) }));
	},
	reorderAppearances: (ids) => {
		const order = new Map(ids.map((id, i) => [id, i]));
		set((s) => {
			return { appearances: s.appearances.map((a) => {
				if (!order.has(a.id)) return a;
				const next = {
					...a,
					order: order.get(a.id)
				};
				db.appearances.put(next);
				return next;
			}) };
		});
	},
	addFavorite: (blobId) => {
		const params = structuredClone(get().pureParams);
		const f = {
			id: uid("fav_"),
			name: presetNameFrom(params),
			params,
			blobId,
			createdAt: Date.now()
		};
		db.favorites.put(f);
		set((s) => ({ favorites: [f, ...s.favorites] }));
		get().toast("已保存");
	},
	patchFavorite: (id, p) => {
		set((s) => {
			const favorites = s.favorites.map((f) => f.id === id ? {
				...f,
				...p
			} : f);
			const row = favorites.find((f) => f.id === id);
			if (row) db.favorites.put(row);
			return { favorites };
		});
	},
	deleteFavorite: (id) => {
		const row = get().favorites.find((f) => f.id === id);
		set((s) => ({ favorites: s.favorites.filter((f) => f.id !== id) }));
		db.favorites.delete(id);
		if (row?.blobId && !blobInUse(get(), row.blobId, id)) deleteImage(row.blobId);
		get().toast("已删除");
	},
	setFavoriteThumb: (id, blobId) => {
		const old = get().favorites.find((f) => f.id === id)?.blobId;
		get().patchFavorite(id, { blobId });
		if (old && old !== blobId && !blobInUse(get(), old, id)) deleteImage(old);
		get().toast("已更新配图");
	},
	addHistory: (h) => {
		db.history.put(h);
		set((s) => ({ history: [h, ...s.history].slice(0, 200) }));
	},
	patchHistory: (id, p) => {
		set((s) => {
			const history = s.history.map((h) => h.id === id ? {
				...h,
				...p
			} : h);
			const row = history.find((h) => h.id === id);
			if (row) db.history.put(row);
			return { history };
		});
	},
	deleteHistory: (id) => {
		const row = get().history.find((h) => h.id === id);
		set((s) => ({ history: s.history.filter((h) => h.id !== id) }));
		db.history.delete(id);
		if (row?.blobId && !blobInUse(get(), row.blobId)) deleteImage(row.blobId);
	},
	setCooldown: (until) => get().setSettings({ cooldownUntil: until })
}));
function blobInUse(s, blobId, skipFav) {
	if (s.favorites.some((f) => f.blobId === blobId && f.id !== skipFav)) return true;
	if (s.history.some((h) => h.blobId === blobId)) return true;
	for (const c of s.chats) {
		if (c.avatarBlobId === blobId) return true;
		for (const m of c.messages) if (m.images.some((g) => g.blobId === blobId)) return true;
	}
	return false;
}
async function saveBlob(blob) {
	const id = uid("img_");
	await putImage(id, blob);
	rememberUrl(id, blob);
	return id;
}
function listedChats(folders, chats) {
	const live = chats.filter((c) => !c.isDraft);
	return {
		foldersSorted: [...folders].sort((a, b) => {
			if (a.starred !== b.starred) return a.starred ? -1 : 1;
			return a.order - b.order;
		}),
		root: live.filter((c) => !c.folderId).sort((a, b) => {
			if (a.starred !== b.starred) return a.starred ? -1 : 1;
			return a.order - b.order;
		}),
		inFolder: (fid) => live.filter((c) => c.folderId === fid).sort((a, b) => {
			if (a.starred !== b.starred) return a.starred ? -1 : 1;
			return a.order - b.order;
		})
	};
}
function fakePureChat(params, grokModelId) {
	return {
		id: "__pure__",
		folderId: null,
		name: "纯生图",
		remark: "",
		starred: false,
		order: -1,
		createdAt: 0,
		updatedAt: 0,
		isDraft: true,
		grokModelId,
		isMulti: false,
		multiMode: "together",
		promptMode: "insert",
		adultBoost: false,
		canGen: true,
		statusBarOn: false,
		statusBar: "",
		overview: "",
		opening: "",
		extras: [],
		memory: "",
		memoryUntil: 0,
		characters: [],
		imageParams: params,
		messages: [],
		scrollTop: 0
	};
}
async function readJsonError(res, fallback) {
	try {
		return (await res.json()).error || fallback;
	} catch {
		return fallback;
	}
}
async function grokOnce(body) {
	const s = useApp.getState().settings;
	if (s.chatSource === "api") {
		if (!s.llmConnected || !s.llmKey) throw new Error("还没连接对话 API");
		if (!s.llmModel) throw new Error("还没选择模型");
		const res = await fetch("/api/llm", {
			method: "POST",
			headers: { "Content-Type": "application/json" },
			body: JSON.stringify({
				action: "chat",
				baseUrl: s.llmBase,
				apiKey: s.llmKey,
				model: s.llmModel,
				params: s.llmParams,
				...body,
				stream: false,
				max_tokens: body.max_tokens ?? s.llmParams.maxTokens
			})
		});
		const data = await res.json();
		if (!res.ok || !data.ok) throw new Error(data.error || `请求失败 ${res.status}`);
		return data.text ?? "";
	}
	const res = await fetch("/api/grok", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			...body,
			stream: false
		})
	});
	const data = await res.json();
	if (!res.ok || !data.ok) throw new Error(data.error || `Grok 请求失败 ${res.status}`);
	return data.text ?? "";
}
function consumeSse(chunk, onDelta, acc) {
	const line = chunk.split("\n").find((l) => l.startsWith("data: "));
	if (!line) return;
	const data = line.slice(6);
	if (data === "[DONE]") return;
	try {
		const j = JSON.parse(data);
		if (j.error) throw new Error(j.error);
		if (j.text) {
			acc.full += j.text;
			onDelta(acc.full);
		}
	} catch (e) {
		if (e instanceof Error && e.message && !e.message.includes("JSON") && e.message !== "Unexpected end of JSON input") throw e;
	}
}
async function grokStream(body, onDelta, signal) {
	const s = useApp.getState().settings;
	const api = s.chatSource === "api";
	if (api) {
		if (!s.llmConnected || !s.llmKey) throw new Error("还没连接对话 API");
		if (!s.llmModel) throw new Error("还没选择模型");
	}
	const url = api ? "/api/llm" : "/api/grok";
	const payload = api ? {
		action: "chat",
		baseUrl: s.llmBase,
		apiKey: s.llmKey,
		model: s.llmModel,
		params: s.llmParams,
		...body,
		stream: true,
		max_tokens: body.max_tokens ?? s.llmParams.maxTokens
	} : {
		...body,
		stream: true
	};
	const res = await fetch(url, {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(payload),
		signal
	});
	if (!res.ok || !res.body) throw new Error(await readJsonError(res, `请求失败 ${res.status}`));
	const reader = res.body.getReader();
	const dec = new TextDecoder();
	let buf = "";
	const acc = { full: "" };
	while (true) {
		const { done, value } = await reader.read();
		if (done) break;
		buf += dec.decode(value, { stream: true });
		const parts = buf.split("\n\n");
		buf = parts.pop() ?? "";
		for (const p of parts) consumeSse(p, onDelta, acc);
	}
	buf += dec.decode();
	if (buf.trim()) for (const p of buf.split("\n\n")) consumeSse(p, onDelta, acc);
	return acc.full;
}
async function fetchLlmModels(baseUrl, apiKey) {
	const res = await fetch("/api/llm", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			action: "models",
			baseUrl,
			apiKey
		})
	});
	const data = await res.json();
	if (!res.ok || !data.ok) throw new Error(data.error || `连接失败 ${res.status}`);
	return data.models ?? [];
}
var CHAR_KEYS = [
	"name",
	"persona",
	"speech",
	"appearance"
];
function stripRoleOutput(text) {
	let s = (text || "").trim();
	s = s.replace(/^```(?:json|text|markdown)?\s*/i, "").replace(/\s*```$/i, "").trim();
	if (s.startsWith("\"") && s.endsWith("\"") && s.length >= 2) try {
		const q = JSON.parse(s);
		if (typeof q === "string") return q.trim();
	} catch {
		s = s.slice(1, -1).trim();
	}
	return s;
}
function parseObject(raw) {
	const s = stripRoleOutput(raw);
	const start = s.indexOf("{");
	const end = s.lastIndexOf("}");
	if (start < 0 || end <= start) return null;
	try {
		const json = JSON.parse(s.slice(start, end + 1));
		if (json && typeof json === "object" && !Array.isArray(json)) return json;
	} catch {}
	return null;
}
function asText(v) {
	if (typeof v === "string") return v.trim();
	if (v == null) return "";
	return String(v).trim();
}
function parsePolishJson(text) {
	const obj = parseObject(text);
	if (!obj) throw new Error("完善结果解析失败，请再试一次");
	const characters = Array.isArray(obj.characters) ? obj.characters.map((c) => {
		const row = c && typeof c === "object" ? c : {};
		return {
			name: asText(row.name),
			persona: asText(row.persona),
			speech: asText(row.speech),
			appearance: asText(row.appearance)
		};
	}) : void 0;
	return {
		overview: asText(obj.overview),
		opening: asText(obj.opening),
		characters
	};
}
function extractFieldText(text, field) {
	const stripped = stripRoleOutput(text);
	const json = parseObject(stripped);
	if (!json) return stripped;
	if (typeof json[field] === "string" && asText(json[field])) return asText(json[field]);
	const label = {
		persona: "人设",
		speech: "说话方式",
		appearance: "外貌备忘",
		overview: "要求总览",
		opening: "开场场景",
		name: "名字"
	}[field];
	if (label && typeof json[label] === "string" && asText(json[label])) return asText(json[label]);
	const first = Array.isArray(json.characters) ? json.characters[0] : null;
	if (first && typeof first === "object") {
		const v = first[field];
		if (typeof v === "string" && asText(v)) return asText(v);
	}
	if (typeof json.text === "string" && asText(json.text)) return asText(json.text);
	return stripped;
}
function mergeOneChar(c, src) {
	if (!src) return c;
	const nameLocked = Boolean(c.name.trim());
	const appearLocked = Boolean(c.appearance.trim());
	return {
		...c,
		name: nameLocked ? c.name : src.name || c.name,
		persona: src.persona || c.persona,
		speech: src.speech || c.speech,
		appearance: appearLocked ? c.appearance : src.appearance || c.appearance
	};
}
function mergePolish(chat, json) {
	const characters = chat.characters.map((c, i) => mergeOneChar(c, json.characters?.[i]));
	return {
		name: characters.map((c) => c.name).filter(Boolean).join("、") || chat.name,
		overview: json.overview || chat.overview,
		opening: json.opening || chat.opening,
		characters
	};
}
function applyRoleField(chat, field, text, charId) {
	const cleaned = extractFieldText(text, field);
	if (charId) {
		const key = CHAR_KEYS.includes(field) ? field : "persona";
		return {
			...chat,
			characters: chat.characters.map((c) => c.id === charId ? {
				...c,
				[key]: cleaned
			} : c)
		};
	}
	if (field === "overview" || field === "opening" || field === "statusBar") return {
		...chat,
		[field]: cleaned
	};
	return chat;
}
function buildPolishUserContent(chat) {
	const characters = chat.characters.map((c, i) => ({
		index: i + 1,
		name: c.name,
		nameLocked: Boolean(c.name.trim()),
		persona: c.persona,
		speech: c.speech,
		appearance: c.appearance,
		appearanceLocked: Boolean(c.appearance.trim())
	}));
	const extras = [...chat.extras, ...chat.characters.flatMap((c) => c.extras)].map((e) => e.body.trim()).filter(Boolean);
	return JSON.stringify({
		overview: chat.overview,
		opening: chat.opening,
		isMulti: chat.isMulti,
		characters,
		readOnlyExtras: extras.length ? extras : void 0,
		readOnlyMemory: chat.memory.trim() || void 0,
		locks: {
			filledName: "nameLocked 为 true 的名字必须原样返回",
			filledAppearance: "appearanceLocked 为 true 的外貌必须原样返回，一个 tag 都不要改",
			statusBar: "不要输出 statusBar",
			extras: "不要改新增栏"
		}
	}, null, 2);
}
function parseUserMarkup(raw) {
	const facts = [];
	const directives = [];
	let s = raw || "";
	s = s.replace(/《([^》]*)》/g, (_, inner) => {
		const t = inner.trim();
		if (t) directives.push(t);
		return " ";
	});
	s = s.replace(/[（(]([^）)]*)[）)]/g, (_, inner) => {
		const t = inner.trim();
		if (t) facts.push(t);
		return " ";
	});
	return {
		facts,
		directives,
		rest: s.replace(/\s+/g, " ").trim(),
		raw
	};
}
function isShortBareCandidate(rest) {
	const t = rest.trim();
	if (!t || t.length > 12) return false;
	if (/[？?！!。，,]/.test(t)) return false;
	return true;
}
function needsMarkupFormat(raw) {
	const t = (raw || "").trim();
	if (!t || t === "（开始场景，请角色先开口）") return false;
	const p = parseUserMarkup(t);
	if (p.facts.length || p.directives.length) return true;
	return isShortBareCandidate(p.rest);
}
function formatUserForChat(raw) {
	const t = (raw || "").trim();
	if (!t || t === "（开始场景，请角色先开口）" || !needsMarkupFormat(t)) return raw;
	const p = parseUserMarkup(t);
	const parts = [];
	if (p.facts.length) parts.push(`【已发生】${p.facts.map((f) => `「${f}」`).join("、")}\n这是本拍必须达成的事实：过程可以写，回复结束时必须已经成立。不是口令。角色不是「听见」这些字；若内容本身是已经说出口的话，她听见的是那句话，不是括号。`);
	if (p.rest) parts.push(`【用户其余原文】${p.rest}\n请判断：像对角色说的话 → 她听见的台词；像动作/场面补充（摸头、抱住、插入）→ 与【已发生】同一规则，短动词优先当动作。`);
	if (p.directives.length) parts.push(`【作者指令】${p.directives.map((d) => `《${d}》`).join(" ")}\n角色听不见、不准念、不准写成「听到指示」。只执行与这轮文笔/剧情有关的；与画图、镜头、构图、tag 有关的忽略（生图会另处理）。`);
	if (p.facts.length && !p.rest) parts.push("本条没有台词。角色只对已经发生的事实做身体和情绪反应，禁止写成听到一句话或听到指示。");
	return parts.join("\n\n");
}
function formatUserForImage(raw) {
	const t = (raw || "").trim();
	if (!t || t === "（开始场景，请角色先开口）") return "";
	const p = parseUserMarkup(t);
	if (!needsMarkupFormat(t)) return `用户：${t}`;
	const parts = [];
	if (p.facts.length) parts.push(`用户已发生（镜头里必须是已经发生，不要写成准备、磨蹭或停在入口）：${p.facts.join("；")}`);
	if (p.rest) parts.push(`用户其余：${p.rest}`);
	if (p.directives.length) parts.push(`作者指令：${p.directives.map((d) => `《${d}》`).join(" ")}（只执行与画面有关的；文笔/篇幅/怎么写的忽略）`);
	return parts.join("\n") || `用户：${t}`;
}
function recentSceneForImage(messages, n = 4) {
	return messages.slice(-n).map((m) => {
		if (m.role === "user") return formatUserForImage(m.content);
		if (m.role === "narrator") return m.content ? `旁白：${m.content}` : "";
		return `${m.characterName || "角色"}：${m.content}`;
	}).filter(Boolean).join("\n");
}
function escapeRegExp(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function stripSpeakerPrefix(text, names) {
	const list = [...new Set(names.map((n) => (n || "").trim()).filter(Boolean))].sort((a, b) => b.length - a.length);
	let s = text;
	for (let i = 0; i < 6; i++) {
		const next = s.replace(/^\s+/, "");
		let hit = false;
		for (const n of list) {
			const re = new RegExp(`^${escapeRegExp(n)}\\s*[：:]\\s*`);
			if (re.test(next)) {
				s = next.replace(re, "");
				hit = true;
				break;
			}
		}
		if (!hit) return next;
	}
	return s.replace(/^\s+/, "");
}
var QUOTE = /「[^」]*」|『[^』]*』|“[^”]*”|"[^"\n]*"/g;
function splitDialogue(text) {
	const out = [];
	let last = 0;
	for (const m of text.matchAll(QUOTE)) {
		const i = m.index ?? 0;
		if (i > last) out.push({
			kind: "narr",
			text: text.slice(last, i)
		});
		out.push({
			kind: "say",
			text: m[0]
		});
		last = i + m[0].length;
	}
	if (last < text.length) out.push({
		kind: "narr",
		text: text.slice(last)
	});
	return out.filter((p) => p.text);
}
var FACE_KEEP = /[\^:;><]_[^,\s]|_[wWmMoO]_|\\m\/|\^_\^|:_\^|;_;/;
var FORBIDDEN_EXACT = /* @__PURE__ */ new Set([
	"masterpiece",
	"best quality",
	"amazing quality",
	"absurdres",
	"very aesthetic",
	"highres",
	"newest",
	"4k",
	"8k",
	"8k wallpaper",
	"extremely detailed",
	"ultra-detailed",
	"cinematic",
	"no text",
	"worst quality",
	"low quality",
	"artist collaboration",
	"loli",
	"shota",
	"child",
	"teen",
	"underage",
	"toddler",
	"kid",
	"children"
]);
var AUTO_TAGS = /* @__PURE__ */ new Set([
	"uncensored",
	"full body",
	"rating:sensitive",
	"rating: sensitive",
	"fur dataset"
]);
function isForbidden(tag) {
	const t = tag.trim().toLowerCase();
	if (!t) return true;
	if (FORBIDDEN_EXACT.has(t)) return true;
	if (/\bartist\s*:/.test(t)) return true;
	if (/^year 202\d$/.test(t)) return true;
	if (/^year_202\d$/.test(t)) return true;
	return false;
}
function unSnake(tag) {
	const t = tag.trim();
	if (t.length < 10 && FACE_KEEP.test(t)) return t;
	return t.replace(/_/g, " ");
}
function splitNaiTags(raw) {
	const out = [];
	let buf = "";
	let inWeight = false;
	for (let i = 0; i < raw.length; i++) {
		const c = raw[i];
		if (c === ":" && raw[i + 1] === ":") {
			inWeight = !inWeight;
			buf += "::";
			i++;
			continue;
		}
		if (c === "," && !inWeight) {
			if (buf.trim()) out.push(buf.trim());
			buf = "";
			continue;
		}
		buf += c;
	}
	if (buf.trim()) out.push(buf.trim());
	return out;
}
function normKey(tag) {
	return unSnake(tag).replace(/\s+/g, " ").trim().toLowerCase();
}
function sanitizeNaiTags(raw, opts) {
	let s = (raw || "").trim();
	if (!s) return "";
	s = s.replace(/^```(?:json|text|tags)?\s*/i, "").replace(/\s*```$/i, "").trim();
	s = s.replace(/^(?:here are (?:the )?tags:?|tags:?|prompt:?)\s*/i, "");
	s = s.replace(/^["']|["']$/g, "").trim();
	if (s.includes("{") && /"base"\s*:|"chars"\s*:/.test(s)) s = flattenMaybeJson(s);
	const strip = opts?.stripForbidden !== false;
	const seen = /* @__PURE__ */ new Set();
	const out = [];
	for (let part of splitNaiTags(s)) {
		part = unSnake(part).replace(/\s+/g, " ").trim();
		if (!part) continue;
		if (!/^[-0-9.]+::/.test(part) && !part.startsWith("Text:") && !part.startsWith("source#") && !part.startsWith("target#") && !part.startsWith("mutual#")) part = part.toLowerCase();
		if (strip && isForbidden(part)) continue;
		const key = part.toLowerCase();
		if (seen.has(key)) continue;
		seen.add(key);
		out.push(part);
	}
	return out.join(", ");
}
/** Pull the Grok-added mid tags out of a stored prompt that may still be the full front+mid+tail+back string. */
function extractGrokTail(stored, params) {
	const cleaned = sanitizeNaiTags(flattenMaybeJson(stored));
	if (!cleaned) return "";
	const drop = /* @__PURE__ */ new Set();
	for (const src of [
		params.promptFront,
		params.promptMid,
		params.promptBack
	]) for (const t of splitNaiTags(src || "")) {
		const k = normKey(t);
		if (k) drop.add(k);
	}
	for (const t of AUTO_TAGS) drop.add(t);
	return splitNaiTags(cleaned).filter((t) => !drop.has(normKey(t)) && !isForbidden(t)).join(", ");
}
function extractJsonObject(raw) {
	let s = (raw || "").trim();
	s = s.replace(/^```(?:json|text|tags)?\s*/i, "").replace(/\s*```$/i, "").trim();
	const start = s.indexOf("{");
	const end = s.lastIndexOf("}");
	if (start < 0 || end <= start) return null;
	try {
		const json = JSON.parse(s.slice(start, end + 1));
		if (json && typeof json === "object" && !Array.isArray(json)) return json;
	} catch {}
	return null;
}
function asTagStr(v) {
	if (v == null) return "";
	if (typeof v === "string") return v;
	if (Array.isArray(v)) return v.map(asTagStr).filter(Boolean).join(", ");
	if (typeof v === "object") return Object.values(v).map(asTagStr).filter(Boolean).join(", ");
	return String(v);
}
function flattenMaybeJson(raw) {
	const json = extractJsonObject(raw);
	if (!json || !("base" in json) && !("chars" in json)) return raw;
	const parts = [asTagStr(json.base)];
	const chars = json.chars;
	if (chars && typeof chars === "object") for (const v of Object.values(chars)) parts.push(asTagStr(v));
	return parts.filter(Boolean).join(", ");
}
function assignCharTags(rawChars, characters) {
	const mapped = {};
	const used = /* @__PURE__ */ new Set();
	const unmatched = [];
	const resolve = (key) => {
		const k = key.trim().toLowerCase();
		if (!k) return void 0;
		const byName = characters.find((c) => !used.has(c.id) && c.name && c.name.toLowerCase() === k);
		if (byName) return byName.id;
		const byId = characters.find((c) => !used.has(c.id) && c.id.toLowerCase() === k);
		if (byId) return byId.id;
		const m = k.match(/^(?:char|character|角色)\s*[_#.\-]?\s*(\d+)$/i);
		if (m) {
			const c = characters[Number(m[1]) - 1];
			if (c && !used.has(c.id)) return c.id;
		}
	};
	for (const [key, val] of Object.entries(rawChars)) {
		const tags = sanitizeNaiTags(val);
		if (!tags) continue;
		const id = resolve(key);
		if (id) {
			mapped[id] = tags;
			used.add(id);
		} else unmatched.push(tags);
	}
	let i = 0;
	for (const c of characters) {
		if (used.has(c.id)) continue;
		if (i >= unmatched.length) break;
		mapped[c.id] = unmatched[i++];
		used.add(c.id);
	}
	return {
		mapped,
		leftover: unmatched.slice(i).join(", ")
	};
}
function resolveAbsentIds(absent, characters) {
	const names = Array.isArray(absent) ? absent.map((x) => String(x || "").trim()).filter(Boolean) : [];
	const ids = [];
	for (const n of names) {
		const k = n.toLowerCase();
		const hit = characters.find((c) => c.name && c.name.toLowerCase() === k) || characters.find((c) => c.id.toLowerCase() === k) || (() => {
			const m = k.match(/^(?:char|character|角色)\s*[_#.\-]?\s*(\d+)$/i);
			return m ? characters[Number(m[1]) - 1] : void 0;
		})();
		if (hit && !ids.includes(hit.id)) ids.push(hit.id);
	}
	return ids;
}
var engine_exports = /* @__PURE__ */ __exportAll$1({
	afterPaint: () => afterPaint,
	genPhaseLabel: () => genPhaseLabel,
	generateNai: () => generateNai,
	historyMessages: () => historyMessages,
	makeAssistantPlaceholder: () => makeAssistantPlaceholder,
	makeImageRecord: () => makeImageRecord,
	makeUserMessage: () => makeUserMessage,
	parseGroup: () => parseGroup,
	parseImageTagOutput: () => parseImageTagOutput,
	polishAll: () => polishAll,
	polishField: () => polishField,
	recentWindow: () => recentWindow,
	stripStatus: () => stripStatus,
	summarizeMemory: () => summarizeMemory,
	writeImageTags: () => writeImageTags
});
function stripStatus(text) {
	const i = text.lastIndexOf("状态栏:");
	if (i < 0) return {
		body: text.trim(),
		status: ""
	};
	return {
		body: text.slice(0, i).trim(),
		status: text.slice(i).trim()
	};
}
function recentWindow() {
	const s = useApp.getState().settings;
	return (s.chatSource === "api" ? Math.max(4, s.llmParams.contextTurns) : 20) * 2;
}
function historyMessages(chat, upto) {
	const msgs = chat.messages.slice(0, upto ?? chat.messages.length);
	const start = Math.max(0, msgs.length - recentWindow());
	return msgs.slice(start).filter((m) => m.role !== "narrator" || m.content).map((m) => ({
		role: m.role === "user" ? "user" : "assistant",
		content: m.role === "user" ? formatUserForChat(m.content) : stripSpeakerPrefix(m.content, [
			m.characterName,
			chat.name,
			...chat.characters.map((c) => c.name),
			"角色"
		])
	}));
}
async function polishAll(chat, grokModelId, instruction) {
	return parsePolishJson(await grokOnce({
		task: instruction?.trim() ? "personalize" : "polish",
		grokModelId,
		extraSystem: instruction?.trim() || void 0,
		messages: [{
			role: "user",
			content: buildPolishUserContent(chat)
		}]
	}));
}
async function polishField(chat, grokModelId, field, instruction, charId) {
	const char = charId ? chat.characters.find((c) => c.id === charId) : void 0;
	const charIndex = charId ? chat.characters.findIndex((c) => c.id === charId) : -1;
	let current = "";
	if (char && (field === "name" || field === "persona" || field === "speech" || field === "appearance")) current = char[field];
	else if (field === "overview") current = chat.overview;
	else if (field === "opening") current = chat.opening;
	else if (field === "statusBar") current = chat.statusBar;
	const charLabel = char && chat.isMulti ? `角色${charIndex + 1}${char.name ? "「" + char.name + "」" : ""}` : char ? char.name ? `角色「${char.name}」` : "角色" : void 0;
	return extractFieldText(await grokOnce({
		task: "field",
		grokModelId,
		extraSystem: fieldPolishHint({
			field,
			instruction,
			current,
			charLabel
		}),
		messages: [{
			role: "user",
			content: roleSnapshot(chat)
		}],
		max_tokens: 2e3
	}), field);
}
async function summarizeMemory(chat, grokModelId) {
	const keep = recentWindow();
	const older = chat.messages.slice(0, Math.max(0, chat.messages.length - keep));
	if (older.length < 4) return chat.memory;
	const dialog = older.map((m) => `${m.role === "user" ? "用户" : m.characterName || "角色"}：${m.content}`).join("\n");
	return grokOnce({
		task: "memory",
		grokModelId,
		messages: [{
			role: "user",
			content: `上一份备忘：\n${chat.memory || "（无）"}\n\n需要收进去的对白：\n${dialog}`
		}]
	});
}
function imageBrief(chat, last) {
	const names = chat.characters.map((c) => c.name).filter(Boolean).join("、");
	const roster = chat.characters.map((c, i) => `${i + 1}. ${c.name || `角色${i + 1}`}`).join("\n");
	const format = chat.isMulti && chat.promptMode === "insert" ? `输出 JSON（不要 markdown）：{"base":"人数场景镜头光线","chars":{${chat.characters.map((c) => `"${c.name || c.id}":"..."`).join(",")}},"absent":[]}
chars 的键必须逐字用上面的角色名。不在镜头的角色放进 absent，不要写进 chars。没人离开则 absent 为 []。` : chat.isMulti ? "只输出英文 tag 一行，用 char1: ... char2: ... 区分。禁止 JSON，禁止 ENABLED。" : "只输出英文 tag 一行。禁止 JSON。";
	return `角色：${names || "（未命名）"}
外貌已由用户写好，不要重复（含发色瞳色体型种族整套衣服）。
成人提示词加强：${chat.adultBoost ? "开" : "关"}
多人：${chat.isMulti ? "是" : "否"}　插入模式：${chat.promptMode}
${chat.isMulti ? `角色名单：\n${roster}` : ""}

写法：先抽出镜头里最显眼的动作/部位，写成具体真 tag，不要收成 ass focus、naughty face 这种安全词。空格真 tag，禁止下划线。不要写画师质量词和外貌。
用户已发生的动作优先于角色回里写软了的版本，必须写成已经发生，不要停在入口。
成人开着：把画面写透、写够，不要保守。「不要硬塞」只挡住完全无关的内容。
成人关着：对白里看得见的仍写，不额外堆没写到的特写；完全没有性/血腥则不加 nsfw。

最近对白：
${last}

${format}`;
}
function parseImageTagOutput(text, chat) {
	const insert = chat.isMulti && chat.promptMode === "insert";
	const roster = chat.imageParams.characters.length ? chat.imageParams.characters.map((c) => ({
		id: c.id,
		name: c.name || ""
	})) : chat.characters.map((c) => ({
		id: c.id,
		name: c.name || ""
	}));
	const json = extractJsonObject(text);
	if (json && (json.base != null || json.chars != null)) {
		const rawChars = {};
		const src = json.chars && typeof json.chars === "object" ? json.chars : {};
		for (const [k, v] of Object.entries(src)) rawChars[k] = typeof v === "string" ? v : v == null ? "" : JSON.stringify(v);
		const { mapped, leftover } = assignCharTags(rawChars, roster);
		const base = sanitizeNaiTags([String(json.base || ""), leftover].filter(Boolean).join(", "));
		const absent = resolveAbsentIds(json.absent, roster);
		if (!insert) return {
			base: sanitizeNaiTags([base, ...Object.values(mapped).filter(Boolean)].filter(Boolean).join(", ")),
			chars: {},
			absent: []
		};
		return {
			base,
			chars: mapped,
			absent
		};
	}
	return {
		base: sanitizeNaiTags(text.replace(/\n/g, ", ")),
		chars: {},
		absent: []
	};
}
async function writeImageTags(chat, lastText, grokModelId) {
	return parseImageTagOutput(await grokOnce({
		task: "image",
		grokModelId,
		extraSystem: chat.adultBoost ? "成人提示词加强：开。这是最高优先级之一。对白里的动作、部位、体液必须写成具体真 tag，写透（22–40 个），不要收成 ass focus / naughty face。无关内容仍不要加。" : "成人提示词加强：关。对白里看得见的仍写具体真 tag，不要额外堆没写到的器官特写。完全没有性/血腥的场面不要加 nsfw。",
		messages: [{
			role: "user",
			content: imageBrief(chat, lastText)
		}],
		max_tokens: 900
	}), chat);
}
function genPhaseLabel(status, error) {
	if (status === "writing") return "写提示词中";
	if (status === "uploading") return "上传中";
	if (status === "generating") return "生图中";
	if (status === "receiving") return "回传中";
	if (status === "error") return error?.trim() || "生图失败";
	return "";
}
function afterPaint() {
	return new Promise((r) => requestAnimationFrame(() => r()));
}
async function generateNai(opts) {
	const built = buildNaiPayload({
		params: opts.chat.imageParams,
		grokTail: opts.grokTail,
		charTails: opts.charTails,
		insertMode: opts.chat.promptMode,
		seed: opts.seed
	});
	opts.onStart?.();
	const data = await (await fetch("/api/nai", {
		method: "POST",
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify({
			action: "generate",
			baseUrl: opts.baseUrl,
			apiKey: opts.apiKey,
			payload: {
				input: built.input,
				model: built.model,
				action: "generate",
				parameters: built.parameters
			}
		})
	})).json();
	if (!data.ok || !data.image) throw new Error(data.error || "生图失败");
	opts.onReceiving?.();
	await afterPaint();
	const bin = atob(data.image);
	const arr = new Uint8Array(bin.length);
	for (let i = 0; i < bin.length; i++) arr[i] = bin.charCodeAt(i);
	const blob = new Blob([arr], { type: "image/png" });
	return {
		blobId: await saveBlob(blob),
		seed: built.seed,
		prompt: built.finalPrompt,
		blob
	};
}
function parseGroup(text) {
	if (text.split(/<<<(?:CHAR:([^>]+)|NARRATOR)>>>/g).length === 1) return [{
		name: "",
		content: text.trim()
	}];
	const out = [];
	const tokens = text.split(/(<<<CHAR:[^>]+>>>|<<<NARRATOR>>>)/);
	let current = null;
	let buf = "";
	const flush = () => {
		if (current && buf.trim()) out.push({
			...current,
			content: buf.trim()
		});
		buf = "";
	};
	for (const tok of tokens) {
		const char = tok.match(/^<<<CHAR:([^>]+)>>>$/);
		if (char) {
			flush();
			current = { name: char[1].trim() };
			continue;
		}
		if (tok === "<<<NARRATOR>>>") {
			flush();
			current = {
				name: "旁白",
				narrator: true
			};
			continue;
		}
		buf += tok;
	}
	flush();
	return out.length ? out : [{
		name: "",
		content: text.trim()
	}];
}
function makeUserMessage(content) {
	return {
		id: uid("m_"),
		role: "user",
		content,
		images: [],
		createdAt: Date.now()
	};
}
function makeAssistantPlaceholder(chat) {
	const names = chat.characters.map((c) => c.name).filter(Boolean);
	return {
		id: uid("m_"),
		role: "assistant",
		characterName: chat.isMulti && chat.multiMode === "together" ? names.join("、") : names[0],
		characterId: chat.characters[0]?.id,
		content: "",
		images: [],
		createdAt: Date.now()
	};
}
function makeImageRecord(partial = {}) {
	return {
		id: uid("g_"),
		prompt: "",
		charTails: {},
		negative: "",
		seed: randomSeed(),
		model: "nai-diffusion-4-5-full",
		width: 832,
		height: 1216,
		steps: 28,
		sampler: "k_euler_ancestral",
		status: "uploading",
		createdAt: Date.now(),
		...partial
	};
}
//#endregion
//#region node_modules/.nitro/vite/services/ssr/assets/routes-DcoSmm1d.js
var routes_DcoSmm1d_exports = /* @__PURE__ */ __exportAll({
	a: () => regenMessage,
	component: () => Home,
	i: () => editMessage,
	n: () => attachImage,
	o: () => sendOpening,
	r: () => branchFrom,
	s: () => sendUser,
	t: () => abortChat
});
var import_react = /* @__PURE__ */ __toESM(require_react());
var import_jsx_runtime = require_jsx_runtime();
var import_react_dom = require_react_dom();
var aborts = /* @__PURE__ */ new Map();
var busy = /* @__PURE__ */ new Set();
function chat(id) {
	return useApp.getState().chats.find((c) => c.id === id);
}
function patch(id, fn) {
	useApp.getState().patchChat(id, fn);
}
async function sendOpening(id) {
	await runReply(id, null, true);
}
async function sendUser(id, text) {
	const t = text.trim();
	if (!t) return;
	abortChat(id);
	patch(id, (c) => ({
		...c,
		messages: [...c.messages, makeUserMessage(t)]
	}));
	await runReply(id, t, false);
}
function abortChat(id) {
	aborts.get(id)?.abort();
	aborts.delete(id);
}
async function regenMessage(id, msgId) {
	abortChat(id);
	const c = chat(id);
	if (!c) return;
	const idx = c.messages.findIndex((m) => m.id === msgId);
	if (idx < 0) return;
	const cut = c.messages.slice(0, idx);
	patch(id, (ch) => ({
		...ch,
		messages: cut,
		memoryUntil: Math.min(ch.memoryUntil, cut.length)
	}));
	await runReply(id, [...cut].reverse().find((m) => m.role === "user")?.content ?? null, cut.length === 0);
}
async function branchFrom(id, msgId) {
	const c = chat(id);
	if (!c) return;
	const idx = c.messages.findIndex((m) => m.id === msgId);
	if (idx < 0) return;
	const copy = {
		...structuredClone(c),
		id: uid("chat_"),
		name: `${c.name}(分支)`,
		starred: false,
		isDraft: false,
		createdAt: Date.now(),
		updatedAt: Date.now(),
		messages: structuredClone(c.messages.slice(0, idx + 1))
	};
	useApp.setState((s) => ({
		chats: [...s.chats, copy],
		currentId: copy.id
	}));
	const { db } = await import("./idb-CfxwoX1r.mjs").then((n) => n.w).then((n) => n.a);
	db.chats.put(copy);
	useApp.getState().toast(`已开分支「${copy.name}」`);
}
function applyStream(id, placeholder, full, c0) {
	const { body, status } = stripStatus(full);
	if (c0.isMulti && c0.multiMode === "group") {
		const mapped = parseGroup(full).map((p, i) => ({
			id: i === 0 ? placeholder.id : placeholder.id + "_" + i,
			role: p.narrator ? "narrator" : "assistant",
			characterName: p.narrator ? void 0 : p.name,
			characterId: c0.characters.find((ch) => ch.name === p.name)?.id,
			content: stripStatus(p.content).body,
			images: [],
			createdAt: Date.now()
		}));
		patch(id, (c) => {
			const without = c.messages.filter((m) => m.id !== placeholder.id && !m.id.startsWith(placeholder.id + "_"));
			return {
				...c,
				messages: [...without, ...mapped],
				statusBar: status || c.statusBar
			};
		});
	} else patch(id, (c) => ({
		...c,
		messages: c.messages.map((m) => m.id === placeholder.id ? {
			...m,
			content: body
		} : m),
		statusBar: status || c.statusBar
	}));
}
async function runReply(id, _userText, opening) {
	const c0 = chat(id);
	if (!c0) return;
	const grokModelId = useApp.getState().settings.grokModelId;
	const ctrl = new AbortController();
	aborts.set(id, ctrl);
	busy.add(id);
	const placeholder = makeAssistantPlaceholder(c0);
	patch(id, (c) => ({
		...c,
		messages: [...c.messages, placeholder]
	}));
	const extra = [
		chatContextBlock(c0),
		groupFormatHint(c0),
		opening ? "这是开场。根据开场场景，以角色口吻先说第一句。不要以用户身份说话。" : ""
	].filter(Boolean).join("\n\n");
	const msgs = historyMessages(chat(id)).filter((m) => m.content);
	if (opening && msgs.length === 0) msgs.push({
		role: "user",
		content: "（开始场景，请角色先开口）"
	});
	try {
		const full = await grokStream({
			task: "chat",
			grokModelId,
			extraSystem: extra,
			messages: msgs
		}, (text) => applyStream(id, placeholder, text, c0), ctrl.signal);
		if (full) applyStream(id, placeholder, full, c0);
	} catch (e) {
		if (e.name === "AbortError") return;
		patch(id, (c) => ({
			...c,
			messages: c.messages.map((m) => m.id === placeholder.id ? {
				...m,
				content: m.content || `（回复失败）${e instanceof Error ? e.message : ""}`
			} : m)
		}));
	} finally {
		aborts.delete(id);
		busy.delete(id);
	}
	const latest = chat(id);
	if (!latest) return;
	const lastAssist = [...latest.messages].reverse().find((m) => m.role === "assistant" || m.role === "narrator");
	if (latest.canGen && lastAssist) await attachImage(id, lastAssist.id);
	maybeMemory(id);
}
async function attachImage(id, msgId, mode = "auto", custom, customChars) {
	const c = chat(id);
	if (!c) return;
	const msg = c.messages.find((m) => m.id === msgId);
	if (!msg) return;
	if (msg.images.some((g) => g.status !== "done" && g.status !== "error")) return;
	const settings = useApp.getState().settings;
	const prev = msg.images.filter((g) => g.prompt).at(-1);
	const needsWrite = mode !== "custom" && !(mode === "same" && prev?.prompt);
	const img = makeImageRecord({
		model: c.imageParams.model,
		width: c.imageParams.width,
		height: c.imageParams.height,
		steps: c.imageParams.steps,
		sampler: c.imageParams.sampler,
		negative: c.imageParams.negative,
		seed: c.imageParams.seedLocked && c.imageParams.seed != null ? c.imageParams.seed : randomSeed(),
		status: needsWrite ? "writing" : "uploading",
		source: mode
	});
	patch(id, (ch) => ({
		...ch,
		messages: ch.messages.map((m) => m.id === msgId ? {
			...m,
			images: [...m.images, img]
		} : m)
	}));
	const setImg = (p) => patch(id, (ch) => ({
		...ch,
		messages: ch.messages.map((m) => m.id === msgId ? {
			...m,
			images: m.images.map((g) => g.id === img.id ? {
				...g,
				...p
			} : g)
		} : m)
	}));
	if (!settings.naiKey) {
		setImg({
			status: "error",
			error: "还没连接 NAI 中转站"
		});
		return;
	}
	try {
		let grokTail = custom ? sanitizeNaiTags(custom, { stripForbidden: false }) : "";
		let charTails = {};
		if (customChars) for (const [k, v] of Object.entries(customChars)) {
			const t = sanitizeNaiTags(v, { stripForbidden: false });
			if (t) charTails[k] = t;
		}
		if (mode !== "custom") {
			if (mode === "same" && prev?.prompt) {
				grokTail = extractGrokTail(prev.prompt, c.imageParams);
				charTails = { ...prev.charTails || {} };
			} else {
				const tags = await writeImageTags(c, recentSceneForImage(c.messages, 4), useApp.getState().settings.grokModelId);
				grokTail = tags.base;
				const map = {};
				for (const ch of c.imageParams.characters) {
					const byId = tags.chars[ch.id];
					const byName = ch.name ? tags.chars[ch.name] : "";
					if (byId || byName) map[ch.id] = byId || byName;
				}
				charTails = map;
				if (c.isMulti) {
					const off = new Set(tags.absent || []);
					patch(id, (ch) => ({
						...ch,
						imageParams: {
							...ch.imageParams,
							characters: ch.imageParams.characters.map((x) => ({
								...x,
								enabled: !off.has(x.id)
							}))
						}
					}));
				}
			}
		}
		setImg({
			status: "uploading",
			prompt: grokTail,
			charTails
		});
		await afterPaint();
		const result = await generateNai({
			chat: chat(id) ?? c,
			grokTail,
			charTails,
			seed: img.seed,
			apiKey: settings.naiKey,
			baseUrl: settings.naiBase,
			onStart: () => setImg({ status: "generating" }),
			onReceiving: () => {
				useApp.getState().setCooldown(Date.now() + COOLDOWN_MS);
				setImg({ status: "receiving" });
			}
		});
		setImg({
			status: "done",
			blobId: result.blobId,
			prompt: grokTail,
			charTails,
			seed: result.seed
		});
		const after = chat(id);
		if (after) {
			const firstAssist = after.messages.find((m) => m.role === "assistant" || m.role === "narrator");
			if (firstAssist && firstAssist.id === msgId) patch(id, (ch) => ({
				...ch,
				avatarBlobId: result.blobId
			}));
			else if (!after.avatarBlobId) patch(id, (ch) => ({
				...ch,
				avatarBlobId: result.blobId
			}));
		}
	} catch (e) {
		setImg({
			status: "error",
			error: e instanceof Error ? e.message : "生图失败"
		});
	}
}
async function maybeMemory(id) {
	const c = chat(id);
	if (!c) return;
	if (c.messages.length < recentWindow() + 4) return;
	if (c.memoryUntil >= c.messages.length - recentWindow()) return;
	try {
		const mem = await summarizeMemory(c, useApp.getState().settings.grokModelId);
		patch(id, (ch) => ({
			...ch,
			memory: mem,
			memoryUntil: Math.max(0, ch.messages.length - recentWindow())
		}));
	} catch {}
}
async function editMessage(id, msgId, text) {
	const c = chat(id);
	if (!c) return;
	const idx = c.messages.findIndex((m) => m.id === msgId);
	if (idx < 0) return;
	const msg = c.messages[idx];
	if (msg.role === "user") {
		abortChat(id);
		patch(id, (ch) => ({
			...ch,
			messages: [...ch.messages.slice(0, idx), {
				...msg,
				content: text
			}],
			memoryUntil: Math.min(ch.memoryUntil, idx)
		}));
		await runReply(id, text, false);
	} else patch(id, (ch) => ({
		...ch,
		messages: ch.messages.map((m) => m.id === msgId ? {
			...m,
			content: text
		} : m)
	}));
}
var ZH_FIX = {
	solo: "单人",
	"1girl": "1个女孩",
	"1boy": "1个男孩",
	"2girls": "2个女孩",
	"multiple girls": "多个女孩",
	breasts: "胸部",
	"looking at viewer": "看向观众",
	"commentary request": "求评论",
	commentary: "评论",
	highres: "高分辨率",
	absurdres: "超高分辨率",
	"open mouth": "张嘴",
	"closed mouth": "闭嘴",
	"large breasts": "巨乳",
	"small breasts": "贫乳",
	"medium breasts": "中等胸部",
	navel: "肚脐",
	panties: "内裤",
	pussy: "小穴",
	penis: "阴茎",
	ass: "臀部",
	nude: "裸体",
	hetero: "男女",
	sex: "性交",
	sitting: "坐着",
	standing: "站立",
	lying: "躺着",
	"cowboy shot": "七分身",
	"upper body": "上半身",
	"full body": "全身",
	"from behind": "从后方",
	"from side": "侧面",
	"from above": "俯视",
	"from below": "仰视",
	"looking back": "回眸",
	"spread legs": "张开腿",
	"animal ears": "兽耳",
	"cat ears": "猫耳",
	tail: "尾巴",
	blush: "脸红",
	smile: "微笑",
	nipples: "乳头",
	uncensored: "无码",
	censored: "有码",
	cum: "精液",
	vaginal: "阴道插入",
	anal: "肛交",
	fellatio: "口交",
	paizuri: "乳交",
	missionary: "传教士",
	doggystyle: "后入",
	"cowgirl position": "骑乘",
	ahegao: "阿黑颜",
	bondage: "捆绑",
	tentacles: "触手",
	"heart-shaped pupils": "爱心瞳",
	"tongue out": "吐舌",
	sweat: "出汗",
	"steaming body": "热气",
	"pussy juice": "爱液",
	"female ejaculation": "潮吹",
	"object insertion": "物体插入",
	"anal object insertion": "肛门物体插入",
	"anus peek": "肛门窥视",
	"after anal": "肛交之后",
	"anal beads": "肛珠",
	"anal tail": "肛尾",
	"anal fingering": "肛门指交",
	anus: "肛门",
	holding: "手持",
	fang: "虎牙",
	"simple background": "简单背景",
	"white background": "白背景",
	original: "原创",
	translated: "已翻译",
	"bad id": "错误ID",
	"bad pixiv id": "错误pixiv ID"
};
var tags = [];
var loaded = false;
var loading = null;
function loadTags() {
	if (loaded) return Promise.resolve();
	if (loading) return loading;
	loading = fetch("/data/tags.json").then((r) => r.json()).then((rows) => {
		tags = rows.map((t) => ({
			...t,
			c: ZH_FIX[t.e] || t.c
		}));
		loaded = true;
	}).catch(() => {
		tags = Object.entries(ZH_FIX).map(([e, c], i) => ({
			e,
			c,
			n: 1e6 - i
		}));
		loaded = true;
	});
	return loading;
}
function lastToken(text, caret) {
	return (text.slice(0, caret).match(/([^,\n]*)$/)?.[1] ?? "").trim();
}
function suggestTags(text, caret, limit = 40) {
	const q = lastToken(text, caret).toLowerCase();
	if (!q) return {
		q,
		total: 0,
		items: []
	};
	const hits = [];
	for (const t of tags) {
		const en = t.e.toLowerCase();
		const zh = t.c;
		if (en.startsWith(q) || en.includes(q) || zh.includes(q)) hits.push(t);
		if (hits.length >= 400) break;
	}
	hits.sort((a, b) => {
		const as = a.e.toLowerCase().startsWith(q) ? 1 : 0;
		const bs = b.e.toLowerCase().startsWith(q) ? 1 : 0;
		if (as !== bs) return bs - as;
		return b.n - a.n;
	});
	return {
		q,
		total: hits.length,
		items: hits.slice(0, limit)
	};
}
function insertTag(text, caret, tag) {
	const left = text.slice(0, caret);
	const right = text.slice(caret);
	const prefix = left.match(/^(.*?)([^,\n]*)$/s)?.[1] ?? left;
	const next = `${prefix}${prefix && !prefix.endsWith("\n") && !/,\s*$/.test(prefix) ? prefix.endsWith(",") ? " " : ", " : ""}${tag}, `;
	return {
		text: next + right.replace(/^\s*,?\s*/, ""),
		caret: next.length
	};
}
function IconBtn({ className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cn("inline-flex size-10 items-center justify-center rounded-full text-ink/80 transition-colors hover:bg-dim/80 active:scale-[0.98]", className),
		...rest,
		children
	});
}
function PrimaryBtn({ className, children, busy, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: cn("inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary px-5 text-[15px] font-medium text-on-primary shadow-[0_6px_16px_rgb(156_83_72/0.25)] transition hover:bg-primary-hover disabled:opacity-50", className),
		...rest,
		children: [busy && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), children]
	});
}
function GhostBtn({ className, children, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		className: cn("inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-line bg-card px-5 text-[15px] font-medium text-ink transition hover:bg-surface disabled:opacity-50", className),
		...rest,
		children
	});
}
function Card({ className, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("rounded-[22px] border border-line/80 bg-card p-4 shadow-[0_1px_0_rgb(44_40_36/0.03)]", className),
		children
	});
}
function FieldLabel({ children, hint, right }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1.5 flex items-start justify-between gap-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[13px] font-medium text-ink",
			children
		}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mt-0.5 text-[11px] leading-snug text-muted",
			children: hint
		})] }), right]
	});
}
var TextArea = (0, import_react.forwardRef)(function TextArea({ className, ...rest }, ref) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
		ref,
		className: cn("min-h-[88px] w-full resize-y rounded-[16px] border border-line bg-surface/60 px-3.5 py-3 text-[14px] leading-relaxed text-ink outline-none placeholder:text-faint focus:border-primary/40 focus:bg-card", className),
		...rest
	});
});
function TextInput({ className, ...rest }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
		className: cn("h-12 w-full rounded-full border border-line bg-card px-4 text-[14px] outline-none placeholder:text-faint focus:border-primary/40", className),
		...rest
	});
}
function Switch({ on, onChange, label }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
		type: "button",
		role: "switch",
		"aria-checked": on,
		"aria-label": label,
		onClick: () => onChange(!on),
		className: cn("relative inline-flex h-7 w-12 shrink-0 items-center overflow-hidden rounded-full p-0.5 transition-colors", on ? "bg-primary" : "bg-line-strong"),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: cn("block size-6 rounded-full bg-card shadow-sm transition-transform", on ? "translate-x-5" : "translate-x-0") })
	});
}
function Slider({ value, min, max, step, onChange, disabled }) {
	const track = (0, import_react.useRef)(null);
	const span = max - min || 1;
	const pct = Math.min(100, Math.max(0, (value - min) / span * 100));
	const snap = (raw) => {
		const s = step && step > 0 ? step : 1;
		const n = Math.round(raw / s) * s;
		const clamped = Math.min(max, Math.max(min, n));
		const digits = s < .1 ? 2 : s < 1 ? 1 : 0;
		return Number(clamped.toFixed(digits));
	};
	const fromX = (clientX) => {
		const el = track.current;
		if (!el || disabled) return;
		const r = el.getBoundingClientRect();
		const t = r.width <= 0 ? 0 : (clientX - r.left) / r.width;
		onChange(snap(min + t * span));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref: track,
		role: "slider",
		"aria-valuemin": min,
		"aria-valuemax": max,
		"aria-valuenow": value,
		"aria-disabled": disabled || void 0,
		className: cn("relative h-6 w-full touch-none select-none", disabled ? "opacity-40" : "cursor-pointer"),
		onPointerDown: (e) => {
			if (disabled) return;
			e.preventDefault();
			e.currentTarget.setPointerCapture(e.pointerId);
			fromX(e.clientX);
		},
		onPointerMove: (e) => {
			if (disabled || !e.currentTarget.hasPointerCapture(e.pointerId)) return;
			fromX(e.clientX);
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none absolute left-0 right-0 top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-line-strong" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute top-1/2 h-[3px] -translate-y-1/2 rounded-full bg-primary",
				style: { width: `${pct}%` }
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "pointer-events-none absolute top-1/2 size-[18px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-card shadow-[0_1px_4px_rgb(44_40_36/0.35)] ring-1 ring-black/10",
				style: { left: `${pct}%` }
			})
		]
	});
}
function ExpandSelect({ value, options, onChange, render, className, align = "center", menu }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const ref = (0, import_react.useRef)(null);
	const current = options.find((o) => o.id === value);
	const trigger = current?.short ?? current?.label ?? "";
	(0, import_react.useEffect)(() => {
		const fn = (e) => {
			if (!ref.current?.contains(e.target)) setOpen(false);
		};
		document.addEventListener("mousedown", fn);
		return () => document.removeEventListener("mousedown", fn);
	}, []);
	const menuSide = menu ?? (align === "left" ? "start" : "center");
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		ref,
		className: cn("relative", className),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			type: "button",
			onClick: () => setOpen((v) => !v),
			className: cn("inline-flex h-9 items-center gap-1 rounded-full px-3 text-[14px] font-medium text-ink", align === "center" ? "justify-center" : "w-full justify-between"),
			children: [render ? render(value, trigger) : trigger, /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-4 text-muted transition", open && "rotate-180") })]
		}), open && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: cn("absolute top-[110%] z-50 min-w-[10rem] overflow-hidden rounded-[20px] border border-line bg-card py-1 shadow-[0_16px_40px_rgb(44_40_36/0.16)]", menuSide === "start" && "left-0", menuSide === "end" && "right-0", menuSide === "center" && (align === "left" ? "left-0 right-0 w-full" : "left-1/2 w-[min(280px,80vw)] -translate-x-1/2")),
			children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "max-h-[50vh] overflow-auto scroll-thin",
				children: options.map((o) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					type: "button",
					onClick: () => {
						onChange(o.id);
						setOpen(false);
					},
					className: cn("flex w-full items-center gap-2 px-4 py-3 text-left text-[14px]", o.id === value ? "bg-dim/70 font-medium" : "hover:bg-surface"),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "min-w-0 flex-1 truncate",
						children: o.label
					}), o.id === value && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 shrink-0 text-primary" })]
				}, o.id))
			})
		})]
	});
}
function ToastHost() {
	const toasts = useApp((s) => s.toasts);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "pointer-events-none fixed inset-x-0 top-3 z-[80] flex justify-center px-4",
		children: toasts.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex items-center gap-2 rounded-full bg-good px-4 py-2 text-[13px] text-on-primary shadow-lg",
			style: { animation: "toast-in 180ms ease" },
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4" }), t.text]
		}, t.id))
	});
}
function Modal({ open, onClose, title, children, wide, hideClose }) {
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "fixed inset-0 z-[70] flex items-start justify-center px-5 pt-[12vh]",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "absolute inset-0 bg-overlay",
			onClick: onClose,
			"aria-label": "关闭"
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: cn("relative w-full overflow-auto rounded-[24px] bg-bg p-5 shadow-2xl", wide ? "max-w-lg" : "max-w-sm"),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: cn("mb-4 flex items-center", hideClose ? "" : "justify-between"),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
					className: "text-[18px] font-semibold",
					children: title
				}), !hideClose && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
					onClick: onClose,
					className: "size-9",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), children]
		})]
	});
}
function ConfirmHost() {
	const confirm = useApp((s) => s.ui.confirm);
	const setUI = useApp((s) => s.setUI);
	if (!confirm) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose: () => setUI({ confirm: null }),
		title: confirm.title,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
			className: "mb-5 text-[14px] leading-relaxed text-muted",
			children: confirm.body
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
				onClick: () => setUI({ confirm: null }),
				children: "取消"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
				className: confirm.danger ? "bg-danger hover:bg-danger/90" : "",
				onClick: () => {
					confirm.onOk();
					setUI({ confirm: null });
				},
				children: "确定"
			})]
		})]
	});
}
function useCooldown(until) {
	const [, tick] = (0, import_react.useState)(0);
	(0, import_react.useEffect)(() => {
		if (until <= Date.now()) return;
		const id = setInterval(() => tick((n) => n + 1), 250);
		return () => clearInterval(id);
	}, [until]);
	return Math.max(0, Math.ceil((until - Date.now()) / 1e3));
}
function Avatar({ url, name, dim, size = 40 }) {
	const ch = (name || "角").slice(0, 1);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: cn("overflow-hidden rounded-full bg-dim text-center font-medium text-primary", dim && "opacity-55"),
		style: {
			width: size,
			height: size,
			lineHeight: `${size}px`,
			fontSize: size * .4
		},
		children: url ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: url,
			alt: "",
			className: "size-full object-cover"
		}) : ch
	});
}
function ChatModelSelect({ align = "center", className }) {
	const source = useApp((s) => s.settings.chatSource);
	const grok = useApp((s) => s.settings.grokModelId);
	const llmModel = useApp((s) => s.settings.llmModel);
	const starred = useApp((s) => s.settings.llmStarred);
	const connected = useApp((s) => s.settings.llmConnected);
	if (source === "api") {
		const ids = [];
		if (llmModel) ids.push(llmModel);
		for (const id of starred) if (!ids.includes(id)) ids.push(id);
		if (!connected || ids.length === 0) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			type: "button",
			className: "inline-flex h-9 items-center rounded-full px-3 text-[14px] font-medium text-muted",
			onClick: () => useApp.getState().setUI({
				connection: true,
				llmSettings: true
			}),
			children: connected ? "去标星模型" : "先连接 API"
		});
		return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
			value: llmModel || ids[0],
			options: ids.map((id) => ({
				id,
				label: id,
				short: shortModelLabel(id)
			})),
			onChange: (id) => useApp.getState().setSettings({ llmModel: id }),
			align,
			className
		});
	}
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
		value: grok,
		options: GROK_MODELS.map((m) => ({
			id: m.id,
			label: m.label,
			short: m.short
		})),
		onChange: (id) => useApp.getState().setGrok(id),
		align,
		className
	});
}
function ChatPane({ chat }) {
	const left = useCooldown(useApp((s) => s.settings.cooldownUntil));
	const scroller = (0, import_react.useRef)(null);
	const [atBottom, setAtBottom] = (0, import_react.useState)(true);
	const [draft, setDraft] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		const el = scroller.current;
		if (!el) return;
		el.scrollTop = chat.scrollTop || 0;
		const bottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
		setAtBottom(bottom);
	}, [chat.id]);
	const onScroll = () => {
		const el = scroller.current;
		if (!el) return;
		const bottom = el.scrollHeight - el.scrollTop - el.clientHeight < 80;
		setAtBottom(bottom);
		useApp.getState().patchChat(chat.id, { scrollTop: el.scrollTop });
	};
	const send = () => {
		const t = draft;
		setDraft("");
		sendUser(chat.id, t);
	};
	const portrait = chat.imageParams.height >= chat.imageParams.width;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "flex h-full min-h-0 flex-col",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "relative flex shrink-0 items-center justify-center gap-1 px-2 py-1",
				children: [
					chat.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute left-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
							value: chat.promptMode,
							options: [{
								id: "insert",
								label: "插入版"
							}, {
								id: "legacy",
								label: "原版"
							}],
							onChange: (id) => useApp.getState().patchChat(chat.id, { promptMode: id }),
							menu: "start"
						})
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatModelSelect, {}),
					chat.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "absolute right-2",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
							value: chat.multiMode,
							options: [{
								id: "together",
								label: "多人同聊模式"
							}, {
								id: "group",
								label: "群聊模式"
							}],
							onChange: (id) => useApp.getState().patchChat(chat.id, { multiMode: id }),
							menu: "end"
						})
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: scroller,
				onScroll,
				className: "min-h-0 flex-1 overflow-y-auto px-4 pb-4 scroll-thin",
				children: [chat.messages.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mx-auto mt-6 max-w-md rounded-2xl bg-card px-4 py-4 text-[13px] leading-7 text-primary",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "聊天：在输入框里写完点发送即可。" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "生图参数：只作用于当前角色的配图，模型、提示词、分辨率、步数都在那里改。" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "纯生图：只出图，不聊天，参数和聊天完全独立。" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", { children: "顶栏可切换当前用的模型。润色人设、写提示词、聊天回复都用同一个。" }),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
							className: "text-muted",
							children: [
								"对 ",
								chat.name || "她",
								" 说点什么。(动作) 是已经发生的事实，《》是给 AI 的指令，角色听不见。"
							]
						})
					]
				}), chat.messages.map((m) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bubble, {
					chat,
					msg: m
				}, m.id))]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "shrink-0 bg-bg px-3 pb-[calc(env(safe-area-inset-bottom)+10px)] pt-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1.5 flex h-6 items-center gap-1.5 px-0.5 text-[13px] leading-none",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "inline-flex h-[22px] items-center gap-1.5 rounded-md border border-line bg-card px-1.5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: cnToggle(portrait),
									onClick: () => {
										if (!portrait) useApp.getState().patchParams(chat.id, {
											width: chat.imageParams.height,
											height: chat.imageParams.width
										});
									},
									children: "竖图"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-faint",
									children: "|"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
									className: cnToggle(!portrait),
									onClick: () => {
										if (portrait) useApp.getState().patchParams(chat.id, {
											width: chat.imageParams.height,
											height: chat.imageParams.width
										});
									},
									children: "横图"
								})
							]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "flex min-w-0 flex-1 items-center justify-center",
							children: left > 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "font-medium text-danger",
								children: [left, "s"]
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-good",
								children: "可生图"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: chat.adultBoost ? "inline-flex h-[22px] items-center rounded-md border border-line px-1.5 font-medium text-ink" : "inline-flex h-[22px] items-center rounded-md border border-line px-1.5 text-muted",
							onClick: () => useApp.getState().patchChat(chat.id, { adultBoost: !chat.adultBoost }),
							children: "成人提示词"
						})
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-end gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "grid size-9 shrink-0 place-items-center rounded-full text-muted",
							onClick: () => {
								const el = scroller.current;
								if (!el) return;
								if (atBottom) el.scrollTo({
									top: 0,
									behavior: "smooth"
								});
								else el.scrollTo({
									top: el.scrollHeight,
									behavior: "smooth"
								});
							},
							"aria-label": atBottom ? "回到顶部" : "回到底部",
							children: atBottom ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-5 rotate-180" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowDown, { className: "size-5" })
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("textarea", {
							value: draft,
							onChange: (e) => setDraft(e.target.value),
							onKeyDown: (e) => {
								if (e.key === "Enter" && !e.shiftKey) {
									e.preventDefault();
									send();
								}
							},
							rows: 1,
							placeholder: "",
							className: "max-h-32 min-h-[46px] flex-1 resize-none rounded-full border border-line bg-card px-4 py-3 text-[14px] outline-none"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: send,
							className: "grid size-11 shrink-0 place-items-center rounded-full bg-primary text-on-primary",
							"aria-label": "发送",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ArrowUp, { className: "size-5" })
						})
					]
				})]
			})
		]
	});
}
function jumpParams(section) {
	useApp.getState().setUI({ paramsJump: section });
	useApp.getState().setTab("params");
}
function cnToggle(on) {
	return on ? "px-1 font-medium text-ink" : "px-1 text-muted";
}
function Bubble({ chat, msg }) {
	const [edit, setEdit] = (0, import_react.useState)(false);
	const [text, setText] = (0, import_react.useState)(msg.content);
	const url = cachedUrl(chat.avatarBlobId);
	const generating = msg.role !== "user" && !msg.content;
	const names = [
		msg.characterName,
		chat.name,
		...chat.characters.map((c) => c.name),
		"角色"
	];
	if (msg.role === "user") return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-4 flex flex-col items-end",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-fit max-w-[85%] rounded-[18px] border border-line bg-card px-4 py-2.5",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "whitespace-pre-wrap text-[14px] leading-relaxed text-ink",
					children: msg.content
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-1.5 flex justify-end gap-1.5",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
					onClick: () => setEdit(true),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3" }),
					label: "编辑"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
					onClick: () => void branchFrom(chat.id, msg.id),
					icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, { className: "size-3" }),
					label: "开分支"
				})]
			}),
			edit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "w-full max-w-[85%]",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditBox, {
					text,
					onChange: setText,
					onCancel: () => setEdit(false),
					onOk: () => {
						editMessage(chat.id, msg.id, text);
						setEdit(false);
					}
				})
			})
		]
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-6",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "mb-2 flex items-center gap-2",
			onClick: () => useApp.getState().beginEdit(chat.id),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
				url,
				name: msg.characterName || chat.name,
				size: 36
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "text-[16px] font-semibold",
				children: msg.characterName || chat.name
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "pl-[44px]",
			children: [
				generating ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "font-sans text-[14px] text-muted",
					children: ["回复中", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex gap-0.5 pl-1",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "animate-pulse",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "animate-pulse",
								children: "·"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("i", {
								className: "animate-pulse",
								children: "·"
							})
						]
					})]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RpBody, {
					text: msg.content,
					names
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-2 flex flex-wrap gap-1.5",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							onClick: () => void regenMessage(chat.id, msg.id),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-3" }),
							label: "重新生成"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							onClick: () => void branchFrom(chat.id, msg.id),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GitBranch, { className: "size-3" }),
							label: "开分支"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Mini, {
							onClick: () => setEdit(true),
							icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-3" }),
							label: "编辑"
						})
					]
				}),
				edit && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EditBox, {
					text,
					onChange: setText,
					onCancel: () => setEdit(false),
					onOk: () => {
						editMessage(chat.id, msg.id, text);
						setEdit(false);
					}
				}),
				msg.images.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ImageBlock, {
					chat,
					msg
				})
			]
		})]
	});
}
function RpBody({ text, names }) {
	const { body, status } = stripStatus(stripSpeakerPrefix(text, names));
	const parts = splitDialogue(body);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "serif-body whitespace-pre-wrap text-[16px] text-narrate",
		children: parts.map((p, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: p.kind === "say" ? "font-semibold italic text-ink" : void 0,
			children: p.text
		}, i))
	}), status ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "mt-3 whitespace-pre-wrap font-sans text-[13px] leading-6 text-ink",
		children: status
	}) : null] });
}
function Mini({ icon, label, onClick }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick,
		className: "inline-flex h-6 items-center gap-0.5 rounded-full border border-line bg-card px-2 text-[11px] leading-none text-muted",
		children: [icon, label]
	});
}
function EditBox({ text, onChange, onOk, onCancel }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-2",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
			value: text,
			onChange: (e) => onChange(e.target.value)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-2 flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "rounded-full bg-primary px-4 py-1.5 text-[12px] text-on-primary",
				onClick: onOk,
				children: "保存"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "px-3 text-[12px] text-muted",
				onClick: onCancel,
				children: "取消"
			})]
		})]
	});
}
function ImageBlock({ chat, msg }) {
	const done = msg.images.filter((g) => g.status === "done" && g.blobId);
	const pendingImg = msg.images.find((g) => g.status !== "done" && g.status !== "error");
	const pending = Boolean(pendingImg);
	const followLatest = (0, import_react.useRef)(true);
	const prevDone = (0, import_react.useRef)(done.length);
	const [idx, setIdx] = (0, import_react.useState)(() => Math.max(0, done.length - 1));
	const [url, setUrl] = (0, import_react.useState)(null);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [kick, setKick] = (0, import_react.useState)(null);
	const current = done[idx] ?? done[done.length - 1];
	const busy = kick ?? pendingImg?.source ?? null;
	const locked = pending || Boolean(kick);
	(0, import_react.useEffect)(() => {
		if (!pending) setKick(null);
	}, [pending]);
	(0, import_react.useEffect)(() => {
		if (done.length > prevDone.current && followLatest.current) setIdx(done.length - 1);
		else if (idx >= done.length && done.length > 0) setIdx(done.length - 1);
		prevDone.current = done.length;
	}, [done.length, idx]);
	(0, import_react.useEffect)(() => {
		let gone = false;
		if (current?.blobId) imageUrl(current.blobId).then((u) => {
			if (!gone) setUrl(u);
		});
		else setUrl(null);
		return () => {
			gone = true;
		};
	}, [current?.blobId]);
	const go = (dir) => {
		const n = done.length;
		if (n < 2) return;
		setIdx((i) => {
			const next = (i + dir + n) % n;
			followLatest.current = next === n - 1;
			return next;
		});
	};
	const lastError = [...msg.images].reverse().find((g) => g.status === "error");
	const phaseLabel = genPhaseLabel(pendingImg?.status) || (kick === "rewrite" || kick === "auto" ? "写提示词中" : kick ? "上传中" : "");
	if (msg.images.length === 0) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3",
		children: [
			current && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex w-full flex-wrap items-center gap-x-2 gap-y-0.5 text-left text-[11px] text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => jumpParams("model"),
						children: modelLabel(current.model)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => jumpParams("size"),
						children: [
							current.width,
							"×",
							current.height
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => jumpParams("steps"),
						children: [current.steps, "步"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => jumpParams("sampler"),
						children: samplerLabel(current.sampler)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => jumpParams("seed"),
						children: String(current.seed).slice(0, 8)
					}),
					chat.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "text-danger",
						onClick: () => jumpParams("chars"),
						children: "多"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative overflow-hidden rounded-[18px] bg-dim",
				children: current && url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: url,
						alt: "",
						className: "w-full"
					}), done.length > 1 && !pending && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute inset-y-0 left-0 w-1/2",
						onClick: () => go(-1),
						"aria-label": "上一张"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute inset-y-0 right-0 w-1/2",
						onClick: () => go(1),
						"aria-label": "下一张"
					})] })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid place-items-center px-4 text-[13px] text-muted",
					style: { aspectRatio: `${chat.imageParams.width} / ${chat.imageParams.height}` },
					children: pending ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "flex items-center gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }),
							" ",
							phaseLabel || "准备中"
						]
					}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-center text-danger",
						children: genPhaseLabel("error", lastError?.error)
					})
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 grid grid-cols-4 text-[12px] text-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IcoBtn, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4" }),
						label: busy === "same" && phaseLabel ? phaseLabel : "重新生成",
						busy: busy === "same",
						disabled: locked,
						onClick: () => {
							if (locked) return;
							setKick("same");
							attachImage(chat.id, msg.id, "same");
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IcoBtn, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }),
						label: busy === "rewrite" && phaseLabel ? phaseLabel : "换提示词生成",
						busy: busy === "rewrite",
						disabled: locked,
						onClick: () => {
							if (locked) return;
							setKick("rewrite");
							attachImage(chat.id, msg.id, "rewrite");
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IcoBtn, {
						icon: saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-4 text-good" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }),
						label: "下载",
						disabled: !current?.blobId,
						onClick: async () => {
							if (!current?.blobId) return;
							const u = await imageUrl(current.blobId);
							if (!u) return;
							downloadBlob(await fetch(u).then((r) => r.blob()), String(current.seed));
							setSaved(true);
							setTimeout(() => setSaved(false), 1e3);
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IcoBtn, {
						icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(WandSparkles, { className: "size-4" }),
						label: busy === "custom" && phaseLabel ? phaseLabel : "自定义修改",
						busy: busy === "custom",
						disabled: locked || !current,
						onClick: () => {
							if (!current || locked) return;
							useApp.getState().setUI({ customPrompt: {
								chatId: chat.id,
								msgId: msg.id,
								imgId: current.id,
								text: extractGrokTail(current.prompt, chat.imageParams) || current.prompt,
								charTails: { ...current.charTails || {} }
							} });
						}
					})
				]
			})
		]
	});
}
function IcoBtn({ icon, label, onClick, busy, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		onClick,
		disabled,
		"aria-busy": busy || void 0,
		"aria-label": label,
		className: busy ? "flex w-full min-w-0 flex-col items-center gap-1 px-1 py-1 text-center text-primary" : "flex w-full min-w-0 flex-col items-center gap-1 px-1 py-1 text-center disabled:opacity-40",
		children: [busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 shrink-0 animate-spin" }) : icon, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "max-w-full truncate",
			children: label
		})]
	});
}
function CustomPromptModal() {
	const data = useApp((s) => s.ui.customPrompt);
	const setUI = useApp((s) => s.setUI);
	const chat = useApp((s) => data ? s.chats.find((c) => c.id === data.chatId) : void 0);
	const [text, setText] = (0, import_react.useState)(data?.text ?? "");
	const [charTails, setCharTails] = (0, import_react.useState)(data?.charTails ?? {});
	(0, import_react.useEffect)(() => {
		setText(data?.text ?? "");
		setCharTails(data?.charTails ?? {});
	}, [data?.text, data?.imgId]);
	if (!data || !chat) return null;
	const insert = chat.isMulti && chat.promptMode === "insert";
	const chars = chat.imageParams.characters;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose: () => setUI({ customPrompt: null }),
		title: "自定义修改提示词",
		children: [insert ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 text-[12px] leading-5 text-muted",
				children: "总提示追加到「正面提示词 · 中」后面，各角色追加到对应角色正面提示词后面。不会写入 ENABLED。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 text-[13px] font-medium",
				children: "总提示（正面提示词 · 中）"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
				className: "min-h-[96px]",
				value: text,
				onChange: (e) => setText(e.target.value)
			}),
			chars.map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 text-[13px] font-medium",
					children: [
						"角色",
						i + 1,
						ch.name ? `:${ch.name}` : "",
						" 正面提示词"
					]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					className: "min-h-[88px]",
					value: charTails[ch.id] ?? "",
					onChange: (e) => setCharTails((prev) => ({
						...prev,
						[ch.id]: e.target.value
					}))
				})]
			}, ch.id))
		] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
			className: "min-h-[160px]",
			value: text,
			onChange: (e) => setText(e.target.value)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex gap-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "h-12 flex-1 rounded-full border border-line bg-card text-[15px] font-medium",
				onClick: () => setUI({ customPrompt: null }),
				children: "取消"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "h-12 flex-[1.2] rounded-full bg-primary text-[15px] font-medium text-on-primary",
				onClick: () => {
					attachImage(data.chatId, data.msgId, "custom", text, insert ? charTails : void 0);
					setUI({ customPrompt: null });
				},
				children: "按这个生成"
			})]
		})]
	});
}
function ConnectionPanel() {
	const open = useApp((s) => s.ui.connection);
	const settings = useApp((s) => s.settings);
	const setUI = useApp((s) => s.setUI);
	const [key, setKey] = (0, import_react.useState)(settings.naiKey);
	const [base, setBase] = (0, import_react.useState)(settings.naiBase || "https://api.idlecloud.cc");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)("");
	const [dl, setDl] = (0, import_react.useState)(false);
	const [apiOpen, setApiOpen] = (0, import_react.useState)(false);
	const llmSettings = useApp((s) => s.ui.llmSettings);
	(0, import_react.useEffect)(() => {
		if (!open || !llmSettings) return;
		setApiOpen(true);
		useApp.getState().setUI({ llmSettings: false });
	}, [open, llmSettings]);
	if (!open) return null;
	const save = async () => {
		setBusy(true);
		setErr("");
		try {
			const data = await (await fetch("/api/nai", {
				method: "POST",
				headers: { "Content-Type": "application/json" },
				body: JSON.stringify({
					action: "test",
					baseUrl: base,
					apiKey: key
				})
			})).json();
			if (!data.ok) {
				setErr(data.error || "连接失败");
				useApp.getState().setSettings({
					naiKey: key,
					naiBase: base,
					naiConnected: false
				});
				return;
			}
			useApp.getState().setSettings({
				naiKey: key,
				naiBase: base,
				naiConnected: true
			});
			useApp.getState().toast("已连接");
		} catch (e) {
			setErr(e instanceof Error ? e.message : "连接失败");
		} finally {
			setBusy(false);
		}
	};
	const selectGrok = () => useApp.getState().setSettings({ chatSource: "grok" });
	const selectApi = () => {
		if (!settings.llmConnected) {
			useApp.getState().toast("先连接 API");
			setApiOpen(true);
			return;
		}
		useApp.getState().setSettings({ chatSource: "api" });
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-50 overflow-y-auto bg-overlay/40 px-4 py-6 scroll-thin",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mx-auto w-full max-w-md rounded-[28px] bg-bg p-5 pb-8 shadow-2xl",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h2", {
							className: "text-[20px] font-semibold",
							children: "连接"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							onClick: () => setUI({ connection: false }),
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-4 grid grid-cols-2 gap-3",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "flex flex-col items-center gap-2 rounded-[18px] border border-line bg-card py-5",
							onClick: () => setDl(true),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-6" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[13px]",
								children: "下载存档"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
							className: "flex cursor-pointer flex-col items-center gap-2 rounded-[18px] border border-line bg-card py-5",
							children: [
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Upload, { className: "size-6" }),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
									className: "text-[13px]",
									children: "读取存档"
								}),
								/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
									type: "file",
									accept: ".json,.zip",
									className: "hidden",
									onChange: async (e) => {
										const f = e.target.files?.[0];
										e.target.value = "";
										if (!f) return;
										try {
											await importArchive(f);
											await useApp.getState().hydrate();
											useApp.getState().toast("已读取存档");
											setUI({ connection: false });
										} catch (err) {
											useApp.getState().toast(err instanceof Error ? err.message : "读取失败");
										}
									}
								})
							]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						onClick: selectGrok,
						className: cn("mb-3 w-full rounded-[18px] border p-4 text-left", settings.chatSource === "grok" ? "border-primary bg-primary-soft" : "border-line bg-card"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mb-1 font-medium",
							children: "Grok"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "text-[12px] leading-relaxed text-muted",
							children: "已使用当前 Grok 会员账号，无需再登录。选中后聊天、润色、写提示词都走 Grok。顶栏切换 4.6 / 4.5 均衡、专家、快速。"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						role: "button",
						tabIndex: 0,
						onClick: selectApi,
						onKeyDown: (e) => {
							if (e.key === "Enter" || e.key === " ") selectApi();
						},
						className: cn("mb-4 flex w-full items-center gap-3 rounded-[18px] border p-4 text-left", settings.chatSource === "api" ? "border-primary bg-primary-soft" : "border-line bg-card"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "min-w-0 flex-1",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
								className: "font-medium",
								children: "API 连接"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
								className: "mt-0.5 truncate text-[12px] text-muted",
								children: settings.llmConnected ? settings.llmModel ? shortModelLabel(settings.llmModel) : "已连接，去设置里选模型" : "未连接。点齿轮填写网址和密钥"
							})]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex shrink-0 items-center gap-1",
							onClick: (e) => e.stopPropagation(),
							children: [settings.llmConnected ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5 text-good" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5 text-danger" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "grid size-9 place-items-center rounded-full hover:bg-dim",
								onClick: () => setApiOpen(true),
								"aria-label": "API 设置",
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Settings, { className: "size-5" })
							})]
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-1 flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "text-[14px] font-medium",
							children: "NAI 中转站 API Key"
						}), settings.naiConnected ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
							className: "flex items-center gap-2 text-[12px]",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
								className: "flex items-center gap-1 text-good",
								children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-3.5" }), " 已连接"]
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "text-muted",
								onClick: () => {
									useApp.getState().setSettings({
										naiConnected: false,
										naiKey: ""
									});
									setKey("");
								},
								children: "退出"
							})]
						}) : null]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						type: "password",
						value: key,
						placeholder: "",
						onChange: (e) => setKey(e.target.value)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mb-3 mt-1 text-[11px] text-muted",
						children: "进阶档位以上可生成 Key。Key 只保存在你这台设备上。点保存后即可聊天配图和纯生图。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-1 text-[14px] font-medium",
						children: "中转站地址"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: base,
						onChange: (e) => setBase(e.target.value)
					}),
					err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-2 text-[12px] text-danger",
						children: err
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
						className: "mt-4",
						busy,
						onClick: () => void save(),
						children: "保存"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
				open: dl,
				onClose: () => setDl(false),
				title: "下载存档",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "mb-4 text-[13px] text-muted",
					children: "全部含配图；无配图可再次点重生。"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex flex-col gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
						onClick: () => {
							exportArchive("full");
							setDl(false);
						},
						children: "全部"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
						onClick: () => {
							exportArchive("lite");
							setDl(false);
						},
						children: "无配图"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ApiSettingsModal, {
				open: apiOpen,
				onClose: () => setApiOpen(false)
			})
		]
	});
}
function ApiSettingsModal({ open, onClose }) {
	const settings = useApp((s) => s.settings);
	const [url, setUrl] = (0, import_react.useState)(settings.llmBase);
	const [key, setKey] = (0, import_react.useState)(settings.llmKey);
	const [q, setQ] = (0, import_react.useState)("");
	const [manual, setManual] = (0, import_react.useState)("");
	const [busy, setBusy] = (0, import_react.useState)(false);
	const [err, setErr] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => {
		if (!open) return;
		setUrl(settings.llmBase);
		setKey(settings.llmKey);
		setErr("");
		setQ("");
	}, [
		open,
		settings.llmBase,
		settings.llmKey
	]);
	const models = settings.llmModels;
	const filtered = (0, import_react.useMemo)(() => {
		const t = q.trim().toLowerCase();
		const list = t ? models.filter((id) => id.toLowerCase().includes(t)) : models;
		const starred = new Set(settings.llmStarred);
		return [...list].sort((a, b) => {
			const as = starred.has(a) ? 0 : 1;
			const bs = starred.has(b) ? 0 : 1;
			if (as !== bs) return as - bs;
			return a.localeCompare(b);
		});
	}, [
		models,
		q,
		settings.llmStarred
	]);
	const connect = async () => {
		setBusy(true);
		setErr("");
		try {
			const list = await fetchLlmModels(url, key);
			const nextModel = settings.llmModel && list.includes(settings.llmModel) ? settings.llmModel : list[0] || settings.llmModel;
			const starred = settings.llmStarred.filter((id) => list.includes(id) || id === nextModel);
			useApp.getState().setSettings({
				llmBase: url,
				llmKey: key,
				llmConnected: true,
				llmModels: list,
				llmModel: nextModel,
				llmStarred: starred,
				chatSource: "api"
			});
			useApp.getState().toast(list.length ? `已连接 · ${list.length} 个模型` : "已连接，请手填模型名");
		} catch (e) {
			setErr(e instanceof Error ? e.message : "连接失败");
			useApp.getState().setSettings({
				llmBase: url,
				llmKey: key,
				llmConnected: false
			});
		} finally {
			setBusy(false);
		}
	};
	const disconnect = () => {
		useApp.getState().setSettings({
			llmConnected: false,
			llmKey: "",
			chatSource: "grok"
		});
		setKey("");
		useApp.getState().toast("已断开 API");
	};
	const toggleStar = (id) => {
		const llmStarred = settings.llmStarred.includes(id) ? settings.llmStarred.filter((x) => x !== id) : [...settings.llmStarred, id];
		useApp.getState().setSettings({ llmStarred });
	};
	const pick = (id) => {
		useApp.getState().setSettings({
			llmModel: id,
			chatSource: "api"
		});
	};
	const p = settings.llmParams;
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose,
		title: "API 设置",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 text-[14px] font-medium",
				children: "网址"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				value: url,
				placeholder: "https://api.siliconflow.cn/v1",
				onChange: (e) => setUrl(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-3 mt-1 text-[11px] text-muted",
				children: "OpenAI 兼容。末尾 /v1 即可，不必写到 chat/completions。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex items-center justify-between text-[14px] font-medium",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "API 密钥" }), settings.llmConnected && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-[12px] font-normal text-muted",
					onClick: disconnect,
					children: "退出"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				type: "password",
				value: key,
				placeholder: "",
				onChange: (e) => setKey(e.target.value)
			}),
			err && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 text-[12px] text-danger",
				children: err
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
				className: cn("mt-3", settings.llmConnected && "bg-good hover:bg-good"),
				busy,
				onClick: () => void connect(),
				children: settings.llmConnected ? "已连接 · 重新拉取" : "连接"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-5 mb-1 text-[14px] font-medium",
				children: "可用模型"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-2 text-[11px] text-muted",
				children: "列表来自接口。点选即当前模型，星标会进聊天顶栏。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
				value: q,
				placeholder: "搜索",
				onChange: (e) => setQ(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-2 max-h-[36vh] overflow-auto rounded-[18px] border border-line bg-card scroll-thin",
				children: filtered.length === 0 ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
					className: "px-4 py-6 text-center text-[13px] text-muted",
					children: settings.llmConnected ? "没有匹配的模型" : "连接后才会出现列表"
				}) : filtered.map((id) => {
					const current = settings.llmModel === id;
					const starred = settings.llmStarred.includes(id);
					return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: cn("flex items-center gap-1 border-b border-line/70 last:border-0", current && "bg-dim/70"),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "min-w-0 flex-1 truncate px-3 py-3 text-left text-[13px]",
							onClick: () => pick(id),
							children: id
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "grid size-10 shrink-0 place-items-center",
							onClick: () => toggleStar(id),
							"aria-label": starred ? "取消常用" : "标为常用",
							children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: cn("size-4", starred ? "fill-primary text-primary" : "text-faint") })
						})]
					}, id);
				})
			}),
			settings.llmConnected && models.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 text-[13px]",
					children: "手填模型名"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex gap-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: manual,
						placeholder: "deepseek-ai/DeepSeek-V3.2",
						onChange: (e) => setManual(e.target.value)
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "shrink-0 rounded-full bg-primary px-4 text-[13px] text-on-primary",
						onClick: () => {
							const id = manual.trim();
							if (!id) return;
							useApp.getState().setSettings({
								llmModel: id,
								llmModels: [id],
								llmStarred: settings.llmStarred.includes(id) ? settings.llmStarred : [...settings.llmStarred, id]
							});
						},
						children: "使用"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
				className: "mt-2 text-[12px] text-muted",
				children: [
					"当前：",
					settings.llmModel ? shortModelLabel(settings.llmModel) : "未选",
					" · 常用 ",
					settings.llmStarred.length
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-5 mb-2 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[14px] font-medium",
					children: "预设"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-[12px] text-muted",
					onClick: () => useApp.getState().setSettings({ llmParams: { ...DEFAULT_LLM_PARAMS } }),
					children: "恢复默认"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamRow, {
				label: "温度",
				value: p.temperature,
				min: 0,
				max: 2,
				step: .05,
				onChange: (n) => useApp.getState().setSettings({ llmParams: {
					...p,
					temperature: n
				} })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamRow, {
				label: "Top P",
				value: p.topP,
				min: 0,
				max: 1,
				step: .05,
				onChange: (n) => useApp.getState().setSettings({ llmParams: {
					...p,
					topP: n
				} })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamRow, {
				label: "频率惩罚",
				value: p.frequencyPenalty,
				min: 0,
				max: 2,
				step: .05,
				onChange: (n) => useApp.getState().setSettings({ llmParams: {
					...p,
					frequencyPenalty: n
				} })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamRow, {
				label: "存在惩罚",
				value: p.presencePenalty,
				min: 0,
				max: 2,
				step: .05,
				onChange: (n) => useApp.getState().setSettings({ llmParams: {
					...p,
					presencePenalty: n
				} })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamRow, {
				label: "最大回复",
				value: p.maxTokens,
				min: 256,
				max: 32e3,
				step: 256,
				digits: 0,
				onChange: (n) => useApp.getState().setSettings({ llmParams: {
					...p,
					maxTokens: n
				} })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamRow, {
				label: "上下文（轮）",
				value: p.contextTurns,
				min: 4,
				max: 40,
				step: 1,
				digits: 0,
				onChange: (n) => useApp.getState().setSettings({ llmParams: {
					...p,
					contextTurns: n
				} })
			})
		]
	});
}
function ParamRow({ label, value, min, max, step, digits = 2, onChange }) {
	const shown = digits === 0 ? String(Math.round(value)) : value.toFixed(digits);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-0.5 flex items-center justify-between text-[13px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: label }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "tabular-nums text-muted",
				children: shown
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
			value,
			min,
			max,
			step,
			onChange
		})]
	});
}
function esc(s) {
	return s.replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
}
function stripEndTag(s, tag) {
	const core = tag.replace(/,\s*$/, "").trim();
	const re = new RegExp(`(?:^|,)?\\s*${esc(core)}\\s*,?\\s*$`, "i");
	let cur = s.trimEnd();
	for (let i = 0; i < 4; i++) {
		const next = cur.replace(re, "").replace(/[,\s]+$/g, "").trimEnd();
		if (next === cur) break;
		cur = next;
	}
	return cur;
}
function appendTag(s, tag) {
	const t = s.trimEnd();
	if (!t) return tag;
	if (t.endsWith(",")) return `${t} ${tag}`;
	return `${t}, ${tag}`;
}
var SENSITIVE_RE = /^\s*rating:\s*sensitive,\s*nsfw,\s*uncensored,\s*/i;
function stripSensitivePrefix(s) {
	return s.replace(SENSITIVE_RE, "").replace(/^\s+/, "");
}
function applyFrontFlags(front, uncensored, fullBody) {
	let s = stripEndTag(stripEndTag(front, FULLBODY_TAG), UNCENSORED_TAG);
	if (uncensored) s = appendTag(s, UNCENSORED_TAG);
	if (fullBody) s = appendTag(s, FULLBODY_TAG);
	return s;
}
function applyBackFlags(back, sensitive) {
	const rest = stripSensitivePrefix(back);
	if (!sensitive) return rest;
	return rest ? `${SENSITIVE_PREFIX} ${rest}` : SENSITIVE_PREFIX;
}
function applyMergedFlags(text, flags) {
	let s = stripSensitivePrefix(text);
	s = applyFrontFlags(s, flags.uncensored, flags.fullBody);
	if (flags.sensitive) s = s ? `${SENSITIVE_PREFIX} ${s}` : SENSITIVE_PREFIX;
	return s;
}
var HOLD_MS$2 = 400;
function buzz() {
	try {
		navigator.vibrate?.(12);
	} catch {}
}
function GripBars() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
		className: "flex flex-col items-center justify-center gap-[3.5px] text-current",
		"aria-hidden": true,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "h-[2px] w-4 rounded-full bg-current" })
		]
	});
}
function LibraryDrawer({ items, onApply, onDelete, onReorder, label = "角色选择", className }) {
	const [open, setOpen] = (0, import_react.useState)(false);
	const [sortMode, setSortMode] = (0, import_react.useState)(false);
	const [dragId, setDragId] = (0, import_react.useState)(null);
	const [holdId, setHoldId] = (0, import_react.useState)(null);
	const [pendingDelete, setPendingDelete] = (0, import_react.useState)(null);
	const [liveIds, setLiveIds] = (0, import_react.useState)(null);
	const [pos, setPos] = (0, import_react.useState)(null);
	const box = (0, import_react.useRef)(null);
	const trigger = (0, import_react.useRef)(null);
	const menu = (0, import_react.useRef)(null);
	const list = (0, import_react.useRef)(null);
	const pressTimer = (0, import_react.useRef)(0);
	const press = (0, import_react.useRef)(null);
	const idsRef = (0, import_react.useRef)([]);
	const dragIdRef = (0, import_react.useRef)(null);
	const sortRef = (0, import_react.useRef)(false);
	const savedRef = (0, import_react.useRef)(false);
	const lastY = (0, import_react.useRef)(0);
	const rafRef = (0, import_react.useRef)(0);
	const onReorderRef = (0, import_react.useRef)(onReorder);
	onReorderRef.current = onReorder;
	const display = (liveIds ?? items.map((c) => c.id)).map((id) => items.find((c) => c.id === id)).filter((c) => Boolean(c));
	const persist = () => {
		if (sortRef.current && idsRef.current.length && !savedRef.current) {
			savedRef.current = true;
			onReorderRef.current(idsRef.current);
		}
	};
	const close = () => {
		persist();
		setOpen(false);
		setSortMode(false);
		setPendingDelete(null);
		setDragId(null);
		setHoldId(null);
		setLiveIds(null);
		dragIdRef.current = null;
		sortRef.current = false;
	};
	const place = () => {
		const el = trigger.current;
		if (!el) return;
		const r = el.getBoundingClientRect();
		const width = Math.min(r.width, window.innerWidth - 16);
		const left = Math.min(Math.max(8, r.left), window.innerWidth - width - 8);
		const top = r.bottom + 4;
		const maxH = Math.min(260, Math.max(120, window.innerHeight - top - 12));
		setPos({
			top,
			left,
			width,
			maxH
		});
	};
	const openMenu = () => {
		savedRef.current = false;
		sortRef.current = false;
		idsRef.current = items.map((c) => c.id);
		setLiveIds(null);
		setSortMode(false);
		setPendingDelete(null);
		setDragId(null);
		place();
		setOpen(true);
	};
	(0, import_react.useEffect)(() => {
		sortRef.current = sortMode;
		if (sortMode) setPendingDelete(null);
	}, [sortMode]);
	(0, import_react.useEffect)(() => {
		if (!sortMode && !dragId) idsRef.current = items.map((c) => c.id);
	}, [
		items,
		sortMode,
		dragId
	]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		place();
		const onOutside = (e) => {
			if (dragIdRef.current) return;
			const t = e.target;
			if (box.current?.contains(t) || menu.current?.contains(t)) return;
			close();
		};
		window.addEventListener("resize", place);
		window.addEventListener("scroll", place, true);
		document.addEventListener("pointerdown", onOutside);
		return () => {
			window.removeEventListener("resize", place);
			window.removeEventListener("scroll", place, true);
			document.removeEventListener("pointerdown", onOutside);
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		if (!open) return;
		const applyY = (y) => {
			const id = dragIdRef.current;
			if (!id) return;
			const rows = list.current?.querySelectorAll("[data-card-id]");
			if (!rows?.length) return;
			const next = moveId(idsRef.current, id, indexFromY(rows, y));
			if (next.join("\0") === idsRef.current.join("\0")) return;
			idsRef.current = next;
			setLiveIds(next);
		};
		const lockScroller = (on) => {
			const el = nearestScroller(list.current);
			if (el) el.style.touchAction = on ? "none" : "";
		};
		const tick = () => {
			rafRef.current = 0;
			if (!dragIdRef.current) return;
			const scroller = nearestScroller(list.current);
			const dy = scroller ? autoScrollNearEdge(scroller, lastY.current) : 0;
			applyY(lastY.current);
			if (dy) rafRef.current = requestAnimationFrame(tick);
		};
		const onMove = (e) => {
			if (!dragIdRef.current) return;
			e.preventDefault();
			lastY.current = e.clientY;
			const scroller = nearestScroller(list.current);
			const dy = scroller ? autoScrollNearEdge(scroller, e.clientY) : 0;
			applyY(e.clientY);
			if (dy && !rafRef.current) rafRef.current = requestAnimationFrame(tick);
		};
		const onUp = () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			rafRef.current = 0;
			lockScroller(false);
			if (!dragIdRef.current) return;
			dragIdRef.current = null;
			setDragId(null);
			savedRef.current = true;
			onReorderRef.current(idsRef.current);
		};
		const onTouchMove = (e) => {
			if (!dragIdRef.current) return;
			e.preventDefault();
		};
		window.addEventListener("pointermove", onMove, { passive: false });
		window.addEventListener("pointerup", onUp);
		window.addEventListener("pointercancel", onUp);
		window.addEventListener("touchmove", onTouchMove, { passive: false });
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", onUp);
			window.removeEventListener("pointercancel", onUp);
			window.removeEventListener("touchmove", onTouchMove);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [open]);
	(0, import_react.useEffect)(() => {
		return () => {
			window.clearTimeout(pressTimer.current);
			persist();
		};
	}, []);
	const lockScroller = (on) => {
		const el = nearestScroller(list.current);
		if (el) el.style.touchAction = on ? "none" : "";
	};
	const enterSort = () => {
		const ids = liveIds ?? items.map((c) => c.id);
		idsRef.current = ids;
		savedRef.current = false;
		sortRef.current = true;
		setLiveIds(ids);
		setSortMode(true);
		setHoldId(null);
		setPendingDelete(null);
		buzz();
	};
	const clearPress = () => {
		window.clearTimeout(pressTimer.current);
		press.current = null;
		setHoldId(null);
	};
	const onRowPointerDown = (e, id) => {
		if (sortRef.current) return;
		if (items.length < 2) return;
		if (e.target.closest("[data-row-action]")) return;
		if (e.pointerType === "mouse" && e.button !== 0) return;
		clearPress();
		press.current = {
			id,
			y: e.clientY
		};
		setHoldId(id);
		const endPress = () => {
			window.removeEventListener("pointerup", endPress);
			window.removeEventListener("pointercancel", endPress);
			if (!sortRef.current) clearPress();
		};
		window.addEventListener("pointerup", endPress);
		window.addEventListener("pointercancel", endPress);
		pressTimer.current = window.setTimeout(() => {
			press.current = null;
			enterSort();
		}, HOLD_MS$2);
	};
	const onRowPointerMove = (e) => {
		if (sortRef.current) return;
		const p = press.current;
		if (!p) return;
		if (Math.abs(e.clientY - p.y) + Math.abs(e.movementX) > 12) clearPress();
	};
	const onGripDown = (e, id) => {
		e.preventDefault();
		e.stopPropagation();
		const ids = liveIds ?? items.map((c) => c.id);
		idsRef.current = ids;
		setLiveIds(ids);
		dragIdRef.current = id;
		setDragId(id);
		lastY.current = e.clientY;
		lockScroller(true);
		try {
			e.currentTarget.setPointerCapture(e.pointerId);
		} catch {}
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative min-w-0", className),
		ref: box,
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-0.5 text-left text-[11px] leading-none text-muted",
				children: label
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				ref: trigger,
				type: "button",
				className: "flex h-9 w-full items-center justify-between rounded-full border border-line bg-card px-3 text-[13px]",
				onClick: () => open ? close() : openMenu(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: "(无)" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: cn("size-3.5 text-muted transition", open && "rotate-180") })]
			}),
			open && pos && (0, import_react_dom.createPortal)(/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				ref: menu,
				className: "fixed z-[80] overflow-hidden rounded-[16px] border border-line bg-card shadow-[0_16px_40px_rgb(44_40_36/0.16)]",
				style: {
					top: pos.top,
					left: pos.left,
					width: pos.width,
					WebkitUserSelect: "none",
					WebkitTouchCallout: "none",
					userSelect: "none"
				},
				onContextMenu: (e) => e.preventDefault(),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: list,
					className: "overflow-auto scroll-thin overscroll-contain",
					style: { maxHeight: pos.maxH },
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: "block w-full px-2.5 py-1.5 text-left text-[13px] text-muted",
							onClick: close,
							children: "(无)"
						}),
						display.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							"data-card-id": c.id,
							className: cn("flex items-center gap-1 px-2 py-1 select-none hold-none", dragId === c.id && "rounded-lg bg-ink/15 drag-dim", !sortMode && holdId === c.id && "rounded-lg bg-ink/8"),
							style: { touchAction: sortMode ? "pan-y" : "manipulation" },
							onPointerDown: (e) => onRowPointerDown(e, c.id),
							onPointerMove: onRowPointerMove,
							onPointerUp: clearPress,
							onPointerCancel: clearPress,
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "min-w-0 flex-1 truncate text-[13px] leading-5",
								children: c.name
							}), sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "flex size-8 shrink-0 items-center justify-center rounded-md text-ink/55",
								"aria-label": `拖动${c.name}`,
								onPointerDown: (e) => onGripDown(e, c.id),
								style: { touchAction: "none" },
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GripBars, {})
							}) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"data-row-action": true,
								className: "h-6 shrink-0 rounded-full bg-primary px-2 text-[11px] leading-none text-on-primary",
								onClick: (e) => {
									e.stopPropagation();
									onApply(c.id);
									close();
								},
								children: "应用"
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								"data-row-action": true,
								className: "grid size-6 shrink-0 place-items-center text-danger",
								"aria-label": `删除${c.name}`,
								onClick: (e) => {
									e.stopPropagation();
									setPendingDelete(c.id);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-3.5" })
							})] })]
						}, c.id)),
						items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "px-2.5 py-2 text-[12px] text-muted",
							children: "还没有保存的项目"
						}),
						items.length > 1 && !sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
							className: "px-3 pb-1 pt-0.5 text-[9px] leading-4 text-muted",
							children: "长按进入排序"
						}) : null
					]
				}), pendingDelete && !sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "border-t border-line bg-card px-3 py-2",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("p", {
						className: "text-[13px]",
						children: [
							"删除「",
							items.find((c) => c.id === pendingDelete)?.name ?? "",
							"」？"
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-1.5 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"data-row-action": true,
							className: "h-8 flex-1 rounded-full bg-dim text-[13px]",
							onClick: () => setPendingDelete(null),
							children: "取消"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							"data-row-action": true,
							className: "h-8 flex-1 rounded-full bg-danger text-[13px] text-white",
							onClick: () => {
								onDelete(pendingDelete);
								setPendingDelete(null);
							},
							children: "删除"
						})]
					})]
				}) : null]
			}), document.body)
		]
	});
}
function scrollJump(jump) {
	const el = document.querySelector(`[data-section="${jump}"]`);
	if (!el) return false;
	let pane = el.parentElement;
	let fallback = null;
	while (pane) {
		const s = getComputedStyle(pane);
		if (/(auto|scroll)/.test(s.overflowY)) {
			if (!fallback) fallback = pane;
			if (pane.scrollHeight > pane.clientHeight + 4) break;
		}
		pane = pane.parentElement;
	}
	if (!pane || !/(auto|scroll)/.test(getComputedStyle(pane).overflowY)) pane = fallback;
	if (!pane) return false;
	const top = el.getBoundingClientRect().top - pane.getBoundingClientRect().top + pane.scrollTop;
	pane.scrollTo({
		top: Math.max(0, top - 6),
		behavior: "smooth"
	});
	if (jump === "seed") {
		const input = el.querySelector("[data-seed-input], input");
		if (input && !input.disabled) {
			input.focus();
			input.select();
		}
	}
	return true;
}
function ParamsPane({ chat, mode = "chat" }) {
	const live = chat.imageParams;
	const [peek, setPeek] = (0, import_react.useState)(null);
	const p = peek ?? live;
	const commit = (partial) => {
		if (mode === "pure") useApp.getState().setPureParams(partial);
		else useApp.getState().patchParams(chat.id, partial);
	};
	const patch = (partial) => {
		if (peek) setPeek((prev) => prev ? {
			...prev,
			...partial
		} : prev);
		else commit(partial);
	};
	const v3 = naiFamily(p.model) === "v3";
	const hideSplit = mode === "pure" && p.merged;
	const jump = useApp((s) => s.ui.paramsJump);
	const previewOpen = useApp((s) => s.ui.previewParams);
	const previewRef = (0, import_react.useRef)(null);
	const chatId = chat.id;
	const pickAppearance = (target, a) => {
		if (peek) {
			if (target === "mid") patch({ promptMid: a.prompt });
			else patch({ characters: p.characters.map((x) => x.id === target ? {
				...x,
				prompt: a.prompt
			} : x) });
			return;
		}
		useApp.getState().applyAppearance(chat.id, a, target);
	};
	const setFlags = (next) => {
		const sensitive = next.sensitive ?? p.sensitive;
		const uncensored = next.uncensored ?? p.uncensored;
		const fullBody = next.fullBody ?? p.fullBody;
		if (p.merged) {
			patch({
				sensitive,
				uncensored,
				fullBody,
				promptMid: applyMergedFlags(p.promptMid, {
					sensitive,
					uncensored,
					fullBody
				})
			});
			return;
		}
		patch({
			sensitive,
			uncensored,
			fullBody,
			promptFront: applyFrontFlags(p.promptFront, uncensored, fullBody),
			promptBack: applyBackFlags(p.promptBack, sensitive)
		});
	};
	(0, import_react.useEffect)(() => {
		if (!jump) return;
		let n = 0;
		let timer = 0;
		const run = () => {
			if (scrollJump(jump)) {
				useApp.getState().setUI({ paramsJump: null });
				return;
			}
			if (++n < 24) timer = window.setTimeout(run, 40);
			else useApp.getState().setUI({ paramsJump: null });
		};
		timer = window.setTimeout(run, 40);
		return () => window.clearTimeout(timer);
	}, [jump]);
	(0, import_react.useEffect)(() => {
		if (!previewOpen) {
			setPeek(null);
			return;
		}
		const fn = (e) => {
			if (!previewRef.current?.contains(e.target)) {
				useApp.getState().setUI({ previewParams: false });
				setPeek(null);
			}
		};
		document.addEventListener("pointerdown", fn);
		return () => document.removeEventListener("pointerdown", fn);
	}, [previewOpen]);
	const resId = `${p.width}x${p.height}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: mode === "pure" ? "mx-auto max-w-lg px-4 pb-10 pt-1" : "mx-auto h-full max-w-lg overflow-y-auto px-4 pb-24 pt-3 scroll-thin",
		children: [
			mode === "chat" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mt-1 text-[11px] tracking-[0.16em] text-muted",
					children: "CHAT IMAGE"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
					className: "font-serif text-2xl",
					children: "聊天配图参数"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 mt-1 text-[12px] text-muted",
					children: chat.isDraft ? "正在给这个新角色配图。改完可以切回「聊天」继续写人设，开始后她会先开口。" : "只作用于当前角色。改这里不会动到纯生图。"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative mb-4",
					"data-preview-params": true,
					ref: previewRef,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						className: "flex h-12 w-full items-center justify-between rounded-full border border-line bg-card px-4",
						onClick: () => {
							const next = !useApp.getState().ui.previewParams;
							useApp.getState().setUI({ previewParams: next });
							if (!next) setPeek(null);
						},
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "truncate text-[14px]",
							children: chat.name || "当前角色"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: "shrink-0 text-[12px] text-muted",
							children: "预览角色参数"
						})]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PreviewParamsDrawer, {
						currentId: chatId,
						onPeek: (id) => {
							const src = useApp.getState().chats.find((c) => c.id === id);
							if (!src) return;
							setPeek(structuredClone(src.imageParams));
						},
						onApply: (id) => {
							const src = useApp.getState().chats.find((c) => c.id === id);
							if (!src) return;
							useApp.getState().patchParams(chatId, structuredClone(src.imageParams));
							setPeek(null);
							useApp.getState().setUI({ previewParams: false });
							useApp.getState().toast("已套用参数");
						}
					})]
				})
			] }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 flex gap-1.5",
				children: [
					[
						"成人",
						p.sensitive,
						() => setFlags({ sensitive: !p.sensitive })
					],
					[
						"无码",
						p.uncensored,
						() => setFlags({ uncensored: !p.uncensored })
					],
					[
						"全身",
						p.fullBody,
						() => setFlags({ fullBody: !p.fullBody })
					],
					[
						"补全",
						p.tagSuggest,
						() => patch({ tagSuggest: !p.tagSuggest })
					]
				].map(([label, on, fn]) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `h-7 flex-1 rounded-full text-[12px] ${on ? "bg-primary text-on-primary" : "bg-dim text-ink"}`,
					onClick: fn,
					children: label
				}, label))
			}),
			!hideSplit ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 mt-3 text-[13px] font-medium",
					children: "正面提示词.前"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBox, {
					value: p.promptFront,
					suggest: p.tagSuggest,
					minH: 120,
					onChange: (v) => patch({ promptFront: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-1 mt-3 flex items-end gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "shrink-0 pb-1.5 text-[13px] font-medium",
							children: "正面提示词.中"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							type: "button",
							className: "inline-flex shrink-0 flex-col items-center gap-0.5 px-1 pb-1 text-[10px] text-muted",
							onClick: () => useApp.getState().setUI({
								saveAppearOpen: true,
								appearTarget: "mid"
							}),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-4" }), "保存角色"]
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppearSelect, {
							className: "min-w-0 flex-1",
							onPick: (a) => pickAppearance("mid", a)
						})
					]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBox, {
					value: p.promptMid,
					suggest: p.tagSuggest,
					minH: 208,
					onChange: (v) => patch({ promptMid: v })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-1 mt-3 text-[13px] font-medium",
					children: "正面提示词.后"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBox, {
					value: p.promptBack,
					suggest: p.tagSuggest,
					minH: 120,
					onChange: (v) => patch({ promptBack: v })
				}),
				mode === "pure" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "mb-2 mt-3 inline-flex h-7 items-center rounded-full border border-line px-3 text-[11px] text-muted",
					onClick: () => patch({
						merged: true,
						promptMid: joinPromptParts(p.promptFront, p.promptMid, p.promptBack),
						promptFront: "",
						promptBack: ""
					}),
					children: "合并成一个提示词"
				})
			] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					"aria-pressed": true,
					className: "mb-2 inline-flex h-7 items-center rounded-full border border-primary bg-primary px-3 text-[11px] font-medium text-on-primary",
					onClick: () => patch({
						merged: false,
						promptFront: "",
						promptBack: ""
					}),
					children: "合并成一个提示词"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBox, {
					value: p.promptMid,
					suggest: p.tagSuggest,
					minH: 208,
					onChange: (v) => patch({ promptMid: v })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mt-4 text-[15px] font-medium",
				children: "负面提示词"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-2 mt-1 flex gap-1.5",
				children: [
					"heavy",
					"light",
					"human",
					"custom"
				].map((id) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: `h-8 rounded-full px-3 text-[13px] ${p.ucPreset === id ? "bg-primary text-on-primary" : "bg-dim text-ink"}`,
					onClick: () => {
						if (id === "custom") patch({ ucPreset: id });
						else patch({
							ucPreset: id,
							negative: UC[id]
						});
					},
					children: id === "heavy" ? "重" : id === "light" ? "轻" : id === "human" ? "人形" : "自定义"
				}, id))
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBox, {
				value: p.negative,
				suggest: p.tagSuggest,
				minH: 88,
				onChange: (v) => patch({
					negative: v,
					ucPreset: "custom"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 mt-4 flex items-center justify-between",
				"data-section": "model",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[13px] font-medium",
					children: "模型"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
					value: p.model,
					options: NAI_MODELS.map((m) => ({
						id: m.id,
						label: m.label,
						short: m.label.replace("NAI ", "")
					})),
					onChange: (id) => patch({ model: id }),
					align: "left",
					menu: "end"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center justify-between",
				"data-section": "size",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[13px] font-medium",
					children: "分辨率"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
					value: resId,
					options: RESOLUTIONS.map((r) => ({
						id: `${r.w}x${r.h}`,
						label: `${r.label}  ${r.w}×${r.h}`,
						short: `${r.w} × ${r.h}`
					})),
					onChange: (id) => {
						const [w, h] = id.split("x").map(Number);
						patch({
							width: w,
							height: h
						});
					},
					align: "left",
					menu: "end"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center gap-2",
				"data-section": "sampler",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-1 items-center gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shrink-0 text-[13px] font-medium",
						children: "采样器"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
						value: p.sampler,
						options: SAMPLERS.map((s) => ({
							id: s.id,
							label: s.label
						})),
						onChange: (id) => patch({ sampler: id }),
						menu: "end"
					})]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex min-w-0 flex-1 items-center justify-end gap-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shrink-0 text-[13px] font-medium",
						children: "噪声表"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
						value: p.noiseSchedule,
						options: NOISE_SCHEDULES.map((s) => ({
							id: s.id,
							label: s.label
						})),
						onChange: (id) => patch({ noiseSchedule: id }),
						menu: "end"
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				"data-section": "steps",
				children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabeledSlider, {
					label: "步数",
					value: p.steps,
					min: 1,
					max: 50,
					locked: p.stepsLocked,
					onLock: (v) => patch({ stepsLocked: v }),
					onChange: (n) => patch({ steps: n })
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabeledSlider, {
				label: "提示词引导",
				value: p.scale,
				min: 0,
				max: 10,
				step: .1,
				locked: p.scaleLocked,
				onLock: (v) => patch({ scaleLocked: v }),
				onChange: (n) => patch({ scale: n })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabeledSlider, {
				label: "CFG rescale",
				value: p.cfgRescale,
				min: 0,
				max: 1,
				step: .01,
				locked: p.cfgRescaleLocked,
				onLock: (v) => patch({ cfgRescaleLocked: v }),
				onChange: (n) => patch({ cfgRescale: n })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-center gap-2",
				"data-section": "seed",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "shrink-0 text-[13px] font-medium",
						children: "种子"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
						type: "text",
						inputMode: "numeric",
						"data-seed-input": true,
						value: p.seed ?? "",
						placeholder: "随机",
						disabled: p.seedLocked,
						onChange: (e) => {
							const t = e.target.value.trim();
							patch({ seed: t === "" ? null : Number(t) || 0 });
						},
						className: "h-9 min-w-0 flex-1 rounded-full border border-line bg-card px-3 text-[13px] outline-none disabled:opacity-40"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "grid size-9 shrink-0 place-items-center rounded-full border border-line",
						onClick: () => patch({ seed: randomSeed() }),
						"aria-label": "随机种子",
						children: "↻"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: `grid size-9 shrink-0 place-items-center rounded-full ${p.seedLocked ? "text-primary" : "text-muted"}`,
						onClick: () => patch({ seedLocked: !p.seedLocked }),
						"aria-label": "锁定种子",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-4" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowSwitch, {
				label: "Variety+",
				hint: "动态跳过 CFG，增加构图变化",
				on: p.varietyPlus,
				onChange: (v) => patch({ varietyPlus: v })
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RowSwitch, {
				label: "Decrisper",
				hint: "减轻过饱和",
				on: p.decrisper,
				onChange: (v) => patch({ decrisper: v })
			}),
			!v3 && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-8 mt-4",
				"data-section": "chars",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[15px] font-medium",
						children: "角色提示词 (V4 / V5)"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-2 text-[11px] text-muted",
						children: "每个角色独立提示。AI 决定位置时忽略坐标。"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mb-3 flex rounded-full bg-dim p-1 text-[13px]",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `flex-1 rounded-full py-2 ${!p.useCoords ? "bg-card" : ""}`,
							onClick: () => patch({ useCoords: false }),
							children: "AI 决定位置"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							type: "button",
							className: `flex-1 rounded-full py-2 ${p.useCoords ? "bg-card" : ""}`,
							onClick: () => patch({ useCoords: true }),
							children: "自定义位置"
						})]
					}),
					p.characters.map((ch, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CharCard, {
						ch,
						index: i,
						chatName: chat.name,
						suggest: p.tagSuggest,
						useCoords: p.useCoords,
						onChange: (next) => patch({ characters: p.characters.map((x) => x.id === ch.id ? next : x) }),
						onPick: (a) => pickAppearance(ch.id, a),
						onRemove: p.characters.length > 1 ? () => useApp.getState().setUI({ confirm: {
							title: "删除角色",
							body: `删除「${ch.name || `角色${i + 1}`}」的提示词栏？`,
							danger: true,
							onOk: () => patch({ characters: p.characters.filter((x) => x.id !== ch.id) })
						} }) : void 0
					}, ch.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						type: "button",
						className: "mt-1 flex items-center gap-1 px-2 py-2 text-[13px] text-primary",
						onClick: () => patch({ characters: [...p.characters, {
							id: uid("c_"),
							name: `角色${p.characters.length + 1}`,
							enabled: true,
							prompt: "",
							uc: "",
							x: .5,
							y: .5
						}] }),
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " 添加角色"]
					})
				]
			})
		]
	});
}
function CharCard({ ch, index, chatName, suggest, useCoords, onChange, onPick, onRemove }) {
	const title = `角色${index + 1}:${ch.name || chatName || ""}`;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "mb-3 overflow-visible",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-center justify-between gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[15px] font-semibold",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
					on: ch.enabled,
					onChange: (v) => onChange({
						...ch,
						enabled: v
					})
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 flex items-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(AppearSelect, {
					className: "min-w-0 flex-1",
					onPick
				}), onRemove && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: "grid size-8 shrink-0 place-items-center text-danger",
					onClick: onRemove,
					"aria-label": "删除角色",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 text-[12px] text-muted",
				children: "正面提示词"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBox, {
				value: ch.prompt,
				suggest,
				minH: 88,
				onChange: (v) => onChange({
					...ch,
					prompt: v
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 mt-2 text-[12px] text-muted",
				children: "角色负面 UC"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PromptBox, {
				value: ch.uc,
				suggest,
				minH: 72,
				onChange: (v) => onChange({
					...ch,
					uc: v
				})
			}),
			useCoords && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mt-2 grid grid-cols-2 gap-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabeledSlider, {
					label: "X",
					value: ch.x,
					min: 0,
					max: 1,
					step: .01,
					onChange: (n) => onChange({
						...ch,
						x: n
					})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LabeledSlider, {
					label: "Y",
					value: ch.y,
					min: 0,
					max: 1,
					step: .01,
					onChange: (n) => onChange({
						...ch,
						y: n
					})
				})]
			})
		]
	});
}
function AppearSelect({ className, onPick }) {
	const ordered = useApp((s) => s.appearances).slice().sort((a, b) => a.order - b.order);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryDrawer, {
		className,
		label: "角色选择",
		items: ordered.map((a) => ({
			id: a.id,
			name: a.name
		})),
		onApply: (id) => {
			const a = useApp.getState().appearances.find((x) => x.id === id);
			if (a) onPick(a);
		},
		onDelete: (id) => useApp.getState().deleteAppearance(id),
		onReorder: (ids) => useApp.getState().reorderAppearances(ids)
	});
}
function PreviewParamsDrawer({ currentId, onPeek, onApply }) {
	const open = useApp((s) => s.ui.previewParams);
	const { foldersSorted, root, inFolder } = listedChats(useApp((s) => s.folders), useApp((s) => s.chats));
	if (!open) return null;
	const row = (c) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		className: `flex w-full items-center gap-2 rounded-[14px] px-2 py-2 text-left ${c.id === currentId ? "bg-dim" : "hover:bg-dim"}`,
		onPointerEnter: () => onPeek(c.id),
		onClick: () => onApply(c.id),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
			url: cachedUrl(c.avatarBlobId),
			name: c.name,
			size: 28
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
			className: "min-w-0 flex-1 truncate text-[13px]",
			children: c.name || "未命名"
		})]
	}, c.id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute left-0 right-0 top-[calc(100%+6px)] z-30 max-h-72 overflow-y-auto rounded-[18px] border border-line bg-card p-2 shadow-lg",
		children: [root.map(row), foldersSorted.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-1",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-1 px-2 py-1 text-[11px] text-muted",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-3.5" }), f.name || "文件夹"]
			}), inFolder(f.id).map(row)]
		}, f.id))]
	});
}
function LabeledSlider({ label, value, min, max, step, locked, onLock, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mb-1 flex items-center justify-between text-[13px]",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
				className: "font-medium",
				children: label
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex items-center gap-1 text-muted",
				children: [step && step < 1 ? value.toFixed(step < .1 ? 2 : 1) : value, onLock && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					type: "button",
					className: locked ? "text-primary" : "text-muted",
					onClick: () => onLock(!locked),
					"aria-label": "锁定",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Lock, { className: "size-3.5" })
				})]
			})]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Slider, {
			value,
			min,
			max,
			step,
			onChange,
			disabled: locked
		})]
	});
}
function RowSwitch({ label, hint, on, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3 flex items-center justify-between gap-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[13px] font-medium",
			children: label
		}), hint && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "text-[11px] text-muted",
			children: hint
		})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
			on,
			onChange
		})]
	});
}
function PromptBox({ value, onChange, suggest, minH }) {
	const ref = (0, import_react.useRef)(null);
	const [hits, setHits] = (0, import_react.useState)([]);
	(0, import_react.useEffect)(() => {
		loadTags();
	}, []);
	const onPick = (tag) => {
		const el = ref.current;
		const next = insertTag(value, el?.selectionStart ?? value.length, tag);
		onChange(next.text);
		setHits([]);
		requestAnimationFrame(() => {
			el?.focus();
			el?.setSelectionRange(next.caret, next.caret);
		});
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
			ref,
			value,
			style: { minHeight: minH },
			onChange: (e) => {
				onChange(e.target.value);
				if (!suggest) {
					setHits([]);
					return;
				}
				const caret = e.target.selectionStart ?? e.target.value.length;
				setHits(suggestTags(e.target.value, caret, 8).items);
			}
		}), hits.length > 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "absolute inset-x-0 top-full z-20 mt-1 max-h-40 overflow-auto rounded-[14px] border border-line bg-card py-1 shadow-lg",
			children: hits.map((t) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				type: "button",
				className: "flex w-full items-center justify-between px-3 py-1.5 text-left text-[12px] hover:bg-dim",
				onMouseDown: (e) => e.preventDefault(),
				onClick: () => onPick(t.e),
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { children: t.e }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: t.c
				})]
			}, t.e))
		})]
	});
}
function readChunks(buf) {
	const view = new DataView(buf);
	if (view.getUint32(0) !== 2303741511 || view.getUint32(4) !== 218765834) throw new Error("不是 PNG");
	const texts = {};
	let offset = 8;
	const u8 = new Uint8Array(buf);
	while (offset + 8 < buf.byteLength) {
		const len = view.getUint32(offset);
		const type = String.fromCharCode(u8[offset + 4], u8[offset + 5], u8[offset + 6], u8[offset + 7]);
		const start = offset + 8;
		const data = u8.slice(start, start + len);
		if (type === "tEXt") {
			const nul = data.indexOf(0);
			if (nul > 0) {
				const key = new TextDecoder().decode(data.slice(0, nul));
				texts[key] = new TextDecoder("latin1").decode(data.slice(nul + 1));
			}
		} else if (type === "iTXt") {
			const nul = data.indexOf(0);
			if (nul > 0) {
				const key = new TextDecoder().decode(data.slice(0, nul));
				let i = nul + 1;
				const compressed = data[i];
				i += 2;
				i = data.indexOf(0, i) + 1;
				i = data.indexOf(0, i) + 1;
				let val;
				if (compressed) val = "";
				else val = new TextDecoder().decode(data.slice(i));
				texts[key] = val;
			}
		} else if (type === "IEND") break;
		offset = start + len + 4;
	}
	return texts;
}
function parseNaiPng(buf) {
	const texts = readChunks(buf);
	const comment = texts.Comment || texts.comment || texts.Description || "";
	const raw = comment || JSON.stringify(texts);
	let json = null;
	try {
		json = JSON.parse(comment);
	} catch {
		json = null;
	}
	const src = json ?? {};
	const v4 = src.v4_prompt?.caption;
	const v4neg = src.v4_negative_prompt?.caption;
	const charCaps = Array.isArray(v4?.char_captions) ? v4.char_captions : [];
	const ucCaps = Array.isArray(v4neg?.char_captions) ? v4neg.char_captions : [];
	const characters = charCaps.map((c, i) => ({
		prompt: String(c?.char_caption || ""),
		uc: String(ucCaps[i]?.char_caption || ""),
		x: Number(c?.centers?.[0]?.x ?? .5),
		y: Number(c?.centers?.[0]?.y ?? .5)
	}));
	return {
		prompt: (v4?.base_caption || src.prompt || texts.prompt || "").toString(),
		uc: (src.uc || src.negative_prompt || "").toString(),
		width: Number(src.width) || void 0,
		height: Number(src.height) || void 0,
		steps: Number(src.steps) || void 0,
		scale: Number(src.scale) || void 0,
		sampler: src.sampler || void 0,
		seed: Number(src.seed) || void 0,
		noiseSchedule: src.noise_schedule || void 0,
		model: src.sm ?? src.model,
		raw,
		characters: characters.length ? characters : void 0
	};
}
var HOLD_MS$1 = 400;
var drawing = false;
function PurePane() {
	const history = useApp((s) => s.history);
	const left = useCooldown(useApp((s) => s.settings).cooldownUntil);
	const [sheet, setSheet] = (0, import_react.useState)(null);
	const [idx, setIdx] = (0, import_react.useState)(0);
	const [url, setUrl] = (0, import_react.useState)(null);
	const [saved, setSaved] = (0, import_react.useState)(false);
	const [phase, setPhase] = (0, import_react.useState)(null);
	const [flipLock, setFlipLock] = (0, import_react.useState)(false);
	const followLatest = (0, import_react.useRef)(true);
	const prevDone = (0, import_react.useRef)(0);
	const done = history.filter((h) => h.status === "done" && h.blobId);
	const item = done[idx] ?? done[0];
	(0, import_react.useEffect)(() => {
		if (done.length > prevDone.current && followLatest.current) setIdx(0);
		else if (idx >= done.length && done.length > 0) setIdx(0);
		prevDone.current = done.length;
	}, [done.length, idx]);
	(0, import_react.useEffect)(() => {
		let gone = false;
		if (item?.blobId) imageUrl(item.blobId).then((u) => {
			if (!gone) setUrl(u);
		});
		else setUrl(null);
		return () => {
			gone = true;
		};
	}, [item?.blobId]);
	const go = (dir) => {
		const n = done.length;
		if (n < 2) return;
		setIdx((i) => {
			const next = (i + dir + n) % n;
			followLatest.current = next === 0;
			return next;
		});
	};
	const closeSheet = () => {
		setSheet(null);
		setFlipLock(true);
	};
	const openSheet = (s) => setSheet(s);
	(0, import_react.useEffect)(() => {
		if (!flipLock) return;
		const stop = (e) => {
			e.stopPropagation();
			e.preventDefault();
		};
		window.addEventListener("click", stop, true);
		const t = window.setTimeout(() => {
			window.removeEventListener("click", stop, true);
			setFlipLock(false);
		}, 400);
		return () => {
			window.clearTimeout(t);
			window.removeEventListener("click", stop, true);
		};
	}, [flipLock]);
	const jump = (section) => {
		useApp.getState().setUI({ paramsJump: section });
		setSheet("params");
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative flex h-full flex-col bg-stage text-on-stage",
		style: {
			background: "#141210",
			color: "#f3eee6"
		},
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "relative min-h-0 flex-1",
				children: url ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "relative h-full",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
						src: url,
						alt: "",
						className: "h-full w-full object-contain"
					}), done.length > 1 && !flipLock && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute inset-y-0 left-0 w-1/2",
						onClick: () => go(1),
						"aria-label": "上一张"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "absolute inset-y-0 right-0 w-1/2",
						onClick: () => go(-1),
						"aria-label": "下一张"
					})] })]
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "grid h-full place-items-center px-8 text-center text-[13px] text-stage-muted",
					children: "还没有图。先去参数里写提示词，再点绘一张。"
				})
			}),
			item && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex w-full flex-wrap items-center gap-x-2 gap-y-0.5 px-4 py-2 text-[11px] text-stage-muted",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => jump("model"),
						children: modelLabel(item.model)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => jump("size"),
						children: [
							item.width,
							"×",
							item.height
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
						onClick: () => jump("steps"),
						children: [item.steps, "步"]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => jump("sampler"),
						children: samplerLabel(item.sampler)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: () => jump("seed"),
						children: item.seed
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: left > 0 ? "text-danger" : "text-good",
						children: left > 0 ? `${left}s` : "可生图"
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex items-center gap-2 px-4 pb-[calc(env(safe-area-inset-bottom)+14px)] pt-2",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						className: "text-on-stage",
						onClick: () => openSheet("params"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						className: "text-on-stage",
						onClick: () => openSheet("fav"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Bookmark, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
						className: "flex-1",
						busy: Boolean(phase),
						onClick: () => {
							if (phase) return;
							drawOne(setPhase);
						},
						children: phase ? genPhaseLabel(phase) : "绘一张"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						className: "text-on-stage",
						onClick: async () => {
							if (!item?.blobId) return;
							const u = await imageUrl(item.blobId);
							if (!u) return;
							downloadBlob(await fetch(u).then((r) => r.blob()), String(item.seed));
							setSaved(true);
							setTimeout(() => setSaved(false), 1e3);
						},
						children: saved ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, { className: "size-5 text-good" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						className: "text-on-stage",
						onClick: () => openSheet("hist"),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Clock, { className: "size-5" })
					})
				]
			}),
			sheet === "params" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PureParamsSheet, { onClose: closeSheet }),
			sheet === "fav" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FavSheet, {
				currentBlob: item?.blobId,
				onClose: closeSheet
			}),
			sheet === "hist" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistSheet, {
				items: done,
				onClose: closeSheet,
				onPreview: (i) => {
					followLatest.current = i === 0;
					setIdx(i);
					closeSheet();
				}
			})
		]
	});
}
function Sheet({ title, onClose, extra, children }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-20 flex flex-col justify-end bg-overlay/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "flex-1",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex max-h-[80%] min-h-0 flex-col overflow-hidden rounded-t-[28px] bg-bg text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center justify-between gap-2 px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "text-[16px] font-semibold",
					children: title
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "flex items-center gap-2",
					children: [extra, /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						onClick: onClose,
						"aria-label": "关闭",
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
					})]
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-4 pb-4",
				children
			})]
		})]
	});
}
function FavSheet({ currentBlob, onClose }) {
	const favorites = useApp((s) => s.favorites);
	const [openId, setOpenId] = (0, import_react.useState)(null);
	const current = favorites.find((f) => f.id === openId);
	if (current) return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FavDetail, {
		fav: current,
		currentBlob,
		onBack: () => setOpenId(null),
		onClose,
		onFill: () => void 0
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		title: "收藏",
		onClose,
		extra: /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "rounded-full border border-line bg-card px-3 py-1 text-[12px]",
			onClick: () => useApp.getState().addFavorite(currentBlob),
			children: "保存当前"
		}),
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex flex-col gap-2",
			children: [favorites.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
				className: "flex items-center gap-3 rounded-[18px] border border-line bg-card px-3 py-2 text-left",
				onClick: () => setOpenId(f.id),
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RatioThumb, {
						blobId: f.blobId,
						w: f.params.width,
						h: f.params.height
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "min-w-0 flex-1 truncate text-[14px]",
						children: f.name
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
						className: "text-[16px] text-muted",
						children: "›"
					})
				]
			}, f.id)), favorites.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "py-10 text-center text-[13px] text-muted",
				children: "还没有收藏。点右上角保存当前参数。"
			})]
		})
	});
}
function FavDetail({ fav, currentBlob, onBack, onClose, onFill }) {
	const [name, setName] = (0, import_react.useState)(fav.name);
	(0, import_react.useEffect)(() => setName(fav.name), [fav.id, fav.name]);
	const p = fav.params;
	const chars = p.characters.filter((c) => c.prompt.trim());
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-20 flex flex-col justify-end bg-overlay/50",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "flex-1",
			onClick: onClose
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "flex max-h-[80%] min-h-0 flex-col overflow-hidden rounded-t-[28px] bg-bg text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center justify-between px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex items-center gap-1 text-[14px]",
					onClick: onBack,
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronLeft, { className: "size-4" }), " 返回"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto px-4 pb-5",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mb-1 text-[13px] text-muted",
						children: "名称"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
						value: name,
						onChange: (e) => setName(e.target.value),
						onBlur: () => {
							const t = name.trim() || "未命名";
							setName(t);
							if (t !== fav.name) useApp.getState().patchFavorite(fav.id, { name: t });
						}
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 flex gap-2",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "h-11 flex-1 rounded-full bg-ink text-[14px] font-medium text-bg",
							onClick: () => {
								useApp.getState().setPureParams(structuredClone(fav.params));
								useApp.getState().toast("已填入");
								onFill();
							},
							children: "填入"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "h-11 flex-1 rounded-full bg-danger text-[14px] font-medium text-white",
							onClick: () => {
								useApp.getState().deleteFavorite(fav.id);
								onBack();
							},
							children: "删除"
						})]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "正面提示词",
						text: promptPreview(p) || "（空）"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: "负面提示词",
						text: p.negative || "（空）"
					}),
					chars.length > 0 && chars.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Field, {
						label: c.name ? `角色提示词 · ${c.name}` : `角色提示词 ${i + 1}`,
						text: c.prompt
					}, c.id)),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-3 text-[12px] leading-5 text-muted",
						children: [
							modelLabel(p.model),
							" · ",
							p.width,
							"×",
							p.height,
							" · ",
							p.steps,
							"步 · ",
							samplerLabel(p.sampler),
							" · 种子 ",
							p.seed ?? "随机",
							" · CFG ",
							p.scale
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "mt-4 mb-2 h-11 w-full rounded-full border border-line bg-card text-[14px] disabled:opacity-40",
						disabled: !currentBlob,
						onClick: () => {
							if (!currentBlob) return;
							useApp.getState().setFavoriteThumb(fav.id, currentBlob);
						},
						children: "应用当前图片为配图"
					})
				]
			})]
		})]
	});
}
function Field({ label, text }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mt-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "mb-1 text-[12px] text-muted",
			children: label
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
			className: "whitespace-pre-wrap rounded-[16px] bg-surface px-3.5 py-3 text-[13px] leading-relaxed",
			children: text
		})]
	});
}
function RatioThumb({ blobId, w, h }) {
	const [u, setU] = (0, import_react.useState)(null);
	(0, import_react.useEffect)(() => {
		if (blobId) imageUrl(blobId).then(setU);
		else setU(null);
	}, [blobId]);
	const ratio = w > 0 && h > 0 ? w / h : 832 / 1216;
	const height = 72;
	const width = Math.max(40, Math.min(72, Math.round(height * ratio)));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "shrink-0 overflow-hidden rounded-[8px] bg-dim",
		style: {
			width,
			height
		},
		children: u ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
			src: u,
			alt: "",
			className: "size-full object-contain"
		}) : null
	});
}
function HistSheet({ items, onClose, onPreview }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sheet, {
		title: "历史",
		onClose,
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "grid grid-cols-3 gap-2",
			children: [items.map((h, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(HistCell, {
				item: h,
				onPreview: () => onPreview(i)
			}, h.id)), items.length === 0 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "col-span-3 py-10 text-center text-[13px] text-muted",
				children: "还没有历史"
			})]
		})
	});
}
function HistCell({ item, onPreview }) {
	const [u, setU] = (0, import_react.useState)(null);
	const hold = (0, import_react.useRef)(null);
	const held = (0, import_react.useRef)(false);
	(0, import_react.useEffect)(() => {
		if (item.blobId) imageUrl(item.blobId).then(setU);
	}, [item.blobId]);
	const clear = () => {
		if (hold.current) window.clearTimeout(hold.current);
		hold.current = null;
	};
	const onDown = (e) => {
		held.current = false;
		clear();
		hold.current = window.setTimeout(() => {
			held.current = true;
			useApp.getState().deleteHistory(item.id);
		}, HOLD_MS$1);
		e.currentTarget.setPointerCapture(e.pointerId);
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative overflow-hidden rounded-[8px] bg-dim",
		onPointerDown: onDown,
		onPointerUp: () => {
			const was = held.current;
			clear();
			if (!was) onPreview();
		},
		onPointerCancel: clear,
		onContextMenu: (e) => e.preventDefault(),
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "aspect-square",
				children: u && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("img", {
					src: u,
					alt: "",
					className: "size-full object-cover"
				})
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "pointer-events-none absolute inset-x-0 bottom-0 bg-gradient-to-t from-black/70 to-transparent px-1.5 pb-1.5 pt-6 text-[10px] leading-tight text-white",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: modelShort(item.model) }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { children: samplerShort(item.sampler) })]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "absolute bottom-1 right-1 z-10 rounded-full bg-black/55 px-1.5 py-0.5 text-[10px] text-white",
				onClick: (e) => {
					e.stopPropagation();
					const p = item.params;
					if (p) useApp.getState().setPureParams(structuredClone(p));
					else useApp.getState().setPureParams({
						model: item.model,
						width: item.width,
						height: item.height,
						steps: item.steps,
						sampler: item.sampler,
						seed: item.seed,
						negative: item.negative,
						promptMid: item.prompt,
						merged: true
					});
					useApp.getState().toast("已应用参数");
				},
				onPointerDown: (e) => e.stopPropagation(),
				onPointerUp: (e) => e.stopPropagation(),
				children: "应用参数"
			})
		]
	});
}
function PureParamsSheet({ onClose }) {
	const chat = fakePureChat(useApp((s) => s.pureParams), useApp((s) => s.settings.grokModelId));
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "absolute inset-0 z-30 flex flex-col bg-overlay/40",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-10 flex min-h-0 flex-1 flex-col overflow-hidden rounded-t-[28px] bg-bg text-ink",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "flex shrink-0 items-center justify-between px-4 py-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "font-serif text-[18px]",
					children: "参数设置"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					onClick: onClose,
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "min-h-0 flex-1 overflow-y-auto",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "px-4",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ReadMeta, {})
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamsPane, {
					chat,
					mode: "pure"
				})]
			})]
		})
	});
}
function ReadMeta() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
		className: "mb-3 flex h-11 cursor-pointer items-center justify-center gap-2 rounded-full border border-line bg-card text-[13px]",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ScanSearch, { className: "size-4" }),
			"看图识参",
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
				type: "file",
				accept: "image/png,image/jpeg,.png,.jpg,.jpeg",
				className: "hidden",
				onChange: async (e) => {
					const file = e.target.files?.[0];
					e.target.value = "";
					if (!file) return;
					try {
						const meta = parseNaiPng(await file.arrayBuffer());
						if (!meta.prompt) {
							useApp.getState().toast("没读到 NovelAI 参数");
							return;
						}
						const p = useApp.getState().pureParams;
						const known = NAI_MODELS.some((m) => m.id === meta.model || m.wire === meta.model);
						const chars = meta.characters?.length ? meta.characters.map((c, i) => ({
							id: p.characters[i]?.id || `c${i}`,
							name: p.characters[i]?.name || `角色${i + 1}`,
							enabled: true,
							prompt: c.prompt,
							uc: c.uc,
							x: c.x,
							y: c.y
						})) : p.characters;
						useApp.getState().setPureParams({
							merged: true,
							promptMid: meta.prompt,
							promptFront: "",
							promptBack: "",
							negative: meta.uc || p.negative,
							width: meta.width || p.width,
							height: meta.height || p.height,
							steps: meta.steps || p.steps,
							scale: meta.scale || p.scale,
							seed: meta.seed ?? p.seed,
							sampler: meta.sampler || p.sampler,
							noiseSchedule: meta.noiseSchedule || p.noiseSchedule,
							model: known ? NAI_MODELS.find((m) => m.id === meta.model || m.wire === meta.model)?.id ?? p.model : p.model,
							characters: chars
						});
						useApp.getState().toast("已识别参数");
					} catch {
						useApp.getState().toast("识别失败，不是带参数的 NAI PNG");
					}
				}
			})
		]
	});
}
async function drawOne(setPhase) {
	const params = useApp.getState().pureParams;
	const settings = useApp.getState().settings;
	if (!settings.naiKey) {
		useApp.getState().toast("还没连接 NAI");
		useApp.getState().setUI({ connection: true });
		return;
	}
	if (drawing) return;
	drawing = true;
	const seed = params.seedLocked && params.seed != null ? params.seed : randomSeed();
	setPhase("uploading");
	await afterPaint();
	try {
		const result = await generateNai({
			chat: fakePureChat(params, settings.grokModelId),
			grokTail: "",
			seed,
			apiKey: settings.naiKey,
			baseUrl: settings.naiBase,
			onStart: () => setPhase("generating"),
			onReceiving: () => {
				useApp.getState().setCooldown(Date.now() + COOLDOWN_MS);
				setPhase("receiving");
			}
		});
		const rec = {
			id: uid("h_"),
			prompt: result.prompt,
			negative: params.negative,
			seed: result.seed,
			model: params.model,
			width: params.width,
			height: params.height,
			steps: params.steps,
			sampler: params.sampler,
			params: structuredClone(params),
			blobId: result.blobId,
			createdAt: Date.now(),
			status: "done"
		};
		useApp.getState().addHistory(rec);
	} catch (e) {
		useApp.getState().toast(e instanceof Error ? e.message : "生图失败");
	} finally {
		drawing = false;
		setPhase(null);
	}
}
function RoleEditor({ chat, mode }) {
	const grok = useApp((s) => s.settings.grokModelId);
	const cards = useApp((s) => s.cards);
	const [busy, setBusy] = (0, import_react.useState)(null);
	const [polished, setPolished] = (0, import_react.useState)(false);
	const [charSel, setCharSel] = (0, import_react.useState)(0);
	const patch = (p) => useApp.getState().patchChat(chat.id, p);
	const char = chat.characters[charSel] ?? chat.characters[0];
	const autoPolish = useApp((s) => s.ui.autoPolish);
	const polishJob = useApp((s) => s.ui.polishJob);
	const busyRef = (0, import_react.useRef)(false);
	const locked = !!busy;
	const fieldBusyLabel = busy?.kind === "field" ? FIELD_LABELS[busy.key] || busy.key : "";
	const syncChars = (characters, isMulti = chat.isMulti) => patch({
		characters,
		isMulti,
		imageParams: syncCharsFromRole(chat.imageParams, characters, isMulti)
	});
	const runPolish = async (instruction, mark = "all") => {
		if (busyRef.current) return;
		busyRef.current = true;
		setBusy({ kind: mark });
		try {
			const json = await polishAll(useApp.getState().chats.find((c) => c.id === chat.id) ?? chat, grok, instruction);
			useApp.getState().patchChat(chat.id, (c) => {
				const merged = mergePolish(c, json);
				return {
					...c,
					...merged,
					imageParams: syncCharsFromRole(c.imageParams, merged.characters, c.isMulti),
					updatedAt: Date.now()
				};
			});
			setPolished(true);
			useApp.getState().toast(instruction?.trim() ? "已按要求修改" : "已完善设定");
		} catch (e) {
			useApp.getState().toast(e instanceof Error ? e.message : "完善失败");
		} finally {
			busyRef.current = false;
			setBusy(null);
		}
	};
	const runField = async (key, charId, instruction) => {
		if (busyRef.current) return;
		busyRef.current = true;
		setBusy({
			kind: "field",
			key,
			charId
		});
		try {
			const text = await polishField(useApp.getState().chats.find((c) => c.id === chat.id) ?? chat, grok, key, instruction, charId);
			useApp.getState().patchChat(chat.id, (c) => ({
				...applyRoleField(c, key, text, charId),
				updatedAt: Date.now()
			}));
			useApp.getState().toast(`已更新${FIELD_LABELS[key] || key}`);
		} catch (e) {
			useApp.getState().toast(e instanceof Error ? e.message : "生成失败");
		} finally {
			busyRef.current = false;
			setBusy(null);
		}
	};
	const openPersonalize = (key, charId) => {
		if (locked) return;
		useApp.getState().setUI({ fieldEdit: {
			key,
			charId,
			text: ""
		} });
	};
	(0, import_react.useEffect)(() => {
		if (!autoPolish || mode !== "create") return;
		useApp.getState().setUI({ autoPolish: false });
		runPolish();
	}, [autoPolish]);
	(0, import_react.useEffect)(() => {
		if (!polishJob || polishJob.chatId !== chat.id) return;
		useApp.getState().setUI({ polishJob: null });
		if (polishJob.kind === "field" && polishJob.key) runField(polishJob.key, polishJob.charId, polishJob.instruction);
		else runPolish(polishJob.instruction, "personalize");
	}, [polishJob]);
	const startChat = async () => {
		const name = chat.characters.map((c) => c.name).filter(Boolean).join("、") || chat.name || "未命名";
		useApp.getState().patchChat(chat.id, (c) => ({
			...c,
			name,
			isDraft: false,
			imageParams: syncCharsFromRole(c.imageParams, c.characters, c.isMulti)
		}));
		useApp.getState().commitChat(chat.id);
		if (mode === "create") {
			const { sendOpening } = await import("./chat-actions-Ci360qiM.mjs");
			sendOpening(chat.id);
		} else useApp.getState().toast("设定已保存");
	};
	const nameBlock = char ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldBlock, {
		label: "名字",
		hint: "可空，让 Grok 起",
		value: char.name,
		placeholder: PLACEHOLDERS.name,
		single: true,
		busy: busy?.kind === "field" && busy.key === "name" && busy.charId === char.id,
		locked,
		onChange: (v) => patch({ characters: chat.characters.map((c) => c.id === char.id ? {
			...c,
			name: v
		} : c) }),
		onRegen: () => runField("name", char.id),
		onPersonal: () => openPersonalize("name", char.id)
	}) : null;
	const overviewBlock = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldBlock, {
		label: "要求总览",
		hint: "可空。写了就是最高优先。例如：回复尽量详尽生动，不要简略。",
		value: chat.overview,
		placeholder: PLACEHOLDERS.overview,
		busy: busy?.kind === "field" && busy.key === "overview",
		locked,
		onChange: (v) => patch({ overview: v }),
		onRegen: () => runField("overview"),
		onPersonal: () => openPersonalize("overview")
	});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "h-full overflow-y-auto px-4 pb-56 pt-3 scroll-thin",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 text-[11px] tracking-[0.14em] text-muted",
				children: mode === "create" ? "NEW ROLE" : "EDIT ROLE"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("h1", {
				className: "mb-1 text-[20px] font-semibold",
				children: mode === "create" ? "写下她，再交给 Grok 补全" : "修改设定"
			}),
			mode === "edit" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mb-4 text-[12px] text-muted",
				children: "保存后立刻对之后的对话生效。取消则不改动。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-3 flex items-end gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
					className: "inline-flex shrink-0 flex-col items-center gap-0.5 px-1 pb-1.5 text-[10px] text-muted",
					onClick: () => useApp.getState().setUI({ saveCardOpen: true }),
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Download, { className: "size-3.5" }), "保存为角色卡"]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "min-w-0 flex-1",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CardSelect, { onPick: (id) => {
						const card = cards.find((c) => c.id === id);
						if (card) useApp.getState().applyCard(chat.id, card, chat.isMulti ? charSel : void 0);
					} })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-4 flex items-center gap-2 text-[14px]",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("label", {
					className: "flex items-center gap-2",
					children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
							className: `grid size-5 place-items-center rounded-full border ${chat.isMulti ? "border-primary bg-primary text-on-primary" : "border-line-strong bg-card"}`,
							children: chat.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "text-[11px] leading-none",
								children: "✓"
							})
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
							type: "checkbox",
							className: "sr-only",
							checked: chat.isMulti,
							onChange: (e) => {
								const on = e.target.checked;
								const characters = on ? chat.characters.length >= 2 ? chat.characters : [...chat.characters, emptyCharacter(2)] : [chat.characters[0] ?? emptyCharacter(1)];
								setCharSel(0);
								syncChars(characters, on);
							}
						}),
						"多人"
					]
				}), chat.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
					className: "ml-auto inline-flex items-center gap-1 text-[13px] text-muted",
					children: ["人数", /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
						className: "inline-flex items-center rounded-full border border-line bg-card",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "px-2 py-1",
								onClick: () => {
									const characters = [...chat.characters, emptyCharacter(chat.characters.length + 1)];
									syncChars(characters, true);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronUp, { className: "size-3.5" })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
								className: "px-2 text-ink",
								children: chat.characters.length
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								type: "button",
								className: "px-2 py-1",
								disabled: chat.characters.length <= 2,
								onClick: () => {
									const characters = chat.characters.slice(0, -1);
									setCharSel(0);
									syncChars(characters, true);
								},
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChevronDown, { className: "size-3.5" })
							})
						]
					})]
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "AI 版本" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatModelSelect, {
					align: "left",
					className: "w-full rounded-full border border-line bg-card"
				})]
			}),
			!chat.isMulti && nameBlock,
			overviewBlock,
			chat.isMulti && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, { children: "角色选择" }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ExpandSelect, {
					value: String(charSel),
					options: chat.characters.map((c, i) => ({
						id: String(i),
						label: `角色${i + 1}${c.name ? ":" + c.name : ""}`
					})),
					onChange: (id) => setCharSel(Number(id)),
					align: "left"
				})]
			}),
			char && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: chat.isMulti ? "rounded-[22px] border border-line/80 bg-card/50 p-1" : "",
				children: [
					chat.isMulti && nameBlock,
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldBlock, {
						label: "人设",
						hint: "她是谁：性格、职业或身份、口头禅、和我的关系……外貌请写在下面那栏。",
						value: char.persona,
						placeholder: PLACEHOLDERS.persona,
						busy: busy?.kind === "field" && busy.key === "persona" && busy.charId === char.id,
						locked,
						onChange: (v) => patch({ characters: chat.characters.map((c) => c.id === char.id ? {
							...c,
							persona: v
						} : c) }),
						onRegen: () => runField("persona", char.id),
						onPersonal: () => openPersonalize("persona", char.id)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldBlock, {
						label: "说话方式",
						hint: "语气、口癖、人称、句子长短。例如：软软的、会把「……」拖长。",
						value: char.speech,
						placeholder: PLACEHOLDERS.speech,
						busy: busy?.kind === "field" && busy.key === "speech" && busy.charId === char.id,
						locked,
						onChange: (v) => patch({ characters: chat.characters.map((c) => c.id === char.id ? {
							...c,
							speech: v
						} : c) }),
						onRegen: () => runField("speech", char.id),
						onPersonal: () => openPersonalize("speech", char.id)
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldBlock, {
						label: "外貌备忘",
						hint: "用生图提示词书写。发型发色瞳色体型固定服装写这里。其他栏不用再写外貌。",
						value: char.appearance,
						placeholder: PLACEHOLDERS.appearance,
						busy: busy?.kind === "field" && busy.key === "appearance" && busy.charId === char.id,
						locked,
						onChange: (v) => patch({ characters: chat.characters.map((c) => c.id === char.id ? {
							...c,
							appearance: v
						} : c) }),
						onRegen: () => runField("appearance", char.id),
						onPersonal: () => openPersonalize("appearance", char.id)
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldBlock, {
				label: "开场场景",
				hint: "现在在哪里、在做什么、气氛如何。",
				value: chat.opening,
				placeholder: PLACEHOLDERS.opening,
				busy: busy?.kind === "field" && busy.key === "opening",
				locked,
				onChange: (v) => patch({ opening: v }),
				onRegen: () => runField("opening"),
				onPersonal: () => openPersonalize("opening")
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mb-3",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mb-2 flex items-center justify-between",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "text-[13px] font-medium",
						children: "状态栏"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "mt-0.5 text-[11px] text-muted",
						children: "关掉就折叠。打开后，每句回复末尾都会更新这份状态。开启内容按固定骨架，可改冒号后的描述。"
					})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Switch, {
						on: chat.statusBarOn,
						onChange: (v) => patch({
							statusBarOn: v,
							statusBar: chat.statusBar?.trim() ? chat.statusBar : DEFAULT_STATUS_BAR
						})
					})]
				}), chat.statusBarOn && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
					className: "min-h-[200px] font-mono text-[12px]",
					value: chat.statusBar,
					onChange: (e) => patch({ statusBar: e.target.value })
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Extras, {
				extras: chat.extras,
				onChange: (extras) => patch({ extras })
			}),
			mode === "edit" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
				className: "mb-3",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
						hint: "聊久了会把更早的剧情压成备忘，下一轮当事实用。聊天里看不见。可改、可重总结、可清空。",
						children: "长期记忆"
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
						className: "min-h-[120px]",
						value: chat.memory,
						placeholder: "还没有长期记忆。对话变长后会自动整理。",
						onChange: (e) => patch({ memory: e.target.value })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "mt-2 flex gap-2",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
								className: "h-10 text-[13px]",
								onClick: () => useApp.getState().toast("已保存"),
								children: "保存"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
								className: "h-10 text-[13px]",
								onClick: async () => {
									if (locked) return;
									setBusy({ kind: "mem" });
									try {
										const { summarizeMemory } = await import("../_libs/_.mjs").then((n) => n.n);
										const mem = await summarizeMemory(chat, grok);
										patch({
											memory: mem,
											memoryUntil: chat.messages.length
										});
										useApp.getState().toast("已重新总结");
									} finally {
										setBusy(null);
									}
								},
								children: busy?.kind === "mem" ? "总结中…" : "重新总结"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
								className: "h-10 text-[13px]",
								onClick: () => patch({
									memory: "",
									memoryUntil: 0
								}),
								children: "清空"
							})
						]
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", { className: "pointer-events-none h-4" }),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "fixed inset-x-0 bottom-0 z-20 mx-auto max-w-lg bg-gradient-to-t from-bg via-bg to-transparent px-4 pb-[calc(env(safe-area-inset-bottom)+12px)] pt-4",
				children: [
					mode === "create" && !polished && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
						busy: busy?.kind === "all" || busy?.kind === "field",
						disabled: locked && busy?.kind !== "all" && busy?.kind !== "field",
						onClick: () => {
							if (locked) return;
							runPolish();
						},
						children: busy?.kind === "field" ? `完善中(${fieldBusyLabel})` : busy?.kind === "all" ? "完善中" : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4" }), " 让 Grok 完善设定"] })
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
						className: "mt-2",
						disabled: locked,
						onClick: () => void startChat(),
						children: "跳过，开始聊天"
					})] }),
					mode === "create" && polished && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
							busy: busy?.kind === "field",
							disabled: locked,
							onClick: () => {
								if (locked) return;
								startChat();
							},
							children: busy?.kind === "field" ? `完善中(${fieldBusyLabel})` : "可以了，开始聊天"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
							className: "mt-2",
							disabled: locked && busy?.kind !== "all",
							onClick: () => void runPolish(),
							children: busy?.kind === "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " 完善中"] }) : "让 Grok 完善设定"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
							className: "mt-2",
							disabled: locked && busy?.kind !== "personalize",
							onClick: () => openPersonalize("all"),
							children: busy?.kind === "personalize" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " 完善中"] }) : "让 Grok 个性化修改"
						})
					] }),
					mode === "edit" && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
							busy: busy?.kind === "field",
							disabled: locked,
							onClick: () => {
								if (locked) return;
								startChat();
							},
							children: busy?.kind === "field" ? `完善中(${fieldBusyLabel})` : "确认保存"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
							className: "mt-2",
							disabled: locked && busy?.kind !== "all",
							onClick: () => void runPolish(),
							children: busy?.kind === "all" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " 完善中"] }) : "让 Grok 完善设定"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
							className: "mt-2",
							disabled: locked && busy?.kind !== "personalize",
							onClick: () => openPersonalize("all"),
							children: busy?.kind === "personalize" ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }), " 完善中"] }) : "让 Grok 个性化修改"
						}),
						/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "mt-2 w-full py-2 text-[13px] text-muted",
							onClick: () => useApp.getState().cancelEdit(),
							children: "取消"
						})
					] }),
					mode === "create" && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "mt-2 w-full py-2 text-[13px] text-muted",
						onClick: () => useApp.getState().cancelDraft(),
						children: "取消"
					})
				]
			})
		]
	});
}
function FieldBlock({ label, hint, value, placeholder, onChange, onRegen, onPersonal, busy, locked, single }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
		className: "mb-3",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldLabel, {
			hint,
			right: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("span", {
				className: "flex gap-1",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "grid size-8 place-items-center rounded-full hover:bg-dim disabled:opacity-40",
					onClick: onRegen,
					disabled: locked,
					title: "重新生成",
					children: busy ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LoaderCircle, { className: "size-4 animate-spin" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RefreshCw, { className: "size-4 text-muted" })
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "grid size-8 place-items-center rounded-full hover:bg-dim disabled:opacity-40",
					onClick: onPersonal,
					disabled: locked,
					title: "个性化",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sparkles, { className: "size-4 text-muted" })
				})]
			}),
			children: label
		}), single ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
			value,
			placeholder,
			onChange: (e) => onChange(e.target.value)
		}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
			value,
			placeholder,
			onChange: (e) => onChange(e.target.value)
		})]
	});
}
function Extras({ extras, onChange }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-3",
		children: [extras.map((e, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Card, {
			className: "mb-2",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-1 flex items-center justify-between",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "text-[13px] font-medium",
					children: ["新增", i + 1]
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "text-danger",
					onClick: () => onChange(extras.filter((x) => x.id !== e.id)),
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-4" })
				})]
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
				value: e.body,
				onChange: (ev) => onChange(extras.map((x) => x.id === e.id ? {
					...x,
					body: ev.target.value
				} : x))
			})]
		}, e.id)), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
			className: "flex items-center gap-1 px-2 py-2 text-[13px] text-primary",
			onClick: () => onChange([...extras, {
				id: uid("ex_"),
				body: ""
			}]),
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " 新增"]
		})]
	});
}
function CardSelect({ onPick }) {
	const ordered = useApp((s) => s.cards).slice().sort((a, b) => a.order - b.order);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(LibraryDrawer, {
		className: "flex-1",
		label: "角色卡选择",
		items: ordered.map((c) => ({
			id: c.id,
			name: c.name
		})),
		onApply: onPick,
		onDelete: (id) => useApp.getState().deleteCard(id),
		onReorder: (ids) => useApp.getState().reorderCards(ids)
	});
}
var HOLD_MS = 420;
function Sidebar() {
	const open = useApp((s) => s.ui.sidebar);
	const setUI = useApp((s) => s.setUI);
	const folders = useApp((s) => s.folders);
	const chats = useApp((s) => s.chats);
	const currentId = useApp((s) => s.currentId);
	const ui = useApp((s) => s.ui);
	const theme = useApp((s) => s.settings.theme);
	const { foldersSorted, root, inFolder } = listedChats(folders, chats);
	const [draftOrder, setDraftOrder] = (0, import_react.useState)(null);
	const [draggingId, setDraggingId] = (0, import_react.useState)(null);
	const listRef = (0, import_react.useRef)(null);
	const dragRef = (0, import_react.useRef)(null);
	const draftRef = (0, import_react.useRef)(null);
	const lastY = (0, import_react.useRef)(0);
	const rafRef = (0, import_react.useRef)(0);
	draftRef.current = draftOrder;
	const visualFolders = draftOrder ? [...foldersSorted].sort((a, b) => draftOrder.indexOf(a.id) - draftOrder.indexOf(b.id)) : foldersSorted;
	const visualRoot = draftOrder ? [...root].sort((a, b) => draftOrder.indexOf(a.id) - draftOrder.indexOf(b.id)) : root;
	const visualIn = (fid) => {
		const list = inFolder(fid);
		if (!draftOrder) return list;
		return [...list].sort((a, b) => draftOrder.indexOf(a.id) - draftOrder.indexOf(b.id));
	};
	const allOrderIds = () => [
		...foldersSorted.map((f) => f.id),
		...foldersSorted.flatMap((f) => inFolder(f.id).map((c) => c.id)),
		...root.map((c) => c.id)
	];
	(0, import_react.useEffect)(() => {
		if (!ui.sortMode) return;
		const applyY = (y) => {
			const d = dragRef.current;
			const draft = draftRef.current;
			if (!d || !draft) return;
			const rows = listRef.current?.querySelectorAll(`[data-drag-group="${d.group}"]`);
			if (!rows?.length) return;
			const groupIds = Array.from(rows).map((el) => el.dataset.rowId).filter((id) => Boolean(id));
			const from = groupIds.indexOf(d.id);
			const to = indexFromY(rows, y);
			if (from < 0 || from === to) return;
			const nextGroup = moveId(groupIds, d.id, to);
			const out = [...draft];
			const slots = groupIds.map((g) => out.indexOf(g));
			nextGroup.forEach((g, i) => {
				if (slots[i] >= 0) out[slots[i]] = g;
			});
			draftRef.current = out;
			setDraftOrder(out);
		};
		const tick = () => {
			rafRef.current = 0;
			if (!dragRef.current) return;
			const el = listRef.current;
			const dy = el ? autoScrollNearEdge(el, lastY.current) : 0;
			applyY(lastY.current);
			if (dy) rafRef.current = requestAnimationFrame(tick);
		};
		const onMove = (e) => {
			if (!dragRef.current) return;
			e.preventDefault();
			lastY.current = e.clientY;
			const el = listRef.current;
			const dy = el ? autoScrollNearEdge(el, e.clientY) : 0;
			applyY(e.clientY);
			if (dy && !rafRef.current) rafRef.current = requestAnimationFrame(tick);
		};
		const onUp = () => {
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
			rafRef.current = 0;
			if (listRef.current) listRef.current.style.touchAction = "";
			if (!dragRef.current) return;
			dragRef.current = null;
			setDraggingId(null);
		};
		const onTouchMove = (e) => {
			if (!dragRef.current) return;
			e.preventDefault();
		};
		window.addEventListener("pointermove", onMove, { passive: false });
		window.addEventListener("pointerup", onUp);
		window.addEventListener("pointercancel", onUp);
		window.addEventListener("touchmove", onTouchMove, { passive: false });
		return () => {
			window.removeEventListener("pointermove", onMove);
			window.removeEventListener("pointerup", onUp);
			window.removeEventListener("pointercancel", onUp);
			window.removeEventListener("touchmove", onTouchMove);
			if (rafRef.current) cancelAnimationFrame(rafRef.current);
		};
	}, [ui.sortMode]);
	const beginDrag = (e, id, group) => {
		e.preventDefault();
		e.stopPropagation();
		dragRef.current = {
			id,
			group
		};
		setDraggingId(id);
		lastY.current = e.clientY;
		if (listRef.current) listRef.current.style.touchAction = "none";
		try {
			e.currentTarget.setPointerCapture(e.pointerId);
		} catch {}
	};
	const beginSort = () => {
		setDraftOrder(allOrderIds());
		setUI({ sortMode: true });
	};
	const exitSidebar = () => {
		setDraftOrder(null);
		setUI({
			sidebar: false,
			selectMode: false,
			selected: [],
			sortMode: false,
			menuId: null
		});
	};
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "absolute inset-0 z-40 flex",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("aside", {
			className: "relative flex h-full w-[86%] max-w-[360px] flex-col bg-bg shadow-[8px_0_32px_rgb(44_40_36/0.12)]",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
					className: "px-4 pb-2 pt-[calc(env(safe-area-inset-top)+14px)]",
					children: [ui.sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-[15px] font-medium text-primary",
							onClick: () => {
								setDraftOrder(null);
								setUI({ sortMode: false });
							},
							children: "取消"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
							className: "text-[15px] font-medium text-primary",
							onClick: () => {
								useApp.getState().reorder(draftOrder ?? allOrderIds());
								setDraftOrder(null);
								setUI({ sortMode: false });
							},
							children: "完成"
						})]
					}) : ui.selectMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "shrink-0 text-[15px] font-medium text-primary",
								onClick: () => {
									const ids = [...folders.map((f) => f.id), ...chats.filter((c) => !c.isDraft).map((c) => c.id)];
									setUI({ selected: ids });
								},
								children: "全选"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
								className: "min-w-0 flex-1 px-2 text-center text-[14px] text-muted",
								children: [
									"已选择 ",
									ui.selected.length,
									" 项"
								]
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
								className: "shrink-0 px-2 text-[15px] font-medium text-primary",
								onClick: () => setUI({
									selectMode: false,
									selected: [],
									sortMode: false
								}),
								children: "取消"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								className: "-mr-2",
								onClick: exitSidebar,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
							})
						]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mt-2 text-left text-[13px] text-muted",
						onClick: beginSort,
						children: "手动排序"
					})] }) : /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-start justify-between",
						children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "font-serif text-[22px] tracking-wide",
							children: "绘语new"
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
							className: "mt-0.5 text-[12px] text-muted",
							children: "角色与故事"
						})] }), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
							className: "flex items-center",
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								className: "text-muted",
								onClick: () => useApp.getState().setSettings({ theme: theme === "dark" ? "light" : "dark" }),
								"aria-label": "切换主题",
								children: theme === "dark" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Moon, { className: "size-5" }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sun, { className: "size-5" })
							}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
								onClick: exitSidebar,
								children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(X, { className: "size-5" })
							})]
						})]
					}), ui.sortMode && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
						className: "mt-3 text-[12px] leading-relaxed text-muted",
						children: "文件夹在上、聊天在下。不按横杠时可滑动，拖到边缘会跟着滚。"
					})]
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					ref: listRef,
					className: cn("flex-1 overflow-y-auto px-4 scroll-thin hold-none", ui.selectMode && !ui.sortMode ? "pb-36" : "pb-6"),
					children: [
						!ui.sortMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(import_jsx_runtime.Fragment, { children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "mb-2 flex h-12 w-full items-center justify-center gap-2 rounded-full bg-primary text-[15px] font-medium text-on-primary disabled:opacity-40",
							disabled: ui.selectMode,
							onClick: () => useApp.getState().newDraft(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Plus, { className: "size-4" }), " 新建聊天"]
						}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
							className: "mb-4 flex h-12 w-full items-center justify-center gap-2 rounded-full border border-line bg-card text-[14px] disabled:opacity-40",
							disabled: ui.selectMode,
							onClick: () => useApp.getState().addFolder(),
							children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderPlus, { className: "size-4" }), " 创建文件夹"]
						})] }),
						visualFolders.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderRow, {
							id: f.id,
							name: f.name,
							starred: f.starred,
							collapsed: f.collapsed,
							count: inFolder(f.id).length,
							dragging: draggingId === f.id,
							dragGroup: "folders",
							onGripDown: (e) => beginDrag(e, f.id, "folders"),
							children: !f.collapsed && visualIn(f.id).map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatRow, {
								id: c.id,
								nested: true,
								active: c.id === currentId,
								dragging: draggingId === c.id,
								dragGroup: `folder:${f.id}`,
								onGripDown: (e) => beginDrag(e, c.id, `folder:${f.id}`)
							}, c.id))
						}, f.id)),
						visualRoot.map((c) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatRow, {
							id: c.id,
							active: c.id === currentId,
							dragging: draggingId === c.id,
							dragGroup: "root",
							onGripDown: (e) => beginDrag(e, c.id, "root")
						}, c.id))
					]
				}),
				ui.selectMode && !ui.sortMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "absolute inset-x-0 bottom-0 border-t border-line bg-bg px-1 pt-2 pb-[calc(env(safe-area-inset-bottom)+10px)]",
					children: [ui.selected.filter((id) => chats.some((c) => c.id === id && !c.isDraft)).length >= 2 && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						type: "button",
						className: "mx-3 mb-2 w-[calc(100%-1.5rem)] rounded-full border border-line bg-card py-2.5 text-[13px] font-medium",
						onClick: () => setUI({ multiCreate: ui.selected.filter((id) => chats.some((c) => c.id === id && !c.isDraft)) }),
						children: "创建多人聊天"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex justify-around",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelAct, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(FolderInput, { className: "size-5" }),
								label: "移动",
								onClick: () => setUI({ moveOpen: true })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelAct, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Copy, { className: "size-5" }),
								label: "复制",
								onClick: () => useApp.getState().copySelected()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelAct, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Trash2, { className: "size-5" }),
								label: "删除",
								danger: true,
								onClick: () => setUI({ confirm: {
									title: "删除所选",
									body: "聊天记录会一起删掉。",
									danger: true,
									onOk: () => useApp.getState().deleteSelected()
								} })
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelAct, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-5" }),
								label: "星标",
								onClick: () => useApp.getState().starSelected()
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SelAct, {
								icon: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Pencil, { className: "size-5" }),
								label: "重命名",
								disabled: ui.selected.length !== 1,
								onClick: () => {
									const id = ui.selected[0];
									const chat = chats.find((c) => c.id === id);
									const folder = folders.find((f) => f.id === id);
									setUI({ rename: {
										id,
										kind: folder ? "folder" : "chat",
										value: chat?.name || folder?.name || ""
									} });
								}
							})
						]
					})]
				})
			]
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "flex-1 bg-overlay/40",
			onClick: exitSidebar
		})]
	});
}
function SelAct({ icon, label, onClick, danger, disabled }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		type: "button",
		disabled,
		onClick,
		className: cn("flex min-w-0 flex-1 flex-col items-center gap-1 px-1 py-1 text-[11px] font-medium disabled:opacity-30", danger ? "text-danger" : "text-ink"),
		children: [icon, label]
	});
}
function useHold(id) {
	const timer = (0, import_react.useRef)(null);
	const startY = (0, import_react.useRef)(0);
	const held = (0, import_react.useRef)(false);
	const start = (e) => {
		if (e.pointerType === "mouse" && e.button !== 0) return;
		startY.current = e.clientY;
		held.current = false;
		timer.current = window.setTimeout(() => {
			const ui = useApp.getState().ui;
			if (ui.sortMode || ui.selectMode) return;
			held.current = true;
			useApp.getState().setUI({
				selectMode: true,
				selected: [id],
				menuId: null
			});
		}, HOLD_MS);
	};
	const clear = () => {
		if (timer.current) window.clearTimeout(timer.current);
		timer.current = null;
	};
	return {
		held,
		onPointerDown: start,
		onPointerUp: clear,
		onPointerCancel: clear,
		onPointerMove: (e) => {
			if (Math.abs(e.clientY - startY.current) > 12) clear();
		},
		onContextMenu: (e) => e.preventDefault()
	};
}
function FolderRow({ id, name, starred, collapsed, count, children, dragging, dragGroup, onGripDown }) {
	const selected = useApp((s) => s.ui.selected.includes(id));
	const selectMode = useApp((s) => s.ui.selectMode);
	const sortMode = useApp((s) => s.ui.sortMode);
	const { held, ...holdH } = useHold(id);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "mb-1",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-row-id": id,
			"data-drag-group": dragGroup,
			...sortMode ? {} : holdH,
			onClick: () => {
				if (held.current) {
					held.current = false;
					return;
				}
				if (sortMode) return;
				if (useApp.getState().ui.selectMode) {
					const cur = useApp.getState().ui.selected;
					useApp.getState().setUI({ selected: selected ? cur.filter((x) => x !== id) : [...cur, id] });
					return;
				}
				useApp.getState().toggleFolder(id);
			},
			className: cn("flex items-center gap-3 rounded-[18px] px-2 py-2.5 hold-none", selected && "bg-dim", dragging && "drag-dim"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "flex size-10 items-center justify-center rounded-full border border-line text-primary",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Folder, { className: "size-4" })
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 truncate text-[15px] font-medium",
						children: [starred && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-primary text-primary" }), name]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "text-[12px] text-muted",
						children: [count, " 项"]
					})]
				}),
				selectMode && !sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-9 shrink-0 place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckBox, { on: selected })
				}) : sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-9 place-items-center text-muted",
					onPointerDown: onGripDown,
					style: { touchAction: "none" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignJustify, { className: "size-5" })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "text-muted",
					children: "›"
				})
			]
		}), children]
	});
}
function ChatRow({ id, active, nested, dragging, dragGroup, onGripDown }) {
	const chat = useApp((s) => s.chats.find((c) => c.id === id));
	const ui = useApp((s) => s.ui);
	const { held, ...holdH } = useHold(id);
	if (!chat) return null;
	const selected = ui.selected.includes(id);
	const last = chat.remark || [...chat.messages].reverse().find((m) => m.content)?.content || chat.opening;
	const url = cachedUrl(chat.avatarBlobId);
	const menu = ui.menuId === id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: cn("relative mb-0.5", nested && "ml-3"),
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			"data-row-id": id,
			"data-drag-group": dragGroup,
			...ui.sortMode ? {} : holdH,
			onClick: () => {
				if (held.current) {
					held.current = false;
					return;
				}
				if (ui.sortMode) return;
				if (useApp.getState().ui.selectMode) {
					const cur = useApp.getState().ui.selected;
					useApp.getState().setUI({ selected: selected ? cur.filter((x) => x !== id) : [...cur, id] });
					return;
				}
				useApp.getState().openChat(id);
			},
			className: cn("flex items-center gap-3 rounded-[18px] px-2 py-2 hold-none", active && !ui.selectMode && "bg-dim/70", selected && "bg-dim", dragging && "drag-dim"),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Avatar, {
					url,
					name: chat.name,
					dim: active && !ui.selectMode
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "min-w-0 flex-1",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
						className: "flex items-center gap-1 truncate text-[15px] font-medium",
						children: [chat.starred && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Star, { className: "size-3 fill-primary text-primary" }), chat.name || "未命名"]
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "truncate text-[12px] text-muted",
						children: last || "新的对话"
					})]
				}),
				ui.selectMode && !ui.sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-9 shrink-0 place-items-center",
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(CheckBox, { on: selected })
				}) : ui.sortMode ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
					className: "grid size-9 place-items-center text-muted",
					onPointerDown: onGripDown,
					style: { touchAction: "none" },
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(AlignJustify, { className: "size-5" })
				}) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "grid size-9 place-items-center text-muted",
					onClick: (e) => {
						e.stopPropagation();
						useApp.getState().setUI({ menuId: menu ? null : id });
					},
					children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Ellipsis, { className: "size-5" })
				})
			]
		}), menu && !ui.selectMode && /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "absolute right-2 top-12 z-20 w-44 overflow-hidden rounded-2xl border border-line bg-card py-1 shadow-lg",
			onClick: (e) => e.stopPropagation(),
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "block w-full px-4 py-2.5 text-left text-[14px]",
					onClick: () => {
						useApp.getState().setUI({
							menuId: null,
							rename: {
								id,
								kind: "remark",
								value: chat.remark || ""
							}
						});
					},
					children: "修改备注"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "block w-full px-4 py-2.5 text-left text-[14px]",
					onClick: () => {
						useApp.getState().setUI({
							menuId: null,
							sidebar: false
						});
						useApp.getState().beginEdit(id);
					},
					children: "修改设定"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: "block w-full px-4 py-2.5 text-left text-[14px] text-danger",
					onClick: () => {
						useApp.getState().setUI({
							menuId: null,
							confirm: {
								title: "删除角色",
								body: `删除「${chat.name}」以及全部聊天记录？`,
								danger: true,
								onOk: () => {
									useApp.getState().setUI({ selected: [id] });
									useApp.getState().deleteSelected();
								}
							}
						});
					},
					children: "删除角色"
				})
			]
		})]
	});
}
function CheckBox({ on }) {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", {
		className: cn("grid size-[22px] shrink-0 place-items-center rounded-full border", on ? "border-primary bg-primary text-on-primary" : "border-line-strong bg-card"),
		children: on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Check, {
			className: "size-3.5",
			strokeWidth: 3
		})
	});
}
function RenameModal() {
	const rename = useApp((s) => s.ui.rename);
	const setUI = useApp((s) => s.setUI);
	const [val, setVal] = (0, import_react.useState)(rename?.value ?? "");
	(0, import_react.useEffect)(() => setVal(rename?.value ?? ""), [rename?.id, rename?.value]);
	if (!rename) return null;
	const title = rename.kind === "folder" ? "重命名文件夹" : rename.kind === "remark" ? "修改备注" : "修改名称";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "fixed inset-0 z-[75] flex items-center justify-center bg-overlay p-6",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "w-full max-w-sm rounded-[24px] bg-bg p-5",
			children: [
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
					className: "mb-3 text-[16px] font-semibold",
					children: title
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsx)("input", {
					autoFocus: true,
					value: val,
					onChange: (e) => setVal(e.target.value),
					className: "h-12 w-full rounded-full border border-line bg-card px-4"
				}),
				/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
					className: "mt-4 flex gap-3",
					children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "flex-1 py-3 text-muted",
						onClick: () => setUI({ rename: null }),
						children: "取消"
					}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
						className: "flex-1 rounded-full bg-primary py-3 text-on-primary",
						onClick: () => {
							if (rename.kind === "remark") {
								useApp.getState().patchChat(rename.id, { remark: val });
								useApp.getState().toast("备注已更新");
								setUI({ rename: null });
							} else useApp.getState().renameItem(rename.id, val);
						},
						children: "保存"
					})]
				})
			]
		})
	});
}
function App() {
	const hydrate = useApp((s) => s.hydrate);
	(0, import_react.useEffect)(() => {
		hydrate();
		loadTags();
	}, [hydrate]);
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Shell, {});
}
function Shell() {
	const tab = useApp((s) => s.ui.tab);
	const creating = useApp((s) => s.ui.creating);
	const editing = useApp((s) => s.ui.editingChatId);
	const currentId = useApp((s) => s.currentId);
	const chat = useApp((s) => s.chats.find((c) => c.id === currentId));
	const editChat = useApp((s) => s.chats.find((c) => c.id === editing));
	const draft = useApp((s) => s.chats.find((c) => c.isDraft && c.id === currentId));
	const theme = useApp((s) => s.settings.theme);
	(0, import_react.useEffect)(() => {
		document.documentElement.classList.toggle("dark", theme === "dark");
	}, [theme]);
	let body;
	if (tab === "pure") body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PurePane, {});
	else if (creating && draft) body = tab === "params" ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamsPane, { chat: draft }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleEditor, {
		chat: draft,
		mode: "create"
	});
	else if (editing && editChat && tab === "chat") body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(RoleEditor, {
		chat: editChat,
		mode: "edit"
	});
	else if (tab === "params") body = chat && !chat.isDraft ? /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ParamsPane, { chat }) : /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyParams, {});
	else if (chat && !chat.isDraft) body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(ChatPane, { chat });
	else body = /* @__PURE__ */ (0, import_jsx_runtime.jsx)(EmptyChat, {});
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
		className: "relative mx-auto flex h-full max-w-lg flex-col bg-bg",
		children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("header", {
				className: "flex shrink-0 items-center gap-1 px-2 pt-[calc(env(safe-area-inset-top)+8px)]",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						onClick: () => useApp.getState().setUI({ sidebar: true }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(Menu, { className: "size-5" })
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("nav", {
						className: "flex flex-1 justify-center gap-7 text-[15px]",
						children: [
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabBtn, {
								id: "chat",
								label: "聊天"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabBtn, {
								id: "params",
								label: "生图参数"
							}),
							/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TabBtn, {
								id: "pure",
								label: "纯生图"
							})
						]
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(IconBtn, {
						onClick: () => useApp.getState().setUI({ connection: true }),
						children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(SlidersHorizontal, { className: "size-5" })
					})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("main", {
				className: "relative min-h-0 flex-1 overflow-hidden",
				children: [
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
						className: "h-full",
						children: body
					}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(Sidebar, {}),
					/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConnectionPanel, {})
				]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ToastHost, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(ConfirmHost, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(RenameModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(CustomPromptModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveCardModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(SaveAppearModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(FieldEditModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MoveModal, {}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(MultiCreateModal, {})
		]
	});
}
function TabBtn({ id, label }) {
	const on = useApp((s) => s.ui.tab) === id;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("button", {
		onClick: () => useApp.getState().setTab(id),
		className: `relative pb-2 ${on ? "font-semibold text-ink" : "text-muted"}`,
		children: [label, on && /* @__PURE__ */ (0, import_jsx_runtime.jsx)("span", { className: "absolute inset-x-1 -bottom-0.5 h-[2px] rounded-full bg-ink" })]
	});
}
function EmptyParams() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
		className: "px-6 py-16 text-center text-[13px] text-muted",
		children: "先在侧栏新建一个角色，才能设置聊天配图参数。"
	});
}
function EmptyChat() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "grid h-full place-items-center px-8 text-center",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", { children: [
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "font-serif text-2xl",
				children: "还没有开始"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("p", {
				className: "mt-2 max-w-xs text-[13px] leading-6 text-muted",
				children: "点左上角打开侧栏，新建一个角色就能聊。配图会跟着每句回复出来。"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
				className: "mt-6 rounded-full bg-primary px-6 py-3 text-[14px] text-on-primary",
				onClick: () => useApp.getState().newDraft(),
				children: "新建聊天"
			})
		] })
	});
}
function SaveCardModal() {
	const open = useApp((s) => s.ui.saveCardOpen);
	const chat = useApp((s) => s.current());
	const [name, setName] = (0, import_react.useState)(chat?.name ?? "");
	(0, import_react.useEffect)(() => setName(chat?.name ?? ""), [chat?.name, open]);
	if (!open || !chat) return null;
	const close = () => useApp.getState().setUI({ saveCardOpen: false });
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose: close,
		title: "保存为角色卡",
		hideClose: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
			value: name,
			onChange: (e) => setName(e.target.value),
			placeholder: "输入名称",
			autoFocus: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
				onClick: close,
				children: "取消"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
				onClick: () => useApp.getState().saveCard(chat, name.trim() || chat.name || "未命名"),
				children: "保存"
			})]
		})]
	});
}
function SaveAppearModal() {
	const ui = useApp((s) => s.ui);
	const tab = useApp((s) => s.ui.tab);
	const chat = useApp((s) => s.current());
	const pure = useApp((s) => s.pureParams);
	const [name, setName] = (0, import_react.useState)("");
	(0, import_react.useEffect)(() => setName(""), [ui.saveAppearOpen]);
	if (!ui.saveAppearOpen) return null;
	const close = () => useApp.getState().setUI({ saveAppearOpen: false });
	const prompt = tab === "pure" ? ui.appearTarget && ui.appearTarget !== "mid" ? pure.characters.find((c) => c.id === ui.appearTarget)?.prompt ?? "" : pure.promptMid : ui.appearTarget && ui.appearTarget !== "mid" ? chat?.imageParams.characters.find((c) => c.id === ui.appearTarget)?.prompt ?? "" : chat?.imageParams.promptMid ?? "";
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose: close,
		title: "保存角色",
		hideClose: true,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextInput, {
			value: name,
			onChange: (e) => setName(e.target.value),
			placeholder: "输入名称",
			autoFocus: true
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
			className: "mt-4 flex gap-3",
			children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
				onClick: close,
				children: "取消"
			}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
				disabled: !name.trim(),
				onClick: () => useApp.getState().saveAppearance(name.trim(), prompt),
				children: "保存"
			})]
		})]
	});
}
function FieldEditModal() {
	const field = useApp((s) => s.ui.fieldEdit);
	const [text, setText] = (0, import_react.useState)(field?.text ?? "");
	(0, import_react.useEffect)(() => setText(field?.text ?? ""), [
		field?.text,
		field?.key,
		field?.charId
	]);
	if (!field) return null;
	const isAll = field.key === "all";
	const label = isAll ? "整张卡" : FIELD_LABELS[field.key] || field.key;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose: () => useApp.getState().setUI({ fieldEdit: null }),
		title: isAll ? "个性化修改整张卡" : `个性化修改 · ${label}`,
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
			value: text,
			placeholder: "写下你的要求",
			onChange: (e) => setText(e.target.value)
		}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
			className: "mt-4",
			onClick: () => {
				const t = text.trim();
				if (!t) {
					useApp.getState().toast("写一点要求");
					return;
				}
				const live = useApp.getState().current();
				if (!live) return;
				useApp.getState().setUI({
					fieldEdit: null,
					polishJob: {
						chatId: live.id,
						kind: isAll ? "personalize" : "field",
						key: isAll ? void 0 : field.key,
						charId: field.charId,
						instruction: t
					}
				});
			},
			children: isAll ? "按这个改" : "改这一栏"
		})]
	});
}
function MoveModal() {
	const open = useApp((s) => s.ui.moveOpen);
	const folders = useApp((s) => s.folders);
	if (!open) return null;
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose: () => useApp.getState().setUI({ moveOpen: false }),
		title: "移动到",
		children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "mb-2 w-full rounded-2xl bg-card px-4 py-3 text-left",
			onClick: () => useApp.getState().moveSelected(null),
			children: "不放进文件夹"
		}), folders.map((f) => /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
			className: "mb-2 w-full rounded-2xl bg-card px-4 py-3 text-left",
			onClick: () => useApp.getState().moveSelected(f.id),
			children: f.name
		}, f.id))]
	});
}
function MultiCreateModal() {
	const ids = useApp((s) => s.ui.multiCreate);
	const chats = useApp((s) => s.chats);
	const [mode, setMode] = (0, import_react.useState)("together");
	const [overview, setOverview] = (0, import_react.useState)("");
	const [opening, setOpening] = (0, import_react.useState)("");
	if (!ids || ids.length < 2) return null;
	const picked = ids.map((id) => chats.find((c) => c.id === id)).filter(Boolean);
	const makeDraft = () => {
		const id = uid("chat_");
		const characters = picked.map((c, i) => {
			return {
				...c.characters[0] ?? emptyCharacter(i + 1),
				id: uid("c_")
			};
		});
		const imageParams = defaultImageParams();
		imageParams.characters = characters.map((c) => ({
			id: c.id,
			name: c.name,
			enabled: true,
			prompt: c.appearance || c.prompt,
			uc: c.uc,
			x: .5,
			y: .5
		}));
		return {
			id,
			folderId: null,
			name: characters.map((c) => c.name).filter(Boolean).join("、"),
			remark: "",
			starred: false,
			order: Date.now(),
			createdAt: Date.now(),
			updatedAt: Date.now(),
			isDraft: true,
			grokModelId: useApp.getState().settings.grokModelId,
			isMulti: true,
			multiMode: mode,
			promptMode: "insert",
			adultBoost: false,
			canGen: true,
			statusBarOn: false,
			statusBar: DEFAULT_STATUS_BAR,
			overview,
			opening,
			extras: [],
			memory: "",
			memoryUntil: 0,
			characters,
			imageParams,
			messages: [],
			scrollTop: 0
		};
	};
	const pushDraft = (draft) => {
		useApp.setState((s) => ({
			chats: [...s.chats, draft],
			currentId: draft.id,
			ui: {
				...s.ui,
				multiCreate: null,
				creating: true,
				sidebar: false,
				selectMode: false,
				selected: [],
				tab: "chat",
				autoPolish: false
			}
		}));
	};
	return /* @__PURE__ */ (0, import_jsx_runtime.jsxs)(Modal, {
		open: true,
		onClose: () => useApp.getState().setUI({ multiCreate: null }),
		title: "请设置多人聊天",
		wide: true,
		children: [
			picked.map((c, i) => /* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "mb-2 text-[13px]",
				children: [
					"角色",
					i + 1,
					"：",
					c.name
				]
			}, c.id)),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "my-3 text-[13px] font-medium",
				children: "要求总览"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
				value: overview,
				onChange: (e) => setOverview(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
				className: "mb-1 mt-3 text-[13px] font-medium",
				children: "开场场景"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(TextArea, {
				value: opening,
				onChange: (e) => setOpening(e.target.value)
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsxs)("div", {
				className: "my-3 flex gap-2",
				children: [/* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: `flex-1 rounded-full py-2 text-[13px] ${mode === "together" ? "bg-primary text-on-primary" : "border border-line"}`,
					onClick: () => setMode("together"),
					children: "多人同聊模式"
				}), /* @__PURE__ */ (0, import_jsx_runtime.jsx)("button", {
					className: `flex-1 rounded-full py-2 text-[13px] ${mode === "group" ? "bg-primary text-on-primary" : "border border-line"}`,
					onClick: () => setMode("group"),
					children: "群聊模式"
				})]
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(PrimaryBtn, {
				onClick: () => {
					const draft = makeDraft();
					useApp.setState((s) => ({
						chats: [...s.chats, draft],
						currentId: draft.id,
						ui: {
							...s.ui,
							multiCreate: null,
							creating: true,
							sidebar: false,
							selectMode: false,
							selected: [],
							tab: "chat",
							autoPolish: true
						}
					}));
				},
				children: "让 Grok 完善设定"
			}),
			/* @__PURE__ */ (0, import_jsx_runtime.jsx)(GhostBtn, {
				className: "mt-2",
				onClick: async () => {
					const draft = makeDraft();
					pushDraft(draft);
					useApp.getState().commitChat(draft.id);
					const { sendOpening } = await import("./chat-actions-Ci360qiM.mjs");
					sendOpening(draft.id);
				},
				children: "跳过，开始聊天"
			})
		]
	});
}
function Home() {
	return /* @__PURE__ */ (0, import_jsx_runtime.jsx)("div", {
		className: "h-[100dvh] overflow-hidden",
		children: /* @__PURE__ */ (0, import_jsx_runtime.jsx)(App, {})
	});
}
//#endregion
export { modelLabel as A, recentSceneForImage as B, importArchive as C, makeImageRecord as D, makeAssistantPlaceholder as E, parseGroup as F, splitDialogue as G, samplerLabel as H, polishAll as I, summarizeMemory as J, stripSpeakerPrefix as K, polishField as L, moveId as M, naiFamily as N, makeUserMessage as O, nearestScroller as P, writeImageTags as Q, promptPreview as R, historyMessages as S, listedChats as T, samplerShort as U, recentWindow as V, sanitizeNaiTags as W, uid as X, syncCharsFromRole as Y, useApp as Z, fakePureChat as _, regenMessage as a, generateNai as b, routes_DcoSmm1d_exports as c, Home as component, autoScrollNearEdge as d, cn as f, extractGrokTail as g, exportArchive as h, editMessage as i, modelShort as j, mergePolish as k, afterPaint as l, engine_exports as m, attachImage as n, sendOpening as o, downloadBlob as p, stripStatus as q, branchFrom as r, sendUser as s, abortChat as t, applyRoleField as u, fetchLlmModels as v, indexFromY as w, grokStream as x, genPhaseLabel as y, randomSeed as z };
