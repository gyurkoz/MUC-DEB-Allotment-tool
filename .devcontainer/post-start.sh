#!/usr/bin/env bash
set -euo pipefail

echo "=== MUC-DEB Booking Tool — Starting Services ==="

WORKSPACE="/workspaces/MUC-DEB-Allotment-tool"

# ── Start backend in background ─────────────────────────────────
echo "🚀 Starting backend (Spring Boot)..."
cd "$WORKSPACE/backend"
nohup ./mvnw spring-boot:run -pl booking-web \
  -Dspring-boot.run.profiles=codespaces \
  -Djacoco.skip=true -Dcheckstyle.skip=true -Dspotbugs.skip=true \
  -B -ntp > /tmp/backend.log 2>&1 &
echo "   Backend PID: $! (log: /tmp/backend.log)"

# ── Start frontend in background ────────────────────────────────
echo "🚀 Starting frontend (Vite)..."
cd "$WORKSPACE/frontend"
nohup npm run dev > /tmp/frontend.log 2>&1 &
echo "   Frontend PID: $! (log: /tmp/frontend.log)"

echo ""
echo "✅ Services starting!"
echo "   Frontend: http://localhost:3000 (auto-forwarded)"
echo "   Backend:  http://localhost:8080"
echo "   Mailpit:  http://localhost:8025"
echo ""
echo "   Check logs: tail -f /tmp/frontend.log /tmp/backend.log"
