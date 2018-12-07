// Type definitions for color-brightness 1.0.0
// Definitions by: Bikossor <https://bikossor.de>

export as namespace colorBrightness;

/*~ Module methods */
/**
 * Calculates the perceived brightness of a color.
 * @returns A number between 0 (dark) and 255 (bright).
 */
export function getBrightness(r: number, g: number, b: number): number;