mvn clean install -pl backend -f ../pom.xml
mvn clean install -Pprod -pl frontend -f ../pom.xml
mvn install -Pprod -pl backend -f ../pom.xml