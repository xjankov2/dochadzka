mvn clean install -pl backend
java -Ddb-init=true -jar backend/target/backend.jar --db-generate=create