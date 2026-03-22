#!/usr/bin/env bash
set -euo pipefail

echo "=== MUC-DEB Booking Tool — Starting Services ==="

WORKSPACE="/workspaces/MUC-DEB-Allotment-tool"

port_in_use() {
  ss -tlnp 2>/dev/null | grep -q ":$1 " && return 0 || return 1
}

# ── Start backend in background ─────────────────────────────────
if port_in_use 8080; then
  echo "⏭️  Port 8080 already in use — skipping backend start"
else
  echo "🚀 Starting backend (Spring Boot)..."
  cd "$WORKSPACE/backend"
  nohup ./mvnw spring-boot:run -pl booking-web \
    -Dspring-boot.run.profiles=codespaces \
    -Djacoco.skip=true -Dcheckstyle.skip=true -Dspotbugs.skip=true \
    -B -ntp > /tmp/backend.log 2>&1 &
  echo "   Backend PID: $! (log: /tmp/backend.log)"
fi

# ── Start frontend in background ────────────────────────────────
if port_in_use 3000; then
  echo "⏭️  Port 3000 already in use — skipping frontend start"
else
  echo "🚀 Starting frontend (Vite)..."
  cd "$WORKSPACE/frontend"
  nohup npm run dev > /tmp/frontend.log 2>&1 &
  echo "   Frontend PID: $! (log: /tmp/frontend.log)"
fi

echo ""
echo "✅ Services starting!"
echo "   Frontend: http://localhost:3000 (auto-forwarded)"
echo "   Backend:  http://localhost:8080"
echo "   Mailpit:  http://localhost:8025"
echo ""
echo "   Check logs: tail -f /tmp/frontend.log /tmp/backend.log"
echo ""
echo "   To stop & restart manually:"
echo "     kill \$(lsof -ti:8080) \$(lsof -ti:3000) 2>/dev/null"
