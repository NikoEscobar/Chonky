let isEnabled = true

export const setDebug = ({ enabled }: { enabled: boolean }) => {
    isEnabled = enabled
}

export class Logger {
    public static error(...args: any[]): void {
        if(!isEnabled) {
          return
        }
        // eslint-disable-next-line no-console
        console.error('[Chonky runtime error]', ...args);
    }

    public static warn(...args: any[]): void {
        if(!isEnabled) {
          return
        }
        // eslint-disable-next-line no-console
        console.warn('[Chonky runtime warning]', ...args);
    }

    public static debug(...args: any[]): void {
        if(!isEnabled) {
          return
        }
        // eslint-disable-next-line no-console
        console.debug('[Chonky runtime debug]', ...args);
    }

    public static formatBullets(bullets: string[]): string {
        return `\n- ${bullets.join('\n- ')}`;
    }
}
