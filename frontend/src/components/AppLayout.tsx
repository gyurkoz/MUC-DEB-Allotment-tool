import { useState, useEffect, useRef } from "react";
import { Box, styled } from "@lsy-netline/netline-ui";
import { Outlet } from "react-router-dom";
import { AppBarHeader } from "@/components/AppBar";
import { BookingStepper } from "@/components/BookingStepper";
import { ScrollDirectionContext } from "@/context/ScrollDirectionContext";

const Container = styled(Box)({
	display: "flex",
	flexDirection: "column",
	width: "100%",
	height: "100vh",
});

const HeaderWrapper = styled(Box, {
	shouldForwardProp: (prop) => prop !== "isVisible",
})<{ isVisible: boolean }>(({ isVisible }) => ({
	position: "fixed",
	top: 0,
	left: 0,
	right: 0,
	zIndex: 1100,
	transition: "transform 0.3s ease-in-out",
	transform: isVisible ? "translateY(0)" : "translateY(-100%)",
}));

const Content = styled(Box, {
	shouldForwardProp: (prop) => prop !== "headerHeight",
})<{ headerHeight: number }>(({ headerHeight }) => ({
	display: "flex",
	flexDirection: "column",
	overflow: "auto",
	flex: 1,
	height: "100%",
	paddingTop: `${headerHeight}px`,
}));

export function AppLayout() {
	const contentRef = useRef<HTMLDivElement>(null);
	const headerRef = useRef<HTMLDivElement>(null);
	const [isHeaderVisible, setIsHeaderVisible] = useState(true);
	const [lastScrollY, setLastScrollY] = useState(0);
	const [headerHeight, setHeaderHeight] = useState(120);

	// Measure header height dynamically
	useEffect(() => {
		const el = headerRef.current;
		if (!el) return;
		const update = () => setHeaderHeight(el.offsetHeight);
		update();
		const observer = new ResizeObserver(update);
		observer.observe(el);
		return () => observer.disconnect();
	}, []);

	// Smart sticky: show on scroll up, hide on scroll down
	useEffect(() => {
		const el = contentRef.current;
		if (!el) return;

		const handleScroll = () => {
			const y = el.scrollTop;
			if (y <= 10) setIsHeaderVisible(true);
			else if (y > lastScrollY) setIsHeaderVisible(false);
			else setIsHeaderVisible(true);
			setLastScrollY(y);
		};

		el.addEventListener("scroll", handleScroll, { passive: true });
		return () => el.removeEventListener("scroll", handleScroll);
	}, [lastScrollY]);

	return (
		<ScrollDirectionContext value={{ isScrollingUp: isHeaderVisible }}>
			<Container>
				<HeaderWrapper ref={headerRef} isVisible={isHeaderVisible}>
					<AppBarHeader />
				</HeaderWrapper>

				<Content ref={contentRef} headerHeight={headerHeight}>
					<BookingStepper />
					<Box
						component="main"
						sx={{
							flexGrow: 1,
							p: 3,
							maxWidth: 1200,
							mx: "auto",
							width: "100%",
							// Reserve space for footer bar
							pb: 14,
						}}
					>
						<Outlet />
					</Box>
				</Content>
			</Container>
		</ScrollDirectionContext>
	);
}
