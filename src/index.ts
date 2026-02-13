export type SessionLike = {
  userId: string;
  expiresAt: Date;
};

export const isSessionActive = (session: SessionLike, now = new Date()): boolean =>
  session.expiresAt.getTime() > now.getTime();
