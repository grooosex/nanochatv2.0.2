export function firstChatImageBlob(chat: {
  avatarBlobId?: string;
  messages?: { images?: { status?: string; blobId?: string }[] }[];
}): string | undefined {
  if (chat.avatarBlobId) return chat.avatarBlobId;
  for (const m of chat.messages ?? []) {
    const hit = m.images?.find((g) => g.status === "done" && g.blobId);
    if (hit?.blobId) return hit.blobId;
  }
}
