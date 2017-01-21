mvn clean install -pl backend -f ../pom.xml
java -Ddb-init=true -jar ../backend/target/backend.jar --db-generate=create