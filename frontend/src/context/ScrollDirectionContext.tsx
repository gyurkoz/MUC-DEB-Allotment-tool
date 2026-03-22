/**
 * ScrollDirectionContext — Shares the smart-sticky scroll state.
 *
 * AppLayout tracks scroll direction and provides `isScrollingUp` so that
 * child components (e.g. sticky footer bars) can show/hide in sync with the header.
 */

import { createContext } from "react";

export interface ScrollDirectionContextValue {
	/** `true` when the user is scrolling up or at the top — bars should be visible. */
	isScrollingUp: boolean;
}

export const ScrollDirectionContext =
	createContext<ScrollDirectionContextValue>({ isScrollingUp: true });
