#!/usr/bin/env bash
set -euo pipefail

echo "=== MUC-DEB Booking Tool — Codespaces Setup ==="

# ── Frontend setup ──────────────────────────────────────────────
echo "📦 Installing frontend dependencies..."
cd /workspaces/MUC-DEB-Allotment-tool/frontend

if [ -z "${NPM_AUTH_TOKEN:-}" ]; then
  echo "⚠️  NPM_AUTH_TOKEN not set — @lsy-netline packages will fail to install."
  echo "   Set it in Codespaces secrets: https://github.com/settings/codespaces"
fi

npm ci || {
  echo "❌ npm ci failed. Ensure NPM_AUTH_TOKEN is set for @lsy-netline packages."
  exit 1
}

# ── Backend setup ───────────────────────────────────────────────
echo "🔧 Building backend..."
cd /workspaces/MUC-DEB-Allotment-tool/backend

chmod +x mvnw
./mvnw install -DskipTests -Djacoco.skip=true -Dcheckstyle.skip=true -Dspotbugs.skip=true -B -ntp

echo ""
echo "✅ Codespaces setup complete!"
echo ""
echo "Quick start:"
echo "  Frontend:  cd frontend && npm run dev"
echo "  Backend:   cd backend && ./mvnw spring-boot:run -pl booking-web -Dspring-boot.run.profiles=codespaces"
echo "  Database:  MariaDB is running on localhost:3307 (user: booking / pass: booking)"
echo "  Mailpit:   http://localhost:8025"
