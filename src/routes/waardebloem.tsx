import { createFileRoute, Outlet } from "@tanstack/react-router";

// Layout route for /waardebloem. It MUST render <Outlet /> so the child routes
// (waardebloem.index, waardebloem.concept-1, waardebloem.definitief) are shown.
// Without the Outlet this parent component swallows every child, so navigating
// to /waardebloem/concept-1 would still only render the parent's own markup.
export const Route = createFileRoute("/waardebloem")({
  component: WaardebloemLayout,
});

function WaardebloemLayout() {
  return <Outlet />;
}
