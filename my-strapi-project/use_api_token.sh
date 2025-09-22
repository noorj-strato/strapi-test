# Load variables from .env
set -a
source .env
set +a

# Example: Use API_TOKEN in a curl request
curl -H "Authorization: Bearer $API_TOKEN" "http://$HOST:$PORT/api/pages"