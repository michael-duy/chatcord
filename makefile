up:
	docker-compose up
build-up:
	docker-compose up --build
down:
	docker-compose down
stop:
	docker-compose stop
logs:
	docker-compose logs -f -t
node-bash:
	docker exec -it node-container sh